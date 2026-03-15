/**
 * 塔罗牌3张牌阵解读API
 * 功能：根据过去/现在/未来三张牌生成完整的解读报告
 * 集成元素互动和大阿卡纳权重系统
 */

// 导入元素互动规则
const ELEMENT_INTERACTIONS = {
  harmonious: {
    'Water-Earth': '🌊🌍 水土相生：能量互相滋养，事情会稳定且深入地发展。',
    'Fire-Air': '🔥💨 火风相助：行动力和决断力极强，事情进展飞快！',
    'Earth-Fire': '🔥🌍 火土炼金：激情与稳健结合，计划会逐步成形并实现。',
    'Air-Water': '💨🌊 风水流动：思维与情感和谐流动，沟通顺畅，直觉敏锐。'
  },
  conflicting: {
    'Water-Fire': '🌊🔥 水火不容：情绪能量与行动能量激烈碰撞，预示着一段情绪起伏较大的过渡期。请保持内心的定力。',
    'Air-Earth': '💨🌍 风土僵局：理想与现实产生摩擦，你可能会陷入过度思考的状态。别想太多，先行动起来。'
  }
};

/**
 * 检查元素互动
 */
function checkElementInteraction(element1, element2) {
  if (!element1 || !element2) return null;
  
  // 标准化元素组合键
  const key1 = [element1, element2].sort().join('-');
  const key2 = [element2, element1].sort().join('-');
  
  // 检查相生
  if (ELEMENT_INTERACTIONS.harmonious[key1] || ELEMENT_INTERACTIONS.harmonious[key2]) {
    return {
      type: 'harmonious',
      message: ELEMENT_INTERACTIONS.harmonious[key1] || ELEMENT_INTERACTIONS.harmonious[key2]
    };
  }
  
  // 检查相克
  if (ELEMENT_INTERACTIONS.conflicting[key1] || ELEMENT_INTERACTIONS.conflicting[key2]) {
    return {
      type: 'conflicting',
      message: ELEMENT_INTERACTIONS.conflicting[key1] || ELEMENT_INTERACTIONS.conflicting[key2]
    };
  }
  
  return null;
}

/**
 * 计算大阿卡纳权重
 */
function calculateMajorArcanaWeight(cards) {
  const majorCards = cards.filter(card => card.arcana === 'major');
  const majorCount = majorCards.length;
  const majorNames = majorCards.map(c => c.name).join('、');
  
  if (majorCount === 3) {
    return {
      weight: 'critical',
      message: `⚡ **命运的转折点**：三张全部都是大阿卡纳（${majorNames}）！这是人生的重大转折期，宇宙正在强制升级你的灵魂。接下来的 3-6 个月将是你人生最关键的时刻，请全力以赴。`
    };
  }
  
  if (majorCount === 2) {
    return {
      weight: 'high',
      message: `🔮 **宿命的召唤**：这次抽到了 ${majorCount} 张大阿卡纳（${majorNames}），这是一个宿命感极强的时期。你所面临的转变将对人生产生长远的影响，请顺应大势，不要抗拒命运的安排。`
    };
  }
  
  if (majorCount === 1) {
    return {
      weight: 'medium',
      message: `💫 这次出现了大阿卡纳《${majorNames}》，它将是这个牌阵的核心主题，其他牌围绕它展开。`
    };
  }
  
  return {
    weight: 'low',
    message: '这次都是小阿卡纳，代表这是日常生活层面的问题，通过实际行动可以改善。'
  };
}

/**
 * 综合格局分析模块
 * 分析牌阵的整体能量格局、元素分布、数字共鸣
 */
function analyzeSpreadPattern(cards) {
  const analysis = {
    elementDistribution: {},
    arcanaRatio: { major: 0, minor: 0 },
    numberResonance: {},
    suitDistribution: {},
    overallEnergy: ''
  };
  
  // 1. 统计元素分布
  const elementNames = {
    'Fire': '火🔥',
    'Water': '水🌊',
    'Air': '风💨',
    'Earth': '土🌍'
  };
  
  cards.forEach(card => {
    if (card.element) {
      analysis.elementDistribution[card.element] = 
        (analysis.elementDistribution[card.element] || 0) + 1;
    }
    
    // 统计大小牌比例
    if (card.arcana === 'major') {
      analysis.arcanaRatio.major++;
    } else {
      analysis.arcanaRatio.minor++;
    }
    
    // 统计数字共鸣（仅小阿卡纳）
    if (card.arcana === 'minor' && card.number) {
      analysis.numberResonance[card.number] = 
        (analysis.numberResonance[card.number] || 0) + 1;
    }
    
    // 统计花色分布
    if (card.suit) {
      analysis.suitDistribution[card.suit] = 
        (analysis.suitDistribution[card.suit] || 0) + 1;
    }
  });
  
  // 2. 生成元素分析文本
  let elementAnalysis = '';
  const dominantElements = Object.entries(analysis.elementDistribution)
    .sort((a, b) => b[1] - a[1]);
  
  if (dominantElements.length > 0) {
    const [topElement, count] = dominantElements[0];
    const elementName = elementNames[topElement];
    
    if (count === 3) {
      elementAnalysis = `🔥 **元素主宰**：三张牌全部是${elementName}元素！这个能量场非常单一强大。\n`;
      elementAnalysis += getElementDominanceMessage(topElement, 3);
    } else if (count === 2) {
      const [secondElement] = dominantElements[1] || ['none', 0];
      elementAnalysis = `⚖️ **元素组合**：${elementName}元素占主导(${count}张)`;
      if (secondElement !== 'none') {
        elementAnalysis += `，配合${elementNames[secondElement]}元素。\n`;
        elementAnalysis += getElementCombinationMessage(topElement, secondElement);
      } else {
        elementAnalysis += '。\n';
        elementAnalysis += getElementDominanceMessage(topElement, 2);
      }
    } else {
      elementAnalysis = `🌈 **元素平衡**：三种不同元素并存，能量复杂多元。\n`;
      elementAnalysis += '你正在经历多层面的变化，需要在不同能量间找到平衡点。\n';
    }
  }
  
  // 3. 生成数字共鸣分析
  let numberAnalysis = '';
  const resonantNumbers = Object.entries(analysis.numberResonance)
    .filter(([num, count]) => count >= 2);
  
  if (resonantNumbers.length > 0) {
    const [number, count] = resonantNumbers[0];
    numberAnalysis = `🔢 **数字共鸣**：出现了${count}张数字${number}的牌！\n`;
    numberAnalysis += getNumberResonanceMessage(parseInt(number), count);
  }
  
  // 4. 生成花色分析
  let suitAnalysis = '';
  const dominantSuits = Object.entries(analysis.suitDistribution)
    .sort((a, b) => b[1] - a[1]);
  
  if (dominantSuits.length > 0 && dominantSuits[0][1] >= 2) {
    const [suit, count] = dominantSuits[0];
    suitAnalysis = `🎴 **花色聚焦**：${count}张${getSuitName(suit)}牌。\n`;
    suitAnalysis += getSuitDominanceMessage(suit, count);
  }
  
  // 5. 综合能量评估
  analysis.overallEnergy = generateOverallEnergyAssessment(analysis);
  
  return {
    elementAnalysis,
    numberAnalysis,
    suitAnalysis,
    arcanaRatio: analysis.arcanaRatio,
    raw: analysis
  };
}

/**
 * 元素主宰信息
 */
function getElementDominanceMessage(element, count) {
  const messages = {
    'Fire': count === 3 
      ? '🔥 纯火能量爆发！这是行动、激情、创造的时期。你的生命力处于巅峰，但要小心冲动和burn out。快速行动，但也要给自己降温的时间。'
      : '🔥 火元素主导，充满行动力和热情。现在是采取主动、勇敢前进的时候，但也要注意急躁和冲动。',
    'Water': count === 3
      ? '🌊 纯水能量包围！这是深度情感、直觉、疗愈的时期。你的感受力极强，但要小心情绪淹没。信任你的直觉，但也要保持理性的浮木。'
      : '🌊 水元素主导，情感和直觉是关键。现在需要倾听内心声音，处理情感问题，但也要避免过度情绪化。',
    'Air': count === 3
      ? '💨 纯风能量流动！这是思考、沟通、决策的时期。你的头脑异常清晰，但要小心过度分析导致无法行动。想清楚了，就要落地。'
      : '💨 风元素主导，理性思考和沟通是重点。现在需要清晰思维和良好沟通，但也要避免过度分析和空谈。',
    'Earth': count === 3
      ? '🌍 纯土能量稳固！这是实际、建设、积累的时期。你的根基很稳，适合长期计划，但要小心过度保守和固执。稳健前进，但也要保持一定灵活性。'
      : '🌍 土元素主导，实际和稳定是基础。现在需要脚踏实地、务实行动，但也要避免过度保守和僵化。'
  };
  
  return messages[element] || '';
}

/**
 * 元素组合信息
 */
function getElementCombinationMessage(element1, element2) {
  const combinations = {
    'Fire-Water': '🔥🌊 火水并存，激情与情感的拉扯。你在行动冲动和情感需求间寻找平衡，这可能造成内在冲突，但也带来丰富的能量。',
    'Fire-Air': '🔥💨 火风相助，行动力和思维力双强！想法能快速转化为行动，这是推进计划的绝佳时机。',
    'Fire-Earth': '🔥🌍 火土炼金，激情遇见务实。你的热情有实际基础支撑，想法能落地成真，但需要耐心。',
    'Water-Air': '🌊💨 水风流动，情感与理智的对话。你在感性和理性间游走，这能带来深刻洞察，但也可能感到撕裂。',
    'Water-Earth': '🌊🌍 水土相生，情感有了稳固的容器。这是疗愈和成长的好组合，感受会转化为实际的改变。',
    'Air-Earth': '💨🌍 风土摩擦，理想与现实的碰撞。你的想法需要务实的调整，但也别让现实完全限制了想象力。'
  };
  
  const key1 = [element1, element2].sort().join('-');
  return combinations[key1] || '';
}

/**
 * 数字共鸣信息
 */
function getNumberResonanceMessage(number, count) {
  const messages = {
    1: '数字1的共鸣：新开始、原始力量、独立。多个开始同时出现，你在多个领域都处于起点，要选择重点突破。',
    2: '数字2的共鸣：选择、平衡、合作。你面临多个需要平衡的局面，在关系和决策中寻找和谐。',
    3: '数字3的共鸣：创造、表达、成长。创造力和沟通在多个方面被强调，是表达自己的时期。',
    4: '数字4的共鸣：稳定、结构、基础。多个方面都需要建立稳固基础，这是打地基的时期。',
    5: '数字5的共鸣：变化、自由、挑战。变动在多个领域同时发生，生活正在洗牌重组。',
    6: '数字6的共鸣：和谐、责任、选择。多个关系或责任需要你的关注和平衡。',
    7: '数字7的共鸣：反思、评估、智慧。多个方面都需要停下来思考和评估，不要盲目行动。',
    8: '数字8的共鸣：力量、成就、控制。你在多个领域都在掌控和实现，力量感很强。',
    9: '数字9的共鸣：完成、智慧、放手。多个周期同时接近尾声，是总结和放手的时候。',
    10: '数字10的共鸣：完成、转换、循环。一个大周期的结束和新周期的开始，转变的能量很强。'
  };
  
  return messages[number] || '这个数字的重复出现强调了它的主题在你生活中的重要性。';
}

/**
 * 花色主导信息
 */
function getSuitName(suit) {
  const names = {
    'Wands': '权杖(火)',
    'Cups': '圣杯(水)',
    'Swords': '宝剑(风)',
    'Pentacles': '星币(土)'
  };
  return names[suit] || suit;
}

function getSuitDominanceMessage(suit, count) {
  const messages = {
    'Wands': '🔥 行动和热情的领域被强调。现在需要主动出击、勇敢行动、追随激情。',
    'Cups': '🌊 情感和关系的领域被强调。现在需要关注内心感受、人际关系、情感需求。',
    'Swords': '💨 思维和沟通的领域被强调。现在需要清晰思考、诚实沟通、理性决策。',
    'Pentacles': '🌍 物质和实际的领域被强调。现在需要关注金钱、工作、健康等实际事务。'
  };
  
  return messages[suit] || '';
}

/**
 * 综合能量评估
 */
function generateOverallEnergyAssessment(analysis) {
  const { major, minor } = analysis.arcanaRatio;
  let assessment = '';
  
  if (major === 3) {
    assessment = '🌟 **能量层级：灵魂级** - 这是宿命的牌局，不是你选择命运，而是命运选择了你。';
  } else if (major === 2) {
    assessment = '⚡ **能量层级：转折级** - 人生重要转折期，外部力量和内在选择交织。';
  } else if (major === 1) {
    assessment = '💫 **能量层级：主题级** - 一个核心主题引领，其他通过实际行动展开。';
  } else {
    assessment = '🎯 **能量层级：实践级** - 这是务实的局面，通过具体行动可以改善。';
  }
  
  return assessment;
}

/**
 * 生成格局洞察
 */
function getPatternInsight(patternAnalysis, majorWeight) {
  const elements = Object.keys(patternAnalysis.raw.elementDistribution);
  const hasResonance = Object.keys(patternAnalysis.raw.numberResonance).length > 0;
  const hasSuitFocus = Object.values(patternAnalysis.raw.suitDistribution).some(count => count >= 2);
  
  let insight = '';
  
  // 根据不同特征组合生成洞察
  if (majorWeight.weight === 'critical') {
    insight = '正处于命运的重大转折点。三张大阿卡纳代表这不是普通的变化，而是灵魂层面的升级。宇宙正在重新编排你的人生剧本，顺应这股力量，不要抗拒。';
  } else if (majorWeight.weight === 'high') {
    insight = '正经历重要的人生转折。大阿卡纳的强势出现意味着有超越你控制的力量在运作，但你仍有自主权去选择如何应对。';
  } else if (elements.length === 1) {
    insight = '呈现出高度聚焦的能量。单一元素的主宰意味着你所有的挑战和机会都集中在一个层面，这既是优势（专注）也是挑战（失衡）。';
  } else if (elements.length === 3 && !hasResonance) {
    insight = '展现出复杂多元的能量场。不同元素的共存意味着你需要在多个层面同时处理问题，寻找整合的智慧是关键。';
  } else if (hasResonance && hasSuitFocus) {
    insight = '显示出强烈的主题聚焦。数字和花色的重复都在强调某个特定的生命主题，这是宇宙给你的明确信号。';
  } else if (hasSuitFocus) {
    insight = '聚焦在特定的生活领域。花色的集中出现说明你目前的能量和注意力都投注在这个方向，这是需要深入处理的area。';
  } else if (hasResonance) {
    insight = '呈现出数字的共鸣。相同数字的重复是一种强调，这个阶段或能量在你生活的多个方面都在显现。';
  } else {
    insight = '展现出平衡而独立的能量。每张牌代表不同的面向，需要你在不同层次上理解和整合信息。';
  }
  
  return insight;
}

/**
 * 生成3张牌解读报告（核心函数）
 * @param {Object} pastCard - 过去的牌
 * @param {Object} presentCard - 现在的牌  
 * @param {Object} futureCard - 未来的牌
 * @param {String} topic - 占卜类型 (love/career/finance/general)
 * @returns {Object} 完整的解读报告
 */
function generateThreeCardReading(pastCard, presentCard, futureCard, topic = 'general') {
  // 确定牌的正逆位（默认正位）
  const pastPosition = pastCard.position || 'upright';
  const presentPosition = presentCard.position || 'upright';
  const futurePosition = futureCard.position || 'upright';
  
  // 获取解读内容
  const pastReading = pastCard.interpretations[topic]?.[pastPosition];
  const presentReading = presentCard.interpretations[topic]?.[presentPosition];
  const futureReading = futureCard.interpretations[topic]?.[futurePosition];
  
  // 检查元素互动
  const pastPresentInteraction = checkElementInteraction(pastCard.element, presentCard.element);
  const presentFutureInteraction = checkElementInteraction(presentCard.element, futureCard.element);
  
  // 计算大阿卡纳权重
  const majorWeight = calculateMajorArcanaWeight([pastCard, presentCard, futureCard]);
  
  // ===== 组装完整报告 =====
  let report = '';
  
  // 标题
  report += `═══════════════════════════════════\n`;
  report += `🔮 塔罗解读报告\n`;
  report += `═══════════════════════════════════\n\n`;
  
  // 牌组展示
  report += `📋 **抽到的牌**：\n`;
  report += `   过去：${pastCard.name} ${pastPosition === 'reversed' ? '(逆位)' : ''}\n`;
  report += `   现在：${presentCard.name} ${presentPosition === 'reversed' ? '(逆位)' : ''}\n`;
  report += `   未来：${futureCard.name} ${futurePosition === 'reversed' ? '(逆位)' : ''}\n\n`;
  
  // ===== 新增：综合格局分析 =====
  const patternAnalysis = analyzeSpreadPattern([pastCard, presentCard, futureCard]);
  
  report += `═══════════════════════════════════\n`;
  report += `📊 **综合格局分析**\n`;
  report += `═══════════════════════════════════\n\n`;
  
  // 能量层级
  report += `${patternAnalysis.raw.overallEnergy}\n\n`;
  
  // 大小牌比例
  const { major, minor } = patternAnalysis.arcanaRatio;
  report += `🎴 **牌阵构成**：${major}张大阿卡纳 + ${minor}张小阿卡纳\n`;
  if (majorWeight.weight !== 'low') {
    report += `${majorWeight.message}\n`;
  }
  report += `\n`;
  
  // 元素分布
  if (patternAnalysis.elementAnalysis) {
    report += `${patternAnalysis.elementAnalysis}\n`;
  }
  
  // 花色聚焦
  if (patternAnalysis.suitAnalysis) {
    report += `${patternAnalysis.suitAnalysis}\n`;
  }
  
  // 数字共鸣
  if (patternAnalysis.numberAnalysis) {
    report += `${patternAnalysis.numberAnalysis}\n`;
  }
  
  report += `───────────────────────────────────\n\n`;
  report += `💡 **格局解读**：\n`;
  report += `从整体能量来看，这个牌阵${getPatternInsight(patternAnalysis, majorWeight)}\n\n`;
  
  report += `═══════════════════════════════════\n`;
  report += `📖 **单牌详细解读**\n`;
  report += `═══════════════════════════════════\n\n`;
  
  // ===== 第一部分：过去（根源）=====
  report += `## 📜 过去的影响（根源）\n\n`;
  report += `**${pastCard.name}** ${pastPosition === 'reversed' ? '(逆位)' : '(正位)'}\n\n`;
  report += `${pastReading.situation}\n\n`;
  
  // 过去到现在的元素互动
  if (pastPresentInteraction) {
    report += `${pastPresentInteraction.message}\n\n`;
  }
  
  report += `───────────────────────────────────\n\n`;
  
  // ===== 第二部分：现在（当下挑战）=====
  report += `## ⚡ 当下的挑战（现在）\n\n`;
  report += `**${presentCard.name}** ${presentPosition === 'reversed' ? '(逆位)' : '(正位)'}\n\n`;
  report += `🌀 **能量状态**：${presentReading.energy}\n\n`;
  report += `💡 **建议**：${presentReading.advice}\n\n`;
  
  // 现在是逆位 -> 特别警告
  if (presentPosition === 'reversed' || futurePosition === 'reversed') {
    report += `⚠️ **特别提醒**：${presentReading.warning}\n\n`;
  }
  
  // 现在到未来的元素互动
  if (presentFutureInteraction) {
    report += `🔮 **塔罗师的悄悄话**：${presentFutureInteraction.message}\n\n`;
  }
  
  report += `───────────────────────────────────\n\n`;
  
  // ===== 第三部分：未来（趋势）=====
  report += `## 🌟 未来的发展（趋势）\n\n`;
  report += `**${futureCard.name}** ${futurePosition === 'reversed' ? '(逆位)' : '(正位)'}\n\n`;
  report += `🔮 **可能的结果**：${futureReading.outcome}\n\n`;
  report += `⏳ **预计时间点**：${futureReading.timing}\n\n`;
  
  report += `───────────────────────────────────\n\n`;
  
  // ===== 第四部分：总结 =====
  report += `## 💬 总结\n\n`;
  report += `从《${pastCard.name}》的根源，到《${presentCard.name}》的当下，再到《${futureCard.name}》的未来，这是你此刻最需要理解的生命轨迹。\n\n`;
  
  report += `═══════════════════════════════════\n`;
  report += `✨ 愿塔罗的智慧为你指引方向 ✨\n`;
  report += `═══════════════════════════════════\n`;
  
  return {
    report: report,
    metadata: {
      topic: topic,
      cards: [
        { position: 'past', ...pastCard, reversed: pastPosition === 'reversed' },
        { position: 'present', ...presentCard, reversed: presentPosition === 'reversed' },
        { position: 'future', ...futureCard, reversed: futurePosition === 'reversed' }
      ],
      majorArcanaWeight: majorWeight,
      elementInteractions: {
        pastToPresent: pastPresentInteraction,
        presentToFuture: presentFutureInteraction
      }
    }
  };
}

/**
 * API端点封装（Express示例）
 */
function createTarotReadingAPI(tarotDatabase) {
  /**
   * POST /api/tarot/reading
   * Body: {
   *   pastCardId: "major_09",
   *   presentCardId: "major_10", 
   *   futureCardId: "major_11",
   *   topic: "love",
   *   positions: ["upright", "upright", "reversed"]
   * }
   */
  return async (req, res) => {
    try {
      const { pastCardId, presentCardId, futureCardId, topic = 'general', positions } = req.body;
      
      // 从数据库获取卡牌
      const pastCard = tarotDatabase.find(c => c.id === pastCardId);
      const presentCard = tarotDatabase.find(c => c.id === presentCardId);
      const futureCard = tarotDatabase.find(c => c.id === futureCardId);
      
      if (!pastCard || !presentCard || !futureCard) {
        return res.status(400).json({ error: '卡牌ID无效' });
      }
      
      // 设置正逆位
      if (positions) {
        pastCard.position = positions[0] || 'upright';
        presentCard.position = positions[1] || 'upright';
        futureCard.position = positions[2] || 'upright';
      }
      
      // 生成解读
      const reading = generateThreeCardReading(pastCard, presentCard, futureCard, topic);
      
      // 返回结果
      res.json({
        success: true,
        reading: reading.report,
        metadata: reading.metadata,
        timestamp: new Date().toISOString()
      });
      
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  };
}

// 导出函数
module.exports = {
  generateThreeCardReading,
  checkElementInteraction,
  calculateMajorArcanaWeight,
  analyzeSpreadPattern,
  createTarotReadingAPI
};

// ===== 使用示例 =====
/*
// 载入数据库
const tarotDB = require('./complete-tarot-database.json').cards;

// 创建测试牌组
const testPast = tarotDB.find(c => c.id === 'major_09');  // 隐士
const testPresent = tarotDB.find(c => c.id === 'major_10'); // 命运之轮
const testFuture = tarotDB.find(c => c.id === 'major_11');  // 正义

testPresent.position = 'reversed';  // 设置逆位

// 生成解读
const result = generateThreeCardReading(testPast, testPresent, testFuture, 'love');
console.log(result.report);
*/
