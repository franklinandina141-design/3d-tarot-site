/**
 * Direct Reading Generator - 叙事式解读生成器（深度重构版）
 * 
 * 核心原则：
 * 1. 消除"罗列感"，提升"叙事感"
 * 2. 严禁使用『牌面证据』小标题
 * 3. 将每张牌的含义直接织入叙事文本
 * 4. 针对"多久改进"根据【未来位】的牌给出时间暗示
 */

window.DirectReadingGenerator = {
  
  /**
   * 从TAROT_DETAILED获取精准解读
   */
  getDetailedInterpretation: function(card, topic) {
    if (!window.TAROT_DETAILED) {
      console.error('TAROT_DETAILED 数据库未加载');
      return null;
    }
    
    console.log('📝 正在获取解读:', {
      cardId: card.id,
      cardName: card.name,
      topic: topic,
      isReversed: card.isReversed
    });
    
    // 从卡牌ID提取数字
    let cardNum = null;
    if (card.id && card.id.startsWith('ar')) {
      cardNum = parseInt(card.id.substring(2));
    }
    
    if (cardNum === null) {
      console.warn('⚠️ 无法从ID提取卡牌编号:', card.id);
      return null;
    }
    
    if (!window.TAROT_DETAILED[cardNum]) {
      console.warn('⚠️ 数据库中找不到卡牌:', cardNum);
      return null;
    }
    
    const cardData = window.TAROT_DETAILED[cardNum];
    const position = card.isReversed ? 'reversed' : 'upright';
    
    // 获取对应话题的解读
    if (cardData[position] && cardData[position][topic]) {
      console.log('✅ 成功获取解读:', cardData.name, position, topic);
      return cardData[position][topic];
    }
    
    console.warn('⚠️ 找不到解读内容:', {
      card: cardData.name,
      position,
      topic,
      availableTopics: cardData[position] ? Object.keys(cardData[position]) : []
    });
    
    return null;
  },
  
  /**
   * 获取时间暗示（根据未来牌）
   */
  getTimingHint: function(futureCard) {
    if (!futureCard) return '转机将在合适的时刻到来。';
    
    const cardName = futureCard.name || '';
    const isReversed = futureCard.isReversed;
    
    // 命运之轮的特殊时间暗示
    if (cardName.includes('命運之輪') || cardName.includes('Wheel of Fortune')) {
      if (isReversed) {
        return '改善的契机需要耐心等待，可能在下一个季度才会明显。但这不是永恒的增长，而是需要你把握波动中的机会。';
      } else {
        return '改善的契机就在下一个月度周期，转机即将到来。但这不是永恒的增长，而是需要你抓紧波动中的机会。';
      }
    }
    
    // 其他牌的时间暗示规则
    const timingMap = {
      '太陽': isReversed ? '需要2-3个月的调整期' : '1-2周内会有积极变化',
      '星星': '1-2个月内逐步改善',
      '月亮': isReversed ? '需要3-6个月的沉淀' : '2-3个月内逐渐明朗',
      '戰車': '立即行动，1个月内见效',
      '隱者': '需要3-6个月的内在转化',
      '死神': isReversed ? '需要半年到一年的深度转型' : '3个月内完成重大转折',
      '塔': '1-2周内迅速变化',
      '世界': '即将完成，1个月内收尾'
    };
    
    for (let key in timingMap) {
      if (cardName.includes(key)) {
        return `改善的时间预期：${timingMap[key]}。`;
      }
    }
    
    // 默认时间暗示
    if (isReversed) {
      return '改善需要更多时间，预计2-3个月后会有转机。';
    } else {
      return '改善的契机在1-2个月内会逐渐显现。';
    }
  },
  
  /**
   * 生成完整的叙事式深度解读（唯一的总结报告）
   */
  generateNarrativeReading: function(cards, topic, question) {
    if (!cards || cards.length !== 3) {
      return '请选择完整的三张牌。';
    }
    
    const [pastCard, presentCard, futureCard] = cards;
    
    // 获取三张牌的解读
    const pastText = this.getDetailedInterpretation(pastCard, topic) || '过去的能量正在褪去...';
    const presentText = this.getDetailedInterpretation(presentCard, topic) || '当下的状态需要关注...';
    const futureText = this.getDetailedInterpretation(futureCard, topic) || '未来的方向正在形成...';
    
    // 获取时间暗示
    const timingHint = this.getTimingHint(futureCard);
    
    // 构建叙事 - 将三张牌的含义自然地织入故事
    let narrative = '';
    
    // 第一段：过去到现在的连接
    narrative += `你过去那段${pastCard.isReversed ? '看似美好但实则充满隐忧' : '相对稳定'}的阶段`;
    
    // 巧妙地将过去牌的含义织入
    if (pastCard.name.includes('太陽')) {
      narrative += pastCard.isReversed ? 
        '（${pastCard.name}逆位）显示出虚火的财务扩张期' : 
        '（${pastCard.name}）带来了清晰的方向感';
    } else if (pastCard.name.includes('塔')) {
      narrative += `（${pastCard.name}${pastCard.isReversed ? '逆位' : ''}）经历了突如其来的结构崩塌`;
    } else {
      narrative += `（${pastCard.name}${pastCard.isReversed ? '逆位' : ''}）`;
    }
    
    narrative += '已经结束了。';
    
    // 将过去牌的解读内容自然融入
    narrative += `<br/><br/>${pastText}`;
    
    // 第二段：现在的核心问题
    narrative += `<br/><br/>这让你现在陷入了一种`;
    
    if (presentCard.isReversed) {
      narrative += '被迫的冷静与重新审视（';
    } else {
      narrative += '新的状态（';
    }
    
    narrative += `${presentCard.name}${presentCard.isReversed ? '逆位' : ''}）——`;
    
    // 将现在牌的解读内容织入
    narrative += `${presentText}`;
    
    // 第三段：未来的指引 + 时间暗示
    narrative += `<br/><br/>而${futureCard.name}${futureCard.isReversed ? '逆位' : ''}告诉你，`;
    
    // 将未来牌的解读内容织入
    narrative += `${futureText}`;
    
    // 添加时间暗示
    narrative += `<br/><br/><strong>关于"多久能改善"：</strong>${timingHint}`;
    
    // 最终建议（不使用"牌面证据"这种小标题，直接叙述）
    narrative += `<br/><br/>综合来看，你需要在${
      presentCard.isReversed ? '停下来重新思考' : '当下果断行动'
    }的同时，也要意识到这${
      futureCard.isReversed ? '不是一蹴而就的过程' : '是个需要你主动把握的时机'
    }。`;
    
    // 针对不同话题给出最后的收尾
    if (topic === 'finance') {
      narrative += `你的财务改善不是靠等待，而是靠你对${presentCard.name}所象征的${
        presentCard.isReversed ? '内在调整' : '实际行动'
      }。`;
    } else if (topic === 'career') {
      narrative += `职场的转机需要你在${presentCard.name}的能量下，${
        presentCard.isReversed ? '先整理内在，再向外突破' : '直接采取行动'
      }。`;
    } else if (topic === 'love') {
      narrative += `感情的改善关键在于你如何面对${presentCard.name}带来的${
        presentCard.isReversed ? '内心纠结' : '新的可能性'
      }。`;
    }
    
    return narrative;
  },
  
  /**
   * 生成完整的 HTML（高级神秘紫配色）
   */
  generateFullHTML: function(cards, topic, question) {
    if (!cards || cards.length !== 3) {
      return '<p>需要3张牌</p>';
    }
    
    let html = '';
    
    // 添加紫色星光背景动效CSS
    html += `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap');
        
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
      </style>
      
      <div class="purple-starfield"></div>
    `;
    
    // 1. 顶部三张牌视觉区域（紫色毛玻璃）
    html += `
      <div style="margin-bottom: 60px; position: relative; z-index: 1;">
        <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
    `;
    
    const positions = ['过去', '现在', '未来'];
    cards.forEach((card, i) => {
      html += `
        <div style="text-align: center;">
          <div style="
            width: 160px;
            height: 240px;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid ${card.isReversed ? 'rgba(224, 160, 160, 0.3)' : 'rgba(162, 136, 227, 0.2)'};
            box-shadow: 0 8px 32px rgba(162, 136, 227, 0.15);
            margin-bottom: 12px;
            position: relative;
          ">
            <img 
              src="${card.image}" 
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                ${card.isReversed ? 'transform: rotate(180deg); filter: brightness(0.75);' : 'filter: brightness(0.9);'}
              " 
              alt="${card.name}"
            />
            <div style="
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(18,10,33,0.95), transparent);
              padding: 16px 12px 12px;
            ">
              <p style="color: #E0D7F5; font-size: 0.95em; margin: 0; letter-spacing: 0.1em;">
                ${card.name}
              </p>
            </div>
          </div>
          <p style="color: #A288E3; font-size: 0.75em; letter-spacing: 0.3em; text-transform: uppercase; margin: 0;">
            ${positions[i]}
          </p>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
    
    // 2. 深度解析报告（神秘紫毛玻璃）
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
    
    const narrative = this.generateNarrativeReading(cards, topic, question);
    
    html += `
      <div style="
        max-width: 900px;
        margin: 0 auto;
        background: rgba(30, 16, 48, 0.6);
        backdrop-filter: blur(15px);
        border-radius: 32px;
        padding: 50px 40px;
        border: 1px solid rgba(162, 136, 227, 0.2);
        box-shadow: 0 20px 60px rgba(162, 136, 227, 0.2);
        position: relative;
        z-index: 1;
      ">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="
            color: #D4AF37;
            font-size: 2.2em;
            letter-spacing: 0.3em;
            margin: 0 0 10px 0;
            font-family: 'Noto Serif SC', serif;
            font-weight: 700;
          ">
            🔮 靈魂導師·深度解析報告
          </h2>
          <div style="
            display: inline-block;
            background: rgba(30, 16, 48, 0.5);
            backdrop-filter: blur(10px);
            padding: 10px 28px;
            border-radius: 24px;
            margin-top: 20px;
            border: 1px solid rgba(162, 136, 227, 0.15);
          ">
            <span style="
              color: #A288E3; 
              font-size: 1.1em; 
              letter-spacing: 0.2em;
              font-family: 'Noto Serif SC', serif;
              font-weight: 600;
            ">
              ${topicIcons[topic]} ${topicNames[topic]}解读
            </span>
          </div>
        </div>
        
        <div style="
          color: #E0D7F5;
          font-size: 1.2em;
          line-height: 1.8;
          text-align: justify;
        ">
          ${narrative}
        </div>
      </div>
    `;
    
    return html;
  }
};

console.log('🎯 Direct Reading Generator (Narrative Mode) loaded');
