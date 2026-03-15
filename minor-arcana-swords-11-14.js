/**
 * 小阿卡纳 - 宝剑 11-14（宫廷牌）
 * Suit: Swords (Air)
 * Court Cards: Page, Knight, Queen, King
 */

const minorArcana_Swords_11_14 = [];

// 宝剑侍从 (Page of Swords)
minorArcana_Swords_11_14.push({
  name: "宝剑侍从 (Page of Swords)",
  number: 11,
  arcana: "minor",
  suit: "Swords",
  element: "Air",
  keywords: ["好奇心", "新想法", "警觉", "间谍", "学习"],
  core_meaning: {
    upright: "充满好奇和警觉，探索新想法，收集信息，保持警惕。",
    reversed: "八卦传言，狡猾欺骗，或过度怀疑偏执。"
  },
  interpretations: {
    love: {
      upright: {
        short: "好奇探索，保持警觉",
        energy: "感情能量好奇警觉，想了解对方，保持适度距离观察。",
        situation: "你可能在观察和了解某人，还没完全投入。保持警觉，收集信息，不急于承诺。或者收到关于感情的消息或信息。你用理性approach感情，想搞清楚before深入。可能有点怀疑和防备，但也好奇和有兴趣。",
        advice: "保持好奇和开放，但也保持警觉是明智的。了解对方需要时间，不要急。但也不要过度分析，让logic完全压倒感情。平衡理性观察和emotional connection。如果收到消息，验证真实性。相信直觉，但也寻求facts。",
        warning: "过度警觉和分析可能让你错过真正的connection，要找到平衡。",
        outcome: "通过观察和了解，做出更informed的感情决定。",
        timing: "观察期，需要时间了解"
      },
      reversed: {
        short: "八卦传言，过度怀疑",
        energy: "能量狡猾不诚实，涉及gossip，或过度suspicious和paranoid。",
        situation: "可能涉及关于感情的gossip或rumors。有人在spread谣言或你在听信谣言。或者你过度suspicious，把对方的每个行为都往坏处想。可能有人在spy on你或你在stalking对方。缺乏信任，充满怀疑。或者有人不诚实，playing games。",
        advice: "不要相信所有gossip，verify before相信。如果你在spread rumors，停止，这会伤害他人。如果过度suspicious，问问自己是基于facts还是insecurity。如果stalking，这是unhealthy，停止。如果有人playing games，保护自己。建立健康的trust，而非paranoia或naivety。",
        warning: "gossip和paranoia会摧毁关系和reputation，要保持诚实和理性。",
        outcome: "需要区分健康警觉和toxic suspicion，建立基于truth的关系。",
        timing: "混乱期，需要澄清truth"
      }
    },
    career: {
      upright: {
        short: "学习新技能，收集信息",
        energy: "职场能量好奇alert，积极学习，收集information，保持competitive edge。",
        situation: "你可能在学习新skills或收集行业information。保持alert on竞争和机会。你用analytical approach工作，想understand before行动。可能在研究或investigative role。你的curiosity和alertness是assets。收到重要职业信息或消息。",
        advice: "保持好奇和学习的态度，这是成长的key。收集信息和了解行业是明智的。但也要实际应用知识，不只是收集。保持alert on机会和威胁。用你的analytical skills做informed decisions。但不要过度suspicious or paranoid。平衡learning和doing。",
        warning: "过度focus on信息收集可能导致analysis paralysis，要行动。",
        outcome: "通过学习和alertness，保持competitive并抓住机会。",
        timing: "学习和观察期，prepare for行动"
      },
      reversed: {
        short: "办公室八卦，不诚实行为",
        energy: "职场能量狡猾manipulative，涉及gossip，或过度suspicious创造toxic环境。",
        situation: "可能涉及办公室politics和gossip。有人在spread rumors或你在参与。或者有人不诚实，stealing ideas或背后做小动作。你可能过度suspicious，不信任任何人。或者你在spy on同事或被spy。职场充满intrigue和distrust。",
        advice: "远离办公室gossip，它只会harm你的reputation。如果有人不诚实，收集evidence并report适当channels。如果你过度suspicious，这会isolate你，区分real threats和paranoia。如果你在manipulate，停止，诚信是long-term success的foundation。保持professional和ethical。",
        warning: "参与office politics和gossip会damage你的career和relationships。",
        outcome: "需要选择诚信和professionalism，否则会失去trust和机会。",
        timing: "toxic period，需要设立boundaries"
      }
    },
    finance: {
      upright: {
        short: "财务学习，谨慎研究",
        energy: "金钱能量curious和cautious，积极学习financial知识，research before投资。",
        situation: "你可能在学习financial planning或研究投资机会。保持alert on financial risks和机会。你用analytical approach理财，想understand before投入。可能收到财务消息或信息。你的谨慎和研究是protecting你from losses。",
        advice: "继续学习和研究，knowledge是power in finance。保持cautious和analytical是好的。verify所有information before相信。但也不要因为over-analysis never act。平衡research和action。从small开始，积累experience。你的alertness会protect你from scams。",
        warning: "过度谨慎可能让你miss legitimate opportunities，要平衡。",
        outcome: "通过learning和careful analysis，做出informed财务decisions。",
        timing: "research和learning期，slowly building"
      },
      reversed: {
        short: "财务八卦，小额诈骗",
        energy: "金钱能量dishonest或paranoid，涉及small诈骗或过度suspicious。",
        situation: "可能涉及financial gossip或misleading information。有人在spread false财务advice或你在听信。或者涉及small scale fraud或欺骗。你可能过度paranoid，不信任any financial advice或institution。或者你在小聪明上try to cheat system。",
        advice: "verify所有financial information from reliable sources。不要相信too good to be true的promises。如果你在try小聪明，停止，后果不值得。如果过度paranoid，这会让你miss legitimate help，seek professional verified advice。不要spread未经证实的financial information。保持ethical和informed。",
        warning: "financial dishonesty即使小规模也会有serious后果，要保持integrity。",
        outcome: "需要区分健康skepticism和toxic paranoia，建立ethical财务practices。",
        timing: "小心期，需要verification和integrity"
      }
    },
    general: {
      upright: {
        short: "好奇学习，保持警觉",
        energy: "整体能量curious和alert，积极学习和观察，保持open yet cautious。",
        situation: "你处于学习和探索阶段，对世界充满好奇。保持alert on机会和潜在问题。你用analytical和questioning approach生活，不轻信。可能收到重要信息或消息。你的curiosity和alertness帮助你navigate复杂情况。",
        advice: "保持好奇心，这是growth的engine。学习和question是好的，但也要知道when to trust和act。收集信息，但也验证sources。保持alert，但不要paranoid。平衡skepticism和openness。用你的analytical mind，但不要忽略emotional和intuitive wisdom。",
        warning: "过度分析和怀疑可能让你错过experiences和connections，要平衡。",
        outcome: "通过curiosity和alertness，navigate life更wisely，做informed choices。",
        timing: "学习和观察期，积累wisdom"
      },
      reversed: {
        short: "八卦传言，过度怀疑",
        energy: "能量manipulative或paranoid，涉及gossip和distrust，或小聪明。",
        situation: "你可能陷入gossip和rumors的world。或者过度suspicious，不信任任何人和任何事。可能在use小聪明或manipulation达到目的。或者被这样对待。生活充满intrigue和distrust。你可能stalking或spying on他人，或被监视。缺乏genuine trust和connection。",
        advice: "远离gossip，它toxic且unproductive。如果过度suspicious，这会isolate你and创造self-fulfilling prophecies。区分healthy caution和paranoia。如果using manipulation，这短期可能work但长期会destroy relationships和reputation。建立基于honesty和trust的生活。寻求therapy如果paranoia严重。",
        warning: "gossip和paranoia会让你isolated和unhappy，要选择trust和integrity。",
        outcome: "需要break toxic patterns，建立基于truth和trust的healthier生活方式。",
        timing: "toxic period，需要deep change"
      }
    }
  }
});

// 宝剑骑士 (Knight of Swords)
minorArcana_Swords_11_14.push({
  name: "宝剑骑士 (Knight of Swords)",
  number: 12,
  arcana: "minor",
  suit: "Swords",
  element: "Air",
  keywords: ["冲动", "快速行动", "直接", "aggressive", "不顾后果"],
  core_meaning: {
    upright: "快速直接地追求目标，充满冲劲但可能鲁莽和不顾后果。",
    reversed: "过度aggressive，鲁莽冲动，或思而不行。"
  },
  interpretations: {
    love: {
      upright: {
        short: "直接追求，快速发展",
        energy: "感情能量intense和direct，快速追求，不拐弯抹角。",
        situation: "可能遇到或成为非常direct和assertive的追求者。关系发展快速，甚至recklessly so。你们很快进入深度conversation和commitment。他很直接表达想法和感受，不玩games。可能有点aggressive或pushy。关系充满intensity但可能缺乏深度思考。",
        advice: "direct和honest是好的，但确保不是rushing into不合适的关系。快速不总是好的。给关系时间develop naturally。如果对方太aggressive，设立boundaries。如果你是这样，确保尊重对方的pace。不要让intensity掩盖了真正的compatibility。平衡passion和patience。",
        warning: "过快和过intense的关系often burn out quickly，要保持理智。",
        outcome: "体验intense但可能short-lived的关系，或学会平衡速度和depth。",
        timing: "快速发展，可能很快reach结论"
      },
      reversed: {
        short: "过度aggressive，言语暴力",
        energy: "能量harsh和destructive，可能涉及verbal abuse或extreme impulsiveness。",
        situation: "可能涉及aggressive甚至abusive的行为。有人用harsh words故意伤害。或者extremely impulsive，做出不负责任的决定。可能有人rushing you做不comfortable的事。或者你用aggressive方式对待伴侣。关系充满conflict和hurt。或者相反，all talk no action。",
        advice: "如果涉及verbal abuse，这是serious，考虑离开。如果你是aggressive的，停止，这是abusive。学习healthy沟通。如果太impulsive，slow down，考虑后果。如果被rush，说no，保护yourself。如果all talk no action，要么act要么stop promising。寻求anger management如果需要。",
        warning: "aggressive和abusive行为会permanent damage关系和他人，要立即stop。",
        outcome: "需要深刻改变communication和behavior style，否则会lose关系。",
        timing: "crisis period，需要immediate intervention"
      }
    },
    career: {
      upright: {
        short: "快速行动，直接approach",
        energy: "职场能量assertive和fast-paced，quick decisions和direct action。",
        situation: "你可能在fast-paced环境工作或采用aggressive strategy。Quick decisions和immediate action。You're direct和assertive，不怕confrontation。可能在competitive field where speed matters。You cut through BS，直达重点。Your decisiveness和action-orientation是assets但可能reckless。",
        advice: "Decisiveness和action are good，但确保有基本的planning和考虑。Speed是asset但不要sacrifice quality。Direct是professional，但也要diplomatic。不要让rush导致mistakes。在快速行动和careful thinking间找平衡。Your energy和drive是valuable，channel them wisely。",
        warning: "过度reckless和aggressive can alienate同事和导致costly mistakes。",
        outcome: "通过快速action和decisiveness achieve results，但需要balance。",
        timing: "fast-paced period，quick results但watch for mistakes"
      },
      reversed: {
        short: "鲁莽决策，职场欺凌",
        energy: "职场能量destructive，极度reckless或aggressive欺凌行为。",
        situation: "可能做出extremely reckless职业decisions without考虑后果。或者涉及workplace bullying和aggressive行为。You或他人用harsh言语攻击。Extremely impulsive，causing chaos。Or相反，all talk但never deliver。Projects rushed导致failure。Aggressive tactics backfiring。",
        advice: "如果reckless，立即slow down，这会damage your career。如果涉及bullying，这是serious，report或离开toxic环境。如果you're bully，停止，寻求help。Learn consequences of actions。如果all talk，start delivering or stop promising。From mistakes学习，改变approach。Seek anger management or coaching。",
        warning: "reckless和bullying行为会destroy your career和relationships，有serious后果。",
        outcome: "需要fundamental change in approach和behavior，否则face serious consequences。",
        timing: "crisis，damage control needed"
      }
    },
    finance: {
      upright: {
        short: "快速投资，aggressive策略",
        energy: "金钱能量bold和fast-moving，quick financial decisions和aggressive strategies。",
        situation: "你可能采用aggressive investment strategy或quick financial moves。Fast trades，bold decisions。You're not afraid of risk，pursue opportunities decisively。可能在volatile markets where speed matters。Your assertiveness helps you seize opportunities others miss。但可能reckless。",
        advice: "Boldness can pay off但确保有基本research。Speed是advantage但不要rush into bad deals。Aggressive strategies have higher risk，确保你can afford losses。Have stop-loss limits。Balance aggressive moves和prudent planning。Don't let excitement cloud judgment。Quick profits也可能是quick losses。",
        warning: "过度aggressive和reckless financial行为can lead to significant losses。",
        outcome: "可能achieve quick gains but也risk losses，需要balance boldness和caution。",
        timing: "fast-paced financial period，volatile"
      },
      reversed: {
        short: "财务鲁莽，冲动挥霍",
        energy: "金钱能量extremely reckless，impulsive spending或dangerous投资。",
        situation: "可能做出extremely reckless financial decisions without any考虑。Impulsive large purchases或risky investments。Gambling或speculation without limits。或者you're all talk about财务plans但never execute。Aggressive tactics导致major losses。Financial bullying或被这样对待。",
        advice: "立即stop任何reckless financial行为。Set strict limits和seek professional help。如果gambling problem，get addiction help。如果impulsive spender，freeze cards，set budget。Learn from losses，change fundamental approach。如果all talk，要么act responsibly要么admit you won't。Don't let ego drive financial decisions。",
        warning: "extreme financial recklessness can lead to bankruptcy和serious debt，need intervention。",
        outcome: "需要fundamental change in financial behavior，可能需要professional help。",
        timing: "crisis，need immediate damage control"
      }
    },
    general: {
      upright: {
        short: "快速行动，直接approach",
        energy: "整体能量dynamic和assertive，quick thinking和decisive action。",
        situation: "你处于fast-paced生活phase，quick decisions和immediate action。Direct approach to问题和目标。Not afraid of confrontation或challenges。You cut through complexity，直达重点。Your energy和drive push things forward。Life feels intense和fast-moving。",
        advice: "Your energy和decisiveness are strengths，but balance with thoughtfulness。Speed是good但不要rush important decisions。Direct is honest but也要considerate。不要让momentum carry you into mistakes。Pause occasionally to assess direction。Your intensity can inspire但也can overwhelm others。Find balance between action和reflection。",
        warning: "living too fast without reflection can lead to burnout and mistakes，pace yourself。",
        outcome: "通过decisive action achieve goals quickly，但需要balance避免recklessness。",
        timing: "intense fast-paced period，exciting但exhausting"
      },
      reversed: {
        short: "极度鲁莽，言语暴力",
        energy: "能量destructive和harmful，extreme impulsiveness或verbal aggression。",
        situation: "你可能extremely reckless，making impulsive decisions without任何考虑consequences。或者using harsh言语hurt他人。可能涉及aggression甚至violence。生活chaos from reckless choices。Or相反，all talk big but deliver nothing。Your impulsiveness causing damage everywhere。",
        advice: "这是serious，需要immediate change。如果reckless，seek help understanding why和how to stop。如果verbally aggressive，anger management is必要。Your words和actions have consequences，you're hurting yourself和他人。如果all talk，stop lying to yourself和others。Seek therapy to address underlying issues。学习impulse control和healthy expression。",
        warning: "continuing这pattern will destroy relationships，opportunities，和可能你的life，get help。",
        outcome: "需要deep personal work和可能therapy，fundamental behavior change必要。",
        timing: "crisis point，immediate intervention needed"
      }
    }
  }
});

// 宝剑王后 (Queen of Swords)
minorArcana_Swords_11_14.push({
  name: "宝剑王后 (Queen of Swords)",
  number: 13,
  arcana: "minor",
  suit: "Swords",
  element: "Air",
  keywords: ["独立", "清晰", "诚实", "经验", "边界"],
  core_meaning: {
    upright: "独立思考，清晰沟通，诚实直接，有明确边界和经验智慧。",
    reversed: "冷酷刻薄，过度critical，bitter，或情感封闭。"
  },
  interpretations: {
    love: {
      upright: {
        short: "独立clear-headed，诚实沟通",
        energy: "感情能量independent和clear，诚实direct，有healthy boundaries。",
        situation: "你或遇到emotionally mature和independent的人。Clear about wants和needs，honest沟通。不玩games，expect同样honesty。Has boundaries并respect yours。可能经历过hurt，learned from it，现在wiser。Independent but capable of intimacy。Prefers quality over游戏。",
        advice: "这mature approach to relationships is healthy。保持independence while allowing intimacy。Continue honest communication，it's foundation of trust。Respect boundaries mutual。过去的hurt不应让你completely guarded but教你wisdom。Balance vulnerability和protection。You deserve partner who matches your maturity。",
        warning: "过度independence can become emotional distance，don't let past完全close you。",
        outcome: "建立mature和honest relationship based on mutual respect和clear communication。",
        timing: "mature和stable，builds steadily"
      },
      reversed: {
        short: "冷酷bitter，过度critical",
        energy: "能量cold和harsh，过度critical，emotional walls up，bitter from past。",
        situation: "可能become cold和emotionally unavailable from past hurt。过度critical of partner，nothing is good enough。Bitter和cynical about love。用sharp言语hurt instead of communicate。Walls so high no one can reach you。或者被这样someone对待。关系lacks warmth和compassion。",
        advice: "如果you're bitter，这来自hurt但it's hurting你more。Seek healing for past wounds。Being critical和cold won't protect you，只会ensure loneliness。Learn区分boundaries和walls。如果被这样对待，你deserve warmth和kindness。Bitterness is understandable但不是permanent state。Therapy can help process hurt和reopen to love。",
        warning: "bitter和cold pushing away connection会lead to isolation和regret，seek healing。",
        outcome: "需要heal past hurt，learn to be open again while maintaining healthy boundaries。",
        timing: "healing journey，需要work through bitterness"
      }
    },
    career: {
      upright: {
        short: "独立professional，clear thinker",
        energy: "职场能量sharp和competent，independent思考，clear communication和decisions。",
        situation: "You're independent和competent professional。Clear thinker，good at analysis和problem-solving。Communicate directly和honestly。不afraid说truth even if unpopular。Have professional boundaries。Your experience和wisdom是assets。不需要approval，trust own judgment。Others respect your clarity和competence。",
        advice: "Continue trust your judgment和expertise。Your independence和clarity是strengths。Direct communication is professional，但也要diplomatic。Maintain boundaries但also be approachable。Use your experience guide others。Your analytical skills are valuable，不要let emotions cloud judgment but也remember人性factor。Balance sharp mind和人际skills。",
        warning: "being too direct without warmth can alienate，balance honesty和diplomacy。",
        outcome: "作为respected professional thrive通过clarity，competence和healthy boundaries。",
        timing: "mature career phase，stable和respected"
      },
      reversed: {
        short: "职场mean，过度critical",
        energy: "职场能量harsh和destructive，过度critical，cold，或vindictive。",
        situation: "可能become overly critical boss或colleague，nothing meets your standards。Cold和unapproachable。用sharp言语cut down others。Bitter about职业disappointments，taking it out on others。或者so emotionally closed off无法collaborate。Your perfectionism变成toxicity。Being mean disguised as"honest feedback"。",
        advice: "High standards是good但cruelty isn't。区分constructive criticism和meanness。如果bitter about career，process那hurt而非project到others。Being warm doesn't mean weak。People work better with encouragement than fear。If you're isolated，降低walls，collaboration brings better results。Seek feedback on your management style。",
        warning: "harsh和mean leadership会lead to高turnover和poor results，change approach。",
        outcome: "需要soften approach while maintaining standards，learn人性化leadership。",
        timing: "toxic period，需要intervention和change"
      }
    },
    finance: {
      upright: {
        short: "独立理财，clear headed",
        energy: "金钱能量independent和rational，clear-headed about finances，good boundaries。",
        situation: "You're financially independent和responsible。Clear understanding of your财务situation，make rational decisions。不emotional about money，can cut losses when needed。Have financial boundaries，won't be manipulated。Learn from past mistakes。Your analytical approach serves you well。Independent but willing to seek expert advice when needed。",
        advice: "Continue your disciplined和rational approach。Your financial independence is freedom。Maintain boundaries around money even in relationships。Learn from past but don't let it make you overly cautious。Balance保守和reasonable risk。Your clear-headedness helps you avoid emotional financial mistakes。Trust your analysis但also stay informed about changing markets。",
        warning: "being too rigid can miss opportunities，balance discipline和flexibility。",
        outcome: "maintain financial stability和independence through clear-headed management。",
        timing: "stable和growing steadily"
      },
      reversed: {
        short: "财务bitter，过度stingy",
        energy: "金钱能量tight和bitter，过度控制，or vindictive with money。",
        situation: "可能become overly tight甚至stingy from past financial hurt。Bitter about money losses，hoarding。或者用money控制或punish others。So focused on not losing that you miss growing。Cold和calculating about every penny。或者cutting people off financially as punishment。Money become source of bitterness not security。",
        advice: "Financial caution from hurt is understandable但bitterness hurts you。Money是tool not weapon。If hoarding from fear，address the underlying anxiety。Using money control others is toxic。Find balance between prudent和overly tight。Generosity and trust can coexist with boundaries。Therapy can help process financial trauma和develop healthier relationship with money。",
        warning: "bitterness和using money as weapon damages relationships and your own peace。",
        outcome: "需要heal financial wounds，develop healthier balanced approach to money。",
        timing: "healing period，work through money issues"
      }
    },
    general: {
      upright: {
        short: "独立mature，clear boundaries",
        energy: "整体能量independent和clear，mature from experience，strong boundaries。",
        situation: "You've become independent和self-sufficient through experience。Clear about who you are和what you want。Has healthy boundaries，不被manipulate。Communicate honestly和directly。过去taught you wisdom without making you bitter。You're comfortable alone but capable of connection。Value truth和clarity。",
        advice: "Your independence和clarity are strengths earned through experience。Maintain boundaries while staying open to connection。过去is teacher not prison。Your honesty and directness，paired with kindness，are powerful。不需要anyone's approval但can accept support。Balance strength和vulnerability。Your wisdom can help others，share it with compassion。",
        warning: "independence can become isolation if taken too far，stay connected。",
        outcome: "live as mature independent person with clear boundaries和meaningful connections。",
        timing: "mature phase，steady和self-directed"
      },
      reversed: {
        short: "bitter isolated，emotionally cold",
        energy: "能量cold和harsh，bitter from pain，walls up，isolated。",
        situation: "可能become bitter和cold from life's disappointments。Walls so high no one gets in。Critical和harsh with everyone including yourself。Isolated，telling yourself you prefer it。Cynical about everything。过去的hurt hasn't healed，it's hardened you。Using coldness和sharpness protect wounds that need healing。",
        advice: "Your bitterness和coldness come from deep hurt，这需要healing not hiding。Isolation isn't strength，it's protection that's become prison。Being harsh doesn't make you strong，it makes you lonely。Seek therapy to process pain。Warmth doesn't equal weakness。Allowing connection是courage not vulnerability。You deserve healing和peace，不是permanent armor。",
        warning: "continuing in bitterness和isolation will lead to deep regret和missed life，seek help。",
        outcome: "需要deep healing work，learn to lower walls while maintaining healthy boundaries。",
        timing: "crisis of isolation，need to reach out for help"
      }
    }
  }
});

// 宝剑国王 (King of Swords)
minorArcana_Swords_11_14.push({
  name: "宝剑国王 (King of Swords)",
  number: 14,
  arcana: "minor",
  suit: "Swords",
  element: "Air",
  keywords: ["智慧", "权威", "公正", "理性", "真相"],
  core_meaning: {
    upright: "智慧理性的领导，追求真相和公正，清晰沟通，ethical权威。",
    reversed: "滥用智识，操纵，冷酷，或判断力差。"
  },
  interpretations: {
    love: {
      upright: {
        short: "理性mature，fair partner",
        energy: "感情能量rational和fair，mature leadership，honest和ethical。",
        situation: "你或遇到intellectually mature和fair的partner。Values honesty和truth高于everything。Communicate clearly和rationally。Fair in disagreements，seek truth not win。Emotional mature但may appear detached。Make decisions based on logic和ethics。Respect and expect intellectual equality。Relationship based on mutual respect和honest communication。",
        advice: "Rational和fair approach to relationship is healthy foundation。Continue prioritize honesty和ethical behavior。Clear communication prevents misunderstandings。但remember balance logic和emotion，relationships need both。Your fairness is asset但also show warmth。Intellectual connection is important but不是everything。Respect partner's perspective even when different。",
        warning: "过度rational can feel cold，balance logic和emotional warmth。",
        outcome: "build mature relationship based on honesty，respect，和ethical treatment。",
        timing: "stable mature partnership，based on mutual respect"
      },
      reversed: {
        short: "manipulative冷酷，滥用权威",
        energy: "能量manipulative和cold，use intelligence控制，or poor judgment。",
        situation: "可能use intelligence和logic manipulate partner。Cold和emotionally unavailable，hiding behind"rationality"。或者make terrible judgments in relationship from arrogance。Use knowledge as weapon。May be cruel disguised as"honest"。或者partner doing this to you。Relationship lacks warmth，feels like power play。",
        advice: "如果manipulating，这是emotional abuse，停止并seek help。Intelligence不应be weapon。如果cold，learn emotional intelligence和warmth。如果making poor judgments from arrogance，develop humility。如果被manipulated by"logic"，trust your feelings，manipulation disguised as reason is still manipulation。Healthy relationships need emotional warmth not just intellect。",
        warning: "using intelligence manipulate和控制is abusive，will destroy relationship。",
        outcome: "需要fundamental change，learn balance intellect和emotion，or lose relationship。",
        timing: "toxic period，intervention needed"
      }
    },
    career: {
      upright: {
        short: "wise leader，fair authority",
        energy: "职场能量authoritative和wise，fair leadership，clear strategic thinking。",
        situation: "You're或work for wise和fair leader。Make decisions based on logic，ethics，和facts。Clear communicator和strategic thinker。Fair in disputes，seek truth和best solution not personal gain。Respected for integrity和intellect。Can make tough decisions但always fair。Excel in positions requiring analysis，judgment，和leadership。",
        advice: "Continue lead with wisdom，fairness，和integrity。Your analytical skills和ethical standards set you apart。Clear communication和fair treatment build loyalty。Make tough decisions when needed但always ethically。Keep learning，wisdom grows with experience。Use authority for good not ego。Balance being decisive和listening to others。Your leadership style based on respect not fear。",
        warning: "even wise leaders can become arrogant，stay humble和open to feedback。",
        outcome: "成为respected leader known for wisdom，fairness，和integrity。",
        timing: "mature leadership phase，lasting influence"
      },
      reversed: {
        short: "manipulative leader，滥用权力",
        energy: "职场能量tyrannical和manipulative，use intelligence控制，or incompetent。",
        situation: "可能use position和intelligence manipulate和控制others。Cold ruthless leader who rules by fear。或者make poor decisions from arrogance和closed-mindedness。Use information as weapon against people。May be cruel disguised as"tough but fair"。Create toxic environment through intimidation disguised as high standards。",
        advice: "如果you're this leader，你正在damaging people和organization。True leadership serves不是控制。Intelligence without ethics是dangerous。If you work for this，document everything，seek HR help or leave。如果making poor decisions from arrogance，learn humility和listen to others。Power without wisdom和ethics leads to failure。Seek leadership coaching or therapy。",
        warning: "tyrannical和manipulative leadership leads to revolt，turnover，和ultimate failure。",
        outcome: "需要fundamental transformation in leadership style or face consequences。",
        timing: "crisis，toxic environment needs change"
      }
    },
    finance: {
      upright: {
        short: "wise financial decisions，strategic",
        energy: "金钱能量strategic和wise，make informed rational decisions，ethical。",
        situation: "You make wise和strategic financial decisions based on analysis和ethics。不emotional about money，can be objective。Strategic long-term thinking。Fair in business dealings，build reputation for integrity。Your智慧和analytical skills serve you well financially。Make tough financial decisions when needed但always ethically。Successful through wisdom not manipulation。",
        advice: "Continue strategic和ethical approach to finance。Your analytical skills和integrity are assets。Make decisions based on facts和ethics not emotion or greed。Long-term strategic thinking pays off。Fair business practices build sustainable success。Keep learning about financial matters，stay informed。Use wealth responsibly。Success based on wisdom and integrity is sustainable。",
        warning: "success can breed arrogance，stay humble和ethical even as wealth grows。",
        outcome: "achieve sustainable financial success through wisdom，strategy，和ethical practices。",
        timing: "steady growth through wise management"
      },
      reversed: {
        short: "financial manipulation，unethical",
        energy: "金钱能量manipulative和unethical，use knowledge exploit or make terrible decisions。",
        situation: "可能use financial knowledge manipulate和exploit others for profit。Unethical business practices。或者make terrible financial decisions from arrogance和ignoring advice。Use information advantage unfairly。May be involved in fraud or manipulation disguised as"smart business"。Greed和ego driving decisions not wisdom。",
        advice: "Unethical financial practices have serious consequences including legal。Short-term gain不worth long-term damage to reputation和potential imprisonment。如果making poor decisions from arrogance，seek advice和practice humility。如果被manipulated，protect yourself legally。Rebuild on ethical foundation if you've strayed。Wealth gained through manipulation is unstable和corrupting。",
        warning: "financial manipulation和fraud will have legal and personal consequences，change course。",
        outcome: "需要return to ethical practices或face serious legal和financial consequences。",
        timing: "危险期，potential legal issues"
      }
    },
    general: {
      upright: {
        short: "wise mature authority",
        energy: "整体能量wise和authoritative，clear thinking，ethical，fair。",
        situation: "You've achieved wisdom和maturity through experience和intellect。Think clearly和strategically。Value truth，ethics，和fairness高于personal gain。Others seek your counsel和respect your judgment。You can make tough decisions但always fairly和ethically。Balance intellect和empathy in your approach to life。",
        advice: "Your wisdom和integrity are precious，continue cultivate them。Use your clear thinking和authority for good。Be fair and ethical in all dealings。Continue learning，wisdom is lifelong journey。Balance intellect和heart，both are needed。Your judgment can help many，share wisdom generously but humbly。Lead by example of integrity和rational compassion。",
        warning: "wisdom can become arrogance if not balanced with humility，stay grounded。",
        outcome: "live as wise和respected person whose authority comes from integrity和wisdom。",
        timing: "mature wisdom phase，lasting positive influence"
      },
      reversed: {
        short: "tyrannical manipulative，或愚蠢",
        energy: "能量tyrannical和cold，use intelligence manipulate，or make terrible judgments。",
        situation: "可能use intelligence和authority manipulate和控制others。Cold and ruthless，rationality without empathy。或者make terrible decisions from arrogance，refusing listen。Use knowledge as weapon。May be cruel and call it"honesty"or"logic"。Create suffering through cold indifference disguised as rationality。Tyranny hiding behind claims of wisdom。",
        advice: "这is abuse of intelligence和authority。True wisdom includes compassion。If this is you，深刻改变needed，seek therapy to understand why you need control和cruelty。Intelligence without ethics和empathy is destructive。If被这样对待，protect yourself，this is toxic even if disguised as"logic"。Arrogance disguised as wisdom is actually foolishness。Rebuild based on ethical use of intellect。",
        warning: "continuing tyrannical和manipulative use of intelligence will lead to isolation和downfall。",
        outcome: "需要fundamental transformation，learn balance intelligence和empathy，or face consequences。",
        timing: "crisis point，serious consequences if不改变"
      }
    }
  }
});

export default minorArcana_Swords_11_14;
