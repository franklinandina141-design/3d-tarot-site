// 口语化解读函数 - 更像朋友聊天的风格

// 1. 整体氛围（灵魂气候）- 口语版
const generateSoulClimateConversational = (past, now, future) => {
  const cards = [past, now, future];
  const reversedCount = cards.filter(c => c.isReversed).length;
  const majorCount = cards.filter(c => (c.id || '').startsWith('ar')).length;
  
  let climate = '';
  
  if (reversedCount === 3) {
    climate = `好，先深呼吸一下——你抽到三张全逆位，这不是"倒霉"，反而是个信号：**现在不适合往外冲，该往内看看了**。\n\n`;
    climate += `想象一下蝴蝶在茧里的状态，看起来什么都没发生，但其实正在发生最重要的转变。你现在就是这样。可能觉得闷、觉得卡，但其实你的内在正在重新整理过去的经验，为下一步做准备。\n\n`;
    climate += `**说白了**：别急着证明自己、别急着出成果。现在是你跟自己好好相处的时候——听听内心真实的声音，修复那些一直没空处理的情绪，沉淀下来。这个阶段过了，你会发现自己不一样了。`;
  } else if (reversedCount === 2) {
    climate = `你的能量正在**调频中**——两张逆位意味着有些地方在踩刹车或转向。但这不是退步，更像是GPS重新规划路线。\n\n`;
    climate += `逆位牌最常见的意思是：**那些你一直压着的、逃避的、或者拼命表现的部分，现在浮上来了**。它在说："嘿，我需要被看见。"这是个机会，让你诚实面对自己——不是你"应该"的样子，而是你"真实"的样子。`;
  } else if (reversedCount === 1) {
    const reversedCard = cards.find(c => c.isReversed);
    const position = reversedCard === now ? '现在' : reversedCard === past ? '过去' : '未来';
    climate = `整体来说，能量还算流畅，但有一张逆位在${position}位——【${reversedCard.name}】。它像个温柔的提醒：**这个地方需要你慢下来，看仔细点。**\n\n`;
    climate += `逆位不是障碍，更像是一个"等等，这里有点不对劲"的信号。可能是需要重新思考、重新调整，或者只是提醒你别太用力了。`;
  } else {
    climate = `你现在处于**顺风期**——三张全正位，能量在往外流动。但是！顺不等于躺平，反而要抓紧机会主动出击。\n\n`;
    climate += `很多人在顺境里会放松警惕，觉得"反正都挺顺的"。但真正的智慧是：**在顺的时候保持清醒，每个选择都问问自己——这真的是我想要的吗？**`;
  }
  
  if (majorCount >= 2) {
    climate += `\n\n**重点提示**：你的牌阵里有${majorCount}张大阿卡纳（就是那些比较"重量级"的牌），意思是——**这不是小事，是人生课题级别的**。这段时间的经历会深刻影响你未来的走向，所以认真对待，但也别给自己太大压力。`;
  }
  
  return climate;
};

// 2. 现状深度解读 - 口语版
const generateCurrentDepthConversational = (card) => {
  const essence = getCardEssence(card);
  const stance = card.isReversed ? '逆位' : '正位';
  const energy = card.isReversed ? (card.reversed?.energy || '') : (card.upright?.energy || '');
  
  let depth = `**现在位：${card.name}（${stance}）**\n\n`;
  
  if (card.isReversed) {
    if (essence.isMajor && essence.reversalCore) {
      depth += `这张大阿卡纳逆位，说的是一场内在的转化——简单说就是从「${essence.reversalCore.from}」慢慢走向「${essence.reversalCore.to}」。\n\n`;
      depth += `**你现在可能在经历以下其中一种状态**：\n`;
      depth += `1. **能量往内收**：之前向外展现的东西，现在转为向内探索了\n`;
      depth += `2. **时机还没到**：事情在酝酿中，宇宙在说"再等等，再准备准备"\n`;
      depth += `3. **用力过猛**：太努力想做好这件事，反而失衡了\n\n`;
    } else {
      depth += `这张逆位牌像一面镜子，照出你内心某个真实的角落：\n\n`;
    }
    
    depth += `**你可能有的焦虑**：${energy || '这个领域让你觉得不太确定，有点失控感'}\n\n`;
    depth += `**心理防御雷达**：看看你是不是在用"忙得要死"、"追求完美"、"纯理性分析"这些方式，来避免真正去感受什么？\n\n`;
    depth += `**说出来会怎样**：逆位常常揭示你真正想要的，但还不敢承认的东西。问自己：**如果不怕别人怎么看、不怕失败，我会怎么做？**`;
    
  } else {
    depth += `这张正位牌显示，这个领域的能量在流动。但注意！**正位不等于完美**——它只是说能量在动，方向对不对还要看你怎么用。\n\n`;
    depth += `**当前的能量状态**：${energy}\n\n`;
    
    if (essence.isMajor) {
      depth += `这是张大阿卡纳，所以要问的不是"我做得对不对"，而是"**我真的在活出这个状态，还是只是表面上符合期待？**"\n\n`;
      depth += `**真正的邀请是**：别完美地"扮演"这张牌，而是真实地"成为"它。有点抽象，但你懂的。`;
    } else {
      depth += `这是张小阿卡纳，提醒你：**生活的智慧藏在细节里**。这个领域稍微调整一下，可能就会有意想不到的变化。`;
    }
  }
  
  return depth;
};

// 3. 故事线 - 口语版
const generateStoryArcConversational = (past, now, future) => {
  const pastEssence = getCardEssence(past);
  const nowEssence = getCardEssence(now);
  const futureEssence = getCardEssence(future);
  
  let story = '**你的能量是怎么流动的**\n\n';
  
  // 过去→现在
  story += `从【${past.name}】走到【${now.name}】，你经历了一场转变。\n\n`;
  
  if (past.isReversed && !now.isReversed) {
    story += `你正在从过去的"内缩状态"走向现在的"外放流动"。之前那个逆位的${past.name}代表的挣扎、卡顿或内在整理，现在在${now.name}里找到了出口。\n\n`;
    if (pastEssence.reversalCore) {
      story += `用书里的话说，你从「${pastEssence.reversalCore.from}」迈向了「${pastEssence.reversalCore.to}」。这是个关键转折点。`;
    }
  } else if (!past.isReversed && now.isReversed) {
    story += `你从过去相对顺畅的状态，进入了现在的"内省期"。**这不是退步**——${now.name}逆位是在要求你停下来，重新看看那些你以为已经处理好的事。\n\n`;
    if (nowEssence.reversalCore) {
      story += `现在的功课是从「${nowEssence.reversalCore.from}」蜕变成「${nowEssence.reversalCore.to}」。需要你诚实面对内在那些不太想看的部分。`;
    }
  } else {
    const pastEnergy = past.isReversed ? (past.reversed?.energy || '') : (past.upright?.energy || '');
    const nowEnergy = now.isReversed ? (now.reversed?.energy || '') : (now.upright?.energy || '');
    story += `你的能量从「${pastEnergy}」演变成了「${nowEnergy}」。这个转变解释了你现在的感受和挑战。`;
  }
  
  // 现在→未来
  story += `\n\n**从现在到未来的关键**\n\n`;
  story += `要从【${now.name}】走向【${future.name}】，核心不是"做更多"，而是"**调整节奏**"。\n\n`;
  
  if (now.isReversed && !future.isReversed) {
    story += `好消息：未来的${future.name}是正位，意思是——只要你愿意在现在这个阶段诚实面对内在功课，能量会自然流向顺畅的展开。\n\n`;
    story += `**转折点在哪**：从内在整理（逆位）到外在显化（正位）的桥梁，就是"自我诚实"。`;
  } else if (!now.isReversed && future.isReversed) {
    story += `未来的${future.name}逆位提醒你：就算现在感觉顺畅，未来还是需要你深化内在工作。这不是警告，是**预告**——更深的成长在等着你。`;
  } else {
    story += `延续当前的节奏，但要记住：**每个阶段都需要觉察和调整**。别僵化地重复，要灵活地回应变化。`;
  }
  
  return story;
};

// 4. 行动指引 - 口语版
const generateGuidanceConversational = (card, question) => {
  const essence = getCardEssence(card);
  
  let guidance = {
    mindShift: '',
    action: '',
    timing: ''
  };
  
  if (card.isReversed) {
    guidance.mindShift = `**换个角度想**：别把"逆位"当成"不好"。${card.name}逆位是在邀请你更诚实地面对自己。问问自己：**我在这件事上，真正怕的是什么？**`;
    
    guidance.action = `**具体可以做的**：每天花10分钟，写下关于「${question || '这件事'}」的真实感受——不是你"应该"有的感受，而是你"真正"感受到的。写完不评判，就是看见它。`;
    
    guidance.timing = `**时机提醒**：逆位常常意味着"现在不是往外冲的时候"。给自己3-7天的沉淀时间，先向内整合，别急着做决定。`;
    
  } else {
    guidance.mindShift = `**关键认知**：${card.name}正位不是让你"放心了"，而是说"**能量在流，但方向要自己把握**"。别让外在的顺利，掩盖了内心真正的声音。`;
    
    guidance.action = `**可以采取的行动**：选一个小的、具体的步骤，在接下来48小时内完成。不要大而空的计划，要能看得见结果的小行动。`;
    
    guidance.timing = `**时机建议**：能量在流动，但不等于要急。保持节奏，感受每一步，别因为"顺"就跑太快，失去了觉察。`;
  }
  
  // 根据牌的类型添加具体建议
  if (essence.isMajor) {
    guidance.soulHint = `**灵魂层面的提示**：这是张大阿卡纳，意味着这不是技术问题，是生命课题。问自己：**这件事教会我什么？我在成为什么样的人？**`;
  }
  
  return guidance;
};

// 5. 温柔结语 - 口语版
const generateGentleClosingConversational = (cards, question) => {
  let closing = '**最后，说几句真心话**\n\n';
  
  closing += `塔罗不是算命，它更像一面镜子——照出你内心已经知道、但可能还没意识到的东西。\n\n`;
  
  const hasReversed = cards.some(c => c.isReversed);
  if (hasReversed) {
    closing += `你的牌里有逆位，说明有些地方需要慢下来、往内看。别急，成长本来就不是匀速的。有时候看起来"卡住"，其实是在积累能量。\n\n`;
  }
  
  closing += `**记住这句话**：塔罗给的不是答案，是提醒。真正的决定权、行动权，始终在你手上。\n\n`;
  
  if (question && question.trim()) {
    closing += `关于「${question}」这个问题，卡牌给了你一些视角。但最终怎么走，还是要你自己决定。\n\n`;
  }
  
  closing += `**最重要的是**：别把牌义当成"宿命"，它只是现在这个时刻的能量快照。你的选择、你的行动，随时可以改变能量的流向。\n\n`;
  
  closing += `深呼吸，感受一下——你的直觉在说什么？那个才是真正的答案。`;
  
  return closing;
};

// 导出函数
export {
  generateSoulClimateConversational,
  generateCurrentDepthConversational,
  generateStoryArcConversational,
  generateGuidanceConversational,
  generateGentleClosingConversational
};
