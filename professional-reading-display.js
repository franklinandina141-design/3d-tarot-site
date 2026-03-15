/**
 * Professional Reading Display Component
 * 专业解读展示组件 - 在原有网站基础上添加专业功能
 */

window.ProfessionalReading = {
  /**
   * 从问题中智能识别占卜类型
   */
  detectTopic: function(question = '') {
    const q = question.toLowerCase();
    
    console.log('🔍 正在识别问题类型，原始问题:', question);
    console.log('🔍 转换为小写:', q);
    
    // 财务/金钱类关键词
    const financeKeywords = ['钱', '财', '收入', '投资', '理财', '存款', '债务', '资金', '薪水', '工资', '赚', '花费', '消费', '贷款', '金钱', '财务', '财富', '股票', '基金', '房产'];
    
    // 感情/关系类关键词（大幅扩充）
    const loveKeywords = [
      '爱', '恋', '感情', '关系', '伴侣', '结婚', '分手', '复合', '暧昧', '告白', 
      '喜欢', '追', '男友', '女友', '老公', '老婆', '对象', '单身', '桃花',
      // 新增
      '他', '她', '这段', '两人', '在一起', '约会', '表白', '心动', '吵架',
      '冷战', '挽回', '放下', '忘记', '想念', '思念', '牵挂', '情侣',
      '婚姻', '离婚', '出轨', '第三者', '前任', '现任', '暗恋', '相亲',
      '恋爱', '谈恋爱', '交往', '情感', '爱情', '喜欢上', '爱上'
    ];
    
    // 事业/工作类关键词
    const careerKeywords = ['工作', '事业', '职场', '晋升', '跳槽', '创业', '老板', '同事', '公司', '面试', '转职', '升职', '辞职', '项目', '业绩', '考核'];
    
    // 检查关键词（财务最后检查，因为"钱"字可能在感情问题中出现）
    for (let keyword of loveKeywords) {
      if (q.includes(keyword)) {
        console.log('✅ 识别为 love，匹配关键词:', keyword);
        return 'love';
      }
    }
    
    for (let keyword of careerKeywords) {
      if (q.includes(keyword)) {
        console.log('✅ 识别为 career，匹配关键词:', keyword);
        return 'career';
      }
    }
    
    for (let keyword of financeKeywords) {
      if (q.includes(keyword)) {
        console.log('✅ 识别为 finance，匹配关键词:', keyword);
        return 'finance';
      }
    }
    
    console.warn('⚠️ 未匹配任何关键词，默认识别为 general');
    return 'general';
  },
  
  /**
   * 从数据库获取牌的解读内容
   */
  getCardInterpretation: function(card, topic) {
    // 尝试从 TAROT_DETAILED 数据库获取
    if (window.TAROT_DETAILED) {
      // 从卡牌ID提取数字
      let cardNum = null;
      if (card.id && card.id.startsWith('ar')) {
        cardNum = parseInt(card.id.substring(2));
      }
      
      if (cardNum !== null && window.TAROT_DETAILED[cardNum]) {
        const cardData = window.TAROT_DETAILED[cardNum];
        const position = card.isReversed ? 'reversed' : 'upright';
        const content = cardData[position] ? cardData[position][topic] : null;
        
        if (content) {
          // 将简化格式转换为完整格式
          return {
            short: content.substring(0, 100) + '...',
            energy: content,
            situation: content,
            advice: content,
            warning: position === 'reversed' ? '注意：' + content : '',
            outcome: content,
            timing: position === 'reversed' ? '需要更多时间' : '时机成熟'
          };
        }
      }
    }
    
    // Fallback: 返回null，让引擎使用默认数据
    return null;
  },
  
  /**
   * 生成并展示专业解读
   */
  generate: function(selectedCards, question = '') {
    if (!window.TarotEngine || selectedCards.length !== 3) {
      console.error('需要塔罗引擎和3张牌');
      return null;
    }
    
    // 智能检测话题类型
    const topic = this.detectTopic(question);
    console.log('🔍 检测到的话题类型:', topic, '问题:', question);
    
    // 转换卡牌格式并添加解读内容
    const cards = selectedCards.map(card => {
      const interpretation = this.getCardInterpretation(card, topic);
      
      return {
        ...card,
        arcana: card.id && card.id.startsWith('ar') ? 'major' : 'minor',
        suit: card.id && card.id.startsWith('wa') ? 'Wands' :
              card.id && card.id.startsWith('cu') ? 'Cups' :
              card.id && card.id.startsWith('sw') ? 'Swords' :
              card.id && card.id.startsWith('pe') ? 'Pentacles' : null,
        position: card.isReversed ? 'reversed' : 'upright',
        reversed: card.isReversed || false,
        interpretations: interpretation ? {
          [topic]: {
            [card.isReversed ? 'reversed' : 'upright']: interpretation
          }
        } : undefined
      };
    });
    
    try {
      const reading = window.TarotEngine.generateReading(cards, 'three_card', topic);
      
      // 如果引擎返回的解读为空，使用我们自己获取的
      if (reading && reading.positions) {
        ['past', 'present', 'future'].forEach((pos, index) => {
          if (!reading.positions[pos].interpretation && cards[index].interpretations) {
            reading.positions[pos].interpretation = cards[index].interpretations[topic][cards[index].position];
          }
        });
      }
      
      return reading;
    } catch (error) {
      console.error('生成解读失败：', error);
      return null;
    }
  },
  
  /**
   * 创建能量条HTML
   */
  createEnergyBars: function(energyBars) {
    if (!energyBars || energyBars.length === 0) return '';
    
    const colors = {
      fire: 'linear-gradient(90deg, #ff6b6b, #ee5a24)',
      water: 'linear-gradient(90deg, #4facfe, #00f2fe)',
      air: 'linear-gradient(90deg, #a8b8c4, #7f8c9a)',
      earth: 'linear-gradient(90deg, #38a169, #2f855a)',
      spirit: 'linear-gradient(90deg, #9b59b6, #6a5acd)'
    };
    
    let html = '<div style="margin: 30px 0;">';
    html += '<h4 style="color: #F7E7CE; text-align: center; margin-bottom: 20px; font-size: 1.2em; letter-spacing: 0.2em;">🌈 能量分布</h4>';
    
    energyBars.forEach(bar => {
      if (bar.count > 0) {
        html += `
          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #F7E7CE;">
              <span>${bar.icon} ${bar.name}</span>
              <span>${bar.percentage}%</span>
            </div>
            <div style="height: 25px; background: rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden;">
              <div style="height: 100%; width: ${bar.percentage}%; background: ${colors[bar.element]}; border-radius: 12px; transition: width 1s ease-out; display: flex; align-items: center; justify-content: flex-end; padding-right: 10px; color: white; font-weight: bold; font-size: 0.85em;">
                ${bar.count} 张
              </div>
            </div>
          </div>
        `;
      }
    });
    
    html += '</div>';
    return html;
  },
  
  /**
   * 创建逆位警告HTML（已取消，返回空）
   */
  createReversedWarning: function(reversedAnalysis) {
    // 用户要求取消此功能
    return '';
  },
  
  /**
   * 创建大师短评HTML（如果有）
   */
  createMasterQuote: function(masterQuote) {
    if (!masterQuote) return '';
    
    return `
      <div style="
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        border-radius: 24px;
        padding: 40px;
        margin: 30px 0;
        text-align: center;
        box-shadow: 0 10px 30px rgba(245, 87, 108, 0.3);
      ">
        <h3 style="color: white; font-size: 1.5em; margin-bottom: 20px; letter-spacing: 0.2em;">
          ✨ 塔罗师箴言 ✨
        </h3>
        <p style="color: white; font-size: 1.6em; font-weight: bold; margin-bottom: 20px; line-height: 1.6;">
          "${masterQuote.quote}"
        </p>
        <p style="color: rgba(255, 255, 255, 0.95); font-size: 1.1em; line-height: 1.8;">
          ${masterQuote.insight}
        </p>
      </div>
    `;
  },
  
  /**
   * 创建完整的专业解读HTML（使用AI或硬编码逻辑）
   * 注意：此函数现在可能返回 Promise（如果使用 AI）
   */
  createFullReadingHTML: function(reading, cards, topic, question) {
    if (!reading && !window.DirectReadingGenerator && !window.TarotReadingWrapper) return '';
    
    // 优先使用 AI 包装器（支持 AI + 硬编码回退）
    if (window.TarotReadingWrapper && cards && cards.length === 3) {
      // 尝试异步生成（如果 AI 启用）
      const result = window.TarotReadingWrapper.generate(cards, topic, question);
      
      // 如果返回 Promise，处理异步
      if (result instanceof Promise) {
        // 返回加载占位符，异步完成后更新
        result.then(html => {
          // 查找并更新 DOM
          const container = document.querySelector('.professional-reading-container');
          if (container) {
            container.innerHTML = html;
          }
        }).catch(error => {
          console.error('❌ 解读生成失败:', error);
          // 回退到硬编码逻辑
          if (window.DirectReadingGenerator) {
            const html = window.DirectReadingGenerator.generateFullHTML(cards, topic, question);
            const container = document.querySelector('.professional-reading-container');
            if (container) {
              container.innerHTML = html;
            }
          }
        });
        
        // 立即返回加载动画
        return `
          <div style="text-align: center; padding: 60px 20px; color: #A288E3;">
            <div style="font-size: 3em; margin-bottom: 20px;">🔮</div>
            <div style="font-size: 1.2em; font-family: 'Cormorant Garamond', serif; letter-spacing: 0.2em;">
              靈魂解讀生成中...
            </div>
            <div style="margin-top: 20px; font-size: 0.9em; color: #D4AF37;">
              AI 正在深度分析您的牌陣
            </div>
          </div>
        `;
      }
      
      // 如果是同步返回（AI 未启用），直接返回
      return result;
    }
    
    // 回退：使用直接解读生成器
    if (window.DirectReadingGenerator && cards && cards.length === 3) {
      return window.DirectReadingGenerator.generateFullHTML(cards, topic, question);
    }
    
    // 最终 Fallback：使用旧逻辑
    if (!reading) return '';
    
    let html = '';
    
    // 0. 话题类型标识
    const topicIcons = {
      love: '💕',
      career: '💼',
      finance: '💰',
      general: '🌟'
    };
    const topicNames = {
      love: '感情',
      career: '事业',
      finance: '财运',
      general: '综合'
    };
    
    html += `
      <div style="text-align: center; margin-bottom: 30px;">
        <div style="display: inline-block; background: rgba(255, 255, 255, 0.1); padding: 12px 30px; border-radius: 25px; border: 2px solid rgba(247, 231, 206, 0.3);">
          <span style="color: #F7E7CE; font-size: 1.2em; letter-spacing: 0.15em;">
            ${topicIcons[reading.topic]} ${topicNames[reading.topic]}解读
          </span>
        </div>
      </div>
    `;
    
    // 1. 逆位警告（已取消）
    html += this.createReversedWarning(reading.reversedAnalysis);
    
    // 2. 特殊组合金句（如果有）
    if (reading.insight && reading.insight.masterQuote) {
      html += this.createMasterQuote(reading.insight.masterQuote);
    }
    
    // 3. 能量分布
    if (reading.visualData && reading.visualData.energyBars) {
      html += this.createEnergyBars(reading.visualData.energyBars);
    }
    
    // 4. 分层解读标题
    html += `
      <div style="margin: 40px 0;">
        <h3 style="color: #F7E7CE; text-align: center; font-size: 2em; letter-spacing: 0.3em; margin-bottom: 40px;">
          📊 专业解读
        </h3>
      </div>
    `;
    
    // 5. 三张牌详细解读
    if (reading.positions) {
      const positions = ['past', 'present', 'future'];
      const icons = { past: '📜', present: '⚡', future: '🌟' };
      const titles = { past: '过去 - 根基', present: '现在 - 脉动', future: '未来 - 指引' };
      
      positions.forEach(pos => {
        const cardReading = reading.positions[pos];
        if (!cardReading) return;
        
        html += `
          <div style="
            background: ${cardReading.isReversed ? 
              'linear-gradient(to right, rgba(255, 229, 229, 0.1) 0%, rgba(255, 255, 255, 0.05) 50px)' : 
              'rgba(255, 255, 255, 0.05)'
            };
            border-left: ${cardReading.isReversed ? '5px solid #D32F2F' : '5px solid #667eea'};
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 25px;
          ">
            <h4 style="color: #F7E7CE; font-size: 1.5em; margin-bottom: 15px; letter-spacing: 0.15em;">
              ${icons[pos]} ${titles[pos]}
            </h4>
            <p style="color: #9d85c4; font-size: 1.2em; margin-bottom: 20px;">
              ${cardReading.card}${cardReading.isReversed ? ' <span style="color: #D32F2F;">(逆位 - 能量内化)</span>' : ''}
            </p>
        `;
        
        if (cardReading.interpretation) {
          const interp = cardReading.interpretation;
          
          if (interp.short) {
            html += `<div style="margin-bottom: 15px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px;">
              <strong style="color: #F7E7CE;">概述：</strong>
              <span style="color: rgba(247, 231, 206, 0.9);">${interp.short}</span>
            </div>`;
          }
          
          if (interp.energy) {
            html += `<div style="margin-bottom: 15px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px;">
              <strong style="color: #F7E7CE;">能量：</strong>
              <span style="color: rgba(247, 231, 206, 0.9);">${interp.energy}</span>
            </div>`;
          }
          
          if (interp.situation) {
            html += `<div style="margin-bottom: 15px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px;">
              <strong style="color: #F7E7CE;">情况：</strong>
              <span style="color: rgba(247, 231, 206, 0.9);">${interp.situation}</span>
            </div>`;
          }
          
          if (interp.advice) {
            html += `<div style="margin-bottom: 15px; padding: 15px; background: linear-gradient(135deg, rgba(255, 234, 167, 0.15), rgba(253, 203, 110, 0.1)); border-left: 4px solid #fdcb6e; border-radius: 12px;">
              <strong style="color: #FFD700;">💝 建议：</strong>
              <span style="color: rgba(247, 231, 206, 0.95);">${interp.advice}</span>
            </div>`;
          }
          
          if (interp.warning) {
            html += `<div style="margin-bottom: 15px; padding: 15px; background: rgba(211, 47, 47, 0.1); border-left: 4px solid #D32F2F; border-radius: 12px;">
              <strong style="color: #FFB74D;">⚠️ 警示：</strong>
              <span style="color: rgba(247, 231, 206, 0.9);">${interp.warning}</span>
            </div>`;
          }
        }
        
        html += `</div>`;
      });
    }
    
    return html;
  }
};

// 添加必要的样式
const style = document.createElement('style');
style.textContent = `
  .professional-reading-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .professional-reading-container * {
    line-height: 1.8;
  }
`;
document.head.appendChild(style);

console.log('🔮 Professional Reading Display Component loaded');
