// 塔罗牌详细资料库 - 分类占卜版本
// 每张牌包含：综合、感情、事业、财运四个维度的解析

const TAROT_DETAILED = {
  // ============================================
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
};

// 暴露到全局
window.TAROT_DETAILED = TAROT_DETAILED;
console.log('🎴 TAROT_DETAILED 数据库已加载，共', Object.keys(TAROT_DETAILED).length, '张牌');
