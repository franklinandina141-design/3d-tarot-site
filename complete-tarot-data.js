// 完整的78张塔罗牌详细数据库
const TAROT_DETAILED = {
  // 大阿卡纳 (Major Arcana) 0-21
  // ============================================
  
  0: {
    name: "愚者 (The Fool)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
    upright: {
      general: "新的开始、冒险精神、充满可能性。你正站在人生的新起点，不要被恐惧阻挡，勇敢迈出第一步。",
      love: "新恋情即将开始，或现有关系进入全新阶段。保持开放心态，但也要适度谨慎，不要太冲动。",
      career: "转职、创业或新项目的好时机。机会充满吸引力，但需要做好基本功课，别盲目跳跃。",
      finance: "可能有意外收入或新的投资机会。潜力很大但风险也存在，不要孤注一掷。"
    },
    reversed: {
      general: "鲁莽、忽视风险、缺乏计划。你可能太冲动了，需要三思而后行。",
      love: "感情上过于冲动，可能做出后悔的决定。慢下来，想清楚再行动。",
      career: "事业冒险失败，或因准备不足错失机会。需要更周详的规划。",
      finance: "财务损失，可能因冲动消费或投资失误。避开一时兴起的决定。"
    }
  },

  1: {
    name: "魔术师 (The Magician)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg",
    upright: {
      general: "资源、能力、机会都齐备了。你拥有实现目标的所有条件，关键是要开始行动。",
      love: "展现你的魅力和真诚，主动追求。有能力创造理想的关系，沟通是关键。",
      career: "技能和资源到位，是展现专业能力的好时机。主动出击，把握机会。",
      finance: "财务管理能力强，投资眼光准。现在可以放心执行你的理财计划。"
    },
    reversed: {
      general: "有能力但用错地方，或在耍小聪明。别走捷径，诚实做事更有效。",
      love: "感情上玩心机或不够真诚。操控只会破坏关系，坦诚才能赢得信任。",
      career: "才华被浪费，或能力用在不当之处。重新审视你的职业方向。",
      finance: "理财策略有问题，可能被虚假承诺欺骗。回归稳健的财务规划。"
    }
  },

  2: {
    name: "女祭司 (The High Priestess)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg",
    upright: {
      general: "直觉、内在智慧、秘密。答案在你心里，静下来倾听内心的声音。",
      love: "感情需要多用直觉少用分析。有些事情只有你心里知道答案，相信自己的感觉。",
      career: "工作中有隐藏信息或秘密。相信你的直觉判断，不要被表象迷惑。",
      finance: "财务决策需要深入研究。表面看到的不一定是真相，挖掘更多信息。"
    },
    reversed: {
      general: "直觉被压抑，或过度依赖理性。你需要重新连接内在的智慧。",
      love: "感情中缺乏真诚沟通，有秘密或误解。该说的话要说清楚。",
      career: "重要信息被隐瞒，或你忽视了直觉警告。保持警觉。",
      finance: "财务信息不透明，可能有隐藏风险。深入调查再做决定。"
    }
  },

  3: {
    name: "皇后 (The Empress)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg",
    upright: {
      general: "丰盛、滋养、创造力。生活充满温暖和关爱，好好享受这段时光。",
      love: "关系温馨和谐，充满爱意。适合深化感情或考虑组建家庭。",
      career: "创意项目flourish，团队合作愉快。培养新人或项目会有好成果。",
      finance: "财务丰盛，收入稳定增长。投资有收获，但别忘了享受生活。"
    },
    reversed: {
      general: "过度付出导致枯竭，或过度自我放纵。需要找回平衡。",
      love: "关系失衡，一方付出过多。别忘了也要照顾好自己。",
      career: "工作和生活失衡，可能忽略了个人需求。学会说不。",
      finance: "过度消费或过度节俭。找到舒适的理财平衡点。"
    }
  },

  4: {
    name: "皇帝 (The Emperor)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg",
    upright: {
      general: "结构、权威、稳定。建立秩序和规则，用理性计划未来。",
      love: "关系需要明确的承诺和界限。稳定比激情更重要。",
      career: "展现领导力和组织能力。建立系统和流程，追求稳定发展。",
      finance: "财务规划稳健，长期投资策略奏效。保持纪律性的理财习惯。"
    },
    reversed: {
      general: "过度控制或完全无序。要么太死板，要么太散漫。",
      love: "关系中过度控制或缺乏承诺。找到权力和自由的平衡。",
      career: "管理过于严苛或过于松散。调整你的领导风格。",
      finance: "财务控制失衡，要么过度紧缩要么挥霍无度。重建理财规则。"
    }
  },

  5: {
    name: "教皇 (The Hierophant)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg",
    upright: {
      general: "传统、指导、学习。从经验和传统中学习，寻求导师的建议。",
      love: "传统的恋爱模式或婚姻承诺。重视家庭和社会规范。",
      career: "遵循行业惯例，向前辈学习。在体制内工作会更成功。",
      finance: "传统稳健的投资策略。跟随专家建议，避免激进的理财方式。"
    },
    reversed: {
      general: "盲目跟从或过度叛逆。要有自己的判断力。",
      love: "感情中过度遵循传统或完全抗拒约束。找到适合你的方式。",
      career: "不适应体制或过度墨守成规。创新和传统需要平衡。",
      finance: "财务建议有问题或过度保守。独立思考你的理财策略。"
    }
  },

  6: {
    name: "恋人 (The Lovers)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg",
    upright: {
      general: "重要选择、价值观、关系。根据你的价值观做选择，be true to yourself。",
      love: "深层的情感连接或重大关系决定。选择真正契合你的伴侣。",
      career: "职业选择需要考虑价值观。选择符合你理念的工作。",
      finance: "财务决策反映你的价值观。金钱和理想需要平衡。"
    },
    reversed: {
      general: "价值观冲突，选择困难。逃避决定只会让事情更糟。",
      love: "关系中价值观不一致，缺乏真诚沟通。该说的话要说出来。",
      career: "工作和价值观不符，或难以抉择。做出符合内心的选择。",
      finance: "财务决策和价值观冲突。重新审视什么对你最重要。"
    }
  },

  7: {
    name: "战车 (The Chariot)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg",
    upright: {
      general: "决心、行动、胜利。全力以赴追求目标，成功在望。",
      love: "主动追求或捍卫关系。克服obstacles，赢得爱情。",
      career: "career momentum强劲，竞争中取胜。专注目标，排除干扰。",
      finance: "财务目标快速实现。积极的财务行动带来收益。"
    },
    reversed: {
      general: "失控、方向错误、精力分散。停下来重新审视方向。",
      love: "感情中过度激进或方向不对。放慢脚步，确认你的目标。",
      career: "事业冲刺但方向错误。重新评估你的职业路径。",
      finance: "财务冲动导致损失。在行动前先确认策略。"
    }
  },

  8: {
    name: "力量 (Strength)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg",
    upright: {
      general: "内在力量、耐心、温柔的坚持。用爱和理解而非强迫来解决问题。",
      love: "用耐心和理解处理关系问题。温柔但坚定地表达需求。",
      career: "以柔克刚处理职场挑战。patience和diplomacy是关键。",
      finance: "财务挑战需要耐心和自制力。长期的纪律性会带来回报。"
    },
    reversed: {
      general: "失去信心或过度强硬。找回你的内在力量和平衡。",
      love: "关系中太弱势或太强势。找到力量和温柔的平衡点。",
      career: "职场上缺乏confidence或过于aggressive。调整态度。",
      finance: "财务上缺乏自制力或过度紧缩。重建健康的理财心态。"
    }
  },

  9: {
    name: "隐士 (The Hermit)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg",
    upright: {
      general: "独处、反思、内在智慧。暂时远离喧嚣，向内寻找答案。",
      love: "需要个人空间来思考关系。独处不代表孤独，是为了更清晰。",
      career: "career pause适合学习和反思。退一步看得更清楚。",
      finance: "财务决策前需要深思熟虑。独立研究比盲目跟从更重要。"
    },
    reversed: {
      general: "过度孤立或逃避社交。适度独处是好的，完全孤立是有害的。",
      love: "感情中过度疏离或害怕亲密。需要适度的connection。",
      career: "职业发展中过度隐退。该networking的时候不要躲避。",
      finance: "理财决策过于保守或完全不管。找到参与和谨慎的平衡。"
    }
  },

  10: {
    name: "命运之轮 (Wheel of Fortune)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg",
    upright: {
      general: "转变、循环、好运。生活正在转向新阶段，抓住机会。",
      love: "关系进入新阶段，可能更好也可能是挑战。顺应变化。",
      career: "职业转机，新机会出现。timing很重要，把握当下。",
      finance: "财运转好，意外收益可能出现。但要记住运气会变。"
    },
    reversed: {
      general: "运气不佳或抗拒改变。接受变化是唯一的选择。",
      love: "关系遇到波折，但这也会过去。保持希望。",
      career: "职业setback，但这是暂时的。做好准备迎接下一次机会。",
      finance: "财务困难，但wheel会再次转动。节俭度过困境。"
    }
  },

  11: {
    name: "正义 (Justice)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg",
    upright: {
      general: "公平、因果、真相。你会得到应得的结果，好坏都是。",
      love: "关系需要公平对待双方。honest communication是基础。",
      career: "职场上的公正评价，努力会被认可。遵循规则和ethics。",
      finance: "财务合同和法律事务。确保一切fair and square。"
    },
    reversed: {
      general: "不公平、逃避责任。面对后果，承担应负的责任。",
      love: "关系不平等或缺乏诚实。需要重建公平和信任。",
      career: "职场不公或你在逃避责任。寻求公正或承认错误。",
      finance: "财务纠纷或不诚实交易。legal issues需要解决。"
    }
  },

  12: {
    name: "倒吊人 (The Hanged Man)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg",
    upright: {
      general: "暂停、牺牲、新视角。有意义的等待会带来启发。",
      love: "关系处于pause，需要换个角度看问题。暂时的sacrifice换来长期的益处。",
      career: "事业停滞但这是学习期。用这段时间提升技能或重新思考方向。",
      finance: "投资延迟回报，但耐心等待值得。改变理财视角会有收获。"
    },
    reversed: {
      general: "无谓的牺牲或拒绝改变。该行动的时候不要再等了。",
      love: "感情中不必要的等待或一味妥协。该前进就前进。",
      career: "职业停滞但你在抗拒必要的改变。该转型就转型。",
      finance: "财务延误因为你的犹豫不决。做出决定，停止拖延。"
    }
  },

  13: {
    name: "死神 (Death)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg",
    upright: {
      general: "结束、转变、新生。某个chapter结束了，为新的开始腾出空间。",
      love: "旧关系模式终结，新的connection方式诞生。放手才能成长。",
      career: "职业转型，旧工作结束新机会来临。embrace change。",
      finance: "财务状况彻底改变。旧的收入来源结束，新的机会出现。"
    },
    reversed: {
      general: "抗拒必要的结束，导致痛苦延长。放手吧。",
      love: "拖着不健康的关系不放。该结束的让它结束。",
      career: "死守着不合适的工作。改变是必要的。",
      finance: "旧的财务模式该淘汰了。不要抗拒必要的financial change。"
    }
  },

  14: {
    name: "节制 (Temperance)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg",
    upright: {
      general: "平衡、耐心、和谐。找到中间地带，慢慢调和。",
      love: "关系需要balance和compromise。patience能解决大部分问题。",
      career: "工作生活需要平衡。moderation和适应性是关键。",
      finance: "财务需要balance，避免极端。稳健的理财策略最佳。"
    },
    reversed: {
      general: "失衡、极端、不耐烦。你走得太极端了。",
      love: "关系失去平衡，一方过度付出或索取。重建equilibrium。",
      career: "工作和生活严重失衡。burnout警告。",
      finance: "财务过于激进或过于保守。找回moderation。"
    }
  },

  15: {
    name: "恶魔 (The Devil)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg",
    upright: {
      general: "束缚、成瘾、物质陷阱。你被欲望或习惯困住了，但锁链是你自己戴上的。",
      love: "毒性关系、依赖或控制。感情成为枷锁而非自由。需要警惕emotional cage。",
      career: "工作压力巨大、被合约或上司束缚。职业倦怠严重，感觉被困住。",
      finance: "债务陷阱、过度消费。财务被欲望控制，可能有gambling或shopping addiction。"
    },
    reversed: {
      general: "挣脱束缚、戒除恶习。开始看清真相，迈向自由。",
      love: "结束不良关系，重获情感独立。意识到manipulation并离开。",
      career: "离开毒性职场，寻找新机会。不再被unhealthy work environment困住。",
      finance: "债务开始减轻，戒除不良消费习惯。financial freedom开始恢复。"
    }
  },

  16: {
    name: "塔 (The Tower)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg",
    upright: {
      general: "突变、崩溃、revelation。建立在错误基础上的东西会倒塌。",
      love: "关系遭遇shock，真相被揭露。painful但必要的改变。",
      career: "职业遭遇重大setback或restructure。突然的失业或公司变动。",
      finance: "财务sudden loss或投资崩盘。unexpected financial crisis。"
    },
    reversed: {
      general: "灾难被避免或延迟，但问题仍需解决。不要心存侥幸。",
      love: "危机暂缓，但underlying issues仍在。该面对的还要面对。",
      career: "职业危机延后，利用这段时间加固基础。",
      finance: "财务危机被避免，但要吸取教训。建立emergency fund。"
    }
  },

  17: {
    name: "星星 (The Star)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg",
    upright: {
      general: "希望、疗愈、renewal。最黑暗的时候过去了，曙光在前。",
      love: "关系疗愈，重新找到connection。hope和trust回归。",
      career: "职业前景明亮，新机会出现。保持faith和optimism。",
      finance: "财务状况改善，recovery in progress。保持希望和稳定计划。"
    },
    reversed: {
      general: "失望、缺乏信心。但不要放弃，希望still exists。",
      love: "关系缺乏hope，感到绝望。需要重建faith。",
      career: "职业前景不明，失去direction。重新找到你的guiding star。",
      finance: "财务recovery缓慢，感到discouraged。patience，it will improve。"
    }
  },

  18: {
    name: "月亮 (The Moon)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg",
    upright: {
      general: "幻觉、不确定、潜意识。事情不如表面看起来，信任直觉但保持清醒。",
      love: "关系中有secrets或misconceptions。直觉vs理性的挣扎。",
      career: "职场信息不清晰，可能有deception。相信gut feeling。",
      finance: "财务状况unclear，可能有hidden costs。深入调查before committing。"
    },
    reversed: {
      general: "clarity开始出现或陷入更深的confusion。寻求真相。",
      love: "secrets被揭露或误解加深。需要honest communication。",
      career: "职场situation变清晰或更迷雾。寻求transparency。",
      finance: "财务真相浮现或更多隐藏问题。due diligence is critical。"
    }
  },

  19: {
    name: "太阳 (The Sun)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg",
    upright: {
      general: "成功、快乐、vitality。一切都好，尽情享受吧！",
      love: "关系充满joy和warmth。是celebrate love的时候。",
      career: "职业成功，recognition和advancement。你的努力得到回报。",
      finance: "财务丰盛，收入增加。financial success值得庆祝。"
    },
    reversed: {
      general: "快乐被暂时遮蔽，但阳光still there。调整心态。",
      love: "关系中小problems影响joy。不要让small issues破坏big picture。",
      career: "职业成功delayed或不被认可。保持positive attitude。",
      finance: "财务gains不如预期。但still moving in right direction。"
    }
  },

  20: {
    name: "审判 (Judgement)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg",
    upright: {
      general: "觉醒、rebirth、calling。是evaluation和renewal的时刻。",
      love: "关系进入新level，past issues被resolved。fresh start。",
      career: "职业calling清晰，找到真正的passion。重大career decision。",
      finance: "财务evaluation导致重大改变。past mistakes被forgiven，新策略开始。"
    },
    reversed: {
      general: "自我怀疑、逃避judgement。该反省的不要逃避。",
      love: "关系中无法forgive or let go。卡在过去。",
      career: "职业方向unclear，ignoring your calling。",
      finance: "财务mistakes重复，拒绝学习。need honest assessment。"
    }
  },

  21: {
    name: "世界 (The World)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg",
    upright: {
      general: "完成、achievement、integration。一个cycle完美结束，准备迎接新的开始。",
      love: "关系达到fulfillment和completion。可能是marriage或深层commitment。",
      career: "职业目标达成，major project完成。享受success，然后设定new goals。",
      finance: "财务目标实现，financial stability达成。可以设定更高目标了。"
    },
    reversed: {
      general: "接近完成但还差一点，或无法enjoy成就。finish strong。",
      love: "关系几乎perfect但有unresolved issues。tie up loose ends。",
      career: "职业成就delayed或incomplete。persistence needed。",
      finance: "财务goals接近但未达成。最后一push很关键。"
    }
  }
  22: {
    name: "权杖王牌 (Ace of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/waac.jpg",
    upright: {
      general: "新开始、机会。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面新开始。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上新开始、机会。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现新开始、机会。财务状况新开始。"
    },
    reversed: {
      general: "错失机会、延迟。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇错失机会、延迟。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中错失机会、延迟。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现错失机会、延迟。谨慎理财，避免冲动。"
    }
  },
  23: {
    name: "权杖二 (Two of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/watw.jpg",
    upright: {
      general: "平衡、选择。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面平衡。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上平衡、选择。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现平衡、选择。财务状况平衡。"
    },
    reversed: {
      general: "失衡、犹豫不决。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇失衡、犹豫不决。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中失衡、犹豫不决。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现失衡、犹豫不决。谨慎理财，避免冲动。"
    }
  },
  24: {
    name: "权杖三 (Three of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wath.jpg",
    upright: {
      general: "成长、扩展。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面成长。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上成长、扩展。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现成长、扩展。财务状况成长。"
    },
    reversed: {
      general: "延迟、冲突。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇延迟、冲突。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中延迟、冲突。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现延迟、冲突。谨慎理财，避免冲动。"
    }
  },
  25: {
    name: "权杖四 (Four of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wafo.jpg",
    upright: {
      general: "稳定、基础。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面稳定。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上稳定、基础。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现稳定、基础。财务状况稳定。"
    },
    reversed: {
      general: "停滞、不稳。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇停滞、不稳。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中停滞、不稳。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现停滞、不稳。谨慎理财，避免冲动。"
    }
  },
  26: {
    name: "权杖五 (Five of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wafi.jpg",
    upright: {
      general: "挑战、冲突。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面挑战。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上挑战、冲突。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现挑战、冲突。财务状况挑战。"
    },
    reversed: {
      general: "恢复、改善。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇恢复、改善。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中恢复、改善。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现恢复、改善。谨慎理财，避免冲动。"
    }
  },
  27: {
    name: "权杖六 (Six of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wasi.jpg",
    upright: {
      general: "和谐、进步。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面和谐。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上和谐、进步。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现和谐、进步。财务状况和谐。"
    },
    reversed: {
      general: "停滞、倒退。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇停滞、倒退。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中停滞、倒退。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现停滞、倒退。谨慎理财，避免冲动。"
    }
  },
  28: {
    name: "权杖七 (Seven of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wase.jpg",
    upright: {
      general: "评估、挑战。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面评估。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上评估、挑战。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现评估、挑战。财务状况评估。"
    },
    reversed: {
      general: "放弃、逃避。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇放弃、逃避。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中放弃、逃避。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现放弃、逃避。谨慎理财，避免冲动。"
    }
  },
  29: {
    name: "权杖八 (Eight of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/waei.jpg",
    upright: {
      general: "行动、速度。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面行动。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上行动、速度。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现行动、速度。财务状况行动。"
    },
    reversed: {
      general: "延迟、混乱。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇延迟、混乱。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中延迟、混乱。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现延迟、混乱。谨慎理财，避免冲动。"
    }
  },
  30: {
    name: "权杖九 (Nine of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wani.jpg",
    upright: {
      general: "接近完成。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面接近完成。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上接近完成。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现接近完成。财务状况接近完成。"
    },
    reversed: {
      general: "挫折、延迟。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇挫折、延迟。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中挫折、延迟。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现挫折、延迟。谨慎理财，避免冲动。"
    }
  },
  31: {
    name: "权杖十 (Ten of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wate.jpg",
    upright: {
      general: "完成、顶点。行动、创造、激情的能量显现。",
      love: "激情、主动、冒险方面完成。关系中需要注意wands的特质。",
      career: "事业发展、创业、领导上完成、顶点。这是发展的关键时期。",
      finance: "投资机会、财富增长方面出现完成、顶点。财务状况完成。"
    },
    reversed: {
      general: "过度、负担。行动、创造、激情的能量受阻。",
      love: "激情、主动、冒险遭遇过度、负担。需要调整关系中的wands面向。",
      career: "事业发展、创业、领导中过度、负担。职业发展需要重新评估。",
      finance: "投资机会、财富增长出现过度、负担。谨慎理财，避免冲动。"
    }
  },
  32: {
    name: "权杖侍从 (Page of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wapa.jpg",
    upright: {
      general: "新手、学习、消息。代表行动、创造、激情方面的侍从特质。",
      love: "感情中新手的角色。激情、主动、冒险需要Page的能量。",
      career: "职场上新手、学习、消息。事业发展、创业、领导展现侍从的态度。",
      finance: "财务上新手、学习、消息。投资机会、财富增长需要Page的方式处理。"
    },
    reversed: {
      general: "不成熟、拖延。行动、创造、激情的侍从特质失衡。",
      love: "关系中不成熟、拖延的表现。激情、主动、冒险受到负面影响。",
      career: "职业发展中不成熟、拖延。事业发展、创业、领导需要调整态度。",
      finance: "理财方式不成熟、拖延。投资机会、财富增长需要更成熟的处理。"
    }
  },
  33: {
    name: "权杖骑士 (Knight of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wakn.jpg",
    upright: {
      general: "行动、追求。代表行动、创造、激情方面的骑士特质。",
      love: "感情中行动的角色。激情、主动、冒险需要Knight的能量。",
      career: "职场上行动、追求。事业发展、创业、领导展现骑士的态度。",
      finance: "财务上行动、追求。投资机会、财富增长需要Knight的方式处理。"
    },
    reversed: {
      general: "冲动、停滞。行动、创造、激情的骑士特质失衡。",
      love: "关系中冲动、停滞的表现。激情、主动、冒险受到负面影响。",
      career: "职业发展中冲动、停滞。事业发展、创业、领导需要调整态度。",
      finance: "理财方式冲动、停滞。投资机会、财富增长需要更成熟的处理。"
    }
  },
  34: {
    name: "权杖王后 (Queen of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/waqu.jpg",
    upright: {
      general: "成熟、培育。代表行动、创造、激情方面的王后特质。",
      love: "感情中成熟的角色。激情、主动、冒险需要Queen的能量。",
      career: "职场上成熟、培育。事业发展、创业、领导展现王后的态度。",
      finance: "财务上成熟、培育。投资机会、财富增长需要Queen的方式处理。"
    },
    reversed: {
      general: "依赖、失衡。行动、创造、激情的王后特质失衡。",
      love: "关系中依赖、失衡的表现。激情、主动、冒险受到负面影响。",
      career: "职业发展中依赖、失衡。事业发展、创业、领导需要调整态度。",
      finance: "理财方式依赖、失衡。投资机会、财富增长需要更成熟的处理。"
    }
  },
  35: {
    name: "权杖国王 (King of Wands)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/waki.jpg",
    upright: {
      general: "掌控、成就。代表行动、创造、激情方面的国王特质。",
      love: "感情中掌控的角色。激情、主动、冒险需要King的能量。",
      career: "职场上掌控、成就。事业发展、创业、领导展现国王的态度。",
      finance: "财务上掌控、成就。投资机会、财富增长需要King的方式处理。"
    },
    reversed: {
      general: "暴君、软弱。行动、创造、激情的国王特质失衡。",
      love: "关系中暴君、软弱的表现。激情、主动、冒险受到负面影响。",
      career: "职业发展中暴君、软弱。事业发展、创业、领导需要调整态度。",
      finance: "理财方式暴君、软弱。投资机会、财富增长需要更成熟的处理。"
    }
  },
  36: {
    name: "圣杯王牌 (Ace of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuac.jpg",
    upright: {
      general: "新开始、机会。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面新开始。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上新开始、机会。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现新开始、机会。财务状况新开始。"
    },
    reversed: {
      general: "错失机会、延迟。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇错失机会、延迟。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中错失机会、延迟。职业发展需要重新评估。",
      finance: "情感投资、慈善出现错失机会、延迟。谨慎理财，避免冲动。"
    }
  },
  37: {
    name: "圣杯二 (Two of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cutw.jpg",
    upright: {
      general: "平衡、选择。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面平衡。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上平衡、选择。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现平衡、选择。财务状况平衡。"
    },
    reversed: {
      general: "失衡、犹豫不决。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇失衡、犹豫不决。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中失衡、犹豫不决。职业发展需要重新评估。",
      finance: "情感投资、慈善出现失衡、犹豫不决。谨慎理财，避免冲动。"
    }
  },
  38: {
    name: "圣杯三 (Three of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuth.jpg",
    upright: {
      general: "成长、扩展。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面成长。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上成长、扩展。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现成长、扩展。财务状况成长。"
    },
    reversed: {
      general: "延迟、冲突。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇延迟、冲突。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中延迟、冲突。职业发展需要重新评估。",
      finance: "情感投资、慈善出现延迟、冲突。谨慎理财，避免冲动。"
    }
  },
  39: {
    name: "圣杯四 (Four of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cufo.jpg",
    upright: {
      general: "稳定、基础。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面稳定。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上稳定、基础。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现稳定、基础。财务状况稳定。"
    },
    reversed: {
      general: "停滞、不稳。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇停滞、不稳。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中停滞、不稳。职业发展需要重新评估。",
      finance: "情感投资、慈善出现停滞、不稳。谨慎理财，避免冲动。"
    }
  },
  40: {
    name: "圣杯五 (Five of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cufi.jpg",
    upright: {
      general: "挑战、冲突。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面挑战。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上挑战、冲突。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现挑战、冲突。财务状况挑战。"
    },
    reversed: {
      general: "恢复、改善。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇恢复、改善。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中恢复、改善。职业发展需要重新评估。",
      finance: "情感投资、慈善出现恢复、改善。谨慎理财，避免冲动。"
    }
  },
  41: {
    name: "圣杯六 (Six of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cusi.jpg",
    upright: {
      general: "和谐、进步。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面和谐。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上和谐、进步。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现和谐、进步。财务状况和谐。"
    },
    reversed: {
      general: "停滞、倒退。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇停滞、倒退。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中停滞、倒退。职业发展需要重新评估。",
      finance: "情感投资、慈善出现停滞、倒退。谨慎理财，避免冲动。"
    }
  },
  42: {
    name: "圣杯七 (Seven of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuse.jpg",
    upright: {
      general: "评估、挑战。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面评估。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上评估、挑战。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现评估、挑战。财务状况评估。"
    },
    reversed: {
      general: "放弃、逃避。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇放弃、逃避。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中放弃、逃避。职业发展需要重新评估。",
      finance: "情感投资、慈善出现放弃、逃避。谨慎理财，避免冲动。"
    }
  },
  43: {
    name: "圣杯八 (Eight of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuei.jpg",
    upright: {
      general: "行动、速度。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面行动。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上行动、速度。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现行动、速度。财务状况行动。"
    },
    reversed: {
      general: "延迟、混乱。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇延迟、混乱。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中延迟、混乱。职业发展需要重新评估。",
      finance: "情感投资、慈善出现延迟、混乱。谨慎理财，避免冲动。"
    }
  },
  44: {
    name: "圣杯九 (Nine of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuni.jpg",
    upright: {
      general: "接近完成。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面接近完成。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上接近完成。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现接近完成。财务状况接近完成。"
    },
    reversed: {
      general: "挫折、延迟。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇挫折、延迟。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中挫折、延迟。职业发展需要重新评估。",
      finance: "情感投资、慈善出现挫折、延迟。谨慎理财，避免冲动。"
    }
  },
  45: {
    name: "圣杯十 (Ten of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cute.jpg",
    upright: {
      general: "完成、顶点。情感、关系、直觉的能量显现。",
      love: "浪漫、情感连接、亲密方面完成。关系中需要注意cups的特质。",
      career: "创意工作、团队合作上完成、顶点。这是发展的关键时期。",
      finance: "情感投资、慈善方面出现完成、顶点。财务状况完成。"
    },
    reversed: {
      general: "过度、负担。情感、关系、直觉的能量受阻。",
      love: "浪漫、情感连接、亲密遭遇过度、负担。需要调整关系中的cups面向。",
      career: "创意工作、团队合作中过度、负担。职业发展需要重新评估。",
      finance: "情感投资、慈善出现过度、负担。谨慎理财，避免冲动。"
    }
  },
  46: {
    name: "圣杯侍从 (Page of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cupa.jpg",
    upright: {
      general: "新手、学习、消息。代表情感、关系、直觉方面的侍从特质。",
      love: "感情中新手的角色。浪漫、情感连接、亲密需要Page的能量。",
      career: "职场上新手、学习、消息。创意工作、团队合作展现侍从的态度。",
      finance: "财务上新手、学习、消息。情感投资、慈善需要Page的方式处理。"
    },
    reversed: {
      general: "不成熟、拖延。情感、关系、直觉的侍从特质失衡。",
      love: "关系中不成熟、拖延的表现。浪漫、情感连接、亲密受到负面影响。",
      career: "职业发展中不成熟、拖延。创意工作、团队合作需要调整态度。",
      finance: "理财方式不成熟、拖延。情感投资、慈善需要更成熟的处理。"
    }
  },
  47: {
    name: "圣杯骑士 (Knight of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cukn.jpg",
    upright: {
      general: "行动、追求。代表情感、关系、直觉方面的骑士特质。",
      love: "感情中行动的角色。浪漫、情感连接、亲密需要Knight的能量。",
      career: "职场上行动、追求。创意工作、团队合作展现骑士的态度。",
      finance: "财务上行动、追求。情感投资、慈善需要Knight的方式处理。"
    },
    reversed: {
      general: "冲动、停滞。情感、关系、直觉的骑士特质失衡。",
      love: "关系中冲动、停滞的表现。浪漫、情感连接、亲密受到负面影响。",
      career: "职业发展中冲动、停滞。创意工作、团队合作需要调整态度。",
      finance: "理财方式冲动、停滞。情感投资、慈善需要更成熟的处理。"
    }
  },
  48: {
    name: "圣杯王后 (Queen of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuqu.jpg",
    upright: {
      general: "成熟、培育。代表情感、关系、直觉方面的王后特质。",
      love: "感情中成熟的角色。浪漫、情感连接、亲密需要Queen的能量。",
      career: "职场上成熟、培育。创意工作、团队合作展现王后的态度。",
      finance: "财务上成熟、培育。情感投资、慈善需要Queen的方式处理。"
    },
    reversed: {
      general: "依赖、失衡。情感、关系、直觉的王后特质失衡。",
      love: "关系中依赖、失衡的表现。浪漫、情感连接、亲密受到负面影响。",
      career: "职业发展中依赖、失衡。创意工作、团队合作需要调整态度。",
      finance: "理财方式依赖、失衡。情感投资、慈善需要更成熟的处理。"
    }
  },
  49: {
    name: "圣杯国王 (King of Cups)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/cuki.jpg",
    upright: {
      general: "掌控、成就。代表情感、关系、直觉方面的国王特质。",
      love: "感情中掌控的角色。浪漫、情感连接、亲密需要King的能量。",
      career: "职场上掌控、成就。创意工作、团队合作展现国王的态度。",
      finance: "财务上掌控、成就。情感投资、慈善需要King的方式处理。"
    },
    reversed: {
      general: "暴君、软弱。情感、关系、直觉的国王特质失衡。",
      love: "关系中暴君、软弱的表现。浪漫、情感连接、亲密受到负面影响。",
      career: "职业发展中暴君、软弱。创意工作、团队合作需要调整态度。",
      finance: "理财方式暴君、软弱。情感投资、慈善需要更成熟的处理。"
    }
  },
  50: {
    name: "宝剑王牌 (Ace of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swac.jpg",
    upright: {
      general: "新开始、机会。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面新开始。关系中需要注意swords的特质。",
      career: "职场挑战、决策上新开始、机会。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现新开始、机会。财务状况新开始。"
    },
    reversed: {
      general: "错失机会、延迟。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇错失机会、延迟。需要调整关系中的swords面向。",
      career: "职场挑战、决策中错失机会、延迟。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现错失机会、延迟。谨慎理财，避免冲动。"
    }
  },
  51: {
    name: "宝剑二 (Two of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swtw.jpg",
    upright: {
      general: "平衡、选择。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面平衡。关系中需要注意swords的特质。",
      career: "职场挑战、决策上平衡、选择。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现平衡、选择。财务状况平衡。"
    },
    reversed: {
      general: "失衡、犹豫不决。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇失衡、犹豫不决。需要调整关系中的swords面向。",
      career: "职场挑战、决策中失衡、犹豫不决。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现失衡、犹豫不决。谨慎理财，避免冲动。"
    }
  },
  52: {
    name: "宝剑三 (Three of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swth.jpg",
    upright: {
      general: "成长、扩展。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面成长。关系中需要注意swords的特质。",
      career: "职场挑战、决策上成长、扩展。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现成长、扩展。财务状况成长。"
    },
    reversed: {
      general: "延迟、冲突。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇延迟、冲突。需要调整关系中的swords面向。",
      career: "职场挑战、决策中延迟、冲突。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现延迟、冲突。谨慎理财，避免冲动。"
    }
  },
  53: {
    name: "宝剑四 (Four of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swfo.jpg",
    upright: {
      general: "稳定、基础。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面稳定。关系中需要注意swords的特质。",
      career: "职场挑战、决策上稳定、基础。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现稳定、基础。财务状况稳定。"
    },
    reversed: {
      general: "停滞、不稳。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇停滞、不稳。需要调整关系中的swords面向。",
      career: "职场挑战、决策中停滞、不稳。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现停滞、不稳。谨慎理财，避免冲动。"
    }
  },
  54: {
    name: "宝剑五 (Five of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swfi.jpg",
    upright: {
      general: "挑战、冲突。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面挑战。关系中需要注意swords的特质。",
      career: "职场挑战、决策上挑战、冲突。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现挑战、冲突。财务状况挑战。"
    },
    reversed: {
      general: "恢复、改善。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇恢复、改善。需要调整关系中的swords面向。",
      career: "职场挑战、决策中恢复、改善。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现恢复、改善。谨慎理财，避免冲动。"
    }
  },
  55: {
    name: "宝剑六 (Six of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swsi.jpg",
    upright: {
      general: "和谐、进步。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面和谐。关系中需要注意swords的特质。",
      career: "职场挑战、决策上和谐、进步。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现和谐、进步。财务状况和谐。"
    },
    reversed: {
      general: "停滞、倒退。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇停滞、倒退。需要调整关系中的swords面向。",
      career: "职场挑战、决策中停滞、倒退。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现停滞、倒退。谨慎理财，避免冲动。"
    }
  },
  56: {
    name: "宝剑七 (Seven of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swse.jpg",
    upright: {
      general: "评估、挑战。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面评估。关系中需要注意swords的特质。",
      career: "职场挑战、决策上评估、挑战。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现评估、挑战。财务状况评估。"
    },
    reversed: {
      general: "放弃、逃避。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇放弃、逃避。需要调整关系中的swords面向。",
      career: "职场挑战、决策中放弃、逃避。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现放弃、逃避。谨慎理财，避免冲动。"
    }
  },
  57: {
    name: "宝剑八 (Eight of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swei.jpg",
    upright: {
      general: "行动、速度。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面行动。关系中需要注意swords的特质。",
      career: "职场挑战、决策上行动、速度。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现行动、速度。财务状况行动。"
    },
    reversed: {
      general: "延迟、混乱。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇延迟、混乱。需要调整关系中的swords面向。",
      career: "职场挑战、决策中延迟、混乱。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现延迟、混乱。谨慎理财，避免冲动。"
    }
  },
  58: {
    name: "宝剑九 (Nine of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swni.jpg",
    upright: {
      general: "接近完成。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面接近完成。关系中需要注意swords的特质。",
      career: "职场挑战、决策上接近完成。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现接近完成。财务状况接近完成。"
    },
    reversed: {
      general: "挫折、延迟。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇挫折、延迟。需要调整关系中的swords面向。",
      career: "职场挑战、决策中挫折、延迟。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现挫折、延迟。谨慎理财，避免冲动。"
    }
  },
  59: {
    name: "宝剑十 (Ten of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swte.jpg",
    upright: {
      general: "完成、顶点。思考、沟通、冲突的能量显现。",
      love: "沟通问题、理性分析方面完成。关系中需要注意swords的特质。",
      career: "职场挑战、决策上完成、顶点。这是发展的关键时期。",
      finance: "财务压力、理性决策方面出现完成、顶点。财务状况完成。"
    },
    reversed: {
      general: "过度、负担。思考、沟通、冲突的能量受阻。",
      love: "沟通问题、理性分析遭遇过度、负担。需要调整关系中的swords面向。",
      career: "职场挑战、决策中过度、负担。职业发展需要重新评估。",
      finance: "财务压力、理性决策出现过度、负担。谨慎理财，避免冲动。"
    }
  },
  60: {
    name: "宝剑侍从 (Page of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swpa.jpg",
    upright: {
      general: "新手、学习、消息。代表思考、沟通、冲突方面的侍从特质。",
      love: "感情中新手的角色。沟通问题、理性分析需要Page的能量。",
      career: "职场上新手、学习、消息。职场挑战、决策展现侍从的态度。",
      finance: "财务上新手、学习、消息。财务压力、理性决策需要Page的方式处理。"
    },
    reversed: {
      general: "不成熟、拖延。思考、沟通、冲突的侍从特质失衡。",
      love: "关系中不成熟、拖延的表现。沟通问题、理性分析受到负面影响。",
      career: "职业发展中不成熟、拖延。职场挑战、决策需要调整态度。",
      finance: "理财方式不成熟、拖延。财务压力、理性决策需要更成熟的处理。"
    }
  },
  61: {
    name: "宝剑骑士 (Knight of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swkn.jpg",
    upright: {
      general: "行动、追求。代表思考、沟通、冲突方面的骑士特质。",
      love: "感情中行动的角色。沟通问题、理性分析需要Knight的能量。",
      career: "职场上行动、追求。职场挑战、决策展现骑士的态度。",
      finance: "财务上行动、追求。财务压力、理性决策需要Knight的方式处理。"
    },
    reversed: {
      general: "冲动、停滞。思考、沟通、冲突的骑士特质失衡。",
      love: "关系中冲动、停滞的表现。沟通问题、理性分析受到负面影响。",
      career: "职业发展中冲动、停滞。职场挑战、决策需要调整态度。",
      finance: "理财方式冲动、停滞。财务压力、理性决策需要更成熟的处理。"
    }
  },
  62: {
    name: "宝剑王后 (Queen of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swqu.jpg",
    upright: {
      general: "成熟、培育。代表思考、沟通、冲突方面的王后特质。",
      love: "感情中成熟的角色。沟通问题、理性分析需要Queen的能量。",
      career: "职场上成熟、培育。职场挑战、决策展现王后的态度。",
      finance: "财务上成熟、培育。财务压力、理性决策需要Queen的方式处理。"
    },
    reversed: {
      general: "依赖、失衡。思考、沟通、冲突的王后特质失衡。",
      love: "关系中依赖、失衡的表现。沟通问题、理性分析受到负面影响。",
      career: "职业发展中依赖、失衡。职场挑战、决策需要调整态度。",
      finance: "理财方式依赖、失衡。财务压力、理性决策需要更成熟的处理。"
    }
  },
  63: {
    name: "宝剑国王 (King of Swords)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/swki.jpg",
    upright: {
      general: "掌控、成就。代表思考、沟通、冲突方面的国王特质。",
      love: "感情中掌控的角色。沟通问题、理性分析需要King的能量。",
      career: "职场上掌控、成就。职场挑战、决策展现国王的态度。",
      finance: "财务上掌控、成就。财务压力、理性决策需要King的方式处理。"
    },
    reversed: {
      general: "暴君、软弱。思考、沟通、冲突的国王特质失衡。",
      love: "关系中暴君、软弱的表现。沟通问题、理性分析受到负面影响。",
      career: "职业发展中暴君、软弱。职场挑战、决策需要调整态度。",
      finance: "理财方式暴君、软弱。财务压力、理性决策需要更成熟的处理。"
    }
  },
  64: {
    name: "星币王牌 (Ace of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/peac.jpg",
    upright: {
      general: "新开始、机会。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面新开始。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上新开始、机会。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现新开始、机会。财务状况新开始。"
    },
    reversed: {
      general: "错失机会、延迟。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇错失机会、延迟。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中错失机会、延迟。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现错失机会、延迟。谨慎理财，避免冲动。"
    }
  },
  65: {
    name: "星币二 (Two of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/petw.jpg",
    upright: {
      general: "平衡、选择。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面平衡。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上平衡、选择。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现平衡、选择。财务状况平衡。"
    },
    reversed: {
      general: "失衡、犹豫不决。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇失衡、犹豫不决。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中失衡、犹豫不决。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现失衡、犹豫不决。谨慎理财，避免冲动。"
    }
  },
  66: {
    name: "星币三 (Three of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/peth.jpg",
    upright: {
      general: "成长、扩展。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面成长。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上成长、扩展。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现成长、扩展。财务状况成长。"
    },
    reversed: {
      general: "延迟、冲突。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇延迟、冲突。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中延迟、冲突。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现延迟、冲突。谨慎理财，避免冲动。"
    }
  },
  67: {
    name: "星币四 (Four of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pefo.jpg",
    upright: {
      general: "稳定、基础。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面稳定。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上稳定、基础。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现稳定、基础。财务状况稳定。"
    },
    reversed: {
      general: "停滞、不稳。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇停滞、不稳。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中停滞、不稳。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现停滞、不稳。谨慎理财，避免冲动。"
    }
  },
  68: {
    name: "星币五 (Five of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pefi.jpg",
    upright: {
      general: "挑战、冲突。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面挑战。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上挑战、冲突。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现挑战、冲突。财务状况挑战。"
    },
    reversed: {
      general: "恢复、改善。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇恢复、改善。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中恢复、改善。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现恢复、改善。谨慎理财，避免冲动。"
    }
  },
  69: {
    name: "星币六 (Six of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pesi.jpg",
    upright: {
      general: "和谐、进步。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面和谐。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上和谐、进步。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现和谐、进步。财务状况和谐。"
    },
    reversed: {
      general: "停滞、倒退。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇停滞、倒退。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中停滞、倒退。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现停滞、倒退。谨慎理财，避免冲动。"
    }
  },
  70: {
    name: "星币七 (Seven of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pese.jpg",
    upright: {
      general: "评估、挑战。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面评估。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上评估、挑战。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现评估、挑战。财务状况评估。"
    },
    reversed: {
      general: "放弃、逃避。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇放弃、逃避。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中放弃、逃避。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现放弃、逃避。谨慎理财，避免冲动。"
    }
  },
  71: {
    name: "星币八 (Eight of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/peei.jpg",
    upright: {
      general: "行动、速度。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面行动。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上行动、速度。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现行动、速度。财务状况行动。"
    },
    reversed: {
      general: "延迟、混乱。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇延迟、混乱。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中延迟、混乱。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现延迟、混乱。谨慎理财，避免冲动。"
    }
  },
  72: {
    name: "星币九 (Nine of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/peni.jpg",
    upright: {
      general: "接近完成。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面接近完成。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上接近完成。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现接近完成。财务状况接近完成。"
    },
    reversed: {
      general: "挫折、延迟。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇挫折、延迟。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中挫折、延迟。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现挫折、延迟。谨慎理财，避免冲动。"
    }
  },
  73: {
    name: "星币十 (Ten of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pete.jpg",
    upright: {
      general: "完成、顶点。物质、实际、稳定的能量显现。",
      love: "稳定关系、实际考虑方面完成。关系中需要注意pentacles的特质。",
      career: "稳定工作、技能提升上完成、顶点。这是发展的关键时期。",
      finance: "储蓄、投资、财务稳定方面出现完成、顶点。财务状况完成。"
    },
    reversed: {
      general: "过度、负担。物质、实际、稳定的能量受阻。",
      love: "稳定关系、实际考虑遭遇过度、负担。需要调整关系中的pentacles面向。",
      career: "稳定工作、技能提升中过度、负担。职业发展需要重新评估。",
      finance: "储蓄、投资、财务稳定出现过度、负担。谨慎理财，避免冲动。"
    }
  },
  74: {
    name: "星币侍从 (Page of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pepa.jpg",
    upright: {
      general: "新手、学习、消息。代表物质、实际、稳定方面的侍从特质。",
      love: "感情中新手的角色。稳定关系、实际考虑需要Page的能量。",
      career: "职场上新手、学习、消息。稳定工作、技能提升展现侍从的态度。",
      finance: "财务上新手、学习、消息。储蓄、投资、财务稳定需要Page的方式处理。"
    },
    reversed: {
      general: "不成熟、拖延。物质、实际、稳定的侍从特质失衡。",
      love: "关系中不成熟、拖延的表现。稳定关系、实际考虑受到负面影响。",
      career: "职业发展中不成熟、拖延。稳定工作、技能提升需要调整态度。",
      finance: "理财方式不成熟、拖延。储蓄、投资、财务稳定需要更成熟的处理。"
    }
  },
  75: {
    name: "星币骑士 (Knight of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pekn.jpg",
    upright: {
      general: "行动、追求。代表物质、实际、稳定方面的骑士特质。",
      love: "感情中行动的角色。稳定关系、实际考虑需要Knight的能量。",
      career: "职场上行动、追求。稳定工作、技能提升展现骑士的态度。",
      finance: "财务上行动、追求。储蓄、投资、财务稳定需要Knight的方式处理。"
    },
    reversed: {
      general: "冲动、停滞。物质、实际、稳定的骑士特质失衡。",
      love: "关系中冲动、停滞的表现。稳定关系、实际考虑受到负面影响。",
      career: "职业发展中冲动、停滞。稳定工作、技能提升需要调整态度。",
      finance: "理财方式冲动、停滞。储蓄、投资、财务稳定需要更成熟的处理。"
    }
  },
  76: {
    name: "星币王后 (Queen of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/pequ.jpg",
    upright: {
      general: "成熟、培育。代表物质、实际、稳定方面的王后特质。",
      love: "感情中成熟的角色。稳定关系、实际考虑需要Queen的能量。",
      career: "职场上成熟、培育。稳定工作、技能提升展现王后的态度。",
      finance: "财务上成熟、培育。储蓄、投资、财务稳定需要Queen的方式处理。"
    },
    reversed: {
      general: "依赖、失衡。物质、实际、稳定的王后特质失衡。",
      love: "关系中依赖、失衡的表现。稳定关系、实际考虑受到负面影响。",
      career: "职业发展中依赖、失衡。稳定工作、技能提升需要调整态度。",
      finance: "理财方式依赖、失衡。储蓄、投资、财务稳定需要更成熟的处理。"
    }
  },
  77: {
    name: "星币国王 (King of Pentacles)",
    image: "https://www.sacred-texts.com/tarot/pkt/img/peki.jpg",
    upright: {
      general: "掌控、成就。代表物质、实际、稳定方面的国王特质。",
      love: "感情中掌控的角色。稳定关系、实际考虑需要King的能量。",
      career: "职场上掌控、成就。稳定工作、技能提升展现国王的态度。",
      finance: "财务上掌控、成就。储蓄、投资、财务稳定需要King的方式处理。"
    },
    reversed: {
      general: "暴君、软弱。物质、实际、稳定的国王特质失衡。",
      love: "关系中暴君、软弱的表现。稳定关系、实际考虑受到负面影响。",
      career: "职业发展中暴君、软弱。稳定工作、技能提升需要调整态度。",
      finance: "理财方式暴君、软弱。储蓄、投资、财务稳定需要更成熟的处理。"
    }
  },
};
