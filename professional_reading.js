// 专业塔罗咨询师解读系统
// 20年经验 + 心理学背景 + 故事化叙述

// 1. 整体氛围解读 - 讲故事模式
const generateSoulClimate = (past, now, future, question) => {
  const cards = [past, now, future];
  const reversedCount = cards.filter(c => c.isReversed).length;
  const majorCount = cards.filter(c => (c.id || '').startsWith('ar')).length;
  
  let climate = '';
  
  // 根据问题类型调整开场
  const questionType = detectQuestionType(question);
  
  if (reversedCount === 3) {
    climate = `我看到你的三张牌都是逆位——这通常意味着，你现在处在一个需要"向内看"的阶段。\n\n`;
    
    if (questionType === '事业' || questionType === '工作') {
      climate += `就像你在事业上遇到了一个转折点，表面看起来进展缓慢，但其实你的内心正在重新整理过去的经验、重新思考什么才是真正重要的。\n\n`;
    } else if (questionType === '感情' || questionType === '关系') {
      climate += `在感情中，你可能感觉关系进入了某种"静止期"——不是坏事，而是你们都在消化过去的互动模式，准备以更成熟的方式相处。\n\n`;
    } else {
      climate += `想象一个人在森林里迷路后，决定先停下来、找棵树坐下、整理思绪——你现在就是这样。看似什么都没发生，但其实正在发生最重要的转变。\n\n`;
    }
    
    climate += `我的建议是：接下来一到两周，不要急着向外证明什么。给自己一些独处的时间，写写日记，或者找一个你信任的人聊聊真实感受。这个"茧期"过了，你会发现自己看事情的角度完全不一样了。`;
    
  } else if (reversedCount === 2) {
    climate = `你的牌阵里有两张逆位——这提示我，你正在经历某种"能量调整"。\n\n`;
    
    if (questionType === '事业') {
      climate += `在工作上，可能有些事情进展不如预期。但我想告诉你的是：这不是你能力不够，而是你的内心在提醒你——"这个方向真的是我想要的吗？"\n\n`;
    } else if (questionType === '感情') {
      climate += `在感情里，你可能感觉到某种"不对劲"——不是对方变了，而是你开始意识到，有些你一直压抑的感受需要被正视了。\n\n`;
    } else {
      climate += `这两张逆位牌像两个温柔的路标，在告诉你："慢一点，这里需要你停下来看仔细。"\n\n`;
    }
    
    climate += `具体来说，你可以问问自己：我在这件事上，是为了迎合别人的期待，还是真心想要？找到答案后，调整方向就会变得容易很多。`;
    
  } else if (reversedCount === 1) {
    const reversedCard = cards.find(c => c.isReversed);
    const position = reversedCard === now ? '现在' : reversedCard === past ? '过去' : '未来';
    
    climate = `整体来说，能量流动还算顺畅，但${position}这个位置有一张逆位牌。\n\n`;
    
    if (position === '过去') {
      climate += `这说明，你之前经历的某些事情还没有完全消化。可能是一段关系、一个决定、或者一次挫折——它留下的情绪，还在影响你现在的状态。\n\n`;
      climate += `我的建议是：花点时间回顾一下那段经历，写下当时的感受。不是为了纠结，而是为了告诉自己："我已经走过来了。"`;
    } else if (position === '现在') {
      climate += `这提示我，你目前的状态需要"暂停键"。不是说事情做不成，而是需要调整节奏、重新对齐。\n\n`;
      climate += `具体行动：今天或明天，给自己留出一个小时的"空白时间"——不看手机、不安排任务，就是坐着、散步、或者发呆。让大脑休息一下，答案会自己浮现。`;
    } else {
      climate += `未来位置的逆位，是在提醒你：接下来的路，需要你更深入地面对内在功课。但别担心，这不是坏事——反而意味着你有机会成长得更扎实。\n\n`;
      climate += `现在开始，每周留出一小时给自己"反思时间"，会让未来的路走得更稳。`;
    }
    
  } else {
    climate = `你的三张牌都是正位，能量在向外流动——这是好事，说明现在是行动的时机。\n\n`;
    
    if (questionType === '事业') {
      climate += `在工作上，你可能感觉到某种"顺风"——机会来了，想法也比较清晰。但请记住：顺利不等于可以放松警惕。\n\n`;
      climate += `我建议你：在接下来的行动中，每做一个决定，都问问自己："这真的是我想要的，还是只是因为看起来不错？"保持这种觉察，你会走得更稳。`;
    } else if (questionType === '感情') {
      climate += `在感情里，双方的互动处于一个相对流畅的状态。但要注意的是：不要因为"顺"就理所当然。\n\n`;
      climate += `每周至少有一次深度对话，聊聊彼此真实的感受——不是抱怨，是分享。这会让关系更扎实。`;
    } else {
      climate += `能量流畅是好事，但也容易让人失去敏锐度。我的建议是：在行动的同时，保持"观察者"的视角——看看自己在做什么、为什么做、感觉如何。`;
    }
  }
  
  if (majorCount >= 2) {
    climate += `\n\n另外，你的牌阵里有${majorCount}张"人生课题级别"的牌。这意味着，你现在面对的不只是表面的问题，而是关于"我是谁""我想成为什么样的人"这类更深层的议题。这段时间的经历，会在未来很长时间里影响你。所以，请认真对待，但也不要给自己太大压力。`;
  }
  
  return climate;
};

// 2. 现状深度解读 - 场景化叙述
const generateCurrentDepth = (card, question) => {
  const essence = getCardEssence(card);
  const stance = card.isReversed ? '逆位' : '正位';
  const questionType = detectQuestionType(question);
  
  let depth = `**现在的状态：${card.name}（${stance}）**\n\n`;
  
  if (card.isReversed) {
    // 逆位 - 具体场景化
    if (essence.isMajor) {
      depth += `这张牌逆位，通常意味着${essence.reversalCore ? `从「${essence.reversalCore.from}」向「${essence.reversalCore.to}」转化的过程` : '内在能量的调整'}。\n\n`;
      
      // 根据问题类型给出具体场景
      if (questionType === '事业') {
        depth += `在工作中，你可能正经历这样的状态：\n`;
        depth += `- 明明很努力，但成果不如预期\n`;
        depth += `- 开始怀疑自己的选择，或者对工作失去热情\n`;
        depth += `- 感觉被困在某个位置上，想动却不知道往哪动\n\n`;
        depth += `但这不是失败，而是你的内心在说："等一等，我需要重新确认方向。"\n\n`;
        depth += `**具体行动**：这周找个下午，列出"我真正想要的工作是什么样的"——不是应该要，是真正想要。写下来后，对照现状，看看差距在哪。`;
      } else if (questionType === '感情') {
        depth += `在感情里，你可能感觉到：\n`;
        depth += `- 说不清的不对劲，但又说不出具体问题\n`;
        depth += `- 想亲近对方，又莫名想保持距离\n`;
        depth += `- 开始怀疑"我们真的适合吗"\n\n`;
        depth += `这些感觉，都是你内心的真实信号。它在提醒你：有些话需要说出来，有些感受需要被正视。\n\n`;
        depth += `**具体行动**：找个安静的时间（不是争吵后），跟对方说："我想聊聊我最近的感受。"然后诚实地说出你的困惑——不是指责，是表达。`;
      } else {
        depth += `现在的你，可能陷入一种"努力却看不到结果"的状态。这很让人沮丧，对吧？\n\n`;
        depth += `但我想告诉你：有时候看不到结果，是因为方向需要调整。不是你不够好，是路需要重新选。\n\n`;
        depth += `**具体行动**：今晚睡前，问自己一个问题："如果没有任何外在压力，我真正想做的是什么？"不要马上回答，让这个问题在你心里待几天。答案会慢慢清晰。`;
      }
    } else {
      // 小阿卡纳逆位 - 日常场景
      depth += `这是一个关于日常节奏的提醒。\n\n`;
      depth += `你可能发现最近：\n`;
      depth += `- 计划好的事情总是被打乱\n`;
      depth += `- 做事效率不如平时\n`;
      depth += `- 或者相反，忙得停不下来，但不知道在忙什么\n\n`;
      depth += `这是在提醒你：节奏需要调整了。\n\n`;
      depth += `**具体行动**：明天早上，只安排三件必须做的事。其他时间留白。看看这样会不会让你感觉好一点。`;
    }
    
  } else {
    // 正位 - 具体能量流动
    if (essence.isMajor) {
      depth += `这张牌正位，说明能量在流动——但关键不是"它好不好"，而是"我有没有真正活出这个状态"。\n\n`;
      
      if (questionType === '事业') {
        depth += `在工作上，你可能正经历：\n`;
        depth += `- 事情进展相对顺利，或者至少有明确方向\n`;
        depth += `- 开始看到努力的成果\n`;
        depth += `- 有机会展现自己的能力\n\n`;
        depth += `但我想提醒你的是：不要让"顺利"麻痹了你的觉察。问问自己：我是真心想做这件事，还是只是因为做得好就继续做？\n\n`;
        depth += `**具体行动**：每天工作结束时，写下一句话："今天最有成就感的事是什么？"坚持一周，你会看到自己真正在乎的是什么。`;
      } else if (questionType === '感情') {
        depth += `在感情里，能量在流动意味着：\n`;
        depth += `- 你们的互动比较自然\n`;
        depth += `- 有共同的节奏\n`;
        depth += `- 或者至少，问题比较清晰\n\n`;
        depth += `但要记住：顺畅不等于可以不努力。每周至少一次，问对方："最近有什么想跟我说的吗？"然后真正倾听。\n\n`;
        depth += `**具体行动**：这周找一个晚上，关掉手机，跟对方一起做顿饭（或者散步）。重点不是做什么，是专注地相处。`;
      } else {
        depth += `能量流动是好的，但要确保方向对。最简单的检验方式是：每做一件事，问自己："我做这个是开心的，还是只是在完成任务？"\n\n`;
        depth += `如果是前者，继续；如果是后者，停下来想想。\n\n`;
        depth += `**具体行动**：这周选一个下午，什么都不做——不是懒，是给自己"消化时间"。看看脑子里会冒出什么想法。`;
      }
    } else {
      // 小阿卡纳正位 - 细节建议
      depth += `这是一个关于日常节奏的提示：能量在动，方向也还可以，但细节很重要。\n\n`;
      depth += `我的建议是：专注在一两件最重要的事上，把它们做好。不要什么都想抓，最后什么都抓不住。\n\n`;
      depth += `**具体行动**：今天就选出"本周最重要的一件事"，优先保证它的质量。其他事情，能做就做，做不完也不要自责。`;
    }
  }
  
  return depth;
};

// 3. 故事线串联 - 讲故事模式
const generateStoryArc = (past, now, future, question) => {
  const questionType = detectQuestionType(question);
  
  let story = '**你的故事是这样走到这里的**\n\n';
  
  // 过去→现在：用"在此之前"、"但最近"构建故事
  story += `在此之前（${past.name}），`;
  
  if (past.isReversed) {
    story += `你经历了一段需要向内调整的时期。可能是感觉迷茫、卡住、或者不确定方向。\n\n`;
  } else {
    story += `能量相对流畅，你可能在某个方向上有所进展，或者至少心里比较踏实。\n\n`;
  }
  
  story += `但最近（${now.name}），`;
  
  if (!past.isReversed && now.isReversed) {
    story += `事情开始放缓了。不是说倒退，而是你的内心在说："等一等，我需要重新看看这件事。"\n\n`;
    story += `这可能让你感觉有点挫折，但其实这是一个很重要的信号——它在提醒你停下来、重新对齐。\n\n`;
    
    if (questionType === '事业') {
      story += `在工作上，你可能发现之前很顺的事情，现在遇到了阻力。或者，你开始怀疑"我真的想这样做下去吗"。这是好事，说明你在成长。`;
    } else if (questionType === '感情') {
      story += `在感情里，你可能感觉关系进入了某种"沉默期"。不是冷战，是你们都在消化过去的互动模式。给彼此一点空间，会更好。`;
    }
    
  } else if (past.isReversed && !now.isReversed) {
    story += `能量开始向外流动了。之前那些困扰你的事情，现在开始有了出口。你可能感觉"我终于知道该怎么做了"。\n\n`;
    story += `这是个好的转折点。但要记住：不要因为"终于顺了"就冲太快。保持节奏，一步一步来。`;
    
  } else {
    story += `能量延续了之前的状态。`;
    if (now.isReversed) {
      story += `你还在向内调整的阶段。这可能让你有点焦虑，但请相信：每一次停下来，都是在为下一步积蓄力量。`;
    } else {
      story += `事情还在正常进行。但要记住：顺利不等于可以不用心。每一步都要有觉察。`;
    }
  }
  
  // 现在→未来：用"接下来"、"这会导致"构建预测
  story += `\n\n**接下来（${future.name}）**，`;
  
  if (now.isReversed && !future.isReversed) {
    story += `好消息：能量会开始向外流动。只要你愿意在现在这个阶段诚实面对自己的感受，未来会自然打开。\n\n`;
    story += `关键在于：不要急。给自己一到两周的时间，让内在整合完成。然后，行动会变得很清晰。`;
  } else if (!now.isReversed && future.isReversed) {
    story += `能量会进入一个新的内省期。这不是倒退，而是在提醒你：接下来的成长，需要你更深入地面对内在功课。\n\n`;
    story += `我的建议是：从现在开始，每周留出固定的"反思时间"。这会让未来的路走得更稳。`;
  } else {
    story += `能量会延续当前的状态。`;
    if (future.isReversed) {
      story += `你还需要一段时间的内在整合。不要急着向外证明什么，先把自己理顺。`;
    } else {
      story += `事情会继续向前。但要记住：每个阶段都需要新的觉察。不要僵化地重复，要灵活地回应。`;
    }
  }
  
  return story;
};

// 4. 具体行动指引 - 可执行的小任务
const generateGuidance = (card, question) => {
  const questionType = detectQuestionType(question);
  
  let guidance = {
    mindShift: '',
    action: '',
    timing: ''
  };
  
  if (card.isReversed) {
    guidance.mindShift = `**心态调整**：逆位不是"坏事"，是"暂停键"。你的内心在提醒你：慢下来，重新看看。`;
    
    // 根据问题类型给出具体行动
    if (questionType === '事业') {
      guidance.action = `**今天就可以做的**：\n`;
      guidance.action += `1. 今晚花30分钟，写下"我理想中的工作是什么样的"（不要想可不可能，先写出来）\n`;
      guidance.action += `2. 明天找一个你信任的朋友或前辈，聊聊你的困惑（不是寻求答案，是说出来）\n`;
      guidance.action += `3. 这周末给自己一个下午的"空白时间"——不安排任何任务，就是休息`;
      
      guidance.timing = `**时间建议**：给自己1-2周的调整期。不要急着做决定，让答案自己浮现。`;
      
    } else if (questionType === '感情') {
      guidance.action = `**今天就可以做的**：\n`;
      guidance.action += `1. 今晚写一封"不寄出的信"给对方，说出所有你不敢说的话（写完不要发，只是让自己看见真实感受）\n`;
      guidance.action += `2. 这周找一个安静的时间，跟对方说："我想聊聊我们的关系。"然后诚实地说出你的感受\n`;
      guidance.action += `3. 每天留出15分钟独处时间，问自己："在这段关系里，我真正想要的是什么？"`;
      
      guidance.timing = `**时间建议**：不要急着"解决问题"。给彼此一周时间消化，再决定下一步。`;
      
    } else {
      guidance.action = `**今天就可以做的**：\n`;
      guidance.action += `1. 今晚睡前，写下三件"让我感觉卡住"的事\n`;
      guidance.action += `2. 明天选其中一件，问自己："如果我放下别人的期待，我会怎么做？"\n`;
      guidance.action += `3. 这周给自己安排一个"什么都不做的下午"——不看手机、不工作，就是放空`;
      
      guidance.timing = `**时间建议**：给自己3-7天的沉淀时间。答案会自己出现。`;
    }
    
  } else {
    guidance.mindShift = `**心态调整**：正位不是"可以放心了"，而是"能量在动，但方向要自己把握"。别让顺利掩盖了觉察。`;
    
    if (questionType === '事业') {
      guidance.action = `**今天就可以做的**：\n`;
      guidance.action += `1. 今天下班前，写下"今天最有成就感的事"（坚持一周，你会看到自己真正在乎什么）\n`;
      guidance.action += `2. 这周选一个项目，设定一个具体、可衡量的小目标（比如"本周完成XX部分"）\n`;
      guidance.action += `3. 每天工作时，问自己一次："我现在做的，是因为应该做，还是真心想做？"`;
      
      guidance.timing = `**时间建议**：能量在流动，但不要冲太快。每周留出半天时间反思、调整节奏。`;
      
    } else if (questionType === '感情') {
      guidance.action = `**今天就可以做的**：\n`;
      guidance.action += `1. 今晚跟对方说一句："最近有什么想跟我说的吗？"然后真正倾听\n`;
      guidance.action += `2. 这周找一个晚上，关掉手机，一起做顿饭（或散步）——重点是专注相处\n`;
      guidance.action += `3. 每周至少一次，表达欣赏："我很喜欢你XX的地方。"`;
      
      guidance.timing = `**时间建议**：关系顺畅时，更要保持用心。每周留出固定的"深度对话时间"。`;
      
    } else {
      guidance.action = `**今天就可以做的**：\n`;
      guidance.action += `1. 今天选出"本周最重要的一件事"，优先保证它的质量\n`;
      guidance.action += `2. 明天早上，只安排三件必须做的事，其他时间留白\n`;
      guidance.action += `3. 每天睡前，问自己："今天我做的事，哪些是真心想做的？"`;
      
      guidance.timing = `**时间建议**：保持节奏，但不要满负荷。每周留出一个下午的"消化时间"。`;
    }
  }
  
  return guidance;
};

// 5. 温柔结语 - 鼓励而非说教
const generateGentleClosing = (cards, question) => {
  const questionType = detectQuestionType(question);
  
  let closing = '**最后，我想对你说**\n\n';
  
  closing += `塔罗不是算命，它更像一面镜子——照出你内心已经知道、但可能还没意识到的东西。\n\n`;
  
  const reversedCount = cards.filter(c => c.isReversed).length;
  if (reversedCount >= 2) {
    closing += `你的牌里有逆位，说明现在是个需要"向内看"的阶段。这可能让你感觉有点沮丧，但请相信：每一次停下来，都是在为下一步积蓄力量。\n\n`;
  }
  
  if (questionType === '事业') {
    closing += `在工作这件事上，没有完美的答案。只有"此刻的你，想成为什么样的人"。跟随这个方向，即使走得慢一点，也会更踏实。\n\n`;
  } else if (questionType === '感情') {
    closing += `在感情里，最重要的不是"对方会不会改变"，而是"我能不能诚实地表达自己"。当你做到这一点，关系自然会找到它该有的样子。\n\n`;
  }
  
  closing += `**记住**：塔罗给的不是答案，是提醒。真正的决定权、行动权，始终在你手上。\n\n`;
  
  closing += `深呼吸，感受一下——你的直觉在说什么？相信它。你比你以为的更有智慧。`;
  
  return closing;
};

// 辅助函数：检测问题类型
const detectQuestionType = (question) => {
  if (!question) return '一般';
  const q = question.toLowerCase();
  if (q.includes('工作') || q.includes('事业') || q.includes('职') || q.includes('工作')) return '事业';
  if (q.includes('感情') || q.includes('爱') || q.includes('关系') || q.includes('伴侣') || q.includes('恋')) return '感情';
  return '一般';
};

// 导出
export {
  generateSoulClimate,
  generateCurrentDepth,
  generateStoryArc,
  generateGuidance,
  generateGentleClosing
};
