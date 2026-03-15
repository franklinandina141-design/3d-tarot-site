/**
 * Tarot AI Generator
 * 支援兩種方式：Vercel API（推薦）或 Cloudflare Worker
 *
 * 方式一（推薦）：Vercel 一鍵部署 + 環境變數 api_key
 * - useVercelApi: true，部署後在 Vercel 設置 api_key（OpenAI API Key）
 * - 請求會發到同源 /api/tarot-reading，無需 Worker
 *
 * 方式二：Cloudflare Worker
 * - useVercelApi: false，填寫 workerUrl，在 Worker 內設置 OPENAI_API_KEY
 */

const TarotAI = {
  // ⚙️ 配置项
  config: {
    // true = 使用本站 Vercel API /api/tarot-reading（需在 Vercel 環境變數設 api_key）
    useVercelApi: true,
    // Cloudflare Worker URL（僅當 useVercelApi 為 false 時使用）
    workerUrl: 'https://tarot-ai-generator.natalienaomi257j.workers.dev',
    enabled: true,
    timeout: 30000,
    maxRetries: 2
  },
  
  /**
   * 🤖 生成解读（主入口）
   * @param {Array} cards - 3张牌 [{name, isReversed}, ...]
   * @param {String} topic - finance/love/career
   * @param {String} question - 用户问题
   * @returns {Promise<Object>} - {title, paragraph1, paragraph2, paragraph3}
   */
  async generateReading(cards, topic, question) {
    // 如果未启用 AI 或配置不完整，抛出错误
    if (!this.config.enabled) {
      throw new Error('AI_DISABLED');
    }
    
    const apiUrl = this._getApiUrl();
    if (!apiUrl) {
      throw new Error('AI_NOT_CONFIGURED');
    }
    
    // 验证输入
    if (!cards || cards.length !== 3) {
      throw new Error('需要3张牌');
    }
    
    // 重试逻辑
    let lastError;
    for (let i = 0; i <= this.config.maxRetries; i++) {
      try {
        return await this._callWorker(cards, topic, question);
      } catch (error) {
        lastError = error;
        console.warn(`AI 生成失败 (尝试 ${i + 1}/${this.config.maxRetries + 1}):`, error.message);
        
        // 如果不是网络错误，不重试
        if (!error.message.includes('fetch') && !error.message.includes('timeout')) {
          break;
        }
        
        // 等待后重试
        if (i < this.config.maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
      }
    }
    
    throw lastError;
  },
  
  /**
   * 取得解讀 API 的 URL（Vercel 同源 或 Worker）
   */
  _getApiUrl() {
    // 瀏覽器環境一律用同源 /api/tarot-reading（Vercel、自訂網域、localhost 都走這裡）
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      return window.location.origin + '/api/tarot-reading';
    }
    if (this.config.workerUrl && !this.config.workerUrl.includes('YOUR-WORKER')) {
      return this.config.workerUrl;
    }
    return null;
  },

  /**
   * 将现有网站的牌名转为 Worker 能识别的格式（愚者→愚人、錢幣→星幣、A→一、侍者→侍從等）
   */
  _normalizeCardNameForWorker(displayName) {
    if (!displayName || typeof displayName !== 'string') return displayName;
    let n = displayName.trim();
    // 去掉英文括号部分，如 "愚者 (The Fool)" → "愚者"
    n = n.replace(/\s*\([^)]*\)\s*$/, '').trim();
    const majorMap = { '愚者': '愚人', '女皇': '皇后', '隱者': '隱士', '高塔': '塔' };
    for (const [from, to] of Object.entries(majorMap)) {
      if (n === from || n.startsWith(from)) { n = to + n.slice(from.length); break; }
    }
    if (n.includes('錢幣')) n = n.replace('錢幣', '星幣');
    if (/\bA\b/.test(n)) n = n.replace(/\bA\b/, '一');
    if (n.includes('侍者')) n = n.replace('侍者', '侍從');
    if (n.includes('皇后') && (n.includes('權杖') || n.includes('聖杯') || n.includes('寶劍') || n.includes('星幣'))) n = n.replace('皇后', '女王');
    return n;
  },

  /**
   * 🌐 调用 Worker API
   */
  async _callWorker(cards, topic, question) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);
    const normalizedCards = cards.map(c => ({
      name: this._normalizeCardNameForWorker(c.name),
      isReversed: c.isReversed || false
    }));

    const apiUrl = this._getApiUrl();
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cards: normalizedCards,
          topic: topic || 'general',
          question: question || '请为我解读'
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        let errorMessage = `Worker 返回错误: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
          if (errorData.details) {
            console.error('Worker 错误详情:', errorData.details);
          }
        } catch (e) {
          // 无法解析错误响应
        }
        throw new Error(errorMessage);
      }
      
      const data = await response.json();
      
      // 验证返回数据（title + 三段：現狀直擊、脫困指南、量化預測；paragraph3 可選，Worker 會補）
      if (!data.title || !data.paragraph1 || !data.paragraph2) {
        throw new Error('AI 响应缺少必要字段（需含 title, paragraph1, paragraph2）');
      }
      
      return data;
      
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new Error('AI 生成超时，请重试');
      }
      
      throw error;
    }
  },
  
  /**
   * 🧪 测试连接
   */
  async testConnection() {
    const testCards = [
      { name: '權杖10', isReversed: false },
      { name: '寶劍7', isReversed: false },
      { name: '皇后', isReversed: false }
    ];
    
    try {
      const result = await this.generateReading(testCards, 'finance', '测试连接');
      console.log('✅ AI 连接测试成功:', result);
      return true;
    } catch (error) {
      console.error('❌ AI 连接测试失败:', error);
      return false;
    }
  }
};

// 导出到全局
window.TarotAI = TarotAI;

console.log('🔮 Tarot AI Generator 已加载');
console.log('配置状态:', TarotAI.config.enabled ? '✅ 已启用' : '❌ 未启用');
if (TarotAI.config.enabled) {
  console.log('API 模式:', TarotAI.config.useVercelApi ? 'Vercel /api/tarot-reading' : 'Cloudflare Worker');
  console.log('运行 TarotAI.testConnection() 测试连接');
}
