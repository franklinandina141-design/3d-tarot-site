/**
 * Direct Reading Generator V2 - 专业塔罗师风格
 * 
 * 核心原则（塔罗师准则）：
 * 1. 禁用心理学术语（心理盲点、防禦機制、迴避型依戀、冒名頂替綜合症等）
 * 2. 第一段直接回答问题核心（Answer First）
 * 3. 三张牌编织成连贯叙事，不罗列"牌面证据"
 * 4. 牌意与金钱动态挂钩（现金流、收割、投入、预算）
 */

window.DirectReadingGenerator = {
  
  /**
   * 生成简洁有力的标题（从A到B）
   */
  generateReadingTitle: function(cards, topic) {
    const [past, present, future] = cards;
    
    let fromState = '';
    let toState = '';
    
    // 过去的状态
    if (past.name.includes('權杖10')) {
      fromState = '負重前行';
    } else if (past.name.includes('星幣5') || past.name.includes('錢幣五')) {
      fromState = '財務匱乏';
    } else if (past.name.includes('太陽') && !past.isReversed) {
      fromState = '過度樂觀';
    } else if (past.name.includes('塔')) {
      fromState = '結構崩塌';
    } else if (past.name.includes('惡魔')) {
      fromState = '慾望綑綁';
    } else if (past.name.includes('寶劍三')) {
      fromState = '心碎痛苦';
    } else {
      fromState = '舊有模式';
    }
    
    // 未来的状态
    if (future.name.includes('皇后')) {
      toState = '自然豐盛';
    } else if (future.name.includes('權杖騎士')) {
      toState = '快速增長';
    } else if (future.name.includes('太陽') && !future.isReversed) {
      toState = '財務清明';
    } else if (future.name.includes('世界')) {
      toState = '完整閉環';
    } else if (future.name.includes('星星')) {
      toState = '希望重現';
    } else if (future.name.includes('寶劍王牌')) {
      toState = '清晰決斷';
    } else if (future.name.includes('魔術師')) {
      toState = '資源掌控';
    } else if (future.name.includes('戀人')) {
      toState = '承諾升級';
    } else if (future.name.includes('惡魔')) {
      toState = '自由陷阱';
    } else if (future.name.includes('塔')) {
      toState = '強制重建';
    } else {
      toState = '新的轉變';
    }
    
    return `從${fromState}到${toState}`;
  },
  /**
   * 🌟 场景化投影（Scenarios）
   * 生成2-3个具体的生活场景
   */
  generateScenarios: function(cards, topic) {
    const [past, present, future] = cards;
    const scenarios = [];
    
    // 根据牌组生成具体场景
    
    // 寶劍7 → 聖杯騎士：浪漫的博弈
    if (present.name.includes('寶劍7') && future.name.includes('聖杯騎士')) {
      scenarios.push('對方突然對你展現出前所未有的體貼，但只要你一提到某個特定的「過去話題」或「手機內容」，對方就會立刻用溫柔的話術轉移注意力。');
      scenarios.push('你感覺這段關係中有一種「不可說」的緊繃感，表面平靜，但你總覺得對方還有另一個你觸碰不到的世界。');
    }
    
    // 財務：權杖10 → 寶劍7
    else if (topic === 'finance' && past.name.includes('權杖10') && present.name.includes('寶劍7')) {
      scenarios.push('你開始對老闆或合作夥伴隱瞞某些財務細節——可能是虧損的真實數字、可能是拖欠的款項——因為你害怕一旦說出口，整個局面就會崩塌。');
      scenarios.push('你在家人面前維持「一切都好」的假象，但其實你已經在偷偷動用信用卡周轉、或者考慮借高利貸。');
    }
    
    // 財務：星幣5 → 星幣女王
    else if (topic === 'finance' && 
             (past.name.includes('星幣5') || past.name.includes('錢幣五')) &&
             (present.name.includes('星幣女王') || present.name.includes('錢幣女王'))) {
      scenarios.push('你開始對每一筆支出都錙銖必較，甚至因為5塊錢的價差而跑遍三家超市。你的朋友開始覺得你「變了」，但你自己覺得這是必要的生存策略。');
      scenarios.push('你拒絕了所有的聚會邀約，因為「要省錢」。但這種過度節儉已經開始影響你的社交關係和心理健康。');
    }
    
    // 感情：寶劍三 → 星幣四
    else if (topic === 'love' && 
             present.name.includes('寶劍三') && 
             (future.name.includes('星幣四') || future.name.includes('錢幣四'))) {
      scenarios.push('你開始審查新戀人的每一句話、每一個行為，甚至會偷看對方的手機。你把這種監控合理化為「保護自己」，但對方感受到的只有「你不信任我」。');
      scenarios.push('每當關係進入親密時刻，你的腦海裡就會閃過前任背叛你的畫面。你知道這不公平，但你無法控制。');
    }
    
    // 通用邏輯（如果沒有特殊組合）
    if (scenarios.length === 0) {
      // 根據話題生成通用場景
      if (topic === 'finance') {
        scenarios.push('你可能會發現自己在做財務決策時，總是被過去的失敗經驗所束縛，導致錯失當下的機會。');
      } else if (topic === 'love') {
        scenarios.push('你可能會發現自己在親密關係中，總是重複著過去的互動模式，即使知道這樣不對。');
      }
    }
    
    return scenarios;
  },
  
  /**
   * 🌟 阴影层面分析（Shadow Side）
   * 点出用户"最不想面对的那部分"
   */
  analyzeShadow: function(cards, topic) {
    const [past, present, future] = cards;
    let shadow = '';
    
    // 寶劍7：不只是逃避，是谎言
    if (cards.some(c => c.name.includes('寶劍7'))) {
      shadow = '最不想面對的真相是：這不只是「逃避」，而是你（或對方）主動選擇了謊言。因為害怕衝突、害怕失去、害怕面對自己的軟弱，所以選擇了欺騙——不管是對別人，還是對自己。';
    }
    
    // 星幣女王 in 感情：控制欲
    else if (topic === 'love' && cards.some(c => c.name.includes('星幣女王') || c.name.includes('錢幣女王'))) {
      shadow = '最不想面對的真相是：你在關係中的「謹慎」，本質上是一種控制欲。你想掌控對方的行為、掌控關係的節奏、掌控可能的風險。但這種掌控最終會讓對方窒息。';
    }
    
    // 聖杯騎士 after 寶劍7：补偿性的浪漫
    else if (cards.some(c => c.name.includes('寶劍7')) && cards.some(c => c.name.includes('聖杯騎士'))) {
      shadow = '最不想面對的真相是：這份突如其來的浪漫，可能只是一種補償——對方（或你自己）試圖用甜言蜜語來掩蓋過去的謊言，用情感攻勢來讓你停止追問。';
    }
    
    // 惡魔：自我奴役
    else if (cards.some(c => c.name.includes('惡魔'))) {
      shadow = '最不想面對的真相是：你並不是被外部力量所困，而是你自己選擇了這個牢籠。因為這個牢籠給了你安全感、給了你不用改變的理由。你害怕的不是失去自由，而是自由之後的責任。';
    }
    
    // 月亮：自我欺骗
    else if (cards.some(c => c.name.includes('月亮'))) {
      shadow = '最不想面對的真相是：你其實早就知道答案了，只是不願意承認。你用「還需要觀察」、「再等等看」來拖延，但這種拖延本身就是一種自我欺騙。';
    }
    
    // 塔：你早就知道会崩塌
    else if (cards.some(c => c.name.includes('塔'))) {
      shadow = '最不想面對的真相是：你其實早就知道這個結構搖搖欲墜了，只是你選擇視而不見。你用「還能撐」、「也許會好轉」來安慰自己，但內心深處，你早就知道崩塌是遲早的事。';
    }
    
    return shadow;
  },
  
  /**
   * 🌟 元素冲突分析（Element Clash）
   * 分析风水火土的化学反应
   */
  analyzeElementClash: function(cards) {
    const elements = [];
    let clash = '';
    
    // 识别每张牌的元素
    cards.forEach(card => {
      if (card.name.includes('寶劍') || card.name.includes('劍')) {
        elements.push({ name: card.name, element: 'air', meaning: '理智/思維' });
      } else if (card.name.includes('聖杯') || card.name.includes('杯')) {
        elements.push({ name: card.name, element: 'water', meaning: '情感/直覺' });
      } else if (card.name.includes('權杖') || card.name.includes('杖')) {
        elements.push({ name: card.name, element: 'fire', meaning: '行動/熱情' });
      } else if (card.name.includes('星幣') || card.name.includes('錢幣') || card.name.includes('幣')) {
        elements.push({ name: card.name, element: 'earth', meaning: '物質/務實' });
      }
    });
    
    // 分析冲突
    const hasAir = elements.some(e => e.element === 'air');
    const hasWater = elements.some(e => e.element === 'water');
    const hasFire = elements.some(e => e.element === 'fire');
    const hasEarth = elements.some(e => e.element === 'earth');
    
    // 风 vs 水：理智怀疑情感
    if (hasAir && hasWater) {
      const airCard = elements.find(e => e.element === 'air');
      const waterCard = elements.find(e => e.element === 'water');
      clash = `<strong>元素衝突：</strong>風（${airCard.name}）吹亂了水（${waterCard.name}）。這代表你的理智在懷疑這份情感的真實性——你覺得這份浪漫太不真實、太夢幻、太不穩定。你的頭腦在告訴你「清醒一點」，但你的心卻捨不得放手。`;
    }
    
    // 火 vs 水：热情与情感的拉扯
    else if (hasFire && hasWater) {
      const fireCard = elements.find(e => e.element === 'fire');
      const waterCard = elements.find(e => e.element === 'water');
      clash = `<strong>元素衝突：</strong>火（${fireCard.name}）蒸發了水（${waterCard.name}）。你的行動力在消耗你的情感——你太急著推進、太急著要結果，但這種急迫反而讓對方（或你自己）感到壓力，情感開始乾涸。`;
    }
    
    // 火 vs 土：冲动与务实的对抗
    else if (hasFire && hasEarth) {
      const fireCard = elements.find(e => e.element === 'fire');
      const earthCard = elements.find(e => e.element === 'earth');
      clash = `<strong>元素衝突：</strong>火（${fireCard.name}）燒不透土（${earthCard.name}）。你的衝動在撞上現實的牆——你想快速行動、想立刻改變，但物質世界的規則（金錢、時間、資源）在限制你。這種挫敗感會讓你更加焦躁。`;
    }
    
    // 风 vs 土：思考与执行的脱节
    else if (hasAir && hasEarth) {
      const airCard = elements.find(e => e.element === 'air');
      const earthCard = elements.find(e => e.element === 'earth');
      clash = `<strong>元素衝突：</strong>風（${airCard.name}）吹不動土（${earthCard.name}）。你的想法很多、計劃很好，但執行力不足——你困在「想太多、做太少」的循環裡。物質世界需要的是行動，而不是更多的思考。`;
    }
    
    return clash;
  },
  /**
   * 🌟 大师的终极忠告（犀利+毒舌）
   * 基于未来牌给出最直接的警告或建议
   */
  generateMasterAdvice: function(cards, topic) {
    const [past, present, future] = cards;
    let advice = '';
    
    // 寶劍7 → 聖杯騎士：面具还没摘下来
    if (cards.some(c => c.name.includes('寶劍7')) && future.name.includes('聖杯騎士')) {
      advice = '<span class="highlight-card">寶劍7</span>的面具還沒摘下來，<span class="highlight-card">聖杯騎士</span>的酒杯裡可能藏著迷藥。不要被當下的浪漫沖昏頭。既然對方不說實話，你就保持絕對的沉默。當你停止追問，對方的面具才會因為沒有觀眾而自己掉下來。本週，請關閉你的耳朵，只相信你脊椎發涼時的那種直覺。';
    }
    
    // 惡魔：诱惑即陷阱
    else if (future.name.includes('惡魔')) {
      advice = '那個即將到來的機會，看起來像救命稻草，其實是更大的枷鎖。<span class="highlight-card">惡魔</span>告訴你：當一個東西看起來太好、回報太高、條件太誘人時，它一定藏著你看不見的代價。本週，請對所有「聽起來很棒」的提議保持警惕——越是甜蜜的誘餌，鉤子越鋒利。';
    }
    
    // 塔：主动拆除，别等崩塌
    else if (future.name.includes('塔')) {
      advice = '與其被動等待崩塌，不如主動拆除那些搖搖欲墜的結構。<span class="highlight-card">塔</span>告訴你：你其實早就知道哪些東西該放棄了，只是你一直在拖延。本週，請做一個你害怕了很久的決定——砍掉那個「看起來還能撐」的項目，終止那份「也許會好轉」的關係。痛苦是短暫的，拖延才是永恆的折磨。';
    }
    
    // 月亮：停止自我欺骗
    else if (future.name.includes('月亮')) {
      advice = '你其實早就知道答案了，只是不願意承認。<span class="highlight-card">月亮</span>告訴你：停止用「還需要觀察」、「再等等看」來拖延。本週，請在深夜問自己一個問題：如果我的最好的朋友遇到同樣的情況，我會給TA什麼建議？然後，把那個建議用在你自己身上。';
    }
    
    // 權杖騎士：窗口期很短
    else if (future.name.includes('權杖騎士')) {
      advice = '機會窗口已經打開，但這個窗口期很短。<span class="highlight-card">權杖騎士</span>告訴你：如果你還在猶豫、還在等待完美時機，那你已經錯過了。本週，請選擇一個你拖延最久的行動，然後在48小時內開始執行——不需要完美，只需要開始。';
    }
    
    // 星幣女王（感情）：控制会窒息对方
    else if (topic === 'love' && (present.name.includes('星幣女王') || future.name.includes('星幣女王'))) {
      advice = '你用「保護自己」來合理化控制欲，但對方感受到的只有窒息。<span class="highlight-card">星幣女王</span>告訴你：愛不是金庫，不需要層層防禦。本週，請嘗試做一件讓你感到「不安全」但對關係有益的事——可能是放下手機檢查、可能是信任對方一次、可能是主動示弱。';
    }
    
    // 皇后：从算计回归经营
    else if (future.name.includes('皇后')) {
      advice = '停止那些「想快點解決問題」的聰明策略，那只會讓你越陷越深。<span class="highlight-card">皇后</span>告訴你：真正的豐盛來自耐心的經營，而不是急功近利的算計。本週，請徹底清算你目前所有隱瞞的債務或支出，像皇后一樣大方、誠實地對待你的資產。當你不再恐懼失去時，你才真正擁有了掌控金錢的能力。';
    }
    
    // 默认（通用，禁言：不用「真相隐藏在…」「灵魂」等）
    else {
      advice = '本週請選一件你一直在迴避的具體問題，列出一項今天可做的動作（例如：發一條訊息、約一次見面、查一筆帳），直接執行。拖延只會讓選項變少。';
    }
    
    return advice;
  },
  /**
   * 🎭 人性观察家：痛点翻译（说人话版）
   * 问：这张牌在人性最自私、最恐惧的一面是什么？
   */
  translateCardToHumanLanguage: function(card, position, topic) {
    const cardName = card.name;
    const isReversed = card.isReversed;
    
    // 财务问题的人话翻译
    if (topic === 'finance') {
      // 过去位
      if (position === 'past') {
        if (cardName.includes('權杖10')) {
          return '你过去就是个扛把子，什么都自己扛、什么责任都往身上揽。你以为这叫"负责任"，其实你就是不敢说不、不敢拒绝，怕一旦放手就会被人说你靠不住';
        } else if (cardName.includes('星幣5') || cardName.includes('錢幣五')) {
          return '你经历过钱包见底的那种恐慌。那种刷卡被拒、账单到期但账户余额是两位数的绝望——你懂的';
        } else if (cardName.includes('太陽') && !isReversed) {
          return '你那时候太飘了，觉得日子会一直这么爽下去。赚得多就花得多，完全没想过要存钱、要防着点，结果呢？';
        } else if (cardName.includes('太陽') && isReversed) {
          return '你过去那段看起来很风光的日子，其实就是打肿脸充胖子。表面上请客吃饭、买名牌，实际上信用卡早就刷爆了';
        } else if (cardName.includes('塔')) {
          return '你经历过那种"一夜回到解放前"的崩塌。可能是投资血本无归、可能是工作突然没了，反正就是整个生活都散架了的那种';
        }
      }
      
      // 现在位
      if (position === 'present') {
        if (cardName.includes('寶劍7')) {
          return '说白了，你现在就是在撒谎。可能是对老板撒谎说"项目进展顺利"，可能是对家人撒谎说"一切都好"，可能是对自己撒谎说"还能撑"。你害怕的不是问题本身，而是一旦说出口，整个局就崩了';
        } else if (cardName.includes('星幣2') || cardName.includes('錢幣二')) {
          return '你现在就是在左手倒右手，拆东墙补西墙。每笔钱都要算计半天——花这个就没钱买那个，存这个就没钱还那个。这种"永远都不够"的感觉，你懂的';
        } else if (cardName.includes('星幣女王') || cardName.includes('錢幣女王')) {
          return '你现在对钱变得特别抠，每一分钱都要掰成八瓣花。你把这叫"精打细算"，但说实话，你就是怕了——怕再经历一次没钱的日子，所以宁可现在苦一点';
        } else if (cardName.includes('魔術師')) {
          return '你手上其实有牌的——有点存款、有些人脉、有些技能。但你就是不敢出手，因为你怕一旦失败了，连这最后的底牌都没了';
        } else if (cardName.includes('月亮')) {
          return '你现在根本搞不清楚钱都花哪去了。不是真的不知道，而是不敢算、不想看——因为一旦算清楚了，你就得承认自己搞砸了';
        }
      }
      
      // 未来位
      if (position === 'future') {
        if (cardName.includes('惡魔')) {
          return '你会遇到一个看起来能救你的机会——可能是高息贷款、可能是带对赌条款的合作、可能是那种"赚大钱但要付出代价"的工作。你当时会觉得"没办法了，只能赌一把"，但其实这就是个坑';
        } else if (cardName.includes('塔')) {
          return '你现在维持的这个局，会在压力下崩掉。那些你一直告诉自己"还能撑"的东西，会一个个暴露出来。与其被动等着爆炸，不如主动拆掉算了';
        } else if (cardName.includes('權杖騎士')) {
          return '机会窗口打开了，但这个窗口期很短。如果你还在那"等完美时机"、"再观望一下"，等你想动的时候，机会早跑了';
        } else if (cardName.includes('皇后')) {
          return '钱会来的，但不是靠你"算计"出来的，而是靠你踏踏实实经营出来的。你得先停止那些聪明的小动作——隐瞒账单、偷偷借钱、装作没事——把事情摆到明面上来';
        }
      }
    }
    
    // 感情问题的人话翻译
    if (topic === 'love') {
      if (position === 'past') {
        if (cardName.includes('太陽')) {
          return '你那时候太天真了，觉得爱情就该是童话故事那样。完全没防备、没界限，把心掏出来给对方';
        } else if (cardName.includes('寶劍三')) {
          return '你被伤过，而且伤得不轻。那种被背叛的感觉，现在想起来心还会痛';
        }
      }
      
      if (position === 'present') {
        if (cardName.includes('寶劍三')) {
          return '你现在还在痛，而且这个痛会影响你的每一个决定。你会怀疑对方的每一句话、审查对方的每一个行为，因为你怕再被伤一次';
        } else if (cardName.includes('星幣四') || cardName.includes('錢幣四')) {
          return '你现在把自己的心锁得死死的。你说这是"保护自己"，但说实话，你就是怕付出——怕一旦爱了就会受伤，所以宁可不爱';
        } else if (cardName.includes('寶劍7')) {
          return '你（或对方）在撒谎。可能是隐瞒了什么、可能是回避了什么，反正就是有话不说、有事不讲。你们俩都在演戏，但谁都不愿意先摘下面具';
        }
      }
      
      if (position === 'future') {
        if (cardName.includes('戀人')) {
          return '关系会进入下一个阶段——但前提是你得先摘下防备、先主动说出你想要什么。不要等对方猜、不要期待对方懂，直接说';
        } else if (cardName.includes('聖杯騎士')) {
          return '浪漫会来，但你得小心——如果这份浪漫来得太突然、太甜蜜、太不真实，那可能只是对方（或你自己）想用甜言蜜语掩盖过去的什么东西';
        }
      }
    }
    
    return '';
  },
  
  /**
   * 🎭 人性观察家：元素冲突（说人话版）
   */
  explainElementClashInHumanLanguage: function(cards) {
    const elements = [];
    let clash = '';
    
    // 识别元素
    cards.forEach(card => {
      if (card.name.includes('寶劍')) elements.push({ name: card.name, element: 'air' });
      else if (card.name.includes('聖杯')) elements.push({ name: card.name, element: 'water' });
      else if (card.name.includes('權杖')) elements.push({ name: card.name, element: 'fire' });
      else if (card.name.includes('星幣') || card.name.includes('錢幣')) elements.push({ name: card.name, element: 'earth' });
    });
    
    const hasAir = elements.some(e => e.element === 'air');
    const hasWater = elements.some(e => e.element === 'water');
    const hasFire = elements.some(e => e.element === 'fire');
    const hasEarth = elements.some(e => e.element === 'earth');
    
    // 风 vs 水：脑子和心在打架
    if (hasAir && hasWater) {
      const airCard = elements.find(e => e.element === 'air');
      const waterCard = elements.find(e => e.element === 'water');
      clash = `你的脑子（<span class="highlight-card">${airCard.name}</span>）和你的心（<span class="highlight-card">${waterCard.name}</span>）在打架。你的理智在告诉你"清醒一点、这不对劲"，但你的心又舍不得放手。你就卡在中间，进退两难。`;
    }
    
    // 火 vs 水：急躁把感情烧干了
    else if (hasFire && hasWater) {
      const fireCard = elements.find(e => e.element === 'fire');
      const waterCard = elements.find(e => e.element === 'water');
      clash = `你太急了（<span class="highlight-card">${fireCard.name}</span>）。你想快点看到结果、快点搞定一切，但这种急躁反而把感情（<span class="highlight-card">${waterCard.name}</span>）烧干了。对方（或你自己）开始觉得压力大、喘不过气。`;
    }
    
    // 火 vs 土：想得美，现实很骨感
    else if (hasFire && hasEarth) {
      const fireCard = elements.find(e => e.element === 'fire');
      const earthCard = elements.find(e => e.element === 'earth');
      clash = `你想动（<span class="highlight-card">${fireCard.name}</span>），但现实不让你动（<span class="highlight-card">${earthCard.name}</span>）。你想快速改变、想立刻行动，但没钱、没时间、没资源——现实就是这么骨感。这种挫败感会让你更加焦躁。`;
    }
    
    // 风 vs 土：想太多，做太少
    else if (hasAir && hasEarth) {
      const airCard = elements.find(e => e.element === 'air');
      const earthCard = elements.find(e => e.element === 'earth');
      clash = `你脑子里计划了一堆（<span class="highlight-card">${airCard.name}</span>），但实际上啥都没干（<span class="highlight-card">${earthCard.name}</span>）。你困在"想太多、做太少"的死循环里——每天都在想，但就是不动手。`;
    }
    
    return clash;
  },
  
  /**
   * 🎭 人性观察家：阴影分析（说人话版）
   */
  analyzeShadowInHumanLanguage: function(cards, topic) {
    let shadow = '';
    
    if (cards.some(c => c.name.includes('寶劍7'))) {
      shadow = '<strong>你最不想承认的：</strong>你不是在"逃避"，你是在主动撒谎。因为你怕一旦说实话，你就得面对那个你一直不想承认的自己——那个搞砸了、靠不住的、没你想象中那么强的自己。';
    }
    
    else if (topic === 'love' && cards.some(c => c.name.includes('星幣女王') || c.name.includes('錢幣女王'))) {
      shadow = '<strong>你最不想承认的：</strong>你不是在"保护自己"，你是在控制对方。你想掌控对方的行为、掌控关系的节奏、掌控可能的风险。但说到底，你就是不敢爱——怕一旦放手，对方就跑了。';
    }
    
    else if (cards.some(c => c.name.includes('惡魔'))) {
      shadow = '<strong>你最不想承认的：</strong>你不是被困住的，是你自己选择待在这个笼子里。因为这个笼子给了你安全感、给了你"我也没办法"的借口。你怕的不是失去自由，而是自由之后你得为自己负责。';
    }
    
    else if (cards.some(c => c.name.includes('月亮'))) {
      shadow = '<strong>你最不想承认的：</strong>你其实早就知道答案了，只是不想承认。你用"再观察观察"、"再等等看"来拖延，但说实话，你就是不想面对——因为一旦承认了，你就得做出改变。';
    }
    
    else if (cards.some(c => c.name.includes('塔'))) {
      shadow = '<strong>你最不想承认的：</strong>你其实早就知道这事会崩。你不是不知道，你就是装作不知道——用"也许会好转"、"还能再撑撑"来骗自己，但你心里清楚得很。';
    }
    
    return shadow;
  },
  
  /**
   * 🌟 第一步：宏观定调（The Macro View）
   * 分析牌阵的整体能量状态
   */
  analyzeMacroView: function(cards) {
    const [past, present, future] = cards;
    
    // 分析元素占比（聖杯=水，寶劍=風，權杖=火，星幣/錢幣=土）
    const elements = { cups: 0, swords: 0, wands: 0, pentacles: 0 };
    
    cards.forEach(card => {
      if (card.name.includes('聖杯') || card.name.includes('杯')) elements.cups++;
      else if (card.name.includes('寶劍') || card.name.includes('劍')) elements.swords++;
      else if (card.name.includes('權杖') || card.name.includes('杖')) elements.wands++;
      else if (card.name.includes('星幣') || card.name.includes('錢幣') || card.name.includes('幣')) elements.pentacles++;
    });
    
    // 分析大小牌比例
    const majorCount = cards.filter(c => 
      !c.name.includes('聖杯') && 
      !c.name.includes('寶劍') && 
      !c.name.includes('權杖') && 
      !c.name.includes('星幣') && 
      !c.name.includes('錢幣')
    ).length;
    
    // 分析正逆位比例
    const reversedCount = cards.filter(c => c.isReversed).length;
    
    // 生成一句话定调（移除"能量"等心理学词汇）
    let diagnosis = '';
    
    // 逆位多 → 内耗
    if (reversedCount >= 2) {
      diagnosis = '這是一個事情推不動、阻力極大的局面。你現在心很累，每一步都像在泥沼裡掙扎。';
    }
    // 元素占比分析
    else if (elements.cups >= 2) {
      diagnosis = '這是一個被情緒牽著走的局面。你現在不是在用邏輯思考，而是在用感覺做決定。';
    }
    else if (elements.swords >= 2) {
      diagnosis = '這是一個思維過度、行動不足的局面。你想太多，做太少。';
    }
    else if (elements.wands >= 2) {
      diagnosis = '這是一個行動力爆發但缺乏計劃的局面。你有衝勁，但沒有方向。';
    }
    else if (elements.pentacles >= 2) {
      diagnosis = '這是一個物質導向、務實穩健的局面。你很清楚自己要什麼，但可能過於謹慎。';
    }
    // 大牌多 → 命运转折
    else if (majorCount >= 2) {
      diagnosis = '這是一個命運轉折點，不是你能完全掌控的瑣事，而是更大的力量在推動。';
    }
    // 默认
    else {
      diagnosis = '這是一個過渡期，舊的結束了，新的還沒完全到來。';
    }
    
    return {
      elements,
      majorCount,
      reversedCount,
      diagnosis
    };
  },
  
  /**
   * 🌟 痛点翻译器：将牌意转换为对用户问题的具体影响
   */
  translateCardToPainPoint: function(card, position, topic) {
    const cardName = card.name;
    const isReversed = card.isReversed;
    
    // 财务问题的痛点翻译（会计师冷静+先知直觉）
    if (topic === 'finance') {
      // 过去位
      if (position === 'past') {
        if (cardName.includes('太陽') && !isReversed) {
          return '你過去那段看似資金充裕、收入穩定的時期——你以為可以一直這樣下去，沒有做任何風險對沖';
        } else if (cardName.includes('太陽') && isReversed) {
          return '你過去那段表面風光、實則入不敷出的虛假繁榮期——帳面上看起來不錯，但現金流早就出問題了';
        } else if (cardName.includes('星幣5') || cardName.includes('錢幣五')) {
          return '你過去經歷的現金流斷裂期——帳戶餘額見底、信用額度用盡的那種絕望';
        } else if (cardName.includes('聖杯八')) {
          return '你過去選擇放棄那些不賺錢的項目——雖然痛苦，但這是正確的止損決策';
        } else if (cardName.includes('塔')) {
          return '你過去經歷的財務結構崩塌——資產大幅縮水、負債暴增的震盪期';
        } else if (cardName.includes('惡魔')) {
          return '你過去簽下的那些看似高回報、實則高束縛的合約——你被對賭條款、高息貸款綁住了';
        }
      }
      
      // 现在位
      if (position === 'present') {
        if (cardName.includes('寶劍三')) {
          return '這意味著你現在正承受財務壓力帶來的痛苦——每次看到帳單、每次計算支出，都像刀割';
        } else if (cardName.includes('星幣2') || cardName.includes('錢幣二')) {
          return '這意味著你現在必須在「守住本金」與「追求收益」之間走鋼絲——每一筆支出都要反覆權衡';
        } else if (cardName.includes('星幣女王') || cardName.includes('錢幣女王')) {
          return '這意味著你現在對每一筆資金都極度謹慎——像守護金庫一樣守護帳戶，但也可能錯失投資機會';
        } else if (cardName.includes('魔術師')) {
          return '這意味著你現在擁有重新配置資源的能力——現金、信用、人脈都已就位，就差執行決策';
        } else if (cardName.includes('月亮')) {
          return '這意味著你現在看不清真實的資金流向——支出不明、ROI算不清，霧裡看花般的混亂';
        }
      }
      
      // 未来位
      if (position === 'future') {
        if (cardName.includes('惡魔')) {
          return '這意味著你會遇到一個看似ROI極高、但實則會讓你失去財務自由的機會——可能是高壓的工作、帶有對賭條款的投資，或者高息貸款';
        } else if (cardName.includes('塔')) {
          return '這意味著你現有的財務結構會在壓力下崩塌——這不是「改善」，而是「強制清零」，但也是重建的起點';
        } else if (cardName.includes('權杖騎士')) {
          return '這意味著你的現金流會在兩週內快速改善——資金周轉率提升、ROI顯著增長，但你必須保持極高的執行強度';
        } else if (cardName.includes('寶劍王牌')) {
          return '這意味著你會做出一個突破性的理財決策——砍掉虧損項目、重新配置資產，清晰但痛苦';
        } else if (cardName.includes('太陽') && !isReversed) {
          return '這意味著你的財務困境會在一到兩個月內結束——現金流恢復正常、預算紀律建立，但前提是你必須砍掉那些看起來很美但其實在吃錢的項目';
        }
      }
    }
    
    // 感情问题的痛点翻译
    if (topic === 'love') {
      if (position === 'past') {
        if (cardName.includes('太陽') && !isReversed) {
          return '你過去那段看似完美、毫無防備的關係——你以為可以永遠這樣幸福下去';
        } else if (cardName.includes('塔')) {
          return '你過去經歷的關係破裂——突然的分手、背叛、信任崩塌';
        }
      }
      
      if (position === 'present') {
        if (cardName.includes('寶劍三')) {
          return '這意味著你現在正承受被背叛的痛——而這個傷口會持續影響你未來三個月的每一個決策';
        } else if (cardName.includes('星幣四') || cardName.includes('錢幣四')) {
          return '這意味著你現在在關係中過度保守——像守護金庫一樣守護自己的心，不敢付出、害怕受傷';
        }
      }
      
      if (position === 'future') {
        if (cardName.includes('戀人')) {
          return '這意味著你們的關係會在兩到三個月內進入承諾階段——但前提是你必須放下防備、學會真正的付出';
        }
      }
    }
    
    // 默认返回通用描述
    return '';
  },
  
  /**
   * 🌟 第二步：建立因果链（痛点导向版）
   */
  buildNarrativeBridge: function(cards, topic) {
    const [past, present, future] = cards;
    
    let bridge = '';
    
    // 获取痛点翻译
    const pastPain = this.translateCardToPainPoint(past, 'past', topic) || '過去的模式';
    const presentPain = this.translateCardToPainPoint(present, 'present', topic) || '現在的狀態';
    const futurePain = this.translateCardToPainPoint(future, 'future', topic) || '未來的轉變';
    
    // 财务问题的因果链（会计师语言）
    if (topic === 'finance') {
      bridge += `<span class="highlight-card">${past.name}</span>告訴我：${pastPain}。`;
      bridge += `正是這個決策失誤，導致了你現在必須面對<span class="highlight-card">${present.name}</span>——${presentPain}。`;
      bridge += `<br/><br/>而<span class="highlight-card">${future.name}</span>預示：${futurePain}`;
      
      // 添加具体的因果逻辑
      if (future.name.includes('惡魔')) {
        bridge += `。這不是簡單的「機會」，而是一個陷阱——你會為了填補現在的錢坑，簽下一份讓你失去自由的合約。`;
      } else if (future.name.includes('塔')) {
        bridge += `。與其被動崩塌，不如主動拆除那些搖搖欲墜的財務結構，設定明確的止損點。`;
      } else if (future.name.includes('權杖騎士')) {
        bridge += `。但這個窗口期很短——如果你在兩週內沒有抓住，機會就會溜走。`;
      } else {
        bridge += `。`;
      }
      
    } else if (topic === 'love') {
      // 感情问题的因果链
      bridge += `<span class="highlight-card">${past.name}</span>告訴我：${pastPain}。`;
      bridge += `正是這段經歷，導致了你現在必須面對<span class="highlight-card">${present.name}</span>——${presentPain}。`;
      bridge += `<br/><br/>而<span class="highlight-card">${future.name}</span>預示：${futurePain}。`;
      
    } else {
      // 通用逻辑
      bridge += `正是因為<span class="highlight-card">${past.name}</span>階段的選擇，才導致了你現在必須面對<span class="highlight-card">${present.name}</span>的局面。`;
      bridge += `如果你繼續維持現狀，<span class="highlight-card">${future.name}</span>所預示的轉變將在未來發生。`;
    }
    
    return bridge;
  },
  
  /**
   * 🌟 第四步：寻找卡点（痛点导向版）
   * 找牌阵中最"不协调"的地方，用"会计师的冷静+先知的直觉"点破真相
   */
  findSoulPunch: function(cards, topic) {
    const [past, present, future] = cards;
    
    let punch = '';
    
    // 财务问题 - 会计师的冷静 + 先知的直觉
    if (topic === 'finance') {
      // 惡魔卡点
      if (future.name.includes('惡魔')) {
        punch = `<strong>【會計師的警告】</strong>你會為了填補現在的錢坑，簽下一份看似高ROI、實則高束縛的合約。可能是：①高息貸款（年化超過20%）②帶有對賭條款的投資（失敗就賠上房產）③高壓的工作（月薪5萬但每週工作80小時）。你以為是救命稻草，其實是更大的枷鎖。<br/><strong>【先知的直覺】</strong>這份合約會在簽署後的3-6個月內讓你後悔，但到那時違約成本已經高到讓你無法脫身。`;
      }
      // 塔卡点
      else if (future.name.includes('塔')) {
        punch = `<strong>【會計師的警告】</strong>你現有的財務結構會在壓力下崩塌。具體來說：①你的資產負債表已經嚴重失衡②你維持的「看起來還能撐」的項目，其實每個月都在虧損③你的現金流在3個月內會見底。<br/><strong>【先知的直覺】</strong>這不是「改善」，而是「強制清零」。與其被動崩塌，不如主動拆除，設定止損點，現在就開始重建。`;
      }
      // 聖杯多（情绪化决策）
      else if (cards.filter(c => c.name.includes('聖杯')).length >= 2) {
        punch = `<strong>【會計師的警告】</strong>你現在不是在理性規劃財務，而是在用情緒做決策。你害怕虧損所以不敢投資；你焦慮未來所以亂花錢買安全感；你逃避現實所以不敢看帳單。<br/><strong>【先知的直覺】</strong>但這些情緒不會幫你賺到錢。你需要的不是心理諮詢，而是打開Excel表格，列出你的收入、支出、資產、負債，用數字說話。`;
      }
      // 逆位多（执行力不足）
      else if (cards.filter(c => c.isReversed).length >= 2) {
        punch = `<strong>【會計師的警告】</strong>你現在最大的敵人不是市場、不是競爭對手，而是你自己的拖延。你在糾結要不要止損、要不要換工作、要不要開始理財，但每一天的拖延都在讓虧損擴大。<br/><strong>【先知的直覺】</strong>48小時內，你必須做出一個決定。不是「完美的決定」，而是「任何一個決定」。因為最糟糕的選擇，就是不選擇。`;
      }
    }
    
    // 感情问题
    else if (topic === 'love') {
      // 寶劍多（过度理性）
      if (cards.filter(c => c.name.includes('寶劍')).length >= 2) {
        punch = `<strong>【靈魂卡點】</strong>你在感情中過度理性分析，把愛情當成一道數學題在解。你列出對方的優缺點清單、計算投入產出比、分析未來風險。但感情不是邏輯推導，而是心的流動。你分析得越多，感受得越少。最後你會發現，你贏得了所有的爭論，卻失去了這段關係。`;
      }
      // 星幣四（防御性的爱）
      else if (present.name.includes('星幣四') || future.name.includes('星幣四')) {
        punch = `<strong>【靈魂卡點】</strong>你在這段關係中像守護金庫一樣守護自己的心。你害怕付出、害怕受傷，所以選擇緊緊抓住控制權。你用「我只是在保護自己」來合理化這種防禦，但對方感受到的只有「你不信任我」。這種防禦性的愛，最終會讓對方窒息，然後離開。`;
      }
      // 寶劍三（心碎的后遗症）
      else if (present.name.includes('寶劍三') || past.name.includes('寶劍三')) {
        punch = `<strong>【靈魂卡點】</strong>你現在正承受被背叛的痛——而這個傷口會持續影響你未來三個月的每一個決策。你會懷疑對方的每一句話、審查對方的每一個行為、在每一個親密時刻想起過去的傷害。問題是：你現在懲罰的，是一個新的人，還是過去那個傷害你的人？`;
      }
    }
    
    // 通用卡点（大牌多）
    if (!punch && cards.filter(c => 
      !c.name.includes('聖杯') && 
      !c.name.includes('寶劍') && 
      !c.name.includes('權杖') && 
      !c.name.includes('星幣') && 
      !c.name.includes('錢幣')
    ).length >= 2) {
      punch = `<strong>【靈魂卡點】</strong>這不是你能完全掌控的局面。更大的力量在推動——可能是市場趨勢、可能是命運安排、可能是你無法控制的外部變化。你需要做的不是抗拒，而是順應。該放手的放手，該接受的接受。`;
    }
    
    return punch;
  },
  
  /**
   * 标签过滤协议 - 专业术语映射
   */
  TERM_MAPPING: {
    finance: {
      // 财务/事业必用词
      required: [
        '現金流', '資金動態', '資產增值', '預算紀律', 
        '投入產出比', 'ROI', '職場競爭力', '收割期', 
        '止損點', '決策執行力', '資金管控', '財務結構'
      ],
      // 禁用词（将被替换）
      forbidden: {
        '能量': '資金動態',
        '情緒': '決策風險',
        '依戀模式': '資金使用習慣',
        '童年陰影': '過往財務經驗',
        '內在小孩': '潛意識財務觀念',
        '靈魂伴侶': '理想合作夥伴',
        '冒名頂替綜合症': '能力低估',
        '情感投射': '決策偏見'
      }
    },
    love: {
      // 感情/人际必用词
      required: [
        '溝通邊界', '情感流動', '價值觀共鳴', '承諾度',
        '親密關係', '互動模式', '內在需求', '共情',
        '情緒表達', '心靈連結'
      ],
      // 禁用词（将被替换）
      forbidden: {
        '投資回報': '情感回應',
        '市場價值': '吸引力',
        '季度結算': '階段回顧',
        '成本核算': '情感付出',
        '職場政治': '人際互動',
        '現金流': '情感流動',
        'ROI': '情感深度'
      }
    },
    career: {
      // 事业（使用财务类术语）
      required: [
        '職場競爭力', '決策執行力', '資源整合',
        '投入產出比', '戰略定位', '行動力'
      ],
      forbidden: {
        '能量': '執行力',
        '情緒': '決策穩定性',
        '靈魂伴侶': '理想團隊',
        '內在小孩': '職業認知'
      }
    },
    health: {
      // 健康/能量必用词
      required: [
        '生命力', '恢復週期', '身心平衡', '精力和耗',
        '修復', '作息調整', '感官覺知', '能量儲備'
      ],
      forbidden: {
        '創業投資': '精力投入',
        '浪漫化解讀': '情緒反應',
        '職場競爭': '壓力狀態',
        '資產負債': '能量收支'
      }
    },
    general: {
      required: [],
      forbidden: {}
    }
  },
  
  /**
   * 术语过滤器 - 将通用描述转换为专业术语
   */
  filterTerminology: function(text, topic) {
    if (!text) return text;
    
    const mapping = this.TERM_MAPPING[topic] || this.TERM_MAPPING.general;
    let filtered = text;
    
    // 替换禁用词
    for (let forbidden in mapping.forbidden) {
      const replacement = mapping.forbidden[forbidden];
      const regex = new RegExp(forbidden, 'g');
      filtered = filtered.replace(regex, replacement);
    }
    
    return filtered;
  },
  
  /**
   * 从TAROT_DETAILED获取精准解读
   */
  getDetailedInterpretation: function(card, topic) {
    if (!window.TAROT_DETAILED) {
      console.error('TAROT_DETAILED 数据库未加载');
      return null;
    }
    
    let cardNum = null;
    if (card.id && card.id.startsWith('ar')) {
      cardNum = parseInt(card.id.substring(2));
    }
    
    if (cardNum === null || !window.TAROT_DETAILED[cardNum]) {
      return null;
    }
    
    const cardData = window.TAROT_DETAILED[cardNum];
    const position = card.isReversed ? 'reversed' : 'upright';
    
    if (cardData[position] && cardData[position][topic]) {
      return cardData[position][topic];
    }
    
    return null;
  },
  
  /**
   * 获取时间暗示（直接具体）
   */
  getTimingAnswer: function(futureCard) {
    if (!futureCard) return '两到三个月内';
    
    const cardName = futureCard.name || '';
    const isReversed = futureCard.isReversed;
    
    // 快速牌
    if (cardName.includes('權杖騎士') || cardName.includes('Knight of Wands')) {
      return isReversed ? '一到两周内，但需要克制冲动' : '两周内';
    }
    
    if (cardName.includes('戰車') || cardName.includes('Chariot')) {
      return '一个月内';
    }
    
    if (cardName.includes('塔') || cardName.includes('Tower')) {
      return '一到两周内迅速变化';
    }
    
    // 中速牌
    if (cardName.includes('魔術師') || cardName.includes('Magician')) {
      return '当下即可开始，一个月内见效';
    }
    
    if (cardName.includes('太陽') || cardName.includes('Sun')) {
      return isReversed ? '两到三个月' : '一到两个月';
    }
    
    if (cardName.includes('星星') || cardName.includes('Star')) {
      return '两到三个月逐步改善';
    }
    
    // 慢速牌
    if (cardName.includes('隱者') || cardName.includes('Hermit')) {
      return '三到六个月';
    }
    
    if (cardName.includes('月亮') || cardName.includes('Moon')) {
      return isReversed ? '三到六个月' : '两到三个月';
    }
    
    if (cardName.includes('死神') || cardName.includes('Death')) {
      return isReversed ? '半年到一年' : '三个月内完成转型';
    }
    
    // 默认（避免模糊「左右」，給具體區間）
    return isReversed ? '三到四個月' : '一到兩個月';
  },
  
  /**
   * 生成标题（短且有力+代价感）
   */
  generateTitle: function(cards, topic) {
    const [past, present, future] = cards;
    
    if (topic === 'finance') {
      // 惡魔专属标题
      if (future.name.includes('惡魔') || future.name.includes('Devil')) {
        return '掌控與慾望的博弈';
      }
      // 塔专属标题
      else if (future.name.includes('塔') || future.name.includes('Tower')) {
        return '破壞性重建前夜';
      }
      // 寶劍王牌
      else if (future.name.includes('寶劍王牌') || future.name.includes('寶劍A')) {
        return '清晰決策的代價';
      }
      // 其他
      else if (future.isReversed) {
        return '資金轉機需耐心布局';
      } else if (future.name.includes('權杖')) {
        return '財運爆發在即';
      } else if (future.name.includes('錢幣') || future.name.includes('星币')) {
        return '穩健收割期來臨';
      } else {
        return '財務突破點已現';
      }
    } else if (topic === 'career') {
      if (future.isReversed) {
        return '職場轉型需謹慎';
      } else {
        return '事業躍升時機到';
      }
    } else if (topic === 'love') {
      return '情感流動新階段';
    } else {
      return '能量轉換關鍵期';
    }
  },
  
  /**
   * 生成核心回答（第一句话直接回答问题）
   */
  generateCoreAnswer: function(cards, topic, question) {
    const [past, present, future] = cards;
    const timing = this.getTimingAnswer(future);
    
    // 判断问题是否询问时间
    const askingTime = question && (
      question.includes('多久') || 
      question.includes('何時') ||
      question.includes('什么时候') ||
      question.includes('when') ||
      question.includes('改善') ||
      question.includes('好转')
    );
    
    if (topic === 'finance') {
      // 财务问题 - 强制第一句话直接回答
      const reversedCount = cards.filter(c => c.isReversed).length;
      
      // 默认总是给出时间回答（这是20年塔罗师的标准）
      let answer = `<span class="highlight-time">${timing}</span>`;
      
      // 特殊牌的专门回答
      if (future.name.includes('惡魔') || future.name.includes('Devil')) {
        answer += `，財務改善將會到來，但這是一份<strong>伴隨「代碼」與「代價」的禮物</strong>——你會獲得金錢，但可能失去自由。`;
      } else if (future.name.includes('塔')) {
        answer += `，你的財務狀況將經歷<strong>破壞性重建</strong>。舊有的結構會崩塌，這不是「改善」，而是通往真正自由的必經之路。`;
      } else if (future.name.includes('權杖騎士')) {
        answer += `，財務的爆發性增長就會到來。現金流將快速改善，ROI將顯著提升。`;
      } else if (future.name.includes('權杖')) {
        answer += `，財務正從混亂轉向快速行動，爆發性增長信號已出現。`;
      } else if (future.name.includes('錢幣') || future.name.includes('星币')) {
        answer += `，穩健收割期將到來，現金流將顯著改善，你之前的投入會開始回報。`;
      } else if (future.name.includes('寶劍王牌') || future.name.includes('寶劍A')) {
        answer += `，突破性的理財決策窗口將打開。但要做好心理準備：<strong>清晰往往伴隨割捨。</strong>`;
      } else if (future.name.includes('太陽') && !future.isReversed) {
        answer += `，財務困境將結束，清晰的資金流向與預算紀律會顯現。`;
      } else if (future.name.includes('太陽') && future.isReversed) {
        answer += `，但這不會是一帆風順的改善。你過去那段看似輝煌但實則虛火的財務擴張期即將重演。`;
      } else if (reversedCount >= 2) {
        answer += `，但目前的財務狀況仍處於舊債未清、新機未到的過渡期。`;
      } else {
        answer += `，會出現明顯的財務改善。`;
      }
      
      return answer;
      
    } else if (topic === 'career') {
      // 事业问题
      let answer = `<span class="highlight-time">${timing}</span>`;
      
      if (future.name.includes('權杖')) {
        answer += `，職場行動窗口將打開，決策執行力是關鍵。`;
      } else if (future.isReversed) {
        answer += `，職場轉型需要更謹慎的策略，但方向是對的。`;
      } else {
        answer += `，職場競爭力將顯著提升。`;
      }
      
      return answer;
      
    } else if (topic === 'love') {
      // 感情问题
      let answer = `<span class="highlight-time">${timing}</span>`;
      
      if (future.name.includes('聖杯')) {
        answer += `，情感連結將深化，價值觀共鳴將提升。`;
      } else if (future.name.includes('戀人')) {
        answer += `，承諾度將明確化，親密關係將升級。`;
      } else if (future.isReversed) {
        answer += `，關係需要更多的溝通與調整。`;
      } else {
        answer += `，關係將進入新的階段。`;
      }
      
      return answer;
      
    } else {
      // 综合问题
      return `<span class="highlight-time">${timing}</span>，轉機將逐步顯現。`;
    }
  },
  
  /**
   * 分析牌面张力与转化关系
   */
  analyzeCardTension: function(past, present, future, topic) {
    let tension = '';
    
    if (topic === 'finance') {
      // 星幣6 → 星幣女王的转化
      if (past.name.includes('星幣6') || past.name.includes('錢幣六')) {
        if (present.name.includes('女王') && present.name.includes('星幣') || present.name.includes('錢幣')) {
          tension = '從「接受他人資助」轉化為「自主管理資源」，這是一個質的飛躍。你過去的財務安全感來自於一種「平衡的交換」甚至是「他人的餘蔭」，那時你不需要操太多心，但也缺乏主動權。現在，你已經進化到了星幣女王的階段——你開始像守護領地一樣守護你的金錢，你變得務實、精明，甚至有點過度謹慎。';
        }
      }
      
      // 任何牌 → 惡魔的警告
      if (future.name.includes('惡魔') || future.name.includes('Devil')) {
        tension += (tension ? '<br/><br/>' : '') + '但真正的危險隱藏在未來的<span class="highlight-card">惡魔</span>之中。隨著財運的改善，你對金錢的「掌控」可能會演變成「執著」。這張牌警告你：在未來，你會遇到一個看起來回報極高、但會讓你失去自由的機會（可能是高壓的工作，也可能是帶有束縛條款的合約）。<strong>你以為你在玩金錢遊戲，其實你正被金錢所奴役。</strong>';
      }
      
      // 塔的警告
      if (future.name.includes('塔') || future.name.includes('Tower')) {
        tension += (tension ? '<br/><br/>' : '') + '<span class="highlight-card">塔</span>預示的不是簡單的「改善」，而是「破壞性重建」。你現有的財務結構會崩塌，但這個崩塌是必要的——因為舊有的模式已經無法支撐你接下來的成長。<strong>代價是痛苦，但收穫是自由。</strong>';
      }
    }
    
    return tension;
  },
  
  /**
   * 获取特殊牌的风险提示
   */
  getCardRiskWarning: function(card, topic) {
    const cardName = card.name || '';
    
    if (topic === 'finance') {
      // 惡魔的风险提示
      if (cardName.includes('惡魔') || cardName.includes('Devil')) {
        return '⚠️ <strong>惡魔風險警示</strong>：這張牌在財務領域絕非純粹的好事。警惕因為過度擴張導致的債務、被合約束縛、或為了賺錢而失去自由。對金錢的執念會讓你看不清真正的代價。';
      }
      
      // 寶劍系列的决策风险
      if (cardName.includes('寶劍') || cardName.includes('Swords')) {
        return '💭 <strong>決策風險</strong>：寶劍代表理性決策，但也代表冷酷與割捨。這個改善可能需要你放棄某些安全感，做出痛苦的選擇。';
      }
      
      // 权杖8的快速风险
      if (cardName.includes('權杖8') || cardName.includes('Wands 8')) {
        return '⚡ <strong>速度陷阱</strong>：權杖8的快速可能讓你失去判斷力。在追求速度的同時，別忘了設定止損點。';
      }
    }
    
    return '';
  },
  
  /**
   * 生成深度洞察（牌面张力+风险警告+毒舌清醒）
   */
  generateDeepInsight: function(cards, topic) {
    const [past, present, future] = cards;
    
    let insight = '';
    
    // === 全链条叙事协议：强制因果桥接 ===
    
    if (topic === 'finance') {
      // 财务话题：全流畅叙事（无分段）
      
      // 首先，分析是否有特殊张力
      const tension = this.analyzeCardTension(past, present, future, topic);
      
      if (tension) {
        // 如果有专门的张力分析（如星幣6→星幣女王+惡魔），使用它
        insight = tension;
      } else {
        // 否则，使用强制因果桥接逻辑
        
        // 【过去 → 现在】的因果桥接（强制财务术语）
        insight += `正是因為你過去在<span class="highlight-card">${past.name}</span>`;
        
        if (past.name.includes('星幣5') || past.name.includes('錢幣五')) {
          insight += `階段所經歷的現金流斷裂與財務匱乏——那種「入不敷出」的恐慌`;
        } else if (past.name.includes('星幣6') || past.name.includes('錢幣六')) {
          insight += `階段習慣了依賴他人資助、缺乏財務自主權——你的收入來源不在自己手中`;
        } else if (past.name.includes('星幣8') || past.name.includes('錢幣八')) {
          insight += `階段的高投入低產出比——拼命工作但ROI極低`;
        } else if (past.name.includes('權杖8') && past.isReversed) {
          insight += `階段同時追逐太多投資機會、導致資金鏈緊張——戰線拉得太長，哪個都沒守住`;
        } else if (past.name.includes('塔')) {
          insight += `階段經歷的財務結構崩塌與緊急止損——一夜回到解放前的震盪`;
        } else if (past.name.includes('太陽') && past.isReversed) {
          insight += `階段那段看似輝煌但實則虛火的財務擴張期——表面風光，實則入不敷出`;
        } else if (past.isReversed) {
          insight += `階段所種下的資金使用失控與預算失衡——支出完全沒有紀律`;
        } else {
          insight += `階段建立的財務模式——那套舊有的資金使用習慣`;
        }
        
        insight += `，導致了你現在必須在<span class="highlight-card">${present.name}</span>`;
        
        if (present.name.includes('星幣2') || present.name.includes('錢幣二')) {
          insight += `的狀態下重新尋求資金周轉與收支平衡——左手進、右手出，學會在守住本金與追求收益之間走鋼絲`;
        } else if (present.name.includes('星幣女王') || present.name.includes('錢幣女王')) {
          insight += `的階段學會對物質極度掌控、精打細算每一筆支出——你開始像守護金庫一樣守護你的每一分錢`;
        } else if (present.name.includes('魔術師')) {
          insight += `的狀態下重新盤點資源（現金、信用、人脈）、提升決策執行力——你擁有所有工具，就差出手`;
        } else if (present.name.includes('皇帝')) {
          insight += `的階段建立更嚴格的預算紀律與資金管控——這意味著你得對自己狠一點，設定明確的止損點`;
        } else if (present.name.includes('寶劍')) {
          insight += `的關鍵時刻做出清晰的財務決策、降低決策風險——最忌諱的就是拖延與模糊`;
        } else if (present.name.includes('正義')) {
          insight += `的階段重新審視投入產出比、砍掉那些「看起來重要但其實在吃錢」的項目`;
        } else {
          insight += `的狀態下調整資金動態——重新配置你的資產與現金流`;
        }
        
        insight += `。`;
        
        // 【现在 → 未来】的因果桥接（强制财务专业术语+代价提示）
        insight += `然而，`;
        
        if (future.name.includes('惡魔') || future.name.includes('Devil')) {
          insight += `如果你繼續維持<span class="highlight-card">${present.name}</span>這種對金錢的掌控模式而不加以覺察，那麼<span class="highlight-card">${future.name}</span>所預示的風險將不可避免地發生：你對金錢的「掌控」會演變成「執著」。你會遇到一個看起來ROI極高、但實則會讓你被合約束縛、失去財務自由的機會（可能是高壓的職位，也可能是帶有對賭條款的投資）。<strong>你以為你在玩金錢遊戲，其實你正被金錢所奴役。</strong>`;
        } else if (future.name.includes('塔')) {
          insight += `如果你不主動調整<span class="highlight-card">${present.name}</span>階段的財務結構、及時設定止損點，那麼<span class="highlight-card">${future.name}</span>所預示的破壞性重建將不可避免。你現有的財務框架會在壓力下崩塌——這不是「改善」，而是「強制清零」。但這個崩塌是必要的，因為舊有的模式已經無法支撐你接下來的成長。<strong>代價是痛苦，但收穫是自由。</strong>`;
        } else if (future.name.includes('寶劍王牌') || future.name.includes('寶劍A')) {
          insight += `只要你在<span class="highlight-card">${present.name}</span>階段持續提升決策執行力、砍掉那些吃錢的無效項目，<span class="highlight-card">${future.name}</span>所預示的突破性理財決策與財務計劃就會在未來啟動。這是從資金混亂轉向清晰管控、從被動應對轉向主動配置的關鍵轉折。但要警惕：<strong>清晰不等於輕鬆，你需要做出痛苦的割捨。</strong>`;
        } else if (future.name.includes('權杖騎士')) {
          insight += `只要你在<span class="highlight-card">${present.name}</span>階段保持極高的執行強度、不拖延任何財務決策，<span class="highlight-card">${future.name}</span>所預示的財務爆發性增長就會在短期內到來。現金流將快速改善，ROI將顯著提升，資金周轉率會進入快車道。但代價是：<strong>你得保持極高的執行強度，稍有鬆懈就會錯失機會。</strong>`;
        } else if (future.name.includes('錢幣') || future.name.includes('星币')) {
          insight += `只要你在<span class="highlight-card">${present.name}</span>階段維持穩健的資源配置、嚴格執行預算紀律，<span class="highlight-card">${future.name}</span>所預示的收割期就會自然到來。你之前的投入會開始回報，資產增值與現金流改善將同步進行。`;
        } else if (future.name.includes('太陽') && !future.isReversed) {
          insight += `只要你在<span class="highlight-card">${present.name}</span>階段持續優化資金配置，<span class="highlight-card">${future.name}</span>所預示的財務困境結束期就會到來。清晰的資金流向與預算紀律會顯現，財務結構將趨於健康。`;
        } else if (future.name.includes('太陽') && future.isReversed) {
          insight += `但真正的危險在於<span class="highlight-card">${future.name}逆位</span>：你過去那段看似輝煌但實則虛火的財務擴張期可能會重演。表面風光、實則入不敷出的模式會再次出現。你需要區分「真正的收益」與「虛假的繁榮」。`;
        } else {
          insight += `<span class="highlight-card">${future.name}</span>所預示的財務新格局將在你持續調整資金動態、優化投入產出比的過程中逐步形成。`;
        }
      }
      
    } else if (topic === 'love') {
      // 感情话题：因果桥接叙事
      insight += `正是因為你過去在<span class="highlight-card">${past.name}</span>階段`;
      
      if (past.isReversed) {
        insight += `所經歷的情感流動受阻與溝通邊界模糊`;
      } else {
        insight += `所建立的互動模式`;
      }
      
      insight += `，導致了你現在必須在<span class="highlight-card">${present.name}</span>`;
      
      if (present.name.includes('聖杯')) {
        insight += `的狀態下重新學習情感流動與內在需求表達`;
      } else if (present.name.includes('寶劍')) {
        insight += `的階段重建溝通邊界`;
      } else {
        insight += `的狀態下調整互動模式`;
      }
      
      insight += `。如果你繼續維持<span class="highlight-card">${present.name}</span>的模式，`;
      
      if (future.name.includes('聖杯')) {
        insight += `那麼<span class="highlight-card">${future.name}</span>所預示的情感連結深化、價值觀共鳴提升就會在關係中自然發生。`;
      } else if (future.name.includes('戀人')) {
        insight += `那麼<span class="highlight-card">${future.name}</span>所預示的承諾度明確化、親密關係升級就會成為可能。`;
      } else {
        insight += `<span class="highlight-card">${future.name}</span>所預示的新情感格局將逐步形成。`;
      }
      
    } else if (topic === 'career') {
      // 事业话题：因果桥接叙事
      insight += `正是因為你過去在<span class="highlight-card">${past.name}</span>階段`;
      
      if (past.isReversed) {
        insight += `所經歷的職場競爭力受限與決策執行力不足`;
      } else {
        insight += `所建立的職業定位`;
      }
      
      insight += `，導致了你現在必須在<span class="highlight-card">${present.name}</span>`;
      
      if (present.name.includes('寶劍')) {
        insight += `的階段升級決策能力與資源整合`;
      } else if (present.name.includes('權杖')) {
        insight += `的狀態下爆發行動力`;
      } else {
        insight += `的狀態下調整職業狀態`;
      }
      
      insight += `。如果你繼續維持<span class="highlight-card">${present.name}</span>的模式，`;
      
      if (future.name.includes('權杖')) {
        insight += `那麼<span class="highlight-card">${future.name}</span>所預示的決策執行力快速提升、職場競爭力顯著增強就會成為現實。`;
      } else if (future.name.includes('寶劍王牌')) {
        insight += `那麼<span class="highlight-card">${future.name}</span>所預示的突破性職業計劃啟動、戰略定位重組就會在未來發生。`;
      } else {
        insight += `<span class="highlight-card">${future.name}</span>所預示的新職業格局將逐步形成。`;
      }
      
    } else {
      // 综合话题的通用叙事（避免使用财务术语）
      console.warn('⚠️ 使用 general 话题叙事，原 topic:', topic);
      insight += `正是因為你過去在<span class="highlight-card">${past.name}</span>階段所經歷的狀態`;
      
      if (past.isReversed) {
        insight += `——能量受阻、內在矛盾`;
      } else {
        insight += `——穩定運行的模式`;
      }
      
      insight += `，導致了你現在必須在<span class="highlight-card">${present.name}</span>`;
      
      if (present.isReversed) {
        insight += `的狀態下重新審視與調整`;
      } else {
        insight += `的階段尋求新的平衡`;
      }
      
      insight += `。如果你繼續維持<span class="highlight-card">${present.name}</span>的模式，`;
      
      if (future.isReversed) {
        insight += `那麼<span class="highlight-card">${future.name}</span>所預示的挑戰將需要你更深的覺察與轉化。`;
      } else {
        insight += `<span class="highlight-card">${future.name}</span>所預示的轉機將在你的持續努力中逐步顯現。`;
      }
    }
    
    // 添加风险警告（如果有）
    const riskWarning = this.getCardRiskWarning(future, topic);
    if (riskWarning) {
      insight += `<br/><br/>${riskWarning}`;
    }
    
    return insight;
  },
  
  /**
   * 生成行动建议（停止+执行）
   */
  
  /**
   * 生成行动建议（停止+执行）
   */
  generateActionAdvice: function(cards, topic) {
    const [past, present, future] = cards;
    
    let stopAction = '';
    let doAction = '';
    
    if (topic === 'finance') {
      // 停止（毒舌清醒+具体，强制财务术语）
      const reversedCards = cards.filter(c => c.isReversed);
      
      // 特殊牌的专门警告
      if (future.name.includes('惡魔') || future.name.includes('Devil')) {
        stopAction = '停止那種「只要能賺錢，什麼代價都能付」的危險念頭。你正在走向金錢的奴隸，而不是主人。那些看起來ROI極高的機會，往往隱藏著失去自由的代價。';
      } else if (future.name.includes('太陽') && future.isReversed) {
        stopAction = '停止追求「表面風光」的財務擴張。那種「看起來很成功、但其實入不敷出」的虛火模式必須終止。別再為了面子維持高消費。';
      } else if (reversedCards.length > 0) {
        const firstReversed = reversedCards[0];
        if (firstReversed.name.includes('權杖8')) {
          stopAction = '停止同時追逐多個投資項目，收束戰線。你不是八爪魚，別假裝你能同時抓住所有機會。戰線拉太長，最後哪個都守不住。';
        } else if (firstReversed.name.includes('月亮')) {
          stopAction = '停止在資金流向不明、ROI完全算不清的情況下繼續投入。看不清的東西，不要碰。48小時內設定明確的止損點。';
        } else if (firstReversed.name.includes('塔')) {
          stopAction = '停止維持已經崩塌的財務結構，別再騙自己「還能撐」。該止損就止損，拖著只會讓虧損擴大。與其被動崩塌，不如主動重建。';
        } else if (firstReversed.name.includes('星幣5')) {
          stopAction = '停止任何高風險投資，優先恢復現金流穩定性。你現在不是賭徒，是生存者。把「能不能翻盤」的幻想收起來，先止血再說。';
        } else if (firstReversed.name.includes('太陽')) {
          stopAction = '停止那種「表面輝煌、實則虛火」的財務擴張模式。你需要的不是更多收入，而是更清晰的預算紀律。';
        } else {
          stopAction = '停止重複舊有的資金使用模式。同樣的方法不會帶來不同的結果，該換思路了。';
        }
      } else {
        stopAction = '停止觀望和拖延，資金配置窗口已打開。機會不等人，決策執行力是關鍵。別等到「完美時機」，現在就是時機。';
      }
      
      // 执行（48小时/7天内具体行动，强制财务术语）
      if (future.name.includes('惡魔') || future.name.includes('Devil')) {
        doAction = '在48小時內列出你當前所有的負債清單與合約條款，標註每一項的「真實ROI」與「隱藏代價」。在7天內，確立你的財務底線——哪些錢可以賺、哪些機會必須拒絕。<strong>記住：不是所有賺錢的機會都值得接受。</strong>';
      } else if (future.name.includes('權杖騎士') && !future.isReversed) {
        doAction = '選擇一個你最擅長的技能或產品，在48小時內將其轉化為具體的報價或行動計劃。抓住兩週內的快速增長窗口，提升資金周轉率。但要在執行前設定明確的止盈點（例如：收益達到30%就撤出），別讓貪婪毀了你的判斷。';
      } else if (future.name.includes('魔術師') && !future.isReversed) {
        doAction = '在48小時內完成一次完整的資源盤點：列出你的現金、可用信用額度、可變現資產、核心人脈。然後在7天內制定一份具體的資金使用計劃，明確每一筆資金的投入產出比預期。';
      } else if (future.name.includes('錢幣') || future.name.includes('星币')) {
        doAction = '在48小時內砍掉三項不必要的訂閱或支出項目，將省下的錢轉入專門的收割期準備金。在7天內，聚焦在一個最有可能產生實際收入的項目上，強化預算紀律。';
      } else if (present.name.includes('皇帝') && !present.isReversed) {
        doAction = '在48小時內建立一個每週資金複盤表格（收入、支出、投入產出比），從本週開始嚴格執行預算，每週日晚上檢視一次。';
      } else if (future.name.includes('寶劍王牌')) {
        doAction = '在48小時內寫下你當前財務狀況中最需要「砍掉」的三個項目，然後在7天內至少執行一個割捨決策。制定突破性的理財計劃，但要做好心理準備：<strong>清晰的決策往往伴隨痛苦的割捨。</strong>';
      } else if (future.name.includes('塔')) {
        doAction = '在48小時內列出你當前所有「看起來還能撐、但其實已經在虧錢」的投資或支出項目。在7天內，主動拆除至少一個搖搖欲墜的財務結構。與其被動崩塌，不如主動重建，設定明確的止損點。';
      } else {
        doAction = '在48小時內設定一個7天內可完成的財務小目標（例如：增加500元收入、減少300元支出），然後每天追蹤執行進度與ROI。';
      }
      
    } else if (topic === 'career') {
      // 停止（使用职场专业术语）
      if (cards.some(c => c.isReversed)) {
        stopAction = '停止在不適合的職位上消耗精力，重新評估職場競爭力定位。';
      } else {
        stopAction = '停止等待完美時機，決策執行力是關鍵。';
      }
      
      // 执行（使用职场专业术语）
      if (future.name.includes('權杖')) {
        doAction = '主動推進關鍵項目，展現決策執行力，提升職場競爭力。';
      } else if (future.name.includes('寶劍王牌')) {
        doAction = '制定突破性的職業計劃，提升資源整合能力。';
      } else {
        doAction = '建立清晰的職業目標，制定30天行動計劃，追蹤投入產出比。';
      }
      
    } else if (topic === 'love') {
      // 停止（使用情感专业术语）
      if (cards.some(c => c.isReversed)) {
        stopAction = '停止模糊的溝通邊界，明確表達內在需求。';
      } else {
        stopAction = '停止過度理性分析，允許情感流動。';
      }
      
      // 执行（使用情感专业术语）
      if (future.name.includes('聖杯')) {
        doAction = '深化情感連結，提升共情能力，建立價值觀共鳴。';
      } else if (future.name.includes('戀人')) {
        doAction = '明確承諾度，建立健康的互動模式。';
      } else {
        doAction = '主動溝通內在需求，提升親密關係品質。';
      }
      
    } else {
      stopAction = '停止拖延和觀望。';
      doAction = '立即採取第一步行動。';
    }
    
    return { stop: stopAction, do: doAction };
  },
  
  /**
   * 🌊 深度叙事融合（Deep Narrative Fusion）
   * 按照专业解牌标准生成：标题 + 时间预测 + 深层因果 + 牌意建议
   */
  generateDeepNarrative: function(cards, topic, question) {
    const [past, present, future] = cards;
    
    let title = ''; // 简洁有力的标题（从A到B）
    let paragraph1 = ''; // 深层因果叙事（200-300字）
    let paragraph2 = ''; // 基于牌意的建议（150-200字）
    
    // ===== 生成标题 =====
    title = this.generateReadingTitle(cards, topic);
    
    // ===== 第一段：深层因果叙事 =====
    
    // 1️⃣ 第一句：时间预测 + 核心结论
    const timing = this.getTimingAnswer(future);
    
    if (topic === 'finance') {
      // 获取未来牌的转变关键词
      let changeKeyword = '轉變';
      if (future.name.includes('皇后')) {
        changeKeyword = '觀念的徹底轉變';
      } else if (future.name.includes('權杖騎士')) {
        changeKeyword = '執行力的爆發';
      } else if (future.name.includes('寶劍王牌')) {
        changeKeyword = '一次清晰的割捨';
      } else if (future.name.includes('魔術師')) {
        changeKeyword = '資源配置的重組';
      } else if (future.name.includes('惡魔')) {
        changeKeyword = '一個誘惑的到來';
      } else if (future.name.includes('塔')) {
        changeKeyword = '一場強制的清零';
      }
      
      paragraph1 += `你的財務改善將在<span class="highlight-time">${timing}</span>隨著${changeKeyword}而降臨。<br/><br/>`;
      
    } else if (topic === 'love') {
      let changeKeyword = '轉變';
      if (future.name.includes('戀人')) {
        changeKeyword = '一次真誠的表白';
      } else if (future.name.includes('太陽')) {
        changeKeyword = '信任的重建';
      }
      
      paragraph1 += `你們的關係將在<span class="highlight-time">${timing}</span>隨著${changeKeyword}而改善。<br/><br/>`;
      
    } else {
      paragraph1 += `轉機將在<span class="highlight-time">${timing}</span>到來。<br/><br/>`;
    }
    
    // 2️⃣ 深层因果链：过去 → 现在 → 未来
    
    // 过去的状态（详细描述）
    paragraph1 += `過去這段時間，`;
    
    if (past.name.includes('權杖10')) {
      paragraph1 += `你一直處於一種極度的「財務透支」中。<span class="highlight-card">${past.name}</span>告訴我，你揹負了不屬於你的開支，或者你試圖靠一個人的體力去填補巨大的資金缺口，這讓你感到精疲力竭。`;
    } else if (past.name.includes('星幣5') || past.name.includes('錢幣五')) {
      paragraph1 += `你經歷了一段現金流斷裂的匱乏期。<span class="highlight-card">${past.name}</span>告訴我，那種「帳戶見底」的恐慌刻進了你的骨子裡。`;
    } else if (past.name.includes('太陽') && !past.isReversed) {
      paragraph1 += `你處於一種過度樂觀的狀態。<span class="highlight-card">${past.name}</span>告訴我，你以為那種風光可以一直持續下去，沒有做任何風險對沖、沒有儲備應急資金。`;
    } else if (past.name.includes('塔')) {
      paragraph1 += `你經歷了一場財務結構的崩塌。<span class="highlight-card">${past.name}</span>告訴我，那場震盪雖然痛苦，但也清空了你舊有的框架。`;
    } else {
      const pastPain = this.translateCardToPainPoint(past, 'past', topic);
      paragraph1 += `<span class="highlight-card">${past.name}</span>`;
      if (pastPain) {
        paragraph1 += `告訴我，${pastPain}。`;
      }
    }
    
    // 转折的心理机制（关键！）
    paragraph1 += this.explainTransition(past, present, topic);
    
    // 未来的转机
    paragraph1 += `<br/><br/>轉機在於未來的<span class="highlight-card">${future.name}</span>牌。`;
    paragraph1 += this.explainFutureConsequence(present, future, topic);
    
    // ===== 第二段：基于牌意的建议 =====
    paragraph2 = this.generateCardBasedAdvice(cards, topic);
    
    // ===== 第三段：量化預測（與基地台結構一致）=====
    const paragraph3 = `依牌面推估，關鍵轉折約在 <span class="highlight-time">${timing}</span>。在這段時間內，建議以一次具體的動作或對話作為是否達標的判斷（例如：完成一筆交易、與對方談定一件事）。`;
    
    return {
      title,
      paragraph1,
      paragraph2,
      paragraph3
    };
  },
  
  /**
   * 解释牌与牌之间的转折（心路历程）
   */
  explainTransition: function(fromCard, toCard, topic) {
    let transition = '';
    
    // 财务领域的转折
    if (topic === 'finance') {
      // 权杖10 → 宝剑7：因为太累所以想走捷径
      if (fromCard.name.includes('權杖10') && toCard.name.includes('寶劍7')) {
        transition = `那種疲憊不僅是身體的，更是精神的——你開始懷疑這樣的辛苦是否值得。正是這種疲憊，讓你在<span class="highlight-card">${toCard.name}</span>階段動了「走捷徑」的念頭。你開始考慮那些看起來省力、實則冒險的選擇：可能是投機的投資、可能是帶有灰色地帶的合作、可能是「借錢快速翻身」的幻想。這不是你的本性，而是疲憊的副產品。`;
      }
      // 星币5 → 星币女王：从匮乏到控制欲
      else if ((fromCard.name.includes('星幣5') || fromCard.name.includes('錢幣五')) && 
               (toCard.name.includes('星幣女王') || toCard.name.includes('錢幣女王'))) {
        transition = `那種「帳戶見底」的恐慌刻進了你的骨子裡。正是這種恐懼，讓你在<span class="highlight-card">${toCard.name}</span>階段對金錢產生了極度的掌控欲——你開始精打細算每一筆支出，像守護金庫一樣守護你的每一分錢。但這種過度謹慎，也可能讓你錯失真正的機會。`;
      }
      // 太阳 → 宝剑3：从乐观到被现实刺伤
      else if (fromCard.name.includes('太陽') && !fromCard.isReversed && toCard.name.includes('寶劍三')) {
        transition = `你以為那種風光可以一直持續下去，沒有做任何風險對沖、沒有儲備應急資金。當市場變化、當收入斷流，你毫無準備地跌入了<span class="highlight-card">${toCard.name}</span>的痛苦——那種被現實狠狠刺傷的感覺，來自於你過去的過度樂觀。`;
      }
      // 塔 → 魔术师：从崩塌到重建
      else if (fromCard.name.includes('塔') && toCard.name.includes('魔術師')) {
        transition = `那場崩塌雖然痛苦，但也清空了你舊有的框架。現在，<span class="highlight-card">${toCard.name}</span>`;
      }
      // 通用转折（逆位多 → 能量受阻）
      else if (fromCard.isReversed && toCard.isReversed) {
        transition = `但你一直在拖延、在猶豫，能量無法流動。這種內耗延續到了<span class="highlight-card">${toCard.name}</span>`;
      }
      // 默认
      else {
        transition = `正是這個階段的選擇，導致了你現在必須面對<span class="highlight-card">${toCard.name}</span>`;
      }
    }
    
    // 感情领域的转折
    else if (topic === 'love') {
      // 太阳 → 宝剑3：从甜蜜到心碎
      if (fromCard.name.includes('太陽') && toCard.name.includes('寶劍三')) {
        transition = `你以為那種甜蜜可以永遠持續，沒有防備、沒有界限。當背叛發生，你毫無準備地跌入了<span class="highlight-card">${toCard.name}</span>的痛苦——那種被刺傷的感覺，來自於你過去的全然信任。`;
      }
      // 宝剑3 → 星币4：从心碎到防御
      else if (fromCard.name.includes('寶劍三') && (toCard.name.includes('星幣四') || toCard.name.includes('錢幣四'))) {
        transition = `那個傷口太深了，深到你發誓再也不要受傷。於是在<span class="highlight-card">${toCard.name}</span>階段，你把自己的心鎖進了金庫——你不再輕易付出、不再輕易信任，用「保護自己」來合理化這種防禦。`;
      }
      else {
        transition = `這段經歷改變了你對感情的看法，導致了你現在必須面對<span class="highlight-card">${toCard.name}</span>`;
      }
    }
    
    return transition;
  },
  
  /**
   * 解释未来的因果后果
   */
  explainFutureConsequence: function(presentCard, futureCard, topic) {
    let consequence = '';
    
    if (topic === 'finance') {
      // 皇后：从算计到经营
      if (futureCard.name.includes('皇后')) {
        consequence += `這代表財務的改善不是靠「算計」或「苦幹」，而是靠「經營」與「耐性」。當你放下那些沉重的負擔，停止那些投機的念頭，回到最務實、最自然的生活節奏時，財富的種子才會真正發芽。這是一次從「生存模式」向「生活模式」的優雅回歸。`;
      }
      // 惡魔：诱惑陷阱
      else if (futureCard.name.includes('惡魔')) {
        consequence += `但這裡有一個警告——這張牌代表你會遇到一個看似誘人、實則危險的機會。可能是高息貸款、可能是帶有對賭條款的投資、可能是高壓的工作。你會為了填補現在的錢坑，簽下一份讓你後悔的合約。這不是真正的改善，而是用一個更大的枷鎖替換了現在的困境。`;
      }
      // 塔：强制清零
      else if (futureCard.name.includes('塔')) {
        consequence += `但這個改善的方式不會溫和——這張牌代表「強制清零」。你現有的財務結構會在壓力下崩塌，那些「看起來還能撐」的項目會一個個暴露虧損。與其被動崩塌，不如主動拆除。這是痛苦的重建，但也是通往真正自由的必經之路。`;
      }
      // 权杖骑士：快速行动
      else if (futureCard.name.includes('權杖騎士')) {
        consequence += `這張牌代表改善會來得很快——但前提是你必須立即行動。這不是靠計劃、不是靠思考，而是靠「直接執行」。你的現金流會在兩週內快速改善，但這個窗口期很短。如果你還在猶豫、還在拖延，機會就會溜走。`;
      }
      // 宝剑王牌：清晰割舍
      else if (futureCard.name.includes('寶劍王牌') || futureCard.name.includes('寶劍A')) {
        consequence += `這張牌代表改善的關鍵在於「割捨」。不是增加收入，而是砍掉那些吃錢的項目、終止那些低ROI的投資、放棄那些看起來重要但其實在拖累你的承諾。清晰的決策往往伴隨痛苦的割捨，但這是你突破的唯一路徑。`;
      }
      // 魔术师：资源重组
      else if (futureCard.name.includes('魔術師')) {
        consequence += `這張牌代表你已經擁有了改善所需的所有資源——現金、信用、人脈、技能。問題不是缺少工具，而是缺少執行。當你停止等待「完美時機」，開始重新配置這些資源時，財務的轉機就會自然到來。`;
      }
      // 太阳：从混乱到清明
      else if (futureCard.name.includes('太陽') && !futureCard.isReversed) {
        consequence += `這張牌代表財務困境會在自然的節奏中結束——不是靠奇蹟，而是靠穩健的預算紀律與清晰的資金流向。當你不再恐慌、不再焦慮，回到最基本的收支管理時，陽光就會重新照進你的帳戶。`;
      }
      // 默认
      else {
        consequence += `這張牌預示著財務狀況會在穩定的調整中改善——關鍵在於你是否願意放下舊有的模式，接受新的可能。`;
      }
    }
    
    else if (topic === 'love') {
      // 戀人：承诺升级
      if (futureCard.name.includes('戀人')) {
        consequence += `這張牌代表關係的改善不是靠「等待」或「猜測」，而是靠「真誠的表達」。當你放下防備，主動告訴對方你想要什麼、你害怕什麼、你期待什麼時，承諾的窗口就會打開。這是一次從「試探」向「確認」的跨越。`;
      }
      // 太阳：信任重建
      else if (futureCard.name.includes('太陽') && !futureCard.isReversed) {
        consequence += `這張牌代表信任會在自然的相處中重建——不是靠承諾，而是靠一次次的「兌現」。當你不再審查對方的每一句話、不再用過去的傷口來懷疑現在，陽光就會重新照進這段關係。`;
      }
      // 默认
      else {
        consequence += `這張牌預示著關係會在真誠的溝通中改善——關鍵在於你是否願意放下防備，學會真正的付出。`;
      }
    }
    
    return consequence;
  },
  generateCardBasedAdvice: function(cards, topic) {
    // 直接使用大师建议（已经是人话版本了）
    return this.generateMasterAdvice(cards, topic);
  },
  
  /**
   * 生成完整HTML（深度叙事版）
   */
  generateFullHTML: function(cards, topic, question) {
    if (!cards || cards.length !== 3) {
      return '<p>需要3张牌</p>';
    }
    
    const [past, present, future] = cards;
    
    let html = '';
    
    // 添加紫色星光背景动效CSS
    html += `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
        
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
        
        .highlight-card {
          color: #A288E3;
          font-weight: 600;
        }
        
        .highlight-time {
          color: #D4AF37;
          font-weight: 600;
        }
      </style>
      
      <div class="purple-starfield"></div>
    `;
    
    // ============================================
    // 🌊 深度叙事融合（两段流畅长文）
    // ============================================
    
    const deepNarrative = this.generateDeepNarrative(cards, topic, question);
    
    // 组装完整叙事（专业解牌标准：标题 + 两段长文）
    let narrative = '';
    
    // 🕯️ 标题（简洁有力）
    narrative += `<div style="text-align: center; margin-bottom: 3em;">`;
    narrative += `<span style="font-size: 1em; color: #D4AF37;">🕯️</span> `;
    narrative += `<span style="font-size: 1.5rem; font-weight: 300; letter-spacing: 0.4em; color: #F7E7CE; text-transform: uppercase;">${deepNarrative.title}</span>`;
    narrative += `</div>`;
    
    // 基地台輸出結構：現狀直擊 / 脫困指南 / 量化預測
    narrative += `<div style="margin-bottom: 2.5em; line-height: 1.75;">`;
    narrative += `<h3 style="color: #D4AF37; font-weight: 600; letter-spacing: 0.15em; margin-bottom: 0.75em; font-size: 1rem;">【現狀直擊】</h3>`;
    narrative += `<div style="text-indent: 2em;">`;
    narrative += deepNarrative.paragraph1;
    narrative += `</div></div>`;
    narrative += `<div style="margin-bottom: 2.5em; line-height: 1.75;">`;
    narrative += `<h3 style="color: #D4AF37; font-weight: 600; letter-spacing: 0.15em; margin-bottom: 0.75em; font-size: 1rem;">【脫困指南】</h3>`;
    narrative += `<div style="text-indent: 2em;">`;
    narrative += deepNarrative.paragraph2;
    narrative += `</div></div>`;
    narrative += `<div style="line-height: 1.75;">`;
    narrative += `<h3 style="color: #D4AF37; font-weight: 600; letter-spacing: 0.15em; margin-bottom: 0.75em; font-size: 1rem;">【量化預測】</h3>`;
    narrative += `<div style="text-indent: 2em;">`;
    narrative += deepNarrative.paragraph3 || '';
    narrative += `</div></div>`;
    
    // 主容器（极简版，无标题，添加塔罗背景图）
    html += `
      <div style="
        max-width: 900px;
        margin: 0 auto;
        background-image: url('./tarot-reading-bg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 32px;
        padding: 50px 40px;
        border: 1px solid rgba(162, 136, 227, 0.3);
        box-shadow: 0 20px 60px rgba(162, 136, 227, 0.3);
        position: relative;
        z-index: 1;
        overflow: hidden;
      ">
        <!-- 渐变遮罩层，确保文字可读 -->
        <div style="
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(18, 10, 33, 0.85) 0%,
            rgba(30, 16, 48, 0.75) 50%,
            rgba(18, 10, 33, 0.85) 100%
          );
          z-index: -1;
        "></div>
        
        <div style="
          color: #F5F5DC;
          font-size: 1rem;
          line-height: 1.75;
          text-align: justify;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.05em;
          position: relative;
          z-index: 1;
        ">
          ${narrative}
        </div>
      </div>
    `;
    
    return html;
  }
};

console.log('🎯 Direct Reading Generator V2 (Professional Tarot Master Style) loaded');
