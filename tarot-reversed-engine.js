/**
 * TarotReversedEngine - 逆位优化增强系统
 * 
 * 新增功能：
 * 1. 逆位警告动效数据生成
 * 2. 逆位关键词自动替换
 * 3. 大师级"毒舌"短评生成
 */

const { generateLayeredReading } = require('./tarot-pro-engine');

// ==================== 逆位比例分析 ====================

/**
 * 分析逆位牌比例并生成能量状态
 */
function analyzeReversedRatio(cards) {
  const reversedCards = cards.filter(c => c.position === 'reversed' || c.reversed === true);
  const reversedCount = reversedCards.length;
  const totalCount = cards.length;
  const ratio = totalCount > 0 ? reversedCount / totalCount : 0;
  const percentage = Math.round(ratio * 100);
  
  let energyStatus = '';
  let severity = 'low'; // low, medium, high, critical
  let warningColor = '#4CAF50'; // 默认绿色
  
  if (ratio >= 0.7) {
    energyStatus = '⚠ 能量严重阻塞';
    severity = 'critical';
    warningColor = '#D32F2F'; // 深红色
  } else if (ratio >= 0.5) {
    energyStatus = '⚠ 能量受阻';
    severity = 'high';
    warningColor = '#F44336'; // 红色
  } else if (ratio > 0 && ratio < 0.4) {
    energyStatus = '🔍 内在调整期';
    severity = 'medium';
    warningColor = '#FF9800'; // 橙色
  } else if (ratio >= 0.4 && ratio < 0.5) {
    energyStatus = '⚡ 能量波动';
    severity = 'medium';
    warningColor = '#FFC107'; // 黄色
  } else {
    energyStatus = '✨ 能量外放';
    severity = 'low';
    warningColor = '#4CAF50'; // 绿色
  }
  
  return {
    reversedCount,
    totalCount,
    ratio,
    percentage,
    energyStatus,
    severity,
    warningColor,
    needsWarning: ratio > 0.5 // 超过50%需要警告
  };
}

// ==================== 大师级毒舌短评 ====================

/**
 * 基于逆位比例和牌阵特征生成"毒舌"短评
 */
function generateMasterRoast(reversedAnalysis, cards, topic) {
  const { ratio, severity, reversedCount } = reversedAnalysis;
  const majorCount = cards.filter(c => c.arcana === 'major').length;
  
  const roasts = {
    // 超高逆位（70%+）
    critical_love: [
      "这是一份需要你『停下来思考』的牌阵 —— 你在感情中逃避的东西，比你承认的多得多",
      "三张牌，两张以上倒着 —— 宇宙在用最直接的方式告诉你：醒醒，别再自欺欺人了",
      "当能量全部内化时，问题不在对方，在于你不敢面对的那个自己"
    ],
    critical_career: [
      "这不是『时机未到』，是你根本没准备好 —— 先解决内心的恐惧和拖延，再谈行动",
      "事业停滞不是外界的错，是你的心态出了问题 —— 逆位超过70%，问题都在你这边",
      "你以为在等待机会，其实是在逃避挑战 —— 塔罗不会骗人，你的潜意识已经暴露了"
    ],
    critical_finance: [
      "财运不佳？看看你的决策模式 —— 逆位牌过多说明你在用『鸵鸟心态』处理金钱问题",
      "这个牌阵告诉我：你对财富的恐惧大于欲望，先治好『穷人思维』再说投资",
      "钱不是问题，你的心理障碍才是 —— 逆位牌在暗示：别再找借口了"
    ],
    critical_general: [
      "这是一份需要你『停下来思考』的牌阵 —— 生活各方面都在提醒你：是时候面对真相了",
      "逆位超过70%的牌局很少见，但它出现了 —— 你正在用『回避』作为人生的主旋律",
      "宇宙已经很明显了：你在逃避的，正是你最需要面对的"
    ],
    
    // 高逆位（50-70%）
    high_love: [
      "你正在『逃避某些真相』—— 感情中有未解决的问题，假装看不见不代表它不存在",
      "超过一半的牌是逆位，说明你对这段关系的态度比你嘴上说的消极得多",
      "情感能量受阻 —— 你在等对方改变，但塔罗建议你先改变对自己的态度"
    ],
    high_career: [
      "你正在『逃避某些真相』—— 职场上有你不愿承认的问题，是时候诚实面对了",
      "能量受阻，事业半温不火 —— 不是能力问题，是你的心态在拖后腿",
      "逆位牌过半，说明你内心的抗拒和焦虑正在消耗掉行动力"
    ],
    high_finance: [
      "财运受阻不是运气问题，是你的决策模式有bug —— 先修正心态，财富才会流动",
      "你正在『逃避某些真相』—— 可能是债务、可能是消费习惯，该面对就面对",
      "逆位牌过半提醒：金钱问题的根源在于内心的匮乏感，不在于外部条件"
    ],
    high_general: [
      "你正在『逃避某些真相』—— 生活中有重要的事情需要你停下来认真审视",
      "能量受阻的牌局告诉我：你在用忙碌掩盖不想面对的问题",
      "超过一半逆位是个信号 —— 该暂停一下，问问自己真正想要什么了"
    ],
    
    // 中度逆位（1-2张）
    medium_love: [
      "局部阻碍，整体可控 —— 感情中有小小的磕绊，调整心态就能顺利通过",
      "一两张逆位不可怕，这是成长的必经之路 —— 重点是别让小问题变成大危机",
      "能量波动属正常现象 —— 感情不可能永远一帆风顺，学会处理才是王道"
    ],
    medium_career: [
      "局部阻碍，整体可控 —— 事业上有小障碍，但不影响大方向，调整策略即可",
      "轻微的逆位提醒你：有些细节需要注意，但不必过度焦虑",
      "职场能量小波动，说明你正在调整状态 —— 这是进步的前兆，别慌"
    ],
    medium_finance: [
      "局部阻碍，整体可控 —— 财务上有些小摩擦，但整体趋势还是向好的",
      "一两张逆位代表：需要稍微调整理财策略，但不是大问题",
      "轻微能量阻碍是在提醒你：某个财务决策需要重新思考一下"
    ],
    medium_general: [
      "局部阻碍，整体可控 —— 生活某个方面需要微调，但大局稳定",
      "少量逆位是正常的人生起伏 —— 接受它，处理它，然后继续前进",
      "能量小波动提醒：暂停片刻，调整状态，然后重新出发"
    ],
    
    // 无逆位（0%）
    none_love: [
      "能量全开，感情运势一路畅通 —— 该说的说，该做的做，宇宙给你开了绿灯",
      "正位牌阵，代表你和对方的能量都在正常发挥 —— 珍惜这个顺势而为的时机",
      "没有逆位的牌局很少见，说明当前感情局面清晰明朗 —— 勇敢向前吧"
    ],
    none_career: [
      "正位能量全开 —— 职场运势处于上升期，该行动时别犹豫",
      "没有逆位阻碍，说明你的决策和行动方向都是对的 —— 继续保持",
      "能量畅通无阻 —— 这是推进事业的黄金时期，全力以赴吧"
    ],
    none_finance: [
      "财运能量外放，适合主动出击 —— 投资、创业、理财都是好时机",
      "正位牌阵代表财务能量流动顺畅 —— 你的决策方向是对的",
      "没有逆位阻碍，说明财富正在向你靠近 —— 保持行动力"
    ],
    none_general: [
      "能量全开的牌局 —— 生活各方面都处于顺势状态，抓住机会行动",
      "正位能量代表：你的思路清晰，方向正确，只管去做",
      "没有逆位的牌阵提醒：这是你人生的顺风期，别浪费了"
    ]
  };
  
  // 选择合适的短评类别
  let categoryKey = '';
  if (ratio >= 0.7) {
    categoryKey = `critical_${topic}`;
  } else if (ratio >= 0.5) {
    categoryKey = `high_${topic}`;
  } else if (ratio > 0) {
    categoryKey = `medium_${topic}`;
  } else {
    categoryKey = `none_${topic}`;
  }
  
  const roastList = roasts[categoryKey] || roasts[`medium_${topic}`];
  
  // 随机选择一条（实际使用时可以根据更多因素智能选择）
  const selectedRoast = roastList[Math.floor(Math.random() * roastList.length)];
  
  return {
    text: selectedRoast,
    severity: severity,
    category: categoryKey
  };
}

// ==================== 逆位关键词替换 ====================

/**
 * 为逆位牌的解读内容添加逆位标记和调整建议
 */
function enhanceReversedReading(reading, cardName, isReversed) {
  if (!isReversed || !reading) return reading;
  
  // 创建增强版解读
  const enhanced = { ...reading };
  
  // 1. 在每个维度标题前添加逆位标记
  const reversedPrefix = "(逆位 - 能量内化)";
  
  // 2. 调整建议内容
  if (enhanced.advice) {
    // 识别正位建议中的行动关键词并转换
    const actionKeywords = {
      '主动出击': '暂缓行动，先观察局势',
      '大胆前进': '谨慎评估，不要冒进',
      '积极行动': '内省调整，等待时机',
      '立即行动': '延后行动，深思熟虑',
      '勇敢表达': '保留想法，沉淀后再说',
      '主动沟通': '倾听为主，少说多想',
      '快速推进': '放慢节奏，质量优先',
      '抓住机会': '保守观察，不急于决定',
      '投入感情': '保护自己，设立边界',
      '全力以赴': '适度保留，避免过度消耗'
    };
    
    let adjustedAdvice = enhanced.advice;
    Object.entries(actionKeywords).forEach(([positive, negative]) => {
      if (adjustedAdvice.includes(positive)) {
        adjustedAdvice = adjustedAdvice.replace(positive, negative);
      }
    });
    
    // 如果没有匹配到关键词，添加通用逆位提示
    if (adjustedAdvice === enhanced.advice) {
      adjustedAdvice = `【逆位提示】能量内化，建议反思动机。${adjustedAdvice}`;
    }
    
    enhanced.advice = adjustedAdvice;
  }
  
  // 3. 增强警告内容
  if (enhanced.warning) {
    enhanced.warning = `【逆位警告】${enhanced.warning} 当前能量受阻，需要更多耐心和自我觉察。`;
  }
  
  // 4. 调整能量描述
  if (enhanced.energy) {
    enhanced.energy = `【能量内化】${enhanced.energy}`;
  }
  
  return enhanced;
}

// ==================== 生成完整的逆位增强报告 ====================

/**
 * 生成包含逆位优化的完整报告
 */
function generateReversedEnhancedReading(cards, topic = 'general', options = {}) {
  // 1. 分析逆位比例
  const reversedAnalysis = analyzeReversedRatio(cards);
  
  // 2. 生成大师毒舌短评
  const masterRoast = generateMasterRoast(reversedAnalysis, cards, topic);
  
  // 3. 生成基础分层报告
  const baseReading = generateLayeredReading(cards, topic, options);
  
  // 4. 为逆位牌增强解读内容
  const enhancedReadings = {
    ...baseReading.detailedReadings
  };
  
  ['past', 'present', 'future'].forEach((position, index) => {
    const card = cards[index];
    const isReversed = card.position === 'reversed' || card.reversed === true;
    
    if (isReversed && enhancedReadings[position]) {
      enhancedReadings[position].reading = enhanceReversedReading(
        enhancedReadings[position].reading,
        card.name,
        isReversed
      );
      
      // 添加逆位标记到卡牌名称
      enhancedReadings[position].position = '逆位 - 能量内化';
    }
  });
  
  // 5. 组装最终报告
  return {
    ...baseReading,
    reversedAnalysis, // 逆位分析数据
    masterRoast,      // 大师毒舌短评
    detailedReadings: enhancedReadings,
    visualEffects: {
      // 视觉效果数据（用于前端）
      backgroundDarkness: reversedAnalysis.needsWarning ? 0.3 : 0, // 0-1，0表示不变暗
      warningPulse: reversedAnalysis.needsWarning, // 是否显示呼吸灯
      warningColor: reversedAnalysis.warningColor,
      warningText: reversedAnalysis.energyStatus
    }
  };
}

/**
 * 格式化为文本报告（包含逆位优化）
 */
function formatReversedReport(enhancedData) {
  let report = '';
  
  report += `═══════════════════════════════════\n`;
  report += `🔮 塔罗专业解读（逆位增强版）\n`;
  report += `═══════════════════════════════════\n\n`;
  
  // 大师毒舌短评（置顶）
  report += `💬 **大师有话说**\n`;
  report += `\n${enhancedData.masterRoast.text}\n\n`;
  report += `───────────────────────────────────\n\n`;
  
  // 逆位状态警告
  const { reversedAnalysis } = enhancedData;
  if (reversedAnalysis.needsWarning) {
    report += `⚠️ **能量状态警告** ⚠️\n`;
    report += `${reversedAnalysis.energyStatus}\n`;
    report += `逆位牌数：${reversedAnalysis.reversedCount}/${reversedAnalysis.totalCount} (${reversedAnalysis.percentage}%)\n`;
    report += `当前局势：能量受阻，需要内省和调整\n\n`;
    report += `───────────────────────────────────\n\n`;
  } else {
    report += `✨ **能量状态**：${reversedAnalysis.energyStatus}\n`;
    report += `逆位牌数：${reversedAnalysis.reversedCount}/${reversedAnalysis.totalCount}\n\n`;
  }
  
  // 特殊金句（如果有）
  if (enhancedData.insight.masterQuote) {
    const quote = enhancedData.insight.masterQuote;
    report += `✨ **塔罗师箴言** ✨\n`;
    report += `\n"${quote.quote}"\n\n`;
    report += `${quote.insight}\n\n`;
    report += `───────────────────────────────────\n\n`;
  }
  
  // 第一层：局势大观
  report += `## ${enhancedData.overview.title}\n\n`;
  report += `🎴 **牌阵构成**：${enhancedData.overview.arcanaRatio.major}张大阿卡纳 + ${enhancedData.overview.arcanaRatio.minor}张小阿卡纳\n`;
  report += `📊 **能量格局**：${enhancedData.overview.energyPattern}\n\n`;
  
  // 能量分布
  report += `**四元素能量分布**：\n`;
  enhancedData.visualData.energyBars.forEach(bar => {
    if (bar.count > 0) {
      const barVisual = '█'.repeat(bar.count) + '░'.repeat(3 - bar.count);
      report += `${bar.icon} ${bar.name}：${barVisual} ${bar.percentage}%\n`;
    }
  });
  report += `\n───────────────────────────────────\n\n`;
  
  // 第二层：领域洞察
  report += `## ${enhancedData.insight.title}\n\n`;
  report += `💡 **${enhancedData.insight.category}洞察**：\n`;
  report += `${enhancedData.insight.coreInsight}\n\n`;
  report += `───────────────────────────────────\n\n`;
  
  // 第三层：牌意细解（包含逆位增强）
  report += `## ${enhancedData.detailedReadings.title}\n\n`;
  
  // 过去
  report += `### 📜 过去 - ${enhancedData.detailedReadings.past.card} (${enhancedData.detailedReadings.past.position})\n\n`;
  const pastReading = enhancedData.detailedReadings.past.reading;
  report += `**情况**：${pastReading.situation}\n\n`;
  
  // 现在
  report += `### ⚡ 现在 - ${enhancedData.detailedReadings.present.card} (${enhancedData.detailedReadings.present.position})\n\n`;
  const presentReading = enhancedData.detailedReadings.present.reading;
  report += `**能量**：${presentReading.energy}\n`;
  report += `**建议**：${presentReading.advice}\n`;
  report += `**警示**：${presentReading.warning}\n\n`;
  
  // 未来
  report += `### 🌟 未来 - ${enhancedData.detailedReadings.future.card} (${enhancedData.detailedReadings.future.position})\n\n`;
  const futureReading = enhancedData.detailedReadings.future.reading;
  report += `**结果**：${futureReading.outcome}\n`;
  report += `**时机**：${futureReading.timing}\n\n`;
  
  report += `═══════════════════════════════════\n`;
  report += `✨ 愿塔罗的智慧为你指引方向 ✨\n`;
  report += `═══════════════════════════════════\n`;
  
  return report;
}

// ==================== 导出 ====================

module.exports = {
  analyzeReversedRatio,
  generateMasterRoast,
  enhanceReversedReading,
  generateReversedEnhancedReading,
  formatReversedReport
};

// ===== 使用示例 =====
/*
const { generateReversedEnhancedReading } = require('./tarot-reversed-engine');

const cards = [
  { ...pastCard, position: 'upright' },
  { ...presentCard, position: 'reversed' }, // 逆位
  { ...futureCard, position: 'reversed' }   // 逆位
];

const reading = generateReversedEnhancedReading(cards, 'love');
console.log(formatReversedReport(reading));

// 获取视觉效果数据
console.log(reading.visualEffects);
// {
//   backgroundDarkness: 0.3,
//   warningPulse: true,
//   warningColor: '#F44336',
//   warningText: '⚠ 能量受阻'
// }
*/
