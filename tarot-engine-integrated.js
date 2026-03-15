/**
 * Tarot Engine Integrated - 浏览器版本
 * 整合所有塔罗解读引擎，适用于前端直接调用
 * 
 * 包含模块：
 * 1. 完整78张牌数据库
 * 2. 专业级解读引擎
 * 3. 逆位增强系统  
 * 4. 凯尔特十字牌阵
 * 5. 三张牌阵解读
 */

// ==================== 全局命名空间 ====================
window.TarotEngine = window.TarotEngine || {};

// ==================== 78张完整卡牌数据库 ====================
// 注意：这里需要加载 complete-tarot-database.js 中的数据
// 为了简化，我们创建一个加载函数

window.TarotEngine.loadCardDatabase = async function() {
  // 如果已经加载，直接返回
  if (window.TAROT_CARD_DATABASE) {
    return window.TAROT_CARD_DATABASE;
  }
  
  // 从tarot-data-human-friendly.js加载（它包含完整数据）
  // 假设该文件已经通过<script>标签加载
  return window.TAROT_CARD_DATABASE || null;
};

// ==================== 牌阵类型定义 ====================
window.TarotEngine.SpreadTypes = {
  THREE_CARD: 'three_card',        // 三张牌阵（过去/现在/未来）
  CELTIC_CROSS: 'celtic_cross'     // 凯尔特十字（10张）
};

// ==================== 凯尔特十字位置映射 ====================
window.TarotEngine.CelticPositions = {
  1: { name: "核心现状", emoji: "🎯", description: "当前处境的核心" },
  2: { name: "阻碍挑战", emoji: "⚔️", description: "横在面前的障碍" },
  3: { name: "潜意识根源", emoji: "🧠", description: "深层动机和隐藏影响" },
  4: { name: "过去影响", emoji: "📜", description: "过去事件对现在的作用" },
  5: { name: "意识目标", emoji: "🎯", description: "有意识追求的方向" },
  6: { name: "近未来发展", emoji: "🔮", description: "接下来即将发生的事" },
  7: { name: "内在状态", emoji: "💭", description: "你对自己的认知" },
  8: { name: "外部环境", emoji: "🌍", description: "周围人事物的影响" },
  9: { name: "希望与恐惧", emoji: "💫", description: "内心最深层的期待和担忧" },
  10: { name: "最终归宿", emoji: "🏆", description: "事情的最终走向" }
};

// ==================== 逆位分析 ====================
window.TarotEngine.analyzeReversed = function(cards) {
  const reversedCards = cards.filter(c => c.position === 'reversed' || c.reversed === true);
  const reversedCount = reversedCards.length;
  const totalCount = cards.length;
  const ratio = totalCount > 0 ? reversedCount / totalCount : 0;
  const percentage = Math.round(ratio * 100);
  
  let energyStatus = '';
  let severity = 'low';
  let warningColor = '#4CAF50';
  
  if (ratio >= 0.7) {
    energyStatus = '⚠ 能量严重阻塞';
    severity = 'critical';
    warningColor = '#D32F2F';
  } else if (ratio >= 0.5) {
    energyStatus = '⚠ 能量受阻';
    severity = 'high';
    warningColor = '#F44336';
  } else if (ratio >= 0.4) {
    energyStatus = '⚡ 能量波动';
    severity = 'medium';
    warningColor = '#FFC107';
  } else if (ratio > 0) {
    energyStatus = '🔍 内在调整期';
    severity = 'medium';
    warningColor = '#FF9800';
  } else {
    energyStatus = '✨ 能量外放';
    severity = 'low';
    warningColor = '#4CAF50';
  }
  
  return {
    reversedCount,
    totalCount,
    ratio,
    percentage,
    energyStatus,
    severity,
    warningColor,
    needsWarning: ratio > 0.5
  };
};

// ==================== 三张牌阵解读 ====================
window.TarotEngine.generateThreeCardReading = function(cards, topic = 'general') {
  if (cards.length !== 3) {
    throw new Error('三张牌阵需要3张牌');
  }
  
  const reversedAnalysis = window.TarotEngine.analyzeReversed(cards);
  
  // 基础结构
  const reading = {
    spreadType: 'three_card',
    title: '🔮 三张牌阵 · 时间之流解读',
    timestamp: new Date().toISOString(),
    topic,
    reversedAnalysis,
    
    positions: {
      past: {
        position: '过去',
        emoji: '📜',
        card: cards[0].name,
        isReversed: cards[0].position === 'reversed' || cards[0].reversed === true,
        interpretation: null // 将从数据库获取
      },
      present: {
        position: '现在',
        emoji: '⚡',
        card: cards[1].name,
        isReversed: cards[1].position === 'reversed' || cards[1].reversed === true,
        interpretation: null
      },
      future: {
        position: '未来',
        emoji: '🌟',
        card: cards[2].name,
        isReversed: cards[2].position === 'reversed' || cards[2].reversed === true,
        interpretation: null
      }
    }
  };
  
  // 填充解读内容
  ['past', 'present', 'future'].forEach((timeframe, index) => {
    const card = cards[index];
    const isReversed = card.position === 'reversed' || card.reversed === true;
    const positionType = isReversed ? 'reversed' : 'upright';
    
    if (card.interpretations && card.interpretations[topic]) {
      reading.positions[timeframe].interpretation = card.interpretations[topic][positionType];
    }
  });
  
  return reading;
};

// ==================== 凯尔特十字解读 ====================
window.TarotEngine.generateCelticCrossReading = function(cards, topic = 'general') {
  if (cards.length !== 10) {
    throw new Error('凯尔特十字牌阵需要10张牌');
  }
  
  const reversedAnalysis = window.TarotEngine.analyzeReversed(cards);
  
  // 核心矛盾分析（位置1 vs 位置2）
  const coreConflict = analyzeCoreConflict(cards[0], cards[1], topic);
  
  // 心理根源分析（位置3 vs 位置5）
  const psychological = analyzePsychologicalRoot(cards[2], cards[4], cards[6], topic);
  
  // 外部环境分析（位置8）
  const environment = analyzeEnvironmentalImpact(cards[7], cards[9], topic);
  
  // 最终预测（位置10）
  const finalOutcome = analyzeFinalOutcome(cards[9], topic);
  
  return {
    spreadType: 'celtic_cross',
    title: '🏆 凯尔特十字 · 全维度深度解读',
    timestamp: new Date().toISOString(),
    topic,
    reversedAnalysis,
    
    cardPositions: cards.map((card, index) => ({
      position: index + 1,
      name: window.TarotEngine.CelticPositions[index + 1].name,
      emoji: window.TarotEngine.CelticPositions[index + 1].emoji,
      card: card.name,
      isReversed: card.position === 'reversed' || card.reversed === true
    })),
    
    analysis: {
      coreConflict,
      psychological,
      environment,
      finalOutcome
    }
  };
};

// ==================== 辅助函数 ====================

function analyzeCoreConflict(card1, card2, topic) {
  const isReversed = card2.position === 'reversed' || card2.reversed === true;
  const conflictType = isReversed ? "内在纠结" : "外在阻碍";
  
  return {
    title: "📌 核心矛盾",
    conflictType,
    currentState: card1.name,
    challenge: card2.name,
    analysis: `亲爱的，你目前的状态是《${card1.name}》，而横在面前的挑战是《${card2.name}》。这是一个${conflictType}，${isReversed ? '来自内心深处的纠结' : '来自外部现实的阻力'}。`,
    gentle: isReversed 
      ? "温柔地面对自己的内心，接纳这份纠结，是化解它的第一步。"
      : "外部的挑战虽然看起来很难，但请相信，每一个障碍都是成长的机会。"
  };
}

function analyzePsychologicalRoot(card3, card5, card7, topic) {
  const suit3 = card3.suit || 'Major';
  const suit5 = card5.suit || 'Major';
  const isAligned = suit3 === suit5;
  
  return {
    title: "🧠 心理根源",
    subconscious: card3.name,
    consciousGoal: card5.name,
    innerState: card7.name,
    alignment: isAligned ? "一致" : "冲突",
    analysis: isAligned 
      ? `你的潜意识根源《${card3.name}》和意识目标《${card5.name}》处于和谐状态。这种身心合一，会让你更有力量。`
      : `你的潜意识根源《${card3.name}》和意识目标《${card5.name}》存在不一致。这种内在冲突，可能是你感到迷茫的根源。`,
    gentle: "倾听内心真正的声音，调整方向，才能找到真正的平静。"
  };
}

function analyzeEnvironmentalImpact(card8, card10, topic) {
  const isReversed = card8.position === 'reversed' || card8.reversed === true;
  
  return {
    title: "🌍 外部环境",
    environment: card8.name,
    finalOutcome: card10.name,
    isReversed,
    impact: isReversed ? "不利" : "有利",
    analysis: isReversed
      ? `外部环境《${card8.name}》目前对你不太有利，可能存在一些阻力。这会影响到最终结果《${card10.name}》。`
      : `外部环境《${card8.name}》对你是支持的，这份正向能量会助力你的最终结果《${card10.name}》。`,
    gentle: isReversed
      ? "调整策略，换个角度，也许能减少外部阻力的影响。"
      : "珍惜这份来自外界的支持，善用这份有利的环境。"
  };
}

function analyzeFinalOutcome(card10, topic) {
  const isReversed = card10.position === 'reversed' || card10.reversed === true;
  
  return {
    title: "🏆 最终预测",
    outcome: card10.name,
    isReversed,
    prediction: isReversed ? "结果尚不明朗" : "结果已初露端倪",
    advice: isReversed ? "需反求诸己" : "保持当前节奏",
    analysis: isReversed
      ? `最终归宿《${card10.name}》目前还不够清晰。现在最重要的是审视自己的内在状态和行动方向。`
      : `最终归宿《${card10.name}》显示积极信号。保持当前的节奏，继续前行。`,
    gentle: isReversed
      ? "给自己一些时间，温柔地对待这个调整的过程。"
      : "请相信自己的努力不会白费。美好的结果正在等着你。"
  };
}

// ==================== 统一解读接口 ====================
window.TarotEngine.generateReading = function(cards, spreadType, topic = 'general') {
  switch(spreadType) {
    case window.TarotEngine.SpreadTypes.THREE_CARD:
      return window.TarotEngine.generateThreeCardReading(cards, topic);
      
    case window.TarotEngine.SpreadTypes.CELTIC_CROSS:
      return window.TarotEngine.generateCelticCrossReading(cards, topic);
      
    default:
      throw new Error(`不支持的牌阵类型: ${spreadType}`);
  }
};

// ==================== 格式化输出 ====================
window.TarotEngine.formatReading = function(reading) {
  let output = '';
  
  output += `═══════════════════════════════════\n`;
  output += `${reading.title}\n`;
  output += `═══════════════════════════════════\n\n`;
  
  // 能量状态
  output += `✨ 能量状态：${reading.reversedAnalysis.energyStatus}\n`;
  output += `逆位牌数：${reading.reversedAnalysis.reversedCount}/${reading.reversedAnalysis.totalCount}\n\n`;
  
  if (reading.spreadType === 'three_card') {
    // 三张牌阵格式
    ['past', 'present', 'future'].forEach(timeframe => {
      const pos = reading.positions[timeframe];
      output += `${pos.emoji} ${pos.position} - ${pos.card}${pos.isReversed ? '（逆位）' : ''}\n`;
      if (pos.interpretation) {
        output += `${pos.interpretation.short || pos.interpretation.situation || ''}\n\n`;
      }
    });
  } else if (reading.spreadType === 'celtic_cross') {
    // 凯尔特十字格式
    output += `## ${reading.analysis.coreConflict.title}\n`;
    output += `${reading.analysis.coreConflict.analysis}\n`;
    output += `💝 ${reading.analysis.coreConflict.gentle}\n\n`;
    
    output += `## ${reading.analysis.psychological.title}\n`;
    output += `${reading.analysis.psychological.analysis}\n`;
    output += `💝 ${reading.analysis.psychological.gentle}\n\n`;
    
    output += `## ${reading.analysis.environment.title}\n`;
    output += `${reading.analysis.environment.analysis}\n`;
    output += `💝 ${reading.analysis.environment.gentle}\n\n`;
    
    output += `## ${reading.analysis.finalOutcome.title}\n`;
    output += `${reading.analysis.finalOutcome.analysis}\n`;
    output += `💝 ${reading.analysis.finalOutcome.gentle}\n`;
  }
  
  output += `\n═══════════════════════════════════\n`;
  output += `✨ 愿塔罗的智慧为你指引方向 ✨\n`;
  output += `═══════════════════════════════════\n`;
  
  return output;
};

// ==================== 初始化 ====================
console.log('🔮 Tarot Engine Integrated 已加载');
console.log('📊 支持的牌阵类型：', Object.keys(window.TarotEngine.SpreadTypes));
