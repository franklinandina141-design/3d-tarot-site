/**
 * Vercel Serverless API：塔羅 AI 解讀
 * 環境變數：api_key 或 OPENAI_API_KEY（必填）
 * 部署後訪問：POST /api/tarot-reading，body: { cards, topic, question }
 */

const { getBusinessKey, getBusinessData, getLoveData, SYSTEM_PROMPT } = require('../lib/tarot-ai-logic.js');

const OPENAI_API = process.env.api_base || 'https://api.openai.com/v1';

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.api_key || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'AI API 未配置', details: '請在 Vercel 環境變數中設置 api_key 或 OPENAI_API_KEY' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { cards, topic, question } = body;
    if (!cards || !Array.isArray(cards) || cards.length !== 3) {
      res.status(400).json({ error: '需要3张牌' });
      return;
    }

    const cardNames = cards.map(c =>
      `${c.name}（${c.isReversed ? '逆位' : '正位'}）`
    ).join('、');

    const isCareerOrFinance = topic === 'finance' || topic === 'career';
    const isLove = topic === 'love';
    let businessBlock = '';
    if (isCareerOrFinance) {
      const parts = cards.map((c, i) => {
        const key = getBusinessKey(c.name);
        const data = key ? getBusinessData(key) : null;
        if (!data) return `牌${i + 1}（${c.name}）：無對應數據，請依牌意與因果敘事描述，且須見牌即見錢。`;
        return `牌${i + 1}（${c.name}）\n  business_reality: ${data.business_reality}\n  warning: ${data.warning}\n  action: ${data.action}`;
      });
      businessBlock = `\n【商業診斷核心數據 - 必須嚴格使用並編織進敘事】\n${parts.join('\n\n')}\n\n結尾必須引用上述至少一張牌的 action 寫成具體行動建議。見牌即見錢。\n`;
    }
    if (isLove) {
      const parts = cards.map((c, i) => {
        const key = getBusinessKey(c.name);
        const data = key ? getLoveData(key) : null;
        if (!data) return `牌${i + 1}（${c.name}）：無對應數據，請依牌意與因果敘事描述，具體到溝通/信任/承諾/相處。`;
        return `牌${i + 1}（${c.name}）\n  reality: ${data.business_reality}\n  warning: ${data.warning}\n  action: ${data.action}`;
      });
      businessBlock = `\n【感情診斷核心數據 - 必須嚴格使用並編織進敘事】\n${parts.join('\n\n')}\n\n結尾必須引用上述至少一張牌的 action 寫成具體、可執行的關係建議。禁止空洞的溝通/珍惜。\n`;
    }

    const isFinance = topic === 'finance';
    const userPrompt = `
用戶問題：${question || '请为我解读'}
諮詢領域：${topic === 'finance' ? '财务/金钱' : topic === 'love' ? '感情/关系' : topic === 'career' ? '事业/职场' : '综合'}
抽到的牌：${cardNames}
${businessBlock}
要求（違反即不合格）：
1. 必須按「基地台輸出結構」輸出三段：paragraph1=【現狀直擊】2～3 句、paragraph2=【脫困指南】2 個今天可做的具體動作（動詞開頭）、paragraph3=【量化預測】一個具體時間數字+單位（如 2 週、3 個月）。
2. 三張牌都要在敘事中出現，正逆位須解釋；建議對應牌意或下方 action。
3. 禁言名單：嚴禁出現 靈魂、能量、宇宙、指引、命運、契機、真理。
4. ${isFinance ? '【財務】現狀直擊須見錢（現金流/收支），量化預測須給出時間點。' : isLove ? '【感情】脫困指南須具體動作，量化預測依四元素給時間與標誌性事件。' : '脫困指南須對應牌面，量化預測須具體數字+單位。'}
请严格按照 JSON 格式输出，不要有任何其他内容。
`.trim();

    const openaiRes = await fetch(`${OPENAI_API.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: process.env.model || 'gpt-4o',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.8,
        max_tokens: 1000,
        response_format: { type: 'json_object' }
      })
    });

    if (!openaiRes.ok) {
      const errorText = await openaiRes.text();
      res.status(500).json({ error: 'AI API 调用失败', details: errorText });
      return;
    }

    const openaiData = await openaiRes.json();
    const aiContent = openaiData.choices && openaiData.choices[0] && openaiData.choices[0].message && openaiData.choices[0].message.content;
    if (!aiContent) {
      res.status(500).json({ error: 'AI 响应格式错误', details: 'choices[0].message.content 為空' });
      return;
    }

    let aiResponse;
    try {
      aiResponse = JSON.parse(aiContent);
    } catch (e) {
      res.status(500).json({ error: 'AI 响应格式错误', raw: aiContent });
      return;
    }

    if (!aiResponse.title || !aiResponse.paragraph1 || !aiResponse.paragraph2) {
      res.status(500).json({ error: 'AI 响应缺少必要字段（需含 title, paragraph1, paragraph2）', response: aiResponse });
      return;
    }
    if (!aiResponse.paragraph3 || !aiResponse.paragraph3.trim()) {
      aiResponse.paragraph3 = '依牌面元素推估，關鍵轉折約在兩週到兩個月內。請在此期間完成一項具體動作（例如一次對話、一筆決策），再評估進展。';
    }

    res.status(200).json(aiResponse);
  } catch (err) {
    console.error('tarot-reading API error:', err);
    res.status(500).json({ error: '服务器错误', message: err.message });
  }
};
