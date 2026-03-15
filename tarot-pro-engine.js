/**
 * TarotProEngine - 专业级塔罗解读引擎
 * 
 * 功能特性：
 * 1. 分层展示：局势大观 → 领域洞察 → 牌意细解
 * 2. 视觉化能量条数据
 * 3. 自动金句生成系统
 * 4. 领域专项洞察（love/career/finance/general）
 */

// ==================== 金句库系统 ====================

/**
 * 塔罗师箴言 - 特殊组合触发金句
 */
const TAROT_MASTER_QUOTES = {
  // 转折与希望
  'tower-star': {
    quote: "不破不立，毁灭之后必有星光",
    insight: "当前正经历剧烈的崩塌与重建，但请相信，破碎是为了更完美的重组。星星的出现预示着废墟中将诞生新的希望。"
  },
  'death-sun': {
    quote: "凤凰涅槃，浴火重生",
    insight: "旧有的一切正在死去,但这并非终结。太阳的能量告诉你，经历彻底的转变后，生命将以更辉煌的姿态回归。"
  },
  'death-empress': {
    quote: "旧生命的结束，孕育新的可能",
    insight: "死神代表周期的完结，而皇后象征新生命的孕育。你正站在生命周期的转折点，准备迎接全新的开始。"
  },
  
  // 挑战与力量
  'devil-strength': {
    quote: "束缚之中见真我，唯有内力可破茧",
    insight: "恶魔的诱惑与限制正在考验你，但力量牌的出现表明，你内在的勇气和坚韧足以打破这些枷锁。真正的力量来自内心。"
  },
  'tower-strength': {
    quote: "风暴洗礼，方显真金",
    insight: "剧变虽然可怕，但你拥有足够的内在力量渡过难关。这场风暴是对你真实力量的考验，也是淬炼。"
  },
  
  // 平衡与选择  
  'lovers-justice': {
    quote: "感情与公正并行，抉择需遵从内心",
    insight: "恋人牌的选择与正义牌的公平在此交汇。无论情感如何牵绊，最终的决定都应建立在公正与真实的基础上。"
  },
  'justice-judgment': {
    quote: "因果必有报，审判终将至",
    insight: "你过去的所有选择和行为，正在这个时刻接受宇宙的评判。正义与审判的结合，强调了因果循环的必然性。"
  },
  
  // 智慧与指引
  'hermit-hierophant': {
    quote: "内外求道，终见真理",
    insight: "隐士的内在探索与教皇的外在指引形成完美互补。真正的智慧来自内心的觉悟与传统的启迪相结合。"
  },
  'high-priestess-magician': {
    quote: "直觉与行动合一，无所不能",
    insight: "女祭司的直觉洞察与魔术师的行动力量相遇，代表你既拥有深刻的内在智慧，也具备将其显化为现实的能力。"
  },
  
  // 繁荣与收获
  'empress-emperor': {
    quote: "阴阳和合，万物生长",
    insight: "皇后的滋养与皇帝的结构完美结合，创造出稳固而丰盛的格局。这是建立长久基业的绝佳时机。"
  },
  'world-sun': {
    quote: "圆满之上更添光辉",
    insight: "世界牌的圆满成就配合太阳的光明璀璨，这是最吉祥的组合。你正处于人生的高光时刻，尽情享受这份成功与喜悦。"
  },
  
  // 迷茫与突破
  'moon-star': {
    quote: "穿越幻境，星光引路",
    insight: "月亮的迷雾虽然让人困惑，但星星的指引始终在那里。保持信念，直觉会带你走出迷宫。"
  },
  'hanged-man-fool': {
    quote: "放下执着，方得自在",
    insight: "倒吊人教你放下，愚者教你轻装前行。这个组合提醒你，有时候停止挣扎、顺应天命，反而能找到新的道路。"
  }
};

/**
 * 检测特殊牌组合并生成金句
 */
function detectSpecialCombosAndQuotes(cards) {
  const combos = [];
  const cardNames = cards.map(c => c.name.toLowerCase());
  
  // 标准化牌名（去除括号和空格）
  const normalize = (name) => name
    .replace(/\s*\(.*?\)\s*/g, '') // 去除括号内容
    .replace(/\s+/g, '-')           // 空格转连字符
    .toLowerCase()
    .replace(/the-/g, '');          // 去除 the-
  
  const normalizedNames = cards.map(c => normalize(c.name));
  
  // 检查所有可能的组合
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const combo1 = `${normalizedNames[i]}-${normalizedNames[j]}`;
      const combo2 = `${normalizedNames[j]}-${normalizedNames[i]}`;
      
      if (TAROT_MASTER_QUOTES[combo1]) {
        combos.push({
          cards: [cards[i].name, cards[j].name],
          ...TAROT_MASTER_QUOTES[combo1]
        });
      } else if (TAROT_MASTER_QUOTES[combo2]) {
        combos.push({
          cards: [cards[j].name, cards[i].name],
          ...TAROT_MASTER_QUOTES[combo2]
        });
      }
    }
  }
  
  return combos;
}

// ==================== 能量条数据生成 ====================

/**
 * 生成四元素能量分布数据（用于前端可视化）
 */
function generateEnergyBarData(cards) {
  const elementMap = {
    'Wands': 'fire',
    'Cups': 'water',
    'Swords': 'air',
    'Pentacles': 'earth'
  };
  
  const elementNames = {
    'fire': { zh: '火', icon: '🔥', color: '#FF4444' },
    'water': { zh: '水', icon: '🌊', color: '#4444FF' },
    'air': { zh: '风', icon: '💨', color: '#AAAAAA' },
    'earth': { zh: '土', icon: '🌍', color: '#44AA44' }
  };
  
  const counts = { fire: 0, water: 0, air: 0, earth: 0 };
  let spiritCount = 0; // 大阿卡纳（灵性）
  
  cards.forEach(card => {
    if (card.suit && elementMap[card.suit]) {
      counts[elementMap[card.suit]]++;
    } else if (card.arcana === 'major') {
      spiritCount++;
    }
  });
  
  const total = cards.length;
  const energyBars = [];
  
  // 生成每个元素的能量条数据
  Object.keys(elementNames).forEach(element => {
    energyBars.push({
      element: element,
      name: elementNames[element].zh,
      icon: elementNames[element].icon,
      color: elementNames[element].color,
      count: counts[element],
      percentage: Math.round((counts[element] / total) * 100),
      level: counts[element] === 0 ? 'none' :
             counts[element] === 1 ? 'low' :
             counts[element] === 2 ? 'medium' : 'high'
    });
  });
  
  // 如果有大阿卡纳，添加灵性能量
  if (spiritCount > 0) {
    energyBars.push({
      element: 'spirit',
      name: '灵性',
      icon: '✨',
      color: '#9933FF',
      count: spiritCount,
      percentage: Math.round((spiritCount / total) * 100),
      level: spiritCount === 1 ? 'medium' :
             spiritCount === 2 ? 'high' : 'critical'
    });
  }
  
  return {
    bars: energyBars,
    dominant: energyBars.reduce((max, bar) => 
      bar.count > max.count ? bar : max, energyBars[0]
    ),
    balance: energyBars.filter(b => b.count > 0).length >= 3 ? 'balanced' : 'focused'
  };
}

// ==================== 领域专项洞察 ====================

/**
 * 根据占卜类型生成专项洞察
 */
function generateCategoryInsight(cards, topic, energyData) {
  const majorCount = cards.filter(c => c.arcana === 'major').length;
  const dominant = energyData.dominant;
  
  const insights = {
    love: {
      high_major: "这段感情牵动着你的灵魂层面，不是简单的喜欢，而是命定的相遇。",
      high_fire: "激情如火焰般炽烈，但也要小心灼伤。感情进展迅速，但需要理性把控节奏。",
      high_water: "情感深沉如海，你们之间的连接超越了表面。这是心灵层面的深度交流。",
      high_air: "理性与沟通是关键。这段关系需要思想的碰撞与诚实的对话，而非仅仅情感的依赖。",
      high_earth: "务实稳重，这段关系有扎实的现实基础。你们在考虑长远的承诺与共同的未来。",
      balanced: "感情能量多元而丰富，需要在激情、情感、理性与现实间找到平衡点。"
    },
    career: {
      high_major: "这不是普通的职业选择，而是关乎人生使命的重大转折。",
      high_fire: "行动力强劲，是快速推进项目和勇敢创新的时期。抓住机会，大胆前进。",
      high_water: "职场的情感因素和人际关系非常重要。你的直觉和共情能力是此刻的优势。",
      high_air: "策略思考和清晰沟通是成功关键。现在需要理性分析和智慧决策。",
      high_earth: "稳扎稳打，专注实际成果和长期建设。你的务实和勤奋会带来可靠的回报。",
      balanced: "职场能量复杂多面，需要灵活调配不同的工作方式和策略。"
    },
    finance: {
      high_major: "财运正经历重大转折，这可能改变你的财务格局和金钱观念。",
      high_fire: "投资运势活跃，有快速获利的机会，但也要警惕冲动和高风险。",
      high_water: "财运与情感和直觉相关。信任你的gut feeling，但也要做基本调研。",
      high_air: "理性分析和信息收集是财务成功的关键。避免情绪化的金钱决策。",
      high_earth: "稳健积累，长期投资。你的财富建立在务实的基础上，虽慢但稳。",
      balanced: "财务状况多元，需要在投资、储蓄、风险间找到智慧的平衡。"
    },
    general: {
      high_major: "你正处于人生的重要转折点，这个时期的经历将深刻影响你的生命轨迹。",
      high_fire: "生命力旺盛，充满动力和创造性。是采取行动、开创新局的绝佳时机。",
      high_water: "情感和直觉引领着你的生活。深入内心，倾听灵魂的声音。",
      high_air: "思维清晰，适合学习、沟通和理性规划。用智慧指引人生方向。",
      high_earth: "脚踏实地，专注于实际生活的建设。健康、工作、财务等物质层面需要关注。",
      balanced: "生活能量丰富多元，你在多个层面同时发展和成长。"
    }
  };
  
  const topicInsights = insights[topic] || insights.general;
  
  // 选择最匹配的洞察
  if (majorCount >= 2) return topicInsights.high_major;
  if (energyData.balance === 'balanced') return topicInsights.balanced;
  if (dominant.element === 'fire' && dominant.count >= 2) return topicInsights.high_fire;
  if (dominant.element === 'water' && dominant.count >= 2) return topicInsights.high_water;
  if (dominant.element === 'air' && dominant.count >= 2) return topicInsights.high_air;
  if (dominant.element === 'earth' && dominant.count >= 2) return topicInsights.high_earth;
  if (dominant.element === 'spirit') return topicInsights.high_major;
  
  return topicInsights.balanced;
}

// ==================== 分层报告生成系统 ====================

/**
 * 生成分层结构的专业解读报告
 * 
 * @param {Array} cards - 卡牌数组 [pastCard, presentCard, futureCard]
 * @param {String} topic - 占卜类型 (love/career/finance/general)
 * @param {Object} options - 选项
 * @returns {Object} 分层报告对象
 */
function generateLayeredReading(cards, topic = 'general', options = {}) {
  const [pastCard, presentCard, futureCard] = cards;
  
  // 设置正逆位
  const pastPosition = pastCard.position || 'upright';
  const presentPosition = presentCard.position || 'upright';
  const futurePosition = futureCard.position || 'upright';
  
  // 生成能量条数据
  const energyData = generateEnergyBarData(cards);
  
  // 检测特殊组合
  const specialCombos = detectSpecialCombosAndQuotes(cards);
  
  // 计算大阿卡纳权重
  const majorCards = cards.filter(c => c.arcana === 'major');
  const majorCount = majorCards.length;
  
  // 生成领域专项洞察
  const categoryInsight = generateCategoryInsight(cards, topic, energyData);
  
  // ===== 第一层：局势大观 =====
  const overview = {
    title: "【局势大观】",
    arcanaRatio: {
      major: majorCount,
      minor: 3 - majorCount,
      interpretation: majorCount === 3 ? "三张大阿卡纳！命运的重大转折" :
                      majorCount === 2 ? "两张大阿卡纳，宿命感强烈" :
                      majorCount === 1 ? "一张大阿卡纳作为核心主题" :
                      "全为小阿卡纳，日常生活层面"
    },
    elementDistribution: energyData,
    energyPattern: energyData.balance === 'balanced' ? 
      "能量分布平衡，多元发展" : 
      `${energyData.dominant.icon}${energyData.dominant.name}元素主导，能量聚焦`
  };
  
  // ===== 第二层：领域洞察 =====
  const insight = {
    title: "【领域洞察】",
    category: topic === 'love' ? '感情' :
              topic === 'career' ? '事业' :
              topic === 'finance' ? '财运' : '综合',
    coreInsight: categoryInsight,
    masterQuote: specialCombos.length > 0 ? specialCombos[0] : null
  };
  
  // ===== 第三层：牌意细解 =====
  const detailedReadings = {
    title: "【牌意细解】",
    past: {
      card: pastCard.name,
      position: pastPosition === 'reversed' ? '逆位' : '正位',
      reading: pastCard.interpretations[topic]?.[pastPosition] || 
               pastCard.interpretations.general?.[pastPosition]
    },
    present: {
      card: presentCard.name,
      position: presentPosition === 'reversed' ? '逆位' : '正位',
      reading: presentCard.interpretations[topic]?.[presentPosition] ||
               presentCard.interpretations.general?.[presentPosition]
    },
    future: {
      card: futureCard.name,
      position: futurePosition === 'reversed' ? '逆位' : '正位',
      reading: futureCard.interpretations[topic]?.[futurePosition] ||
               futureCard.interpretations.general?.[futurePosition]
    }
  };
  
  return {
    overview,
    insight,
    detailedReadings,
    visualData: {
      energyBars: energyData.bars,
      specialCombos: specialCombos
    },
    metadata: {
      topic,
      timestamp: new Date().toISOString(),
      cards: cards.map((c, i) => ({
        position: ['past', 'present', 'future'][i],
        name: c.name,
        reversed: [pastPosition, presentPosition, futurePosition][i] === 'reversed'
      }))
    }
  };
}

/**
 * 格式化为文本报告（可选）
 */
function formatLayeredReport(layeredData) {
  let report = '';
  
  report += `═══════════════════════════════════\n`;
  report += `🔮 塔罗专业解读\n`;
  report += `═══════════════════════════════════\n\n`;
  
  // 特殊金句（如果有）
  if (layeredData.insight.masterQuote) {
    const quote = layeredData.insight.masterQuote;
    report += `✨ **塔罗师箴言** ✨\n`;
    report += `\n"${quote.quote}"\n\n`;
    report += `${quote.insight}\n\n`;
    report += `───────────────────────────────────\n\n`;
  }
  
  // 第一层：局势大观
  report += `## ${layeredData.overview.title}\n\n`;
  report += `🎴 **牌阵构成**：${layeredData.overview.arcanaRatio.major}张大阿卡纳 + ${layeredData.overview.arcanaRatio.minor}张小阿卡纳\n`;
  report += `📊 **能量格局**：${layeredData.overview.energyPattern}\n\n`;
  
  // 能量分布
  report += `**四元素能量分布**：\n`;
  layeredData.visualData.energyBars.forEach(bar => {
    if (bar.count > 0) {
      const barVisual = '█'.repeat(bar.count) + '░'.repeat(3 - bar.count);
      report += `${bar.icon} ${bar.name}：${barVisual} ${bar.percentage}%\n`;
    }
  });
  report += `\n───────────────────────────────────\n\n`;
  
  // 第二层：领域洞察
  report += `## ${layeredData.insight.title}\n\n`;
  report += `💡 **${layeredData.insight.category}洞察**：\n`;
  report += `${layeredData.insight.coreInsight}\n\n`;
  report += `───────────────────────────────────\n\n`;
  
  // 第三层：牌意细解
  report += `## ${layeredData.detailedReadings.title}\n\n`;
  
  // 过去
  report += `### 📜 过去 - ${layeredData.detailedReadings.past.card} (${layeredData.detailedReadings.past.position})\n\n`;
  const pastReading = layeredData.detailedReadings.past.reading;
  report += `**情况**：${pastReading.situation}\n\n`;
  
  // 现在
  report += `### ⚡ 现在 - ${layeredData.detailedReadings.present.card} (${layeredData.detailedReadings.present.position})\n\n`;
  const presentReading = layeredData.detailedReadings.present.reading;
  report += `**能量**：${presentReading.energy}\n`;
  report += `**建议**：${presentReading.advice}\n`;
  report += `**警示**：${presentReading.warning}\n\n`;
  
  // 未来
  report += `### 🌟 未来 - ${layeredData.detailedReadings.future.card} (${layeredData.detailedReadings.future.position})\n\n`;
  const futureReading = layeredData.detailedReadings.future.reading;
  report += `**结果**：${futureReading.outcome}\n`;
  report += `**时机**：${futureReading.timing}\n\n`;
  
  report += `═══════════════════════════════════\n`;
  report += `✨ 愿塔罗的智慧为你指引方向 ✨\n`;
  report += `═══════════════════════════════════\n`;
  
  return report;
}

// ==================== 导出 ====================

module.exports = {
  generateLayeredReading,
  formatLayeredReport,
  generateEnergyBarData,
  detectSpecialCombosAndQuotes,
  generateCategoryInsight,
  TAROT_MASTER_QUOTES
};

// ===== 使用示例 =====
/*
const tarotDB = require('./complete-tarot-database.json').cards;

const testCards = [
  tarotDB.find(c => c.id === 'major_16'), // 塔
  tarotDB.find(c => c.id === 'major_17'), // 星星
  tarotDB.find(c => c.id === 'major_19')  // 太阳
];

const layeredReading = generateLayeredReading(testCards, 'love');
console.log(formatLayeredReport(layeredReading));

// 或直接使用JSON数据（用于前端可视化）
console.log(JSON.stringify(layeredReading, null, 2));
*/
