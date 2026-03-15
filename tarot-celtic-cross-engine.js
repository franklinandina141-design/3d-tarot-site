/**
 * TarotCelticCrossEngine - 凯尔特十字牌阵深度解析系统
 * 
 * 凯尔特十字是塔罗牌中最经典的牌阵之一，由10张牌组成
 * 提供全方位的生活洞察和深度心理分析
 * 
 * 位置映射：
 * 1. 核心现状 - 当前处境的核心
 * 2. 阻碍挑战 - 横在面前的障碍（横放在位置1上）
 * 3. 潜意识根源 - 深层动机和隐藏影响
 * 4. 过去影响 - 过去事件对现在的作用
 * 5. 意识目标 - 有意识追求的方向
 * 6. 近未来发展 - 接下来即将发生的事
 * 7. 内在状态 - 你对自己的认知
 * 8. 外部环境 - 周围人事物的影响
 * 9. 希望与恐惧 - 内心最深层的期待和担忧
 * 10. 最终归宿 - 事情的最终走向
 */

const { analyzeReversedRatio } = require('./tarot-reversed-engine');

// ==================== 位置定义 ====================

const CELTIC_POSITIONS = {
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

// ==================== 核心分析函数 ====================

/**
 * 分析核心矛盾（位置1 vs 位置2）
 */
function analyzeCoreConflict(card1, card2, topic) {
  const isReversed = card2.position === 'reversed' || card2.reversed === true;
  const conflictType = isReversed ? "内在纠结" : "外在阻碍";
  
  const insights = {
    title: "📌 核心矛盾",
    conflictType,
    currentState: card1.name,
    challenge: card2.name,
    analysis: "",
    gentle: ""
  };
  
  // 根据占卜类型生成分析
  const analysisTemplates = {
    love: {
      external: `亲爱的，你目前的感情状态是《${card1.name}》，而横在你面前的挑战是《${card2.name}》。这是一个外部阻碍，可能来自现实条件、他人看法，或是沟通障碍。请记住，外部的阻力往往是可以通过努力和智慧去化解的。`,
      internal: `亲爱的，你目前的感情状态是《${card1.name}》，而你内心深处的纠结体现为《${card2.name}》。这是一个内在的心理障碍，可能是恐惧、不安全感，或是对过去的执着。温柔地面对自己的内心，才能真正迈向幸福。`
    },
    career: {
      external: `你当前的职业状态是《${card1.name}》，而眼前的挑战是《${card2.name}》。这是一个外部阻碍，可能来自职场环境、资源限制，或是他人的竞争。清晰地认识挑战，才能找到突破的路径。`,
      internal: `你当前的职业状态是《${card1.name}》，而你内心的纠结体现为《${card2.name}》。这是一个内在的心理障碍，可能是自我怀疑、患得患失，或是对改变的恐惧。相信自己的能力，是突破困境的第一步。`
    },
    finance: {
      external: `你目前的财务状态是《${card1.name}》，而面临的挑战是《${card2.name}》。这是一个外部阻碍，可能来自市场环境、投资风险，或是资金流动问题。理性分析局势，才能做出明智的财务决策。`,
      internal: `你目前的财务状态是《${card1.name}》，而内心的纠结体现为《${card2.name}》。这是一个内在的心理障碍，可能是金钱焦虑、匮乏感，或是对财富的复杂情感。调整心态，财富才会更自然地流向你。`
    },
    general: {
      external: `你当前的人生状态是《${card1.name}》，而横在面前的挑战是《${card2.name}》。这是一个外部阻碍，提醒你关注现实层面的障碍。认清现实，才能找到前进的方向。`,
      internal: `你当前的人生状态是《${card1.name}》，而内心的纠结体现为《${card2.name}》。这是一个内在的心理障碍，需要你温柔地审视自己的内心世界。接纳自己，是改变的起点。`
    }
  };
  
  const template = analysisTemplates[topic] || analysisTemplates.general;
  insights.analysis = isReversed ? template.internal : template.external;
  
  // 温柔的补充建议
  insights.gentle = isReversed 
    ? "这个时候，最需要的是对自己温柔一些。内心的纠结往往源于我们对自己的苛责。试着用接纳和理解的态度，陪伴自己度过这段调整期。"
    : "虽然外部的挑战看起来很难，但请相信，每一个障碍都是成长的机会。保持耐心和智慧，你会找到属于自己的解决之道。";
  
  return insights;
}

/**
 * 分析心理根源（位置3潜意识 vs 位置5意识目标）
 */
function analyzePsychologicalRoot(card3, card5, card7, topic) {
  const insights = {
    title: "🧠 心理根源",
    subconscious: card3.name,
    consciousGoal: card5.name,
    innerState: card7.name,
    alignment: "",
    analysis: "",
    gentle: ""
  };
  
  // 检查身心是否一致
  const suit3 = card3.suit || 'Major';
  const suit5 = card5.suit || 'Major';
  const isAligned = suit3 === suit5;
  
  insights.alignment = isAligned ? "一致" : "冲突";
  
  if (isAligned) {
    insights.analysis = `亲爱的，你的潜意识根源《${card3.name}》和意识目标《${card5.name}》处于同一能量频率。这是一个非常好的信号，说明你内心深处的渴望和表面追求的方向是一致的。这种身心合一的状态，会让你在行动时更有力量，也更容易达成目标。`;
    
    insights.gentle = "继续保持这份清晰和专注。当内心和外在的目标一致时，宇宙也会更容易听见你的声音，为你创造机会。";
  } else {
    const elementMap = {
      'Wands': '火元素（行动、激情）',
      'Cups': '水元素（情感、直觉）',
      'Swords': '风元素（思考、决策）',
      'Pentacles': '土元素（物质、稳定）',
      'Major': '灵性能量'
    };
    
    insights.analysis = `亲爱的，你的潜意识根源《${card3.name}》属于${elementMap[suit3]}，而意识目标《${card5.name}》属于${elementMap[suit5]}。这种不一致揭示了一个重要的真相：你表面上追求的，和内心深处真正渴望的，可能并不相同。这种内在冲突，正是你感到焦虑、迷茫或不满足的根本原因。`;
    
    insights.gentle = "请温柔地问问自己：我真正想要的是什么？有时候，我们会因为外界的期待、他人的看法，或是过去的惯性，而追求一些并不真正属于自己的目标。倾听内心的声音，调整方向，才能找到真正的平静和满足。";
  }
  
  // 加入内在状态的洞察
  const innerStateInsight = `\n\n你对自己的认知（位置7）是《${card7.name}》。这张牌揭示了你如何看待自己，以及你在这个过程中的内在姿态。${
    card7.position === 'reversed' 
      ? '目前你可能对自己的认知有些模糊或不够自信，这需要更多的自我觉察和接纳。' 
      : '这份清晰的自我认知，是你前进道路上的重要资产。'
  }`;
  
  insights.analysis += innerStateInsight;
  
  return insights;
}

/**
 * 分析外部环境影响（位置8）
 */
function analyzeEnvironmentalImpact(card8, card10, topic) {
  const insights = {
    title: "🌍 外部环境",
    environment: card8.name,
    finalOutcome: card10.name,
    isReversed: card8.position === 'reversed' || card8.reversed === true,
    impact: "",
    analysis: "",
    gentle: ""
  };
  
  if (insights.isReversed) {
    insights.impact = "不利";
    insights.analysis = `亲爱的，外部环境（位置8）目前显示为逆位的《${card8.name}》。这意味着周围的人事物对你并不太有利。可能存在流言蜚语、资源不到位、他人的不理解或不支持，甚至是一些看不见的阻力。这些外部因素，会直接影响到你的最终结果《${card10.name}》。`;
    
    insights.gentle = "但请记住，外部环境虽然重要，却不是唯一的决定因素。你依然可以通过调整自己的策略、寻找新的资源、或是改善沟通方式，来减少外部阻力的影响。有时候，退一步，换个角度，反而能找到更好的解决之道。";
  } else {
    insights.impact = "有利";
    insights.analysis = `亲爱的，外部环境（位置8）显示为正位的《${card8.name}》。这是一个积极的信号，说明周围的人事物对你是支持的。可能有贵人相助、资源充足、或是大环境趋势对你有利。这种正向的外部能量，会为你的最终结果《${card10.name}》提供助力。`;
    
    insights.gentle = "珍惜这份来自外界的支持，同时也要保持自己的主动性。机会总是留给有准备的人，善用这份有利的环境，你会发现事情进展得比想象中更顺利。";
  }
  
  return insights;
}

/**
 * 分析时间演变（位置4过去 → 位置6近未来）
 */
function analyzeTimeline(card4, card6) {
  const insights = {
    title: "⏳ 时间演变",
    past: card4.name,
    nearFuture: card6.name,
    pastType: card4.arcana === 'major' ? '大阿卡纳' : '小阿卡纳',
    futureType: card6.arcana === 'major' ? '大阿卡纳' : '小阿卡纳',
    trend: "",
    analysis: ""
  };
  
  // 判断能量趋势
  if (card4.arcana === 'major' && card6.arcana === 'minor') {
    insights.trend = "能量降维";
    insights.analysis = `亲爱的，过去的影响（位置4）是大阿卡纳《${card4.name}》，这代表你经历过重大的人生事件或转折。而近未来的发展（位置6）是小阿卡纳《${card6.name}》，这说明接下来的日子将进入具体的事务处理阶段。能量从灵魂层面降维到实际操作层面，你需要更多关注细节和日常执行。`;
  } else if (card4.arcana === 'minor' && card6.arcana === 'major') {
    insights.trend = "能量升维";
    insights.analysis = `亲爱的，过去的影响（位置4）是小阿卡纳《${card4.name}》，这代表你之前处理的都是具体的日常事务。而近未来的发展（位置6）是大阿卡纳《${card6.name}》，这预示着接下来将有重大的人生转折或灵魂层面的觉醒。准备好迎接一个更高维度的生命体验。`;
  } else if (card4.arcana === 'major' && card6.arcana === 'major') {
    insights.trend = "灵魂旅程";
    insights.analysis = `亲爱的，过去的影响（位置4）和近未来的发展（位置6）都是大阿卡纳，分别是《${card4.name}》和《${card6.name}》。这说明你正处于一个深刻的灵魂旅程中。过去的重大事件正在引领你走向另一个重要的人生转折点。这是一段非常有意义的生命历程。`;
  } else {
    insights.trend = "稳定推进";
    insights.analysis = `亲爱的，过去的影响（位置4）和近未来的发展（位置6）都是小阿卡纳，分别是《${card4.name}》和《${card6.name}》。这说明你的生活正在稳定地推进。没有剧烈的起伏，而是一步一步地向前走。珍惜这份稳定，踏实地处理好每一个细节。`;
  }
  
  return insights;
}

/**
 * 分析希望与恐惧（位置9）
 */
function analyzeHopesAndFears(card9, topic) {
  const insights = {
    title: "💫 希望与恐惧",
    card: card9.name,
    isReversed: card9.position === 'reversed' || card9.reversed === true,
    analysis: "",
    gentle: ""
  };
  
  const topicMap = {
    love: "这段感情",
    career: "你的事业",
    finance: "财务状况",
    general: "这件事"
  };
  
  const context = topicMap[topic] || "这件事";
  
  if (insights.isReversed) {
    insights.analysis = `亲爱的，你内心深处对${context}的期待和担忧，体现为逆位的《${card9.name}》。逆位的牌往往揭示了我们不愿承认的恐惧。你可能害怕失败、害怕失去、害怕不被认可，或是害怕自己不够好。这些恐惧虽然深藏内心，却实实在在地影响着你的决策和行动。`;
    
    insights.gentle = "请温柔地承认这份恐惧。恐惧不是软弱，而是我们在乎的证明。当你勇敢地面对和接纳自己的恐惧时，它的力量就会减弱。你会发现，很多时候，我们害怕的事情并没有那么可怕。给自己一些勇气，一步一步向前走。";
  } else {
    insights.analysis = `亲爱的，你内心深处对${context}的期待，体现为正位的《${card9.name}》。这是你真正渴望的，也是驱动你前进的内在动力。这份希望是美好的，它让你保持热情和动力。同时，过度的期待有时也会成为压力，让你患得患失。`;
    
    insights.gentle = "保持这份希望，但也请给自己一些弹性的空间。最美好的结果，往往不是我们刻意追求来的，而是在我们全力以赴、享受过程时，自然而然到来的。相信自己，也相信生活的安排。";
  }
  
  return insights;
}

/**
 * 分析最终预测（位置10）
 */
function analyzeFinalOutcome(card10, topic) {
  const insights = {
    title: "🏆 最终预测",
    outcome: card10.name,
    isReversed: card10.position === 'reversed' || card10.reversed === true,
    prediction: "",
    advice: "",
    gentle: ""
  };
  
  if (insights.isReversed) {
    insights.prediction = "结果尚不明朗";
    insights.advice = "需反求诸己";
    insights.analysis = `亲爱的，最终的归宿（位置10）显示为逆位的《${card10.name}》。这意味着结果目前还不够清晰，或是可能不如预期。逆位的终局牌提醒你：外部的结果，往往是内在状态的反映。现在最重要的，不是焦急地等待结果，而是回过头来审视自己——你的心态、你的行动、你的选择，是否真的与你的目标一致？`;
    
    insights.gentle = "请记住，逆位并不等于失败。它只是在提醒你，还有一些内在的功课需要完成。当你调整好自己，结果自然会向更好的方向转变。给自己一些时间和空间，温柔地对待这个过程。生命的智慧，往往藏在这些看似不完美的时刻里。";
  } else {
    insights.prediction = "结果已初露端倪";
    insights.advice = "保持当前节奏";
    insights.analysis = `亲爱的，最终的归宿（位置10）显示为正位的《${card10.name}》。这是一个积极的信号，说明事情正在朝着你期待的方向发展。虽然过程中可能有挑战和阻碍，但最终的结果是值得期待的。现在最重要的，是保持当前的节奏，继续你正在做的事情。`;
    
    insights.gentle = "请相信自己的努力不会白费。每一步看似微小的前进，都在为最终的结果铺路。保持耐心，保持信心，继续前行。美好的结果，正在不远的将来等着你。";
  }
  
  return insights;
}

// ==================== 主引擎 ====================

/**
 * 生成凯尔特十字完整报告
 */
function generateCelticCrossReading(cards, topic = 'general', options = {}) {
  // 验证卡牌数量
  if (cards.length !== 10) {
    throw new Error('凯尔特十字牌阵需要10张牌');
  }
  
  // 分析逆位比例（用于整体能量判断）
  const reversedAnalysis = analyzeReversedRatio(cards);
  
  // 按顺序进行各项分析
  const coreConflict = analyzeCoreConflict(cards[0], cards[1], topic);
  const psychological = analyzePsychologicalRoot(cards[2], cards[4], cards[6], topic);
  const environment = analyzeEnvironmentalImpact(cards[7], cards[9], topic);
  const timeline = analyzeTimeline(cards[3], cards[5]);
  const hopesAndFears = analyzeHopesAndFears(cards[8], topic);
  const finalOutcome = analyzeFinalOutcome(cards[9], topic);
  
  // 组装完整报告
  return {
    spreadType: "celtic_cross",
    title: "🏆 凯尔特十字 · 全维度深度解读",
    timestamp: new Date().toISOString(),
    topic,
    
    // 整体能量快照
    energySnapshot: {
      reversedCount: reversedAnalysis.reversedCount,
      totalCount: reversedAnalysis.totalCount,
      energyStatus: reversedAnalysis.energyStatus,
      severity: reversedAnalysis.severity
    },
    
    // 卡牌位置信息
    cardPositions: cards.map((card, index) => ({
      position: index + 1,
      name: CELTIC_POSITIONS[index + 1].name,
      emoji: CELTIC_POSITIONS[index + 1].emoji,
      card: card.name,
      isReversed: card.position === 'reversed' || card.reversed === true
    })),
    
    // 核心分析（按要求的顺序）
    analysis: {
      coreConflict,      // 1. 核心矛盾
      psychological,     // 2. 心理根源
      environment,       // 3. 外部环境
      finalOutcome       // 4. 最终预测
    },
    
    // 补充分析
    supplementary: {
      timeline,          // 时间演变
      hopesAndFears     // 希望与恐惧
    },
    
    // 元数据
    metadata: {
      totalCards: cards.length,
      majorArcanaCount: cards.filter(c => c.arcana === 'major').length,
      minorArcanaCount: cards.filter(c => c.arcana === 'minor').length,
      reversedCount: reversedAnalysis.reversedCount
    }
  };
}

/**
 * 格式化为文本报告
 */
function formatCelticCrossReport(reading) {
  let report = '';
  
  report += `═══════════════════════════════════\n`;
  report += `${reading.title}\n`;
  report += `═══════════════════════════════════\n\n`;
  
  // 能量快照
  report += `✨ **整体能量快照**\n`;
  report += `${reading.energySnapshot.energyStatus}\n`;
  report += `逆位牌数：${reading.energySnapshot.reversedCount}/${reading.energySnapshot.totalCount}\n\n`;
  report += `───────────────────────────────────\n\n`;
  
  // 卡牌布局
  report += `🎴 **牌阵布局**\n\n`;
  reading.cardPositions.forEach(pos => {
    const reversedMark = pos.isReversed ? '（逆位）' : '';
    report += `${pos.emoji} 位置${pos.position} - ${pos.name}：${pos.card}${reversedMark}\n`;
  });
  report += `\n───────────────────────────────────\n\n`;
  
  // 核心分析（按要求顺序）
  const { coreConflict, psychological, environment, finalOutcome } = reading.analysis;
  
  // 1. 核心矛盾
  report += `## ${coreConflict.title}\n\n`;
  report += `${coreConflict.analysis}\n\n`;
  report += `💝 ${coreConflict.gentle}\n\n`;
  report += `───────────────────────────────────\n\n`;
  
  // 2. 心理根源
  report += `## ${psychological.title}\n\n`;
  report += `${psychological.analysis}\n\n`;
  report += `💝 ${psychological.gentle}\n\n`;
  report += `───────────────────────────────────\n\n`;
  
  // 3. 外部环境
  report += `## ${environment.title}\n\n`;
  report += `${environment.analysis}\n\n`;
  report += `💝 ${environment.gentle}\n\n`;
  report += `───────────────────────────────────\n\n`;
  
  // 4. 最终预测
  report += `## ${finalOutcome.title}\n\n`;
  report += `${finalOutcome.analysis}\n\n`;
  report += `💝 ${finalOutcome.gentle}\n\n`;
  report += `───────────────────────────────────\n\n`;
  
  // 补充分析
  report += `## 📊 补充分析\n\n`;
  
  // 时间演变
  const { timeline, hopesAndFears } = reading.supplementary;
  report += `### ${timeline.title}\n\n`;
  report += `${timeline.analysis}\n\n`;
  
  // 希望与恐惧
  report += `### ${hopesAndFears.title}\n\n`;
  report += `${hopesAndFears.analysis}\n\n`;
  report += `💝 ${hopesAndFears.gentle}\n\n`;
  
  report += `═══════════════════════════════════\n`;
  report += `✨ 愿塔罗的智慧，温柔地指引你前行 ✨\n`;
  report += `═══════════════════════════════════\n`;
  
  return report;
}

// ==================== 导出 ====================

module.exports = {
  CELTIC_POSITIONS,
  generateCelticCrossReading,
  formatCelticCrossReport,
  analyzeCoreConflict,
  analyzePsychologicalRoot,
  analyzeEnvironmentalImpact,
  analyzeTimeline,
  analyzeHopesAndFears,
  analyzeFinalOutcome
};

// ===== 使用示例 =====
/*
const { generateCelticCrossReading, formatCelticCrossReport } = require('./tarot-celtic-cross-engine');

// 准备10张牌（从数据库获取）
const cards = [
  card1, card2, card3, card4, card5,
  card6, card7, card8, card9, card10
];

// 生成解读
const reading = generateCelticCrossReading(cards, 'love');

// 输出JSON（前端使用）
console.log(JSON.stringify(reading, null, 2));

// 输出文本（打印/分享）
console.log(formatCelticCrossReport(reading));
*/
