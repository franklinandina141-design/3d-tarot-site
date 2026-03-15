// 🔥 灵性教练模式 - 深度心理剖析引擎
// 规则：一针见血、禁止模棱两可、使用心理学术语、精确建议

/**
 * 核心规则（强制执行）
 * 1. 问题挂钩 - 每段必须回应问题关键词
 * 2. 禁止引用 - 不说"根据牌义"、"小阿卡纳"
 * 3. 对比分析 - 分析牌与牌的能量冲突
 * 4. 心理投射 - 使用心理学词汇
 * 5. 拒绝模糊 - 不说"可能"、"或许"
 */

// ==================== 1. 当下局势的真相 ====================
function generateBrutalTruth(past, now, future, question) {
  const questionKeywords = extractKeywords(question);
  const energyConflict = analyzeEnergyConflict([past, now, future]);
  
  let truth = `## 【当下局势的真相】\n\n`;
  
  // 直接点破核心困境
  if (energyConflict.type === 'stagnation') {
    truth += `关于「${questionKeywords.core || '这件事'}」，你现在卡在一个**认知失调**的死循环里：`;
    truth += `你的理性告诉你应该${energyConflict.rational}，但你的情感却在${energyConflict.emotional}。`;
    truth += `这种撕裂感会让你陷入「行动瘫痪」——既不敢前进，也不愿后退。\n\n`;
  } else if (energyConflict.type === 'rushing') {
    truth += `你在「${questionKeywords.core || '这个项目'}」上表现出典型的**冒名顶替综合症**：`;
    truth += `越是不确定自己的价值，越要用疯狂的行动来证明。但这种证明永远填不满内心的空洞。`;
    truth += `现在的问题不是做得不够，而是你不敢停下来面对那个声音——"我够好吗？"\n\n`;
  } else if (energyConflict.type === 'avoidance') {
    truth += `你在用「${questionKeywords.action || '忙碌'}」作为防御机制，逃避真正该面对的核心问题。`;
    truth += `这种**情感投射**让你把注意力放在次要矛盾上，而真正的伤口还在流血。`;
    truth += `你需要的不是更多建议，而是勇气去看那个你一直避开的真相。\n\n`;
  } else {
    truth += `在「${questionKeywords.core || '你关注的领域'}」，你正处于**过渡期的混沌状态**。`;
    truth += `旧的模式已经失效，新的还没成型。这不是你做错了什么，而是系统正在重启。\n\n`;
  }
  
  // 添加牌面具体证据
  truth += `**牌面证据**：\n`;
  truth += `- 过去的【${past.name}】显示你${analyzeCardAction(past, 'past')}\n`;
  truth += `- 现在的【${now.name}】暴露你${analyzeCardAction(now, 'present')}\n`;
  truth += `- 未来的【${future.name}】警告你${analyzeCardAction(future, 'future')}\n`;
  
  return truth;
}

// ==================== 2. 隐藏的阻碍与冲突 ====================
function generateHiddenObstacles(past, now, future) {
  let obstacles = `## 【隐藏的阻碍与冲突】\n\n`;
  
  const energyGap = calculateEnergyGap(past, now, future);
  
  obstacles += `你没看见的是，你的能量在「${energyGap.blockPoint}」位置**急刹车**了。\n\n`;
  
  // 分析牌与牌之间的冲突
  if (energyGap.pastToNow === 'conflict') {
    obstacles += `**从过去到现在的能量断层**：\n`;
    obstacles += `你试图从【${past.name}】的${getEnergyType(past)}能量，切换到【${now.name}】的${getEnergyType(now)}状态。`;
    obstacles += `但这两种能量在本质上是**互斥的**——就像你一边踩油门一边踩刹车。\n\n`;
    obstacles += `**具体冲突**：${explainEnergyConflict(past, now)}\n\n`;
  }
  
  if (energyGap.nowToFuture === 'mismatch') {
    obstacles += `**从现在到未来的认知偏差**：\n`;
    obstacles += `你期待的未来【${future.name}】，与你现在【${now.name}】的行为模式是**不匹配的**。`;
    obstacles += `这就像你想去北京，但你的GPS定位在上海，而你却在往南开。\n\n`;
    obstacles += `**偏差根源**：${identifyMismatchRoot(now, future)}\n\n`;
  }
  
  // 点出核心心理盲点
  obstacles += `**你的心理盲点**：\n`;
  obstacles += identifyPsychologicalBlindSpot([past, now, future]);
  
  return obstacles;
}

// ==================== 3. 因果转化链 ====================
function generateCausalChain(past, now, future, question) {
  let chain = `## 【因果转化链】\n\n`;
  
  chain += `### 过去如何造就现在\n\n`;
  chain += `你在${past.name}阶段的核心行为模式是「${extractBehaviorPattern(past)}」。`;
  chain += `这种模式的本质是${analyzePatternEssence(past)}。\n\n`;
  chain += `**因果逻辑**：\n`;
  chain += `因为你${extractPastAction(past)}，所以现在你${extractPresentConsequence(now)}。`;
  chain += `这不是惩罚，而是能量守恒——你种下的种子正在开花，无论是好是坏。\n\n`;
  
  chain += `### 现在如何塑造未来\n\n`;
  chain += `如果你继续当前的模式【${now.name}】，未来的【${future.name}】会以${predictOutcome(now, future)}的方式显现。\n\n`;
  chain += `**关键选择点**：\n`;
  chain += `在接下来的${calculateCriticalWindow(now, future)}内，你需要做一个决定：\n`;
  chain += `- **选项A（惯性路径）**：继续当前模式 → ${predictInertiaOutcome(now, future)}\n`;
  chain += `- **选项B（转化路径）**：${suggestTransformAction(now, future)} → ${predictTransformOutcome(now, future)}\n\n`;
  
  chain += `你的选择不会改变牌面，但会改变你在这个能量场中的位置。`;
  
  return chain;
}

// ==================== 4. 精确到小时的建议 ====================
function generatePreciseAction(now, future, question) {
  const currentHour = new Date().getHours();
  const questionType = classifyQuestion(question);
  
  let action = `## 【精确行动指令】\n\n`;
  
  // 今日立即行动（3小时内）
  action += `### 今天${currentHour < 18 ? '下午' : '晚上'}（接下来3小时内）\n\n`;
  action += generateImmediateAction(now, questionType, currentHour);
  
  // 明日关键时段
  action += `\n### 明天的关键时段\n\n`;
  action += `**上午9-11点**：${generateMorningAction(now, future)}\n\n`;
  action += `**下午3-5点**：${generateAfternoonAction(now, future)}\n\n`;
  
  // 本周转化任务
  action += `### 本周转化任务（必须完成）\n\n`;
  action += generateWeeklyMission(now, future, question);
  
  // 禁止清单
  action += `\n### 禁止清单（本周内避免）\n\n`;
  action += generateForbiddenActions(now);
  
  return action;
}

// ==================== 辅助函数 ====================

function extractKeywords(question) {
  if (!question) return { core: '这件事', action: '行动', emotion: '感受' };
  
  const keywords = {
    core: question.match(/(工作|事业|感情|关系|项目|决定)/)?.[0] || '这件事',
    action: question.match(/(做|选择|决定|改变|离开|开始)/)?.[0] || '行动',
    emotion: question.match(/(焦虑|迷茫|纠结|害怕|困惑)/)?.[0] || '感受'
  };
  
  return keywords;
}

function analyzeEnergyConflict(cards) {
  const reversedCount = cards.filter(c => c.isReversed).length;
  const energyTypes = cards.map(c => getEnergyType(c));
  
  if (reversedCount >= 2) {
    return { type: 'stagnation', rational: '前进', emotional: '收缩' };
  } else if (energyTypes.includes('fire') && energyTypes.includes('water')) {
    return { type: 'rushing', rational: '控制', emotional: '失控' };
  } else {
    return { type: 'avoidance', rational: '面对', emotional: '逃避' };
  }
}

function analyzeCardAction(card, timeframe) {
  const actions = {
    past: {
      upright: `建立了某种行为模式，但这个模式现在已经不够用了`,
      reversed: `压抑了某个需求，现在这个压抑正在反噬`
    },
    present: {
      upright: `正在用旧方法处理新问题，效率越来越低`,
      reversed: `在用"等待"和"观望"来掩饰决策恐惧`
    },
    future: {
      upright: `如果继续当前路径，你会得到一个"还可以"但不够满足的结果`,
      reversed: `即将面临一次被迫的内省，越早主动越好`
    }
  };
  
  return actions[timeframe][card.isReversed ? 'reversed' : 'upright'];
}

function getEnergyType(card) {
  const id = card.card_id || card.id || '';
  if (id.startsWith('wa')) return 'fire';
  if (id.startsWith('cu')) return 'water';
  if (id.startsWith('sw')) return 'air';
  if (id.startsWith('pe')) return 'earth';
  return 'major';
}

function calculateEnergyGap(past, now, future) {
  return {
    blockPoint: '现在→未来',
    pastToNow: Math.random() > 0.5 ? 'conflict' : 'smooth',
    nowToFuture: Math.random() > 0.5 ? 'mismatch' : 'aligned'
  };
}

function explainEnergyConflict(card1, card2) {
  return `${card1.name}要求你${card1.isReversed ? '向内收缩' : '向外扩张'}，但${card2.name}需要你${card2.isReversed ? '深度整合' : '快速行动'}。这两个需求同时存在，导致你的能量分裂。`;
}

function identifyMismatchRoot(now, future) {
  return `你现在的行为模式（${now.name}）是基于恐惧的防御性反应，而你期待的未来（${future.name}）需要基于信任的主动性选择。两者的底层逻辑完全相反。`;
}

function identifyPsychologicalBlindSpot(cards) {
  return `你最大的盲点是**「选择性注意」**——你只看见支持你当前信念的证据，而忽略了那些挑战你假设的信号。这个盲点让你困在自证预言的循环里。`;
}

function generateImmediateAction(card, questionType, hour) {
  if (hour < 15) {
    return `整理出关于这件事的三个最核心问题，写在纸上。不要答案，只要问题。在下午3点前完成。`;
  } else if (hour < 18) {
    return `找一个安静的空间，用15分钟写下你对这件事最真实的感受（不是"应该"有的感受）。写完后撕掉或烧掉，重点是让它流出来。`;
  } else {
    return `今晚睡前，对着镜子说三遍："我允许这件事有它自己的节奏。" 说的时候观察你的身体反应——哪里紧张了？那就是你的阻抗点。`;
  }
}

function generateMorningAction(now, future) {
  return `在笔记本上写下一个你一直拖延的具体行动（必须是1小时内能完成的小事），然后在11点前完成它。这是打破惯性的练习。`;
}

function generateAfternoonAction(now, future) {
  return `设定30分钟的「决策窗口」，在这段时间内，为你纠结的事情做一个临时决定（可以是48小时有效期的决定）。重点不是决定本身，而是练习「下决定」这个动作。`;
}

function generateWeeklyMission(now, future, question) {
  return `**本周唯一任务**：识别并打破一个你在这件事上的自动化反应模式。\n\n` +
         `具体来说：每次你想要${extractHabitPattern(now)}的时候，强迫自己暂停5秒，然后做完全相反的事。\n\n` +
         `比如：习惯性地想查看进度？强迫自己24小时不看。习惯性地想解释？强迫自己保持沉默。\n\n` +
         `这个练习会很不舒服，但这种不舒服本身就是转化的信号。`;
}

function generateForbiddenActions(card) {
  return `- ❌ 向任何人寻求「你觉得我应该怎么办？」这种问题（你需要的是自己的答案）\n` +
         `- ❌ 查看任何形式的占卜、星座、运势（一周内只相信这一次解读）\n` +
         `- ❌ 做任何"证明自己"的事（越证明越空虚）\n` +
         `- ❌ 强迫自己"想清楚"（有些事是做出来的，不是想出来的）`;
}

function extractHabitPattern(card) {
  return card.isReversed ? '逃避或拖延' : '过度控制或强迫';
}

// 导出主函数
window.CoachMode = {
  generateBrutalTruth,
  generateHiddenObstacles,
  generateCausalChain,
  generatePreciseAction
};

// ==================== 补充辅助函数 ====================

function extractBehaviorPattern(card) {
  if (card.isReversed) {
    return '回避型依恋模式';
  } else {
    return '过度补偿行为';
  }
}

function analyzePatternEssence(card) {
  return card.isReversed 
    ? '用内缩来保护自己，但代价是失去连接'
    : '用外放来证明价值，但代价是失去真实';
}

function extractPastAction(card) {
  return card.isReversed
    ? '一直在等待"完美时机"'
    : '一直在用行动填补空虚感';
}

function extractPresentConsequence(card) {
  return card.isReversed
    ? '发现自己困在原地，既焦虑又动弹不得'
    : '感觉筋疲力尽，但不敢停下来';
}

function predictOutcome(now, future) {
  if (now.isReversed && future.isReversed) {
    return '**持续内耗和停滞**';
  } else if (!now.isReversed && !future.isReversed) {
    return '**表面成功但内在空虚**';
  } else {
    return '**阶段性转折**';
  }
}

function calculateCriticalWindow(now, future) {
  return '72小时';
}

function predictInertiaOutcome(now, future) {
  return '3个月后你会发现自己还在同一个地方打转，只是借口换了个说法';
}

function suggestTransformAction(now, future) {
  return now.isReversed
    ? '停止"准备"，开始一个不完美的行动'
    : '停止"证明"，开始诚实地休息';
}

function predictTransformOutcome(now, future) {
  return '未必是你想象的完美结果，但一定是更真实的状态';
}

function classifyQuestion(question) {
  if (!question) return 'general';
  if (/(工作|事业|项目)/.test(question)) return 'career';
  if (/(感情|关系|爱情)/.test(question)) return 'relationship';
  if (/(决定|选择|离开)/.test(question)) return 'decision';
  return 'general';
}

// 重新导出
window.CoachMode = {
  generateBrutalTruth,
  generateHiddenObstacles,
  generateCausalChain,
  generatePreciseAction
};

console.log('🔥 灵性教练模式已加载');

// ==================== 整合能量分析 ====================

// 重写主函数，接收能量分析结果
const originalGenerateBrutalTruth = generateBrutalTruth;
const originalGenerateHiddenObstacles = generateHiddenObstacles;
const originalGenerateCausalChain = generateCausalChain;
const originalGeneratePreciseAction = generatePreciseAction;

// 新版本：融入能量背景
window.CoachMode = {
  generateBrutalTruth: function(past, now, future, question) {
    const energyAnalysis = window.analyzeTarotEnergy ? 
      window.analyzeTarotEnergy([past, now, future]) : null;
    
    let truth = originalGenerateBrutalTruth(past, now, future, question);
    
    // 在开头插入能量诊断
    if (energyAnalysis && energyAnalysis.coreIssue) {
      truth = truth.replace(
        '## 【当下局势的真相】\n\n',
        `## 【当下局势的真相】\n\n**能量诊断**: ${energyAnalysis.coreIssue}\n\n`
      );
    }
    
    return truth;
  },
  
  generateHiddenObstacles: function(past, now, future) {
    const energyAnalysis = window.analyzeTarotEnergy ? 
      window.analyzeTarotEnergy([past, now, future]) : null;
    
    let obstacles = originalGenerateHiddenObstacles(past, now, future);
    
    // 在阻碍分析中加入能量模式
    if (energyAnalysis && energyAnalysis.energyPattern) {
      obstacles = obstacles.replace(
        '## 【隐藏的阻碍与冲突】\n\n',
        `## 【隐藏的阻碍与冲突】\n\n**能量模式**: ${energyAnalysis.energyPattern}\n\n`
      );
    }
    
    return obstacles;
  },
  
  generateCausalChain: function(past, now, future, question) {
    return originalGenerateCausalChain(past, now, future, question);
  },
  
  generatePreciseAction: function(now, future, question) {
    const energyAnalysis = window.analyzeTarotEnergy ? 
      window.analyzeTarotEnergy([{}, now, future]) : null;
    
    let action = originalGeneratePreciseAction(now, future, question);
    
    // 在行动指令前加入能量建议
    if (energyAnalysis && energyAnalysis.recommendations) {
      action = action.replace(
        '## 【精确行动指令】\n\n',
        `## 【精确行动指令】\n\n**基于能量分析的核心建议**: ${energyAnalysis.recommendations}\n\n`
      );
    }
    
    return action;
  }
};

console.log('🔥 教练模式已整合能量分析');
