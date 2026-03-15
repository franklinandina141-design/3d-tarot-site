/**
 * Tarot Reading Wrapper
 * 包装层，用于调用 AI 或硬编码逻辑
 * 
 * 使用方法：
 * 在需要生成解读的地方调用 TarotReadingWrapper.generate(cards, topic, question)
 */

const TarotReadingWrapper = {
  /**
   * 生成解读（主入口）
   * 自动尝试 AI 生成，失败则回退到硬编码逻辑
   * 
   * @param {Array} cards - 3张牌
   * @param {String} topic - finance/love/career
   * @param {String} question - 用户问题
   * @returns {Promise<String>} HTML string
   */
  async generate(cards, topic, question) {
    if (!cards || cards.length !== 3) {
      return '<p>需要3张牌</p>';
    }
    
    let deepNarrative;
    let isAIGenerated = false;
    
    // 尝试使用 AI 生成
    try {
      if (window.TarotAI && window.TarotAI.config.enabled) {
        console.log('🤖 尝试使用 AI 生成解读...');
        deepNarrative = await window.TarotAI.generateReading(cards, topic, question);
        isAIGenerated = true;
        console.log('✅ AI 生成成功');
      } else {
        throw new Error('AI_DISABLED');
      }
    } catch (error) {
      // AI 失败，回退到硬编码逻辑
      console.warn('⚠️ AI 生成失败，使用硬编码逻辑:', error.message);
      
      if (!window.DirectReadingGenerator) {
        throw new Error('DirectReadingGenerator 未加载');
      }
      
      deepNarrative = window.DirectReadingGenerator.generateDeepNarrative(cards, topic, question);
      isAIGenerated = false;
    }
    
    // 生成 HTML
    return this._buildHTML(deepNarrative, isAIGenerated);
  },
  
  /**
   * 构建 HTML
   */
  _buildHTML(deepNarrative, isAIGenerated) {
    let html = '';
    
    // CSS 样式
    html += `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
        
        .purple-starfield {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: 
            radial-gradient(2px 2px at 20% 30%, rgba(162, 136, 227, 0.5), transparent),
            radial-gradient(2px 2px at 60% 70%, rgba(162, 136, 227, 0.4), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(212, 175, 55, 0.5), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(162, 136, 227, 0.3), transparent),
            radial-gradient(2px 2px at 90% 60%, rgba(212, 175, 55, 0.4), transparent),
            radial-gradient(1px 1px at 33% 70%, rgba(162, 136, 227, 0.4), transparent),
            radial-gradient(1px 1px at 15% 85%, rgba(212, 175, 55, 0.3), transparent);
          background-size: 200% 200%;
          animation: starFloat 25s ease-in-out infinite;
          opacity: 0.7;
        }
        
        @keyframes starFloat {
          0%, 100% { 
            background-position: 0% 0%, 100% 100%, 50% 50%, 80% 20%, 20% 80%, 60% 40%, 15% 85%; 
          }
          50% { 
            background-position: 100% 100%, 0% 0%, 60% 60%, 90% 30%, 30% 90%, 70% 50%, 25% 75%; 
          }
        }
        
        .highlight-card {
          color: #A288E3;
          font-weight: 600;
        }
        
        .highlight-time {
          color: #D4AF37;
          font-weight: 600;
        }
        
        .ai-badge {
          display: inline-block;
          padding: 4px 12px;
          margin-left: 12px;
          background: rgba(162, 136, 227, 0.2);
          border: 1px solid rgba(162, 136, 227, 0.4);
          border-radius: 12px;
          font-size: 0.7rem;
          color: #A288E3;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      </style>
      
      <div class="purple-starfield"></div>
    `;
    
    // 组装内容
    let narrative = '';
    
    // 标题
    narrative += `<div style="text-align: center; margin-bottom: 3em;">`;
    narrative += `<span style="font-size: 1em; color: #D4AF37;">🕯️</span> `;
    narrative += `<span style="font-size: 1.5rem; font-weight: 300; letter-spacing: 0.4em; color: #F7E7CE; text-transform: uppercase;">${deepNarrative.title}</span>`;
    
    // AI 徽章
    if (isAIGenerated) {
      narrative += `<span class="ai-badge">✨ AI Generated</span>`;
    }
    
    narrative += `</div>`;
    
    // 基地台輸出結構：現狀直擊 / 脫困指南 / 量化預測
    narrative += `<div style="margin-bottom: 2.5em; line-height: 1.75;">`;
    narrative += `<h3 style="color: #D4AF37; font-weight: 600; letter-spacing: 0.15em; margin-bottom: 0.75em; font-size: 1rem;">【現狀直擊】</h3>`;
    narrative += `<div style="text-indent: 2em;">`;
    narrative += deepNarrative.paragraph1;
    narrative += `</div></div>`;
    narrative += `<div style="margin-bottom: 2.5em; line-height: 1.75;">`;
    narrative += `<h3 style="color: #D4AF37; font-weight: 600; letter-spacing: 0.15em; margin-bottom: 0.75em; font-size: 1rem;">【脫困指南】</h3>`;
    narrative += `<div style="text-indent: 2em;">`;
    narrative += deepNarrative.paragraph2;
    narrative += `</div></div>`;
    narrative += `<div style="line-height: 1.75;">`;
    narrative += `<h3 style="color: #D4AF37; font-weight: 600; letter-spacing: 0.15em; margin-bottom: 0.75em; font-size: 1rem;">【量化預測】</h3>`;
    narrative += `<div style="text-indent: 2em;">`;
    narrative += deepNarrative.paragraph3 || '';
    narrative += `</div></div>`;
    
    // 主容器
    html += `
      <div style="
        max-width: 900px;
        margin: 0 auto;
        background-image: url('./tarot-reading-bg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 32px;
        padding: 50px 40px;
        border: 1px solid rgba(162, 136, 227, 0.3);
        box-shadow: 0 20px 60px rgba(162, 136, 227, 0.3);
        position: relative;
        z-index: 1;
        overflow: hidden;
      ">
        <!-- 渐变遮罩层 -->
        <div style="
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(18, 10, 33, 0.85) 0%,
            rgba(30, 16, 48, 0.75) 50%,
            rgba(18, 10, 33, 0.85) 100%
          );
          border-radius: 32px;
          z-index: -1;
        "></div>
        
        <!-- 内容区 -->
        <div style="
          color: #F5F5DC;
          font-size: 1rem;
          line-height: 1.75;
          text-align: justify;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.05em;
          position: relative;
          z-index: 1;
        ">
          ${narrative}
        </div>
      </div>
    `;
    
    return html;
  }
};

// 导出到全局
window.TarotReadingWrapper = TarotReadingWrapper;

console.log('🎭 Tarot Reading Wrapper 已加载');
