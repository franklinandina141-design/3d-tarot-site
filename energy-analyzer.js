// 🌟 塔罗能量分析引擎
// 在生成解析前调用，将结果作为全域背景融入牌意解释

/**
 * 分析3张牌的元素能量分布和冲突点
 * @param {Array} cards - 包含3张牌的数组 [past, now, future]
 * @returns {Object} 能量分析结果
 */
function analyzeTarotEnergy(cards) {
  if (!cards || cards.length !== 3) {
    return { coreIssue: '', energyPattern: '', recommendations: '' };
  }

  // 1. 统计元素占比
  const elements = { fire: 0, water: 0, air: 0, earth: 0, major: 0 };
  const positions = { past: null, now: null, future: null };
  
  cards.forEach((card, index) => {
    const cardId = card.card_id || card.id || '';
    const position = ['past', 'now', 'future'][index];
    
    // 判断元素类型
    if (cardId.startsWith('wa')) {
      elements.fire++;
      positions[position] = 'fire';
    } else if (cardId.startsWith('cu')) {
      elements.water++;
      positions[position] = 'water';
    } else if (cardId.startsWith('sw')) {
      elements.air++;
      positions[position] = 'air';
    } else if (cardId.startsWith('pe')) {
      elements.earth++;
      positions[position] = 'earth';
    } else if (cardId.startsWith('ar')) {
      elements.major++;
      positions[position] = 'major';
    }
  });

  // 2. 判断能量冲突和模式
  let coreIssue = '';
  let energyPattern = '';
  let recommendations = '';
  let energyDiagnosis = '';

  // 2.1 全是大阿卡纳（重大人生课题）
  if (elements.major === 3) {
    coreIssue = '你正处于**人生重大转折期**。这不是小事，是灵魂层面的深度转化。';
    energyPattern = '三张大阿卡纳意味着：你现在面对的不是技术性问题（缺方法、缺资源），而是**存在性问题**（我是谁、我要什么、我该如何）。';
    recommendations = '不要急着找"解决方案"。这个阶段需要的是深度自我对话——问自己真正在怕什么、真正想要什么。';
    energyDiagnosis = 'existential_crisis'; // 存在性危机
  }
  
  // 2.2 火多土少（有想法没执行力）
  else if (elements.fire >= 2 && elements.earth === 0) {
    coreIssue = '当前的核心问题在于：**你的热情过载，但缺乏实际落地的抓手**。你像是在空转的引擎。';
    energyPattern = '火元素（权杖）代表你有很多想法、计划、热情，但缺乏土元素（星币）的务实执行和资源整合。你在"想"的层面很丰富，但"做"的层面很贫瘠。';
    recommendations = '今天就选**一个**最小可执行的行动，不要贪多。把一个想法变成一个具体结果，哪怕很小。';
    energyDiagnosis = 'fire_excess'; // 火过量
  }
  
  // 2.3 水多风少（感性淹没理性）
  else if (elements.water >= 2 && elements.air === 0) {
    coreIssue = '你现在被**情绪淹没了**。感受太强烈，思维混乱，分不清什么是真实的问题、什么是情绪的投射。';
    energyPattern = '水元素（圣杯）过多意味着你的情感在主导一切——每个决定都受情绪影响，每个判断都带着感受的滤镜。但缺乏风元素（宝剑）的清晰切割和客观分析。';
    recommendations = '写下"事实"和"感受"两栏。左边只写客观发生的事，右边写你的情绪反应。这样可以看清：哪些是真实问题，哪些是情绪放大。';
    energyDiagnosis = 'water_overflow'; // 水溢出
  }
  
  // 2.4 风多水少（过度理性，切断感受）
  else if (elements.air >= 2 && elements.water === 0) {
    coreIssue = '你在用**过度思考来逃避感受**。表面上很理性、很分析，但实际上是不敢面对真实的情感需求。';
    energyPattern = '风元素（宝剑）过多 + 水元素缺失 = 你把自己活成了"决策机器"，每件事都要分析、权衡、计算，但忘记了问自己：**我真正感觉如何？我的心要什么？**';
    recommendations = '今天找个安静的地方，闭上眼睛问自己："抛开所有分析，我此刻真正的感受是什么？" 不要评判，只是感受。';
    energyDiagnosis = 'air_excess'; // 风过量
  }
  
  // 2.5 土多火少（务实到失去激情）
  else if (elements.earth >= 2 && elements.fire === 0) {
    coreIssue = '你太**务实、太谨慎、太"现实主义"**了，以至于失去了内在的热情和渴望。你在"活着"，但不在"燃烧"。';
    energyPattern = '土元素（星币）过多意味着你太关注"可行性"、"安全性"、"实际性"，但忘记了问自己：**我真正渴望什么？什么能让我的眼睛发光？**';
    recommendations = '写下"如果完全不考虑现实限制，我最想做什么？"——不是要你真的去做，而是重新连接你的渴望。然后问：有没有10%的可能性？';
    energyDiagnosis = 'earth_excess'; // 土过量
  }
  
  // 2.6 能量流动冲突（过去→现在→未来的元素剧烈变化）
  else if (positions.past && positions.now && positions.future) {
    const transition1 = `${positions.past}→${positions.now}`;
    const transition2 = `${positions.now}→${positions.future}`;
    
    // 检测剧烈转换
    if ((positions.past === 'fire' && positions.now === 'water') ||
        (positions.past === 'water' && positions.now === 'fire')) {
      coreIssue = '你的能量在**剧烈摇摆**——从一个极端（热情/冲动）跳到另一个极端（情绪/退缩）。这种摇摆本身就是问题的核心。';
      energyPattern = `从${positions.past}能量切换到${positions.now}能量，意味着你在用"反向补偿"来应对失衡——过度行动后崩溃成过度情绪化，或者情绪化后强迫自己理性。但这不是平衡，是钟摆。`;
      recommendations = '停止钟摆式的极端切换。找到中间地带：既不是疯狂行动，也不是完全瘫痪。允许自己"温和地前进"。';
      energyDiagnosis = 'pendulum_swing'; // 钟摆摇摆
    } else if (positions.past === positions.now && positions.now === positions.future) {
      coreIssue = '你的能量**完全停滞**——过去、现在、未来都是同一种模式。这不是稳定，是卡死。';
      energyPattern = `三张牌都是${positions.past}能量，意味着你在用同一种策略应对不同的阶段，但这个策略已经失效了。就像一直用同一把钥匙开不同的锁。`;
      recommendations = '有意识地引入"对立元素"——如果你一直在思考，今天就去行动；如果一直在行动，今天就去感受。打破单一模式。';
      energyDiagnosis = 'stagnation'; // 停滞
    }
  }
  
  // 2.7 平衡状态（各元素分布均匀）
  else if (Math.max(...Object.values(elements)) <= 1) {
    coreIssue = '你的能量处于**相对平衡**的状态——没有明显的过载或缺失。';
    energyPattern = '这是好事，也是需要警惕的事。好的方面是你没有极端失衡；警惕的方面是，有时候"平衡"也可能是"平庸"——什么都有一点，但什么都不够强。';
    recommendations = '问自己：我现在需要的是"维持平衡"，还是"有意识地倾斜某个方向"？有时候突破需要打破平衡。';
    energyDiagnosis = 'balanced'; // 平衡
  }
  
  // 默认兜底
  if (!coreIssue) {
    coreIssue = '你的能量分布显示出一种**过渡状态**——旧模式正在瓦解，新模式还没成型。';
    energyPattern = '这是转化期特有的混沌感。不要急着找答案，允许这个"不确定"存在一阵子。';
    recommendations = '给自己3-7天的观察期，不做重大决定，只是看看能量会自然流向哪里。';
    energyDiagnosis = 'transitional'; // 过渡期
  }

  // 3. 返回完整分析
  return {
    coreIssue,           // 核心问题（一句话点破）
    energyPattern,       // 能量模式解释
    recommendations,     // 具体建议
    energyDiagnosis,     // 诊断标签（用于后续逻辑）
    elementDistribution: elements,  // 元素分布数据
    positionFlow: positions         // 位置能量流向
  };
}

// 导出到全局
window.analyzeTarotEnergy = analyzeTarotEnergy;

console.log('🌟 能量分析引擎已加载');
