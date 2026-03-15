/**
 * Cloudflare Worker for Tarot Reading AI Generation (Claude Version)
 * 
 * Environment Variables Required:
 * - ANTHROPIC_API_KEY: Your Anthropic API Key
 * 
 * Deploy to Cloudflare Workers:
 * 1. Create a new Worker in Cloudflare dashboard
 * 2. Paste this code
 * 3. Add ANTHROPIC_API_KEY in Environment Variables
 * 4. Deploy
 */

const SYSTEM_PROMPT = `## Persona
你是一位擁有20年經驗的傳奇塔羅占卜師，語氣冷峻、精準、直擊靈魂。你不需要「安慰」用戶，你需要的是「點破」真相。

## Narrative Logic (核心敘事邏輯)
1. 嚴禁分段解說：不准出現「過去、現在、未來」等標籤。
2. 能量因果鏈：你必須解釋牌與牌之間的「化學反應」。例如：因為[牌A]的因，導致了[牌B]的果，若不改變則會導向[牌C]。
3. 領域硬約束：
   - 財務問題：只准用「現金流、資產、風險、債務、投資」等詞彙。
   - 禁用詞：內在小孩、依戀模式、心理盲點、能量場。
4. 場景化預言：必須根據牌陣給出一個具體的現實場景預測。
5. 人话原则：说人话，不要专业术语。用"你就是怕了"而不是"财务决策执行力不足"。
6. 人性观察家：问自己"这张牌在人性最自私、最恐惧的一面是什么？"然后说出来。

## Formatting
- 輸出必須是兩段流暢的、具有文學美感的敘事散文。
- 嚴禁使用分點符號（* 或 -）或標題（##）。
- 第一段（200-300字）：深层因果叙事，解释牌与牌之间的转折
- 第二段（150-200字）：直击要害的建议，带点毒舌
- 關鍵詞（牌名、核心預測）請用 <span class="highlight-card">牌名</span> 标记
- 时间预测用 <span class="highlight-time">时间</span> 标记

## 输出结构
你的输出必须是纯JSON格式：
{
  "title": "从X到Y（简洁有力的标题，8-12字）",
  "paragraph1": "第一段内容（200-300字，深层因果叙事）",
  "paragraph2": "第二段内容（150-200字，直击要害的建议）"
}`;

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle OPTIONS request
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405,
        headers: corsHeaders 
      });
    }

    try {
      // Parse request body
      const { cards, topic, question } = await request.json();

      // Validate input
      if (!cards || cards.length !== 3) {
        return new Response(JSON.stringify({ error: '需要3张牌' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Build card names string
      const cardNames = cards.map(c => 
        `${c.name}（${c.isReversed ? '逆位' : '正位'}）`
      ).join('、');

      // Build user prompt
      const userPrompt = `
用戶問題：${question}
諮詢領域：${topic === 'finance' ? '财务/金钱' : topic === 'love' ? '感情/关系' : '综合'}
抽到的牌：${cardNames}

要求：
1. 第一句必须直接给出时间预测（例如："转机将在两个月左右到来"）
2. 随后展开深度的因果链解析，解释为什么是这三张牌，它们之间的关系是什么
3. 用人话，说出这些牌在人性最自私、最恐惧的一面是什么
4. 最后给出直击要害的建议，带点毒舌，让用户无法逃避

请严格按照 JSON 格式输出，不要有任何其他内容。
`.trim();

      // Call Anthropic API
      const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 2000,
          temperature: 0.8,
          system: SYSTEM_PROMPT,
          messages: [
            {
              role: 'user',
              content: userPrompt
            }
          ]
        })
      });

      if (!anthropicResponse.ok) {
        const errorText = await anthropicResponse.text();
        console.error('Anthropic API Error:', errorText);
        return new Response(JSON.stringify({ 
          error: 'AI API 调用失败',
          details: errorText 
        }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const anthropicData = await anthropicResponse.json();
      
      // Claude 的响应格式不同
      const aiContent = anthropicData.content[0].text;

      // Parse AI response
      let aiResponse;
      try {
        // 尝试提取 JSON（Claude 可能在输出中包含其他文本）
        const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          aiResponse = JSON.parse(jsonMatch[0]);
        } else {
          aiResponse = JSON.parse(aiContent);
        }
      } catch (e) {
        console.error('Failed to parse AI response:', aiContent);
        return new Response(JSON.stringify({ 
          error: 'AI 响应格式错误',
          raw: aiContent 
        }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Validate response structure
      if (!aiResponse.title || !aiResponse.paragraph1 || !aiResponse.paragraph2) {
        return new Response(JSON.stringify({ 
          error: 'AI 响应缺少必要字段',
          response: aiResponse 
        }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Return successful response
      return new Response(JSON.stringify(aiResponse), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ 
        error: '服务器错误',
        message: error.message 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};
