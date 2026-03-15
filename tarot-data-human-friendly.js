// 塔罗牌数据 - 人话版
// 改写日期：2026-03-10
// 原则：说人话，不装X，像朋友聊天

const TAROT_DATA_HUMAN = {
  // ============================================
  // 大阿卡纳 (Major Arcana) 0-21
  // ============================================
  
  0: {
    name: "愚者 (The Fool)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
    upright: {
      energy: "你现在就像刚开始一段新旅程，什么都还不确定，但充满可能性。有点像第一天上班或第一天上学——既紧张又期待。",
      insight: "别想太多！你担心的那些事，90%都不会发生。有时候闭着眼睛跳下去，反而会发现没那么可怕。不要被'万一失败怎么办'困住了。",
      action: "去试一件你一直想做但没敢做的事。不用管结果好不好，重要的是你敢迈出那一步。比如：学个新技能、去个没去过的地方、跟喜欢的人说句话。"
    },
    reversed: {
      energy: "你可能在盲目地做决定，或者在逃避该面对的事情。就像一边说'随便啦'一边心里慌得要命。",
      insight: "自由不是乱来的借口。现在的混乱可能是因为你没想清楚就行动了。问问自己：我是真的想这么做，还是只是想逃避？",
      action: "做决定之前深呼吸三次，认真问自己：这是我真心想要的，还是一时冲动？如果是冲动，那就再等等。"
    }
  },

  1: {
    name: "魔术师 (The Magician)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg",
    upright: {
      energy: "你现在处于'想做什么都能做成'的黄金时期。就像考试前刚好把重点都复习到了，或者打游戏时装备正好齐全。资源、能力、机会，你都有了。",
      insight: "想法很重要，但行动更重要。光想不做，永远只是空想。但如果你真的动手去做，很多事情会比你想象的更容易实现。别犹豫了，该出手了。",
      action: "今天就开始！选一个你最想实现的目标，不要拖到明天。哪怕只是很小的第一步——比如发个消息、报个名、买个工具——总之先动起来。"
    },
    reversed: {
      energy: "你有能力但没用对地方，或者在玩一些小聪明。就像明明能好好说话，却非要绕弯子耍心机。能量在浪费。",
      insight: "走捷径有时候反而更慢。你是不是在试图操控某件事，却忽略了最简单直接的方法？有时候诚实做事比耍花招更有效。",
      action: "停下来，整理一下你的思路和环境。把凌乱的东西收拾好，把复杂的想法简化。找回专注，别让自己分心太多。"
    }
  },

  2: {
    name: "女祭司 (The High Priestess)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg",
    upright: {
      energy: "你的直觉正在对你喊话，但被日常的杂音盖住了。现在不是问别人意见的时候，而是要听听自己内心真正的想法。",
      insight: "停下来，安静一下。答案其实你心里早就知道了，只是不敢承认而已。别急着做决定，给自己一点时间想清楚。有些事情只有你自己知道答案。",
      action: "找个安静的时间（睡前、早起时都行），关掉手机，一个人待着。不用刻意冥想，就是发呆也好。听听自己内心最真实的声音。"
    },
    reversed: {
      energy: "你可能太依赖理性分析了，或者被表面信息误导了。心里明明有感觉，却非要找一堆理由说服自己。",
      insight: "有时候想太多反而看不清。你是不是在害怕某个真相，所以一直不愿面对？秘密快藏不住了，与其等着被发现，不如主动面对。",
      action: "别再问别人了。独处一小时，好好想想你内心真正的感受。那个被你压下去的小声音，可能才是真正的答案。"
    }
  },

  3: {
    name: "皇后 (The Empress)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg",
    upright: {
      energy: "现在是创造力爆棚的时候，而且充满温暖和关爱。就像春天万物生长，你周围的一切都在往好的方向发展。",
      insight: "别只顾着拼命工作，也要好好照顾自己和身边的人。幸福不是拼出来的，是养出来的。放松一点，享受当下。",
      action: "做点让自己开心的事：吃顿好的、买束花、陪陪家人朋友。照顾好自己，才有力气照顾别人。"
    },
    reversed: {
      energy: "你可能过度付出，把自己累垮了；或者反过来，太自我放纵了。总之平衡被打破了。",
      insight: "爱自己和爱别人需要平衡。要么你只顾自己不管别人，要么你只顾别人委屈自己。这两种都不健康。",
      action: "检查一下你的生活：是不是太忙了没时间休息？还是太放纵了该做的事没做？找回平衡点。"
    }
  },

  4: {
    name: "皇帝 (The Emperor)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg",
    upright: {
      energy: "现在需要理性、计划和执行力。感性先放一边，该干正事了。就像考试前要好好复习，不能光凭感觉。",
      insight: "没有规矩不成方圆。有些时候就是需要纪律和计划，不能随性而为。定个目标，列个计划，一步步来。",
      action: "制定一个清晰的计划：要做什么、怎么做、什么时候做。然后严格执行。不要拖延，不要找借口。"
    },
    reversed: {
      energy: "要么太死板控制欲太强，要么完全没有纪律混乱不堪。极端了。",
      insight: "控制欲太强会让人窒息，完全没规矩也会一团糟。你现在是哪一种？需要调整一下。",
      action: "如果你太严格了，放松一点，让别人有自由空间。如果你太散漫了，给自己定点规矩，别再拖了。"
    }
  },

  5: {
    name: "教皇 (The Hierophant)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg",
    upright: {
      energy: "现在适合跟随传统、学习经验、寻求指导。别自己瞎摸索了，找个懂的人教你，或者看看前人怎么做的。",
      insight: "有些东西确实需要学习和传承。不是所有事情都要重新发明轮子。虚心学习，少走弯路。",
      action: "找个导师、老师或者前辈请教。或者看看相关的书籍、课程。站在巨人的肩膀上会看得更远。"
    },
    reversed: {
      energy: "你可能太固执，不愿意听别人意见；或者盲目跟风，没有自己的想法。",
      insight: "传统不一定都对，但也不能全盘否定。要学会分辨哪些该听，哪些该质疑。有自己的判断力。",
      action: "如果你太固执，试着听听不同的声音。如果你太盲从，问问自己真正想要什么。找到平衡。"
    }
  },

  6: {
    name: "恋人 (The Lovers)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg",
    upright: {
      energy: "重要的选择时刻到了，通常跟感情或者重要关系有关。你需要做个决定，而且这个决定会影响很大。",
      insight: "选择的关键不是对错，而是你真正想要什么。听从你的内心，选你真正在乎的那个。不要违背自己。",
      action: "认真想想你的价值观和优先顺序。什么对你最重要？然后根据这个来做选择。选了就不要后悔。"
    },
    reversed: {
      energy: "关系出了问题，或者你在两难选择中犹豫不决。可能是价值观不一致，也可能是缺乏沟通。",
      insight: "逃避解决不了问题。该说的话要说清楚，该做的选择要做出来。拖着只会更糟。",
      action: "如果是感情问题，好好谈一谈。如果是选择困难，列出优缺点，认真权衡。别拖了。"
    }
  },

  7: {
    name: "战车 (The Chariot)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg",
    upright: {
      energy: "冲！现在是全力以赴的时候。你有目标，有动力，什么都别想，就是干！",
      insight: "成功需要决心和行动力。不要犹豫，不要分心，认准方向冲就对了。相信自己能赢。",
      action: "集中全部精力在最重要的目标上。排除干扰，全速前进。现在不是多线作战的时候，专注才能成功。"
    },
    reversed: {
      energy: "你可能失控了，或者方向不对但还在硬冲。像是油门踩到底但方向盘没握稳。",
      insight: "速度快不代表方向对。停下来检查一下，你确定你走的是对的路吗？别只顾着冲，也要看看路。",
      action: "暂停一下，重新评估。如果方向错了，赶紧调整。如果只是遇到困难，那就调整策略再冲。"
    }
  },

  8: {
    name: "力量 (Strength)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg",
    upright: {
      energy: "真正的力量不是蛮力，而是温柔但坚定的控制。你现在有足够的耐心和勇气去面对挑战。",
      insight: "暴力解决不了问题，温柔却可以。有些事情需要慢慢来，用爱和耐心去化解，而不是硬碰硬。",
      action: "用温和但坚定的方式处理问题。对自己有信心，但不要急躁。耐心一点，事情会好起来的。"
    },
    reversed: {
      energy: "你可能失去了信心，或者变得太软弱、太冲动。要么不敢面对，要么用力过猛。",
      insight: "找回你的内在力量。你比你想象的更强大，但也需要控制好你的情绪和冲动。",
      action: "如果你害怕，告诉自己你可以做到。如果你太冲动，深呼吸冷静一下。找回平衡。"
    }
  },

  9: {
    name: "隐士 (The Hermit)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg",
    upright: {
      energy: "现在需要一个人静一静，好好想想人生。社交可以先放一边，给自己一点独处的时间。",
      insight: "有些答案需要在安静中找到。远离喧嚣，向内看，你会发现很多之前没注意到的事情。",
      action: "给自己安排一段独处时间。可以是一个周末，可以是每天晚上的一小时。关掉手机，一个人想想事情。"
    },
    reversed: {
      energy: "你可能太孤立了，或者在逃避社交。要么孤独得病了，要么假装自己不需要别人。",
      insight: "独处是好事，但孤立自己不是。人是社会性动物，完全断绝联系会出问题。适度就好。",
      action: "如果你太孤僻了，试着联系朋友。如果只是需要暂时独处，那就告诉别人你需要一点空间。"
    }
  },

  10: {
    name: "命运之轮 (Wheel of Fortune)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg",
    upright: {
      energy: "事情正在转变，可能是好转也可能是挑战。总之，变化来了，你要准备好。",
      insight: "人生就像轮子转动，有高潮就有低谷。接受变化，顺其自然。塞翁失马，焉知非福。",
      action: "做好准备迎接变化。如果是好事，就享受它。如果是挑战，就勇敢面对。变化是唯一的不变。"
    },
    reversed: {
      energy: "你可能在抗拒变化，或者运气不太好。事情不如意，而且你还不愿意接受。",
      insight: "有些事情你控制不了，与其抱怨不如接受。运气会变，坏事不会永远坏下去。",
      action: "接受现实，调整心态。与其抱怨为什么倒霉，不如想想怎么应对。总会好起来的。"
    }
  },

  11: {
    name: "正义 (Justice)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg",
    upright: {
      energy: "该怎样就怎样，公平公正很重要。你的选择会有相应的结果，好的坏的都是你应得的。",
      insight: "种什么因得什么果。不要抱怨不公平，看看自己做了什么。承担责任，做对的事。",
      action: "做决定时要客观理性。权衡利弊，公平对待每个人。不要感情用事，也不要逃避责任。"
    },
    reversed: {
      energy: "事情不公平，或者你在逃避后果。要么被不公对待，要么自己做了不公的事。",
      insight: "如果你受了委屈，该争取就争取。如果你做错了事，该道歉就道歉。不要逃避。",
      action: "面对现实，该怎么办就怎么办。不公平要争取，做错了要承认。别拖。"
    }
  },

  12: {
    name: "倒吊人 (The Hanged Man)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg",
    upright: {
      energy: "现在需要换个角度看问题，可能还要做点牺牲。暂时的不舒服换来长远的好处。",
      insight: "有时候放手比抓紧更重要。停下来想想，也许换个思路问题就解决了。牺牲小的，得到大的。",
      action: "停止挣扎，试着换个角度思考。也许问题不是你想的那样。愿意暂时放弃一些东西，可能会有意外收获。"
    },
    reversed: {
      energy: "你可能在做无谓的牺牲，或者一直拖延不愿改变。卡住了但不愿承认。",
      insight: "不是所有牺牲都有价值。如果你一直在等什么，也许该主动行动了。别再拖了。",
      action: "问问自己：这个等待有意义吗？如果没有，那就行动起来。如果有，那就耐心等待但别抱怨。"
    }
  },

  13: {
    name: "死神 (Death)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg",
    upright: {
      energy: "某个阶段结束了，新的开始即将到来。别害怕，这是必要的转变。旧的不去新的不来。",
      insight: "放手让它走吧。抓着过去不放，新的好事就来不了。接受结束，迎接开始。",
      action: "整理一下，该扔的扔，该放手的放手。给新的东西腾地方。不要害怕变化，拥抱它。"
    },
    reversed: {
      energy: "你在抗拒必要的改变，或者变化来得太慢太痛苦。明知道该放手却不肯放。",
      insight: "有些事情结束是好事，拖着只会更痛苦。与其慢慢煎熬，不如快刀斩乱麻。",
      action: "做个了断吧。该结束的就让它结束。不要再拖了，长痛不如短痛。"
    }
  },

  14: {
    name: "节制 (Temperance)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg",
    upright: {
      energy: "现在需要平衡和耐心。不要极端，慢慢来，找到中间的平衡点。",
      insight: "过犹不及。太快太慢都不好，太多太少也不行。适度最重要。慢慢调整，找到最舒服的状态。",
      action: "检查一下你的生活哪里失衡了。工作太多？休息太少？然后慢慢调整。不要急，一点点来。"
    },
    reversed: {
      energy: "失衡了，要么太过要么不及。极端、不耐烦、失控。",
      insight: "你走极端了。生活需要平衡，不能只顾一头。找回中间地带。",
      action: "停止极端行为。太拼命就休息，太懒散就动起来。找回平衡。"
    }
  },

  15: {
    name: "恶魔 (The Devil)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg",
    upright: {
      energy: "你可能被某种欲望、习惯或关系困住了。就像上瘾一样，明知不好但停不下来。",
      insight: "诱惑很强大，但锁链是你自己戴上的。其实你随时可以挣脱，只是你不愿意。问问自己：我真的想要这样吗？",
      action: "认清让你上瘾或困住你的东西。然后决定：要么接受它，要么摆脱它。别自欺欺人说'我控制不了'。"
    },
    reversed: {
      energy: "你开始意识到问题了，或者正在挣脱束缚。觉醒的第一步。",
      insight: "看清真相了就好办了。不要自责，但也不要再回头。向前走。",
      action: "继续挣脱。远离那些不好的人事物。寻求帮助如果需要的话。你已经走在对的路上了。"
    }
  },

  16: {
    name: "塔 (The Tower)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg",
    upright: {
      energy: "突如其来的变故，一切都乱了。就像地震一样，你精心构建的东西突然崩塌了。",
      insight: "虽然痛苦，但也许这是必要的。有些东西建立在错误的基础上，迟早要倒。现在倒了反而是好事，可以重新来。",
      action: "先稳住，别慌。等尘埃落定后，评估损失，然后重建。这次要建在更牢固的基础上。"
    },
    reversed: {
      energy: "危机被避免了，或者你在努力避免崩溃。可能躲过一劫，也可能只是延后了。",
      insight: "如果侥幸躲过，那就趁机加固基础。如果只是延后，那就做好准备。",
      action: "检查你生活中不稳定的部分。该修的修，该放弃的放弃。别等到真的崩了才后悔。"
    }
  },

  17: {
    name: "星星 (The Star)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg",
    upright: {
      energy: "风暴过后的平静，希望重新燃起。虽然还没完全好，但已经看到曙光了。",
      insight: "保持希望和信念。最黑暗的时候已经过去了，现在是慢慢疗愈和恢复的时候。未来会更好。",
      action: "给自己一点时间恢复。做些让你感到平静和希望的事。相信一切会好起来的。"
    },
    reversed: {
      energy: "失去希望，感到绝望。看不到未来，觉得一切都没意义。",
      insight: "黑暗不会永远持续。现在看不到希望不代表没有希望。只是暂时被乌云遮住了。",
      action: "寻求支持和帮助。和信任的人聊聊。做些小事来重建信心。一点点来，不要放弃。"
    }
  },

  18: {
    name: "月亮 (The Moon)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg",
    upright: {
      energy: "事情不太清楚，充满疑惑和不确定。就像在雾里走路，看不清前方。",
      insight: "相信你的直觉，但也别被幻觉误导。有些恐惧是想象出来的，但也要小心真正的危险。",
      action: "慢慢来，不要急着做决定。等待更多信息。注意你的梦和直觉，但也要保持理性。"
    },
    reversed: {
      energy: "迷雾开始散去，或者你陷入更深的混乱。要么开始看清真相，要么完全迷失。",
      insight: "如果开始清醒，那就继续。如果更迷糊了，停下来冷静冷静。",
      action: "如果看清了，就行动。如果还糊涂，就等等。不要在迷糊的时候做重大决定。"
    }
  },

  19: {
    name: "太阳 (The Sun)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg",
    upright: {
      energy: "一切都好！阳光明媚，心情愉快，事事顺利。享受这段美好时光吧。",
      insight: "成功、快乐、温暖。你值得拥有这一切。尽情享受，也别忘了分享快乐给身边的人。",
      action: "庆祝一下！做些开心的事，和喜欢的人在一起。把这份快乐传递出去。"
    },
    reversed: {
      energy: "快乐被打折扣了，或者你无法完全享受好时光。可能是自己想太多，也可能是有小挫折。",
      insight: "别让小事破坏大局。即使不是100分的完美，80分也很不错了。学会知足。",
      action: "放松心态，别追求完美。享受当下拥有的，别总想着缺什么。"
    }
  },

  20: {
    name: "审判 (Judgement)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg",
    upright: {
      energy: "重生和觉醒的时刻。过去的事情需要一个总结，新的阶段要开始了。",
      insight: "是时候放下过去，原谅自己和别人。从经验中学习，然后向前看。你已经不是过去的你了。",
      action: "回顾一下过去，想想你学到了什么。然后放下，迎接新的开始。给自己和别人一个新的机会。"
    },
    reversed: {
      energy: "你可能在逃避反省，或者对过去念念不忘。不愿放下，也不愿面对。",
      insight: "不面对过去就无法前进。该反省的反省，该放下的放下。别再纠结了。",
      action: "逼自己面对你一直在逃避的事情。反省、原谅、放下。然后向前走。"
    }
  },

  21: {
    name: "世界 (The World)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg",
    upright: {
      energy: "完成了！一个阶段圆满结束，目标达成，感觉超棒。就像通关了游戏的最后一关。",
      insight: "享受这份成就感。你做到了，你值得庆祝。但也要知道，这是一个循环的结束，也是新循环的开始。",
      action: "好好庆祝你的成功！然后休息一下，准备下一个目标。你已经证明了自己，现在可以信心满满地迎接新挑战。"
    },
    reversed: {
      energy: "差一点点就完成了，或者完成了但感觉不完整。可能是拖延，可能是目标没达到。",
      insight: "看看哪里还差一点。是真的差一点，还是你期望太高？调整一下，继续努力或者学会满足。",
      action: "如果真的差一点，那就再努力一下完成它。如果已经够好了，那就接受它。别让完美主义毁了你的成就感。"
    }
  },

  // ============================================
  // 小阿卡纳 - 权杖 (Wands) 22-35
  // 行动、热情、创造力
  // ============================================
  
  22: {
    name: "权杖王牌 (Ace of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/waac.jpg",
    upright: {
      energy: "新的开始，充满热情和动力！就像突然想到一个超棒的点子，迫不及待想去做。",
      insight: "机会来了！抓住它，开始行动。现在的热情是真实的，值得追求。",
      action: "趁着热情还在，立刻开始做！不要等，不要犹豫，现在就动手。"
    },
    reversed: {
      energy: "热情消退了，或者机会没抓住。可能是拖延，可能是缺乏动力。",
      insight: "重新找回激情，或者承认这个想法不适合你。别强迫自己做不想做的事。",
      action: "如果还想做，重新点燃热情。如果不想做了，那就放手。"
    }
  },

  23: {
    name: "权杖二 (Two of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa02.jpg",
    upright: {
      energy: "你有计划，有选择，现在在考虑下一步怎么走。就像站在路口看地图。",
      insight: "是时候做决定了。选好方向，制定计划，然后出发。",
      action: "评估你的选项，做个决定。别再纠结了，选一个开始走。"
    },
    reversed: {
      energy: "计划不顺，或者不敢做决定。可能是害怕失败，可能是选择太多。",
      insight: "不做决定也是一种决定。如果一直拖着，机会就没了。",
      action: "克服恐惧，做个选择。即使错了也比不选强。"
    }
  },

  24: {
    name: "权杖三 (Three of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa03.jpg",
    upright: {
      energy: "事情已经开始了，现在在等结果。就像投了简历等面试通知。",
      insight: "耐心等待，但也要做好准备。机会快来了。",
      action: "继续推进，同时保持耐心。该准备的准备好，然后等待时机。"
    },
    reversed: {
      energy: "等待变成了焦虑，或者计划遇到障碍。可能是准备不足。",
      insight: "检查一下哪里出了问题。是时机不对，还是准备不够？",
      action: "调整计划，或者补充准备。别只是傻等。"
    }
  },

  25: {
    name: "权杖四 (Four of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa04.jpg",
    upright: {
      energy: "值得庆祝的时刻！一个阶段性的成功，大家一起开心。",
      insight: "享受这个时刻，和重要的人分享快乐。你值得庆祝。",
      action: "办个聚会，庆祝一下！和朋友家人分享你的成功和快乐。"
    },
    reversed: {
      energy: "庆祝被打折扣，或者关系不和谐。可能是没达到期望。",
      insight: "降低期待，或者改善关系。别让小问题毁了大好时光。",
      action: "如果有矛盾，先解决。如果只是期望太高，调整心态。"
    }
  },

  26: {
    name: "权杖五 (Five of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa05.jpg",
    upright: {
      energy: "竞争、冲突、混乱。每个人都想争第一，场面有点乱。",
      insight: "竞争不一定是坏事，但也别太认真。保持头脑清醒。",
      action: "参与但别被情绪控制。这只是竞争，不是生死战。"
    },
    reversed: {
      energy: "冲突减少了，或者你在逃避竞争。可能是和解了，可能是放弃了。",
      insight: "如果是和解，那很好。如果是逃避，想想是不是该面对。",
      action: "该竞争就竞争，该和解就和解。别逃避也别太激进。"
    }
  },

  27: {
    name: "权杖六 (Six of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa06.jpg",
    upright: {
      energy: "胜利！你赢了，得到认可和赞扬。就像考试考了第一名。",
      insight: "享受成功，但保持谦虚。你做得很好，但也要感谢帮助过你的人。",
      action: "庆祝你的成功，分享喜悦。但别骄傲，继续努力。"
    },
    reversed: {
      energy: "失败了，或者成功被打折扣。可能是没得到应有的认可。",
      insight: "即使没人看见，你的努力也有价值。不要因为缺少掌声就放弃。",
      action: "自己认可自己。外部认可很好，但自我肯定更重要。"
    }
  },

  28: {
    name: "权杖七 (Seven of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa07.jpg",
    upright: {
      energy: "你需要捍卫自己的立场。周围都是挑战，但你不能退缩。",
      insight: "坚持下去！这个位置是你辛苦得来的，别轻易放弃。",
      action: "捍卫你的立场，但选择你的战场。不是每个挑战都值得应对。"
    },
    reversed: {
      energy: "精疲力尽，或者放弃了抵抗。可能是累了，可能是不值得。",
      insight: "有时候退一步是明智的。看看这场战斗值不值得打。",
      action: "如果值得，休息后再战。如果不值得，就撤退。"
    }
  },

  29: {
    name: "权杖八 (Eight of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa08.jpg",
    upright: {
      energy: "事情进展飞快！一切都在快速发生，节奏很快。",
      insight: "抓紧时间，跟上节奏。现在是高速发展的时期。",
      action: "保持专注，快速行动。机会稍纵即逝，别耽搁。"
    },
    reversed: {
      energy: "进度慢了，或者事情被延迟。可能是沟通不畅，可能是障碍太多。",
      insight: "找出延迟的原因。是外部因素还是内部问题？",
      action: "解决障碍，推动进度。如果无法加速，就调整期望。"
    }
  },

  30: {
    name: "权杖九 (Nine of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa09.jpg",
    upright: {
      energy: "累了，受伤了，但还在坚持。就像马拉松最后几公里。",
      insight: "你已经走了很远，别在最后关头放弃。坚持一下，终点就在前面。",
      action: "休息一下恢复体力，但别停下来。最后冲刺，你可以的！"
    },
    reversed: {
      energy: "真的撑不住了，或者过度防御。可能是需要休息，可能是太紧张。",
      insight: "知道什么时候该休息也是智慧。别把自己逼到崩溃。",
      action: "如果真的累了，休息。如果只是紧张，放松一点。"
    }
  },

  31: {
    name: "权杖十 (Ten of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa10.jpg",
    upright: {
      energy: "压力太大了，承担的责任太多。就像背了一堆东西爬山。",
      insight: "你可能需要放下一些东西。不是所有事情都要你自己扛。",
      action: "检查一下哪些是必须的，哪些可以放手或委托。减轻负担。"
    },
    reversed: {
      energy: "开始放下负担了，或者你在逃避责任。",
      insight: "放下负担是好事，但也要负起该负的责任。别矫枉过正。",
      action: "该放的放，该担的担。找到平衡。"
    }
  },

  32: {
    name: "权杖侍从 (Page of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wapa.jpg",
    upright: {
      energy: "充满好奇和热情的新手。对什么都感兴趣，想要尝试。",
      insight: "保持这份热情和好奇心。探索、学习、尝试新事物。",
      action: "去试试看！别担心失败，重要的是体验和学习。"
    },
    reversed: {
      energy: "热情三分钟，或者只说不做。光有想法没有行动。",
      insight: "把想法变成行动。不要只是空想。",
      action: "选一个想法，认真执行。别什么都想做，最后什么都没做。"
    }
  },

  33: {
    name: "权杖骑士 (Knight of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wakn.jpg",
    upright: {
      energy: "充满激情和冲劲！勇敢、冒险、不怕失败。",
      insight: "有冒险精神很好，但也要有点计划。别太冲动。",
      action: "勇敢行动，但留点理智。不要莽撞，也不要畏缩。"
    },
    reversed: {
      energy: "太冲动了，或者犹豫不决。要么鲁莽，要么胆怯。",
      insight: "找到冲动和理智的平衡。别只凭热情做事。",
      action: "如果太冲动，冷静一下。如果太胆小，勇敢一点。"
    }
  },

  34: {
    name: "权杖王后 (Queen of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/waqu.jpg",
    upright: {
      energy: "自信、有魅力、充满活力。知道自己要什么，也知道怎么得到。",
      insight: "相信自己，展现你的魅力和能力。你有足够的力量实现目标。",
      action: "自信地行动。吸引你想要的人和机会。做你自己。"
    },
    reversed: {
      energy: "缺乏自信，或者太过霸道。要么不敢表现，要么太强势。",
      insight: "找回你的自信，但也要尊重别人。平衡很重要。",
      action: "如果太弱，站起来。如果太强，温柔一点。"
    }
  },

  35: {
    name: "权杖国王 (King of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/waki.jpg",
    upright: {
      energy: "天生的领导者。有远见、有激情、有执行力。",
      insight: "承担领导责任，带领团队前进。你有这个能力。",
      action: "制定愿景，激励团队，执行计划。做个好领袖。"
    },
    reversed: {
      energy: "独裁、傲慢，或者缺乏领导力。要么太霸道，要么太软弱。",
      insight: "领导力不是控制，而是激励。调整你的风格。",
      action: "如果太强硬，学会倾听。如果太软弱，拿出魄力。"
    }
  },

  // ============================================
  // 小阿卡纳 - 圣杯 (Cups) 36-49
  // 情感、关系、直觉
  // ============================================

  36: {
    name: "圣杯王牌 (Ace of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuac.jpg",
    upright: {
      energy: "情感的新开始。可能是新恋情，可能是新友谊，也可能是内心的平和。",
      insight: "打开你的心，接受爱和温暖。好的情感正在到来。",
      action: "表达你的情感。对喜欢的人说出来，给重要的人关怀。"
    },
    reversed: {
      energy: "情感受阻，或者心门关闭了。可能是害怕受伤，可能是失望。",
      insight: "治愈过去的伤痛，才能迎接新的感情。别让过去毁了未来。",
      action: "给自己时间疗伤，但也要学会重新信任。慢慢打开心门。"
    }
  },

  37: {
    name: "圣杯二 (Two of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu02.jpg",
    upright: {
      energy: "美好的关系和连接。可能是恋爱，可能是深厚的友谊。互相理解和支持。",
      insight: "珍惜这段关系。相互尊重，平等对待，一起成长。",
      action: "投入这段关系。表达爱意，建立信任，共同前进。"
    },
    reversed: {
      energy: "关系不平衡，或者出现问题。可能是误解，可能是失衡。",
      insight: "沟通是关键。说出你的感受，也听听对方的想法。",
      action: "好好谈谈。解决误会，重建平衡。如果无法修复，考虑放手。"
    }
  },

  38: {
    name: "圣杯三 (Three of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu03.jpg",
    upright: {
      energy: "庆祝、友谊、欢乐时光！和朋友在一起很开心。",
      insight: "享受社交，珍惜友谊。快乐要和朋友分享才更快乐。",
      action: "约朋友出来玩！庆祝生活中的美好时刻。"
    },
    reversed: {
      energy: "社交出问题，或者感觉被排挤。可能是误会，可能是关系变质。",
      insight: "检查你的社交圈。哪些人是真朋友，哪些是塑料友谊？",
      action: "远离负能量的人，靠近真正关心你的人。"
    }
  },

  39: {
    name: "圣杯四 (Four of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu04.jpg",
    upright: {
      energy: "无聊、不满足、提不起兴趣。就像什么都有但还是不开心。",
      insight: "你可能错过了眼前的好机会。抬起头看看，也许惊喜就在那里。",
      action: "重新审视你拥有的。别只看没有的，也看看已经有的。"
    },
    reversed: {
      energy: "开始重新振作，或者陷入更深的冷漠。",
      insight: "如果醒悟了就好。如果更糟了，寻求帮助。",
      action: "主动寻找新的可能性。别等着机会来找你。"
    }
  },

  40: {
    name: "圣杯五 (Five of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu05.jpg",
    upright: {
      energy: "失望、悲伤、失去。专注在失去的东西上，忘了还拥有的。",
      insight: "悲伤是正常的，但别一直沉浸其中。看看你还有什么。",
      action: "允许自己难过，但也要向前看。失去的回不来了，但还有未来。"
    },
    reversed: {
      energy: "开始接受失去，或者陷入更深的悲伤。",
      insight: "疗愈需要时间。如果开始好转，继续。如果更糟，寻求支持。",
      action: "一点点放下。不要强迫自己，但也不要停滞不前。"
    }
  },

  41: {
    name: "圣杯六 (Six of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu06.jpg",
    upright: {
      energy: "怀旧、童年、纯真。想起过去的美好时光。",
      insight: "回忆是美好的，但别活在过去。珍惜回忆，但也要活在当下。",
      action: "联系老朋友，重温美好回忆。但也要创造新的快乐。"
    },
    reversed: {
      energy: "被过去困住，或者idealizing过去。无法向前。",
      insight: "过去不会回来了。放下它，拥抱现在和未来。",
      action: "如果一直回头看，就看不到前方的路。向前走。"
    }
  },

  42: {
    name: "圣杯七 (Seven of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu07.jpg",
    upright: {
      energy: "选择太多，幻想太多，不知道哪个是真的。",
      insight: "不是所有看起来美好的都是真的。保持现实，别被幻觉迷惑。",
      action: "弄清楚哪些是真实可行的，哪些只是幻想。做现实的选择。"
    },
    reversed: {
      energy: "开始看清现实，或者更加迷失。",
      insight: "如果清醒了，很好。如果更迷糊了，找人帮你分析。",
      action: "脚踏实地。选一个现实的目标，开始行动。"
    }
  },

  43: {
    name: "圣杯八 (Eight of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu08.jpg",
    upright: {
      energy: "是时候离开了。这里已经不能满足你了，你需要寻找更多。",
      insight: "离开不是失败，而是成长。有勇气离开舒适区，寻找更好的。",
      action: "如果某段关系或工作已经不适合你，勇敢离开。去寻找真正属于你的。"
    },
    reversed: {
      energy: "害怕离开，或者逃避改变。明知不合适却不敢走。",
      insight: "害怕未知很正常，但留在错误的地方更痛苦。",
      action: "如果该走就走。给自己一个寻找幸福的机会。"
    }
  },

  44: {
    name: "圣杯九 (Nine of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu09.jpg",
    upright: {
      energy: "愿望成真！情感上很满足，心想事成。",
      insight: "享受这份满足感。你值得拥有幸福。",
      action: "庆祝你的成功和幸福。也分享给身边的人。"
    },
    reversed: {
      energy: "不满足，或者得到了却不快乐。可能是期望太高。",
      insight: "检查你的期望。是真的不好，还是你要求太多？",
      action: "调整期望，或者寻找真正让你快乐的东西。"
    }
  },

  45: {
    name: "圣杯十 (Ten of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cu10.jpg",
    upright: {
      energy: "情感圆满，家庭幸福，一切都好。人生赢家的感觉。",
      insight: "珍惜这份幸福。和爱的人在一起是最大的财富。",
      action: "维护你的关系，珍惜你的家人朋友。继续培养这份幸福。"
    },
    reversed: {
      energy: "家庭问题，或者关系不和谐。可能是期望太高没达到。",
      insight: "完美的家庭不存在。接受不完美，努力改善。",
      action: "沟通，理解，妥协。修复关系需要所有人的努力。"
    }
  },

  46: {
    name: "圣杯侍从 (Page of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cupa.jpg",
    upright: {
      energy: "情感的信使，可能是好消息或新的情感体验。充满创意和想象。",
      insight: "保持开放的心态。好消息可能就要来了。",
      action: "表达你的情感和创意。别压抑你的感受。"
    },
    reversed: {
      energy: "情感不成熟，或者消息有变。可能是太天真，可能是失望。",
      insight: "保持现实。不要把一切想得太美好。",
      action: "成熟一点看待感情。别太幼稚，也别太cynical。"
    }
  },

  47: {
    name: "圣杯骑士 (Knight of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cukn.jpg",
    upright: {
      energy: "浪漫、理想主义、追求梦想。充满情感和魅力。",
      insight: "追求你的理想，但也要脚踏实地。浪漫很好，但别脱离现实。",
      action: "表达你的情感，追求你的梦想。但也要有计划和行动。"
    },
    reversed: {
      energy: "太理想化，或者情感不稳定。可能是不切实际，可能是情绪化。",
      insight: "梦想要有，但也要现实。别活在幻想里。",
      action: "平衡理想和现实。把梦想变成可行的计划。"
    }
  },

  48: {
    name: "圣杯王后 (Queen of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuqu.jpg",
    upright: {
      energy: "情感成熟，直觉强，有同理心。温柔但有力量。",
      insight: "相信你的直觉。用爱和理解对待自己和他人。",
      action: "倾听你的内心，照顾好自己的情感。也关怀身边的人。"
    },
    reversed: {
      energy: "情感依赖，或者过度付出。可能是没边界，可能是情感操控。",
      insight: "爱自己和爱别人要平衡。别失去自我。",
      action: "建立健康的边界。照顾别人的同时也要照顾自己。"
    }
  },

  49: {
    name: "圣杯国王 (King of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuki.jpg",
    upright: {
      energy: "情感智慧，平衡理性和感性。成熟稳重，值得信赖。",
      insight: "用头脑和心一起做决定。理性和感性都重要。",
      action: "做个情感上成熟的人。控制情绪，但也不压抑感受。"
    },
    reversed: {
      energy: "情感压抑，或者情绪失控。要么太冷漠，要么太情绪化。",
      insight: "找到情感的平衡点。别太冷也别太热。",
      action: "如果太压抑，允许自己感受。如果太情绪化，学会控制。"
    }
  },

  // ============================================
  // 小阿卡纳 - 宝剑 (Swords) 50-63
  // 思想、沟通、冲突
  // ============================================

  50: {
    name: "宝剑王牌 (Ace of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swac.jpg",
    upright: {
      energy: "突破！新的想法，清晰的思路。就像突然想通了一件事。",
      insight: "真相大白。用你的理智和逻辑解决问题。",
      action: "抓住这个清晰的时刻。把想法写下来，制定计划。"
    },
    reversed: {
      energy: "思路混乱，或者沟通不畅。可能是误解，可能是想不通。",
      insight: "理清思路。别在混乱中做决定。",
      action: "慢慢来，一步步分析。必要时寻求帮助。"
    }
  },

  51: {
    name: "宝剑二 (Two of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw02.jpg",
    upright: {
      energy: "左右为难，不知道该选哪个。僵持不下。",
      insight: "逃避不能解决问题。你需要做个决定。",
      action: "收集信息，权衡利弊，然后做决定。别再拖了。"
    },
    reversed: {
      energy: "终于做决定了，或者陷入更深的僵局。",
      insight: "如果决定了，很好。如果更僵了，改变策略。",
      action: "打破僵局。可能需要妥协，可能需要第三方帮助。"
    }
  },

  52: {
    name: "宝剑三 (Three of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw03.jpg",
    upright: {
      energy: "心碎、背叛、痛苦。情感上的伤害。",
      insight: "痛苦是真实的，允许自己悲伤。但也要知道这会过去。",
      action: "给自己时间疗伤。哭出来，说出来。寻求支持。"
    },
    reversed: {
      energy: "开始疗愈，或者伤口更深。",
      insight: "如果在好转，继续。如果更糟，寻求专业帮助。",
      action: "原谅和放下需要时间。一点点来，不要勉强。"
    }
  },

  53: {
    name: "宝剑四 (Four of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw04.jpg",
    upright: {
      energy: "需要休息和恢复。暂停一下，给自己充电的时间。",
      insight: "休息不是浪费时间，而是为了更好地前进。",
      action: "停下来休息。睡觉、冥想、放空。让大脑和身体都休息。"
    },
    reversed: {
      energy: "休息够了可以出发了，或者强迫自己休息。",
      insight: "知道什么时候该休息，什么时候该行动。",
      action: "如果恢复了，开始行动。如果还累，继续休息。"
    }
  },

  54: {
    name: "宝剑五 (Five of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw05.jpg",
    upright: {
      energy: "冲突、争吵、输赢。但赢得不光彩，或者根本就是两败俱伤。",
      insight: "有些战斗不值得打。即使赢了也可能失去更多。",
      action: "考虑是否值得继续争斗。有时候放手是更明智的选择。"
    },
    reversed: {
      energy: "冲突结束，或者你在逃避面对。可能是和解，可能是认输。",
      insight: "结束冲突通常是好事。但也要面对问题，别只是逃避。",
      action: "如果能和解就和解。如果该认错就认错。别死要面子。"
    }
  },

  55: {
    name: "宝剑六 (Six of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw06.jpg",
    upright: {
      energy: "过渡、离开困境、往更好的地方去。虽然不容易，但必要。",
      insight: "离开是为了更好的未来。虽然不舍，但这是对的选择。",
      action: "继续前进。不要回头看。新的开始在前方等你。"
    },
    reversed: {
      energy: "被困住无法离开，或者抗拒改变。",
      insight: "有时候我们自己选择留在糟糕的处境。为什么？",
      action: "找出阻碍你离开的原因。然后克服它。"
    }
  },

  56: {
    name: "宝剑七 (Seven of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw07.jpg",
    upright: {
      energy: "策略、欺骗、偷偷摸摸。可能是你在骗人，可能是被骗。",
      insight: "诚实是最好的策略。耍小聪明可能一时得逞，但最终会出问题。",
      action: "如果你在骗人，停下来。如果被骗了，保护自己。"
    },
    reversed: {
      energy: "真相被揭露，或者你在改过自新。",
      insight: "诚实面对自己和他人。骗不了一辈子的。",
      action: "如果做错了，承认并改正。如果发现被骗，离开。"
    }
  },

  57: {
    name: "宝剑八 (Eight of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw08.jpg",
    upright: {
      energy: "被困住，无助，看不到出路。但其实束缚是你自己想象的。",
      insight: "你比你想象的更自由。那些限制大多是你自己给自己的。",
      action: "摘下眼罩，解开绳子。出路就在那里，只是你没看到。"
    },
    reversed: {
      energy: "开始挣脱束缚，或者陷入更深的受害者心态。",
      insight: "如果在解放自己，很好。如果在抱怨，改变心态。",
      action: "停止当受害者。承担责任，寻找出路。"
    }
  },

  58: {
    name: "宝剑九 (Nine of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw09.jpg",
    upright: {
      energy: "焦虑、失眠、恐惧。想太多，担心太多。",
      insight: "你担心的大多数事情不会发生。别让恐惧控制你。",
      action: "深呼吸，放松。找人聊聊。必要时寻求专业帮助。"
    },
    reversed: {
      energy: "焦虑减轻，或者陷入更深的绝望。",
      insight: "如果好转了，继续照顾自己。如果更糟，立即寻求帮助。",
      action: "心理健康很重要。不要一个人扛。"
    }
  },

  59: {
    name: "宝剑十 (Ten of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/sw10.jpg",
    upright: {
      energy: "彻底结束，惨败，触底。但也意味着最糟糕的已经过去了。",
      insight: "跌到谷底反而是好事，因为只能向上了。结束就是新的开始。",
      action: "接受结束，允许自己难过。然后站起来，重新开始。"
    },
    reversed: {
      energy: "开始恢复，或者拒绝接受结束。",
      insight: "如果在恢复，很好。如果还在否认，面对现实吧。",
      action: "结束了就结束了。接受它，向前走。"
    }
  },

  60: {
    name: "宝剑侍从 (Page of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swpa.jpg",
    upright: {
      energy: "好奇、警觉、爱学习。想要了解真相。",
      insight: "保持好奇心，但也要谨慎。不是所有信息都是真的。",
      action: "调查、学习、提问。但验证信息，别轻信。"
    },
    reversed: {
      energy: "八卦、散播谣言，或者被误导。",
      insight: "小心你说的话和听的话。别传播未经证实的信息。",
      action: "说话前先想想。是真的吗？有必要说吗？善意吗？"
    }
  },

  61: {
    name: "宝剑骑士 (Knight of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swkn.jpg",
    upright: {
      energy: "快速、果断、直接。说话做事都很快。",
      insight: "效率很好，但也要考虑后果。别太冲动。",
      action: "快速行动，但也要三思。直接但不粗鲁。"
    },
    reversed: {
      energy: "太冲动，或者优柔寡断。要么太快，要么太慢。",
      insight: "找到速度和深思的平衡。",
      action: "如果太冲动，慢下来。如果太犹豫，快点决定。"
    }
  },

  62: {
    name: "宝剑王后 (Queen of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swqu.jpg",
    upright: {
      energy: "清晰、客观、独立。能看穿真相，不被感情蒙蔽。",
      insight: "用理智思考，但也不要太冷漠。平衡理性和同情。",
      action: "做决定时保持客观。说真话，但也要善良。"
    },
    reversed: {
      energy: "太冷酷，或者太情绪化。失去了平衡。",
      insight: "理性和感性都需要。别走极端。",
      action: "如果太冷，温暖一点。如果太emotional，理性一点。"
    }
  },

  63: {
    name: "宝剑国王 (King of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swki.jpg",
    upright: {
      energy: "权威、理性、公正。用头脑做决定，不被感情左右。",
      insight: "真理和正义最重要。做对的事，即使不容易。",
      action: "客观分析，公正判断。做决定时用逻辑，不用情绪。"
    },
    reversed: {
      energy: "独裁、冷酷，或者优柔寡断。滥用权力或无法决断。",
      insight: "权力需要责任。公正不等于冷漠。",
      action: "如果太强硬，多点同理心。如果太软弱，拿出魄力。"
    }
  },

  // ============================================
  // 小阿卡纳 - 星币 (Pentacles) 64-77
  // 物质、金钱、实际
  // ============================================

  64: {
    name: "星币王牌 (Ace of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/peac.jpg",
    upright: {
      energy: "新的机会，通常跟钱、工作或物质有关。实实在在的好开始。",
      insight: "抓住这个机会。这是实际的、可以实现的好事。",
      action: "立即行动。这个机会很实在，别犹豫。"
    },
    reversed: {
      energy: "机会溜走了，或者没有实质性的进展。可能是准备不足。",
      insight: "检查你的计划。是机会不好，还是你没准备好？",
      action: "如果还有机会，赶紧准备。如果错过了，等下一个。"
    }
  },

  65: {
    name: "星币二 (Two of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe02.jpg",
    upright: {
      energy: "平衡多个任务或责任。就像同时抛接几个球。",
      insight: "灵活应对，但也要知道轻重缓急。不可能什么都做到完美。",
      action: "管理好你的时间和精力。必要时放下一些不重要的。"
    },
    reversed: {
      energy: "失去平衡，顾此失彼。太多事情应付不过来。",
      insight: "你不是超人。该放手的放手。",
      action: "减少承诺，专注重点。别什么都揽。"
    }
  },

  66: {
    name: "星币三 (Three of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe03.jpg",
    upright: {
      energy: "团队合作，技能被认可。你的工作得到赏识。",
      insight: "合作比单打独斗更有效。尊重每个人的贡献。",
      action: "继续努力，和团队配合好。你的专业会带来成功。"
    },
    reversed: {
      energy: "团队不和，或者你的工作不被认可。可能是沟通问题。",
      insight: "改善沟通，证明价值。或者考虑换环境。",
      action: "如果能改善就改善。如果环境有毒，考虑离开。"
    }
  },

  67: {
    name: "星币四 (Four of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe04.jpg",
    upright: {
      energy: "抓得太紧，不愿放手。可能是钱，可能是其他东西。",
      insight: "安全感很重要，但太吝啬会错过机会。适度就好。",
      action: "检查你是否过度控制或吝啬。学会适当放手。"
    },
    reversed: {
      energy: "开始放手，或者失控挥霍。从一个极端到另一个极端。",
      insight: "找到储蓄和享受的平衡。既不吝啬也不浪费。",
      action: "制定合理的财务计划。该花的花，该存的存。"
    }
  },

  68: {
    name: "星币五 (Five of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe05.jpg",
    upright: {
      energy: "困难时期，可能是经济困难或感觉被排斥。",
      insight: "困难是暂时的。寻求帮助不丢人。",
      action: "别一个人扛。寻求支持，接受帮助。会好起来的。"
    },
    reversed: {
      energy: "开始改善，或者拒绝帮助。",
      insight: "如果在好转，继续努力。如果在拒绝帮助，问问为什么。",
      action: "接受帮助，重建生活。一步步来。"
    }
  },

  69: {
    name: "星币六 (Six of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe06.jpg",
    upright: {
      energy: "给予和接受，慷慨和平衡。可能你在帮助别人，也可能接受帮助。",
      insight: "慷慨很好，但也要有边界。帮助别人的同时照顾好自己。",
      action: "该给的时候给，该收的时候收。保持平衡。"
    },
    reversed: {
      energy: "给予不平等，或者附加条件的帮助。可能是操控。",
      insight: "真正的帮助不求回报也没有附加条件。",
      action: "如果给予，真诚给予。如果接受，确保没有隐藏代价。"
    }
  },

  70: {
    name: "星币七 (Seven of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe07.jpg",
    upright: {
      energy: "评估进度，等待结果。你已经投入了，现在要看看成果。",
      insight: "耐心等待成果。但也要评估是否需要调整。",
      action: "回顾一下你的投入。值得继续吗？需要改变方向吗？"
    },
    reversed: {
      energy: "焦急等待，或者发现投入没有回报。",
      insight: "有些投资需要更长时间。但也要知道什么时候止损。",
      action: "如果值得，继续等。如果不值得，改变策略。"
    }
  },

  71: {
    name: "星币八 (Eight of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe08.jpg",
    upright: {
      energy: "专注、勤奋、精益求精。埋头苦干，提升技能。",
      insight: "熟能生巧。坚持练习会带来成果。",
      action: "继续努力，专注提升。你的勤奋会有回报。"
    },
    reversed: {
      energy: "敷衍了事，或者过度劳累。质量下降。",
      insight: "找到努力和休息的平衡。质量比数量重要。",
      action: "如果太累，休息。如果太懒，认真点。"
    }
  },

  72: {
    name: "星币九 (Nine of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe09.jpg",
    upright: {
      energy: "独立、富足、享受成果。你靠自己实现了成功。",
      insight: "享受你辛苦得来的成果。你值得拥有这一切。",
      action: "庆祝你的独立和成功。继续照顾好自己。"
    },
    reversed: {
      energy: "依赖他人，或者无法享受成果。可能是缺乏安全感。",
      insight: "真正的独立是内在的。不依赖物质或他人来定义自己。",
      action: "培养独立和自信。享受你拥有的。"
    }
  },

  73: {
    name: "星币十 (Ten of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pe10.jpg",
    upright: {
      energy: "物质圆满，家族财富，长期稳定。一切都好。",
      insight: "珍惜你的家庭和传承。财富不只是钱，还有关系和传统。",
      action: "维护家庭关系，建立长期稳定。为未来打基础。"
    },
    reversed: {
      energy: "家庭问题，或者财务不稳。可能是遗产纠纷。",
      insight: "金钱不能解决所有问题。关系比财富更重要。",
      action: "处理家庭问题。不要让钱破坏关系。"
    }
  },

  74: {
    name: "星币侍从 (Page of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pepa.jpg",
    upright: {
      energy: "好学、踏实、新的学习或工作机会。充满潜力。",
      insight: "从基础学起。脚踏实地，一步步来。",
      action: "抓住学习机会。专注、努力、实际。"
    },
    reversed: {
      energy: "不切实际，或者缺乏纪律。光说不练。",
      insight: "梦想需要行动支持。别只是空想。",
      action: "脚踏实地。制定实际的计划并执行。"
    }
  },

  75: {
    name: "星币骑士 (Knight of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pekn.jpg",
    upright: {
      energy: "可靠、负责、稳步前进。虽然慢但确实。",
      insight: "稳健比快速更重要。坚持下去会成功的。",
      action: "继续你的计划。不要急，稳扎稳打。"
    },
    reversed: {
      energy: "太慢太谨慎，或者太懒散。停滞不前。",
      insight: "谨慎是好事，但也不能永远不动。",
      action: "如果太慢，加快点。如果太懒，动起来。"
    }
  },

  76: {
    name: "星币王后 (Queen of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pequ.jpg",
    upright: {
      energy: "实际、照顾他人、善于管理。创造舒适的环境。",
      insight: "照顾好物质和情感需求。创造温暖的家。",
      action: "管理好资源，照顾好自己和家人。创造舒适的生活。"
    },
    reversed: {
      energy: "过度付出，或者过度物质主义。失去平衡。",
      insight: "物质很重要，但不是全部。别忽略情感需求。",
      action: "平衡物质和精神。照顾好自己才能照顾别人。"
    }
  },

  77: {
    name: "星币国王 (King of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/peki.jpg",
    upright: {
      energy: "成功、稳定、富裕。善于管理和建立长期价值。",
      insight: "你有能力创造和维持成功。继续你的智慧管理。",
      action: "建立长期稳定的基础。投资未来，但也享受现在。"
    },
    reversed: {
      energy: "贪婪、物质主义，或者管理不善。可能是腐败或懒惰。",
      insight: "成功不等于贪婪。要有道德地赚钱和管理。",
      action: "检查你的价值观。别为了钱失去integrity。"
    }
  }
};
