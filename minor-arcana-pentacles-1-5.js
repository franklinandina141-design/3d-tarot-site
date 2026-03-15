/**
 * 小阿卡纳 - 星币 1-5
 * Suit: Pentacles (Earth)
 * Keywords: 物质、金钱、工作、实际、稳定、身体、健康
 */

const minorArcana_Pentacles_1_5 = [];

// 星币一 (Ace of Pentacles)
minorArcana_Pentacles_1_5.push({
  name: "星币一 (Ace of Pentacles)",
  number: 1,
  arcana: "minor",
  suit: "Pentacles",
  element: "Earth",
  keywords: ["新机会", "财富开端", "物质显现", "稳定基础", "实际成果"],
  core_meaning: {
    upright: "新的物质或财务机会，稳固的开始，潜力巨大的实际项目。",
    reversed: "错失机会，财务不稳，缺乏规划，或过度物质主义。"
  },
  interpretations: {
    love: {
      upright: {
        short: "稳定关系开始，实际承诺",
        energy: "感情能量踏实稳定，关系有实际基础和长期潜力。",
        situation: "可能开始一段非常稳定务实的关系，双方都认真对待。或现有关系进入更实际的阶段，如同居、订婚。你们开始建立实际的共同生活，不只是浪漫。关系有solid foundation和长期潜力。你们可能一起规划财务、家庭等实际问题。",
        advice: "珍惜这个稳固的开始，用心培养。实际的承诺和规划显示成熟。但也不要让关系变得太实际而失去浪漫。平衡物质稳定和情感连接。这是建立长期关系的好基础，慢慢培养，不要急于求成。享受这份踏实感。",
        warning: "过度关注实际可能忽略情感需求，要保持浪漫和激情。",
        outcome: "建立稳固有潜力的长期关系，有实际基础支撑。",
        timing: "稳定开始，需要时间培养但前景好"
      },
      reversed: {
        short: "关系不稳定，缺乏承诺",
        energy: "能量不踏实，关系缺乏稳定基础或过度物质化。",
        situation: "关系可能缺乏实际基础，只有表面没有substance。可能one or both不愿做出实际承诺。或者关系过度focus on物质，忽略情感连接。可能错过建立稳定关系的机会因为害怕或not ready。财务问题影响关系稳定性。",
        advice: "如果关系缺乏基础，评估是否值得投入。如果不愿承诺，诚实about原因。如果过度物质化，记住关系需要emotional和spiritual connection不只是物质稳定。如果错过机会，反思为什么，下次抓住。建立关系需要实际行动not只是想法。",
        warning: "没有稳定基础的关系难以长久，要么建立要么重新考虑。",
        outcome: "需要建立实际基础或接受关系的不稳定性。",
        timing: "不稳定期，需要决定是否投入"
      }
    },
    career: {
      upright: {
        short: "新工作机会，实际成果",
        energy: "职场能量踏实productive，新机会有real potential。",
        situation: "可能收到好的工作offer或开始有前景的项目。或者你的work开始产生tangible results。这是开始新事业或学习新技能的好时机。机会是solid和realistic，不是空中楼阁。你的努力开始带来实际成果和recognition。可能获得加薪或bonus。",
        advice: "抓住这个实际的机会，认真对待。这不是quick win but long-term investment。Put in effort建立solid foundation。Focus on practical skills和tangible results。这个开始虽然可能不dramatic but它stable和有潜力。Be patient和persistent，success会慢慢accumulate。",
        warning: "好的开始需要持续努力维持，不要initial excitement后就松懈。",
        outcome: "通过抓住机会和持续努力，建立stable和successful的career。",
        timing: "好的开始，需要长期cultivation"
      },
      reversed: {
        short: "错失机会，缺乏规划",
        energy: "职场能量不稳定，opportunities lost或poorly managed。",
        situation: "可能错过好的工作机会因为hesitation or poor timing。或者start project但缺乏proper planning导致问题。你的work可能不产生expected tangible results。可能面临financial instability at work。缺乏clear direction或foundation for career growth。",
        advice: "如果错过机会，learn from it，准备好下次。如果缺乏planning，现在制定realistic plan。Focus on building practical skills和experience。如果工作不产生results，evaluate为什么并adjust approach。不要chase unrealistic opportunities，focus on solid ones。Seek mentorship或training提升skills。",
        warning: "没有solid foundation和planning，career很难有sustainable growth。",
        outcome: "需要更practical和planned approach to career development。",
        timing: "需要重新规划和建立foundation"
      }
    },
    finance: {
      upright: {
        short: "财务新机会，稳定增长",
        energy: "金钱能量positive和stable，new financial opportunities或stable growth。",
        situation: "可能获得new income source或good investment opportunity。或者财务状况开始stabilize和improve。这是开始储蓄计划或investment的好时机。Financial opportunity是realistic和有solid potential。你的financial efforts开始产生tangible results。可能收到bonus，inheritance，或other financial windfall。",
        advice: "抓住这个financial opportunity但要realistic。这不是get rich quick但stable growth。开始或加强savings和investment plans。Focus on building solid financial foundation。Be disciplined和patient，wealth accumulates over time。This is good time投资在education或skills that增加earning potential。Manage wisely。",
        warning: "即使机会好也要做due diligence，不要因为excited就不careful。",
        outcome: "通过wise decisions和patience，建立stable和growing财务状况。",
        timing: "positive开始，稳定增长over time"
      },
      reversed: {
        short: "财务机会流失，不稳定",
        energy: "金钱能量不稳或贪婪，opportunities missed或poor financial decisions。",
        situation: "可能错过good financial opportunity因为hesitation or poor judgment。或者make poor investment decisions缺乏proper research。财务状况可能unstable，没有solid foundation。可能face unexpected expenses或income loss。过度focus on material wealth忽略other life aspects。",
        advice: "如果错过机会，don't dwell，准备好next one。如果made poor decisions，learn和cut losses if needed。Focus on building emergency fund和stable income。不要chase unrealistic get-rich-quick schemes。If过度materialistic，remember money is tool not goal。Seek professional financial advice如果needed。Build foundation before taking risks。",
        warning: "没有solid financial foundation，任何setback都可能是devastating。",
        outcome: "需要more disciplined和realistic approach to money management。",
        timing: "不稳定期，需要build foundation"
      }
    },
    general: {
      upright: {
        short: "新开始，物质显现",
        energy: "整体能量grounded和prosperous，ideas开始manifest in physical world。",
        situation: "你的生活开始产生tangible positive results。可能是health improvement，new home，financial stability，或other material manifestation of efforts。This is时期of new beginnings in practical aspects of life。Your hard work开始pay off in concrete ways。Feel more grounded和secure。Opportunities for growth and prosperity。",
        advice: "This is gift，use it wisely。Whatever manifesting，nurture it with care和practical effort。Don't take it for granted。This is foundation，build on it。Balance appreciating what's manifesting和continuing to work for more。Stay grounded和grateful。This is beginning not end，需要continued effort。Enjoy fruits of labor但also plan for future。",
        warning: "Good beginnings需要maintenance，不要因为initial success就stop努力。",
        outcome: "Experience实际的prosperity和stability通过wise use of opportunities。",
        timing: "Prosperous period开始，potential for long-term growth"
      },
      reversed: {
        short: "机会流失，物质匮乏",
        energy: "能量scattered或greedy，opportunities missed或resources mismanaged。",
        situation: "可能feeling financially or materially insecure。Opportunities似乎slip away。你的efforts可能not producing expected tangible results。可能面临material setbacks或losses。Feel ungrounded和unstable。过度focus on material things忽略spiritual或emotional needs。或者太materialistic变得greedy。",
        advice: "Evaluate what's causing instability。如果missing opportunities，工作on readiness和awareness。如果efforts不产生results，adjust approach，可能need more practical planning。如果facing losses，focus on rebuilding foundation。如果too materialistic，remember balance。Seek stability through practical steps not just wishing。Ground yourself through nature，routine，healthy habits。",
        warning: "Continued instability会affect all life areas，需要address根本问题。",
        outcome: "需要work on grounding和building stable foundation in life。",
        timing: "不稳定期，需要practical work重新建立"
      }
    }
  }
});

// 星币二 (Two of Pentacles)
minorArcana_Pentacles_1_5.push({
  name: "星币二 (Two of Pentacles)",
  number: 2,
  arcana: "minor",
  suit: "Pentacles",
  element: "Earth",
  keywords: ["平衡", "多任务", "灵活", "优先级", "适应变化"],
  core_meaning: {
    upright: "在多个责任间保持平衡，灵活应对变化，需要优先级管理。",
    reversed: "失去平衡，overwhelmed，priorities混乱，或拒绝适应。"
  },
  interpretations: {
    love: {
      upright: {
        short: "平衡关系和其他，灵活适应",
        energy: "感情能量需要平衡，在relationship和other life aspects间juggling。",
        situation: "你可能trying to balance relationship和work，family，或other commitments。需要flexibility和adaptability让relationship work。可能是long distance或other circumstances需要creative solutions。或者在两个potential partners间考虑。关系需要effort to maintain amid busy life。",
        advice: "Balance是key，不要neglect relationship for other things but也不要sacrifice everything for it。Communicate openly about time和energy constraints。Be flexible和creative找到work for both的solutions。If considering两个people，做decision不要indefinitely juggle。Prioritize what really matters。有时需要说no to other things保护relationship time。",
        warning: "长期poor balance会导致relationship suffer或burnout，要adjust。",
        outcome: "通过conscious effort和flexibility，maintain healthy balance。",
        timing: "busy period需要active balancing"
      },
      reversed: {
        short: "失去平衡，overwhelmed",
        energy: "能量chaotic和stressed，无法balance，relationship受影响。",
        situation: "可能完全失去balance，relationship被neglect或consuming all energy忽略other important areas。Feel overwhelmed unable to manage everything。或者stuck between两个people unable to choose。Relationship suffering from poor priorities或constant chaos。你或partner可能burned out。",
        advice: "Something has to give。Evaluate priorities并做tough choices。如果relationship被neglect，要么invest time要么honest about不能commit。如果consuming你，set boundaries保护other life areas。如果stuck between两个people，make decision，这unfair to all。Seek help managing responsibilities。Learn to say no。重新establish balance需要courage做changes。",
        warning: "持续imbalance会导致relationship end或serious health issues from stress。",
        outcome: "需要make difficult choices重新establish balance in life。",
        timing: "crisis period，immediate rebalancing needed"
      }
    },
    career: {
      upright: {
        short: "多任务处理，灵活应变",
        energy: "职场能量busy但manageable，juggling multiple responsibilities。",
        situation: "你可能handling multiple projects或responsibilities同时。需要flexibility adapt to changing work demands。可能在两个job offers间考虑或balancing work和side hustle。你的ability to multitask和adapt是asset。Work environment可能dynamic和fast-changing。需要good time management和prioritization。",
        advice: "Stay organized和prioritize。不要try to do everything at once，focus on most important。Use tools帮助manage tasks和time。Be flexible但也set limits避免burnout。If juggling两个opportunities，evaluate并make decision。你的adaptability是strength但也know when to say no to new commitments。Regularly reassess priorities。",
        warning: "Trying to do too much会导致nothing done well，要realistic about capacity。",
        outcome: "通过good management和flexibility，成功handle multiple demands。",
        timing: "busy期但manageable with good strategies"
      },
      reversed: {
        short: "overwhelmed，优先级混乱",
        energy: "职场能量chaotic和unmanageable，无法cope with demands。",
        situation: "可能completely overwhelmed by work demands。Dropping balls，missing deadlines，quality suffering。优先级完全混乱，不知道focus哪里。可能在两个jobs间juggling poorly。或者refusing to adapt to changes导致problems。Burned out或heading towards it。Work-life balance completely lost。",
        advice: "Stop，reassess，prioritize。不能do everything，choose what really matters。Delegate如果possible。如果有太多commitments，需要drop some。如果refusing to adapt，这会cost you，learn flexibility。If burned out，需要break或change。Seek help from manager或colleagues。Learn better time management和prioritization skills。说no to new things until get current under control。",
        warning: "Burnout和poor performance会cost job和health，要立即address。",
        outcome: "需要significant changes in how manage work和set boundaries。",
        timing: "crisis，需要immediate intervention"
      }
    },
    finance: {
      upright: {
        short: "财务平衡，灵活管理",
        energy: "金钱能量需要careful management，balancing income和expenses。",
        situation: "可能juggling multiple financial obligations or income sources。需要careful budgeting和prioritization。财务状况fluctuating，需要flexibility adapt。可能balance between saving和necessary spending。你的ability to manage money creatively是helping。可能有irregular income需要plan around。",
        advice: "Keep close eye on finances，budget carefully。Prioritize essential expenses。Build emergency fund for ups和downs。If有irregular income，plan conservatively。Be flexible但disciplined。Track spending和adjust as needed。不要overextend，live within means even when fluctuating。Consider ways to stabilize income if possible。你的creative financial management会pay off。",
        warning: "Fluctuating finances需要constant attention，不能放松vigilance。",
        outcome: "通过careful management和flexibility，maintain financial stability。",
        timing: "需要active management，potentially unstable"
      },
      reversed: {
        short: "财务失控，债务accumulating",
        energy: "金钱能量chaotic，unable to manage，debts或financial stress。",
        situation: "可能完全lost control of finances。Debts accumulating，unable to pay bills。No clear sense of financial situation。Spending和income completely out of balance。可能juggling debts poorly，robbing Peter to pay Paul。Financial stress overwhelming。或者refusing to adapt spending to financial reality。",
        advice: "Face the situation honestly，assess total financial picture。需要immediate budget和spending cuts。Prioritize essential bills。Stop any unnecessary spending。如果in debt，寻求professional help制定repayment plan。如果refusing to adapt lifestyle，这不sustainable，make changes now before worse。Track every expense。可能need增加income or drastically reduce spending。不要ignore，会only get worse。",
        warning: "Uncontrolled finances can lead to bankruptcy，need immediate action。",
        outcome: "需要drastic changes和discipline重新gain financial control。",
        timing: "financial crisis，urgent action needed"
      }
    },
    general: {
      upright: {
        short: "生活平衡，适应变化",
        energy: "整体能量busy但balanced，juggling life responsibilities。",
        situation: "你的生活busy和dynamic，balancing multiple areas。需要flexibility和adaptability cope with constant changes。可能feel像juggling但managing okay。你的ability to multitask和adapt serving you well。Life feels like dance，需要constant adjustment to maintain balance。",
        advice: "Continue your balancing act但watch for signs of strain。Prioritize what truly matters，不要try to do everything。Be flexible和creative finding solutions。Set boundaries protect essential areas like health和relationships。Regular reassess priorities as life changes。你的adaptability是strength但也know limits。Take breaks to recharge。Stay organized和focused。",
        warning: "Even good jugglers drop balls sometimes，be prepared to adjust when needed。",
        outcome: "通过conscious effort和flexibility，maintain dynamic but balanced life。",
        timing: "active balancing period，requires ongoing attention"
      },
      reversed: {
        short: "生活失衡，overwhelmed",
        energy: "能量chaotic和strained，life out of control，struggling to cope。",
        situation: "可能feel completely overwhelmed by life demands。Every area suffering from inability to balance。Dropping balls in multiple areas of life。可能rigid refusing to adapt to changes making things worse。Stressed，burned out，不知道如何regain control。Life feels like chaos instead of managed juggling。",
        advice: "需要pause和reassess entire life。什么is absolutely essential？什么can be let go？Make tough choices，不能do everything。Seek help从friends，family，professionals。Learn to say no。如果too rigid，learn flexibility，life requires adaptation。Take care of health first，这is foundation。Simplify life，去掉non-essential。Rebuild balance slowly，一次一个area。可能需要major life changes。",
        warning: "Chronic overwhelm leads to serious health和mental health issues，要寻求help。",
        outcome: "需要significant life restructuring重新find balance和peace。",
        timing: "crisis period，need to make changes for survival"
      }
    }
  }
});

// 星币三 (Three of Pentacles)
minorArcana_Pentacles_1_5.push({
  name: "星币三 (Three of Pentacles)",
  number: 3,
  arcana: "minor",
  suit: "Pentacles",
  element: "Earth",
  keywords: ["团队合作", "技能", "学习", "协作", "质量"],
  core_meaning: {
    upright: "通过团队合作和技能实现目标，学习和成长，质量工作获认可。",
    reversed: "缺乏合作，技能不足，质量差，或独自工作阻碍进展。"
  },
  interpretations: {
    love: {
      upright: {
        short: "共同建设，团队关系",
        energy: "感情能量协作和建设，双方一起努力建立关系。",
        situation: "你们作为团队一起工作建设关系。可能involve家人朋友支持你们的关系。或者你们一起on实际项目like装修房子，规划未来。关系建立在mutual effort和shared goals。你们互相学习和成长。关系有外部recognition和support。",
        advice: "Continue work together as team。Appreciate each other's contributions和skills。Involve trusted people for advice和support when appropriate。Focus on building something lasting together。Learn from each other。Quality relationship需要both people's effort。Celebrate progress together。Be patient，good things take time to build。",
        warning: "Too much外部involvement can interfere，保持boundaries while welcoming support。",
        outcome: "通过shared effort和collaboration，建立strong有质量的relationship。",
        timing: "Building phase，steady progress through teamwork"
      },
      reversed: {
        short: "缺乏合作，各自为政",
        energy: "能量disconnected，lack of teamwork，可能conflicts或poor quality。",
        situation: "可能不作为team工作，各自为政。或者third parties interfering破坏关系。缺乏mutual effort build relationship。可能one person doing all work。你们的skills或approaches不compatible。关系quality suffering from lack of coordination。外部people可能negative影响而非support。",
        advice: "Relationship需要both people contribute。如果缺乏teamwork，communicate about roles和expectations。如果third parties interfering，set boundaries。如果skills incompatible，learn to appreciate differences或seek compromise。If one doing all work，这不sustainable，需要balance。Work on improving relationship quality through better collaboration。May need couples counseling。",
        warning: "Without teamwork和mutual effort，relationship会fail或become低质量。",
        outcome: "需要improve collaboration和communication或关系will suffer。",
        timing: "Struggling period，需要work on teamwork"
      }
    },
    career: {
      upright: {
        short: "团队成功，技能认可",
        energy: "职场能量collaborative和productive，teamwork带来success。",
        situation: "你在team中work well，collaborative effort产生good results。你的skills被recognized和appreciated。可能在learning new skills from colleagues。Team projects成功。你的quality work获得recognition。可能involved in training或mentoring。Good working relationships with colleagues。",
        advice: "Continue be good team player。Share your skills和learn from others。Focus on quality work not just speed。Collaborate willingly。Your contributions are valued，continue deliver。This is good time for skill development和networking within team。Build professional relationships。Take pride in collective achievements。",
        warning: "Don't become too依赖team，也要develop individual skills和contributions。",
        outcome: "通过teamwork和skill development，achieve career success和recognition。",
        timing: "Productive period，steady progress through collaboration"
      },
      reversed: {
        short: "团队问题，质量差",
        energy: "职场能量dysfunctional，poor teamwork或lack of skills。",
        situation: "可能team不collaborate well，conflicts或poor coordination。你的skills可能不足for the job。Work quality suffering。可能not getting recognition应得的。或者you're not contributing enough to team。Lack of communication和cooperation。可能working in silo阻碍progress。Training或support不足。",
        advice: "如果team dysfunctional，try improve communication和cooperation。如果skills不足，seek training和development。如果work质量差，focus on improvement。如果not getting recognition，document contributions和advocate for yourself。如果you're not contributing enough，step up。Team success requires everyone's effort。May need to address conflicts directly or seek mediation。",
        warning: "Poor teamwork和low quality work会damage career prospects，要address。",
        outcome: "需要improve collaboration和skills或face setbacks。",
        timing: "Challenging period，需要improvement"
      }
    },
    finance: {
      upright: {
        short: "协作财富，技能变现",
        energy: "金钱能量通过collaboration和skills产生，quality work有回报。",
        situation: "可能通过team effort或partnership赚钱。你的skills和expertise产生income。Quality work获得fair compensation。可能involved in joint financial ventures。Learning new skills增加earning potential。Financial planning with partner或advisor产生good results。",
        advice: "Continue develop和use your skills to增加income。Collaborate with others for mutual financial benefit。Focus on quality，这长期pays off。Invest in skill development，这是investment in future earning。If有financial partners，ensure clear communication和agreement。Your expertise有价值，不要undersell。",
        warning: "Financial partnerships需要clear agreements，protect yourself legally。",
        outcome: "通过skills和collaboration，achieve stable financial growth。",
        timing: "Building period，steady income through expertise"
      },
      reversed: {
        short: "财务合作问题，技能不足",
        energy: "金钱能量通过poor collaboration或lack of skills受损。",
        situation: "可能financial partnerships有problems。你的skills可能not producing expected income。Work quality影响earnings。可能not getting paid fairly for expertise。或者你的skills过时需要update。Financial planning缺乏professional guidance。Joint财务ventures有conflicts。",
        advice: "如果financial partnership有问题，clarify agreements或consider exiting。如果skills不产生income，evaluate市场需求和update skills。如果not paid fairly，negotiate或look for better opportunities。Invest in developing marketable skills。如果financial plans不work，seek professional advice。Be cautious about financial collaborations without proper agreements。",
        warning: "Poor financial partnerships can lead to losses，要careful和protected。",
        outcome: "需要improve skills和financial collaborations或face instability。",
        timing: "Difficult period，需要reassess和improve"
      }
    },
    general: {
      upright: {
        short: "协作成功，技能成长",
        energy: "整体能量productive和collaborative，通过teamwork和learning成长。",
        situation: "你在life various areas通过collaboration achieving success。Learning和developing skills。Your efforts产生quality results获得recognition。Working well with others。Building something meaningful through combined efforts。Feel productive和valued。Community或team支持你。",
        advice: "Continue collaborate和learn。Your skills和contributions有价值。Be open to learning from others。Work on projects that build something lasting。Quality over quantity。Appreciate the people helping you和reciprocate。This is time for growth through cooperation。Celebrate collective achievements。Stay humble和willing to learn。",
        warning: "Don't take others' contributions for granted，mutual respect维持collaboration。",
        outcome: "通过collaboration和skill development，achieve meaningful success和growth。",
        timing: "Productive period，steady progress through teamwork"
      },
      reversed: {
        short: "缺乏合作，技能问题",
        energy: "能量isolated或dysfunctional，poor collaboration阻碍progress。",
        situation: "可能trying to do everything alone when需要help。或者collaborations不work因为conflicts或miscommunication。你的skills可能不足应对challenges。Efforts不产生quality results。Feel isolated或undervalued。Projects因为poor teamwork而struggling。可能receiving poor advice或guidance。",
        advice: "Evaluate为什么lacking collaboration。如果因为pride或fear，reach out for help。如果collaborations dysfunctional，address conflicts或find better partners。如果skills不足，invest in learning。Stop trying to do everything alone。Seek quality guidance和support。Work on improving what you can control。Sometimes需要admit need help。",
        warning: "Isolation和refusing help会limit growth和success，要open to collaboration。",
        outcome: "需要improve collaboration和develop skills to progress。",
        timing: "Struggling period，需要reach out和improve"
      }
    }
  }
});

// 星币四 (Four of Pentacles)
minorArcana_Pentacles_1_5.push({
  name: "星币四 (Four of Pentacles)",
  number: 4,
  arcana: "minor",
  suit: "Pentacles",
  element: "Earth",
  keywords: ["控制", "安全", "保守", "囤积", "害怕失去"],
  core_meaning: {
    upright: "紧紧抓住资源寻求安全，保守和控制，可能过度到囤积。",
    reversed: "放手，慷慨，或失去控制和安全感。"
  },
  interpretations: {
    love: {
      upright: {
        short: "控制关系，害怕失去",
        energy: "感情能量possessive和defensive，紧紧抓住relationship害怕失去。",
        situation: "可能become过度possessive和controlling in relationship。害怕失去partner所以grip太紧。或者emotionally guarded，不愿open up害怕vulnerability。关系feels suffocating from too much control。可能focus过多on security而忽略spontaneity和growth。你或partner可能overly jealous或restrictive。",
        advice: "Security是important但controlling和possessiveness会push partner away。Trust是essential。如果你holding too tight，learn to给space和freedom。如果被controlled，communicate需要autonomy。Relationship需要balance between security和freedom。Work on your insecurities causing control behaviors。Love requires letting go of control。Seek therapy如果有trust issues。",
        warning: "Excessive control会suffocate relationship导致exactly失去你害怕的。",
        outcome: "需要learn to balance security needs和trust，否则will push love away。",
        timing: "Restricted period，需要loosen grip"
      },
      reversed: {
        short: "放手关系，或失去安全",
        energy: "能量releasing或unstable，learning to let go或facing loss of security。",
        situation: "可能learning to be less controlling和more trusting。或者relationship lacks stability你crave。可能going through breakup或letting go。你可能becoming more generous和open emotionally。或者相反，completely lost sense of security in relationship。Fear of loss已经manifest成actual loss。",
        advice: "如果learning to let go，这是growth，continue。如果lacking security，评估这relationship是否能provide what you need。如果已经lost，allowing grief但也recognize freedom。Learn from过度control的consequences。Work on being more generous和trusting。建立security from within不是from controlling others。Therapy can help process fear of loss。",
        warning: "Learning to let go is necessary但也要protect yourself from真正unstable situations。",
        outcome: "通过releasing control，find healthier balance或move on from unsatisfying relationship。",
        timing: "Transition period，learning和adjusting"
      }
    },
    career: {
      upright: {
        short: "保守职业，害怕冒险",
        energy: "职场能量conservative和risk-averse，focused on security。",
        situation: "可能holding onto job紧紧even if不满意，because security。Resistant to change或new opportunities害怕失去stability。可能hoarding information或resources at work不愿share。Very protective of position和territory。Focus heavily on job security可能missing growth opportunities。Risk-averse to fault。",
        advice: "Job security是important但不要让fear完全prevent growth。Evaluate是否too conservative missing opportunities。If hoarding，this可能damage team和relationships。Share knowledge和resources，this builds不是threatens security。Consider calculated risks for advancement。你的current position虽然secure可能limiting potential。Balance security和growth。",
        warning: "Over-focus on security can lead to stagnation和被超越by more adaptable people。",
        outcome: "May maintain security但可能sacrifice growth和fulfillment。",
        timing: "Stable但potentially stagnant period"
      },
      reversed: {
        short: "职业不稳，或过度冒险",
        energy: "职场能量unstable或reckless，lack of security或too loose with career。",
        situation: "可能facing job insecurity或unemployment。或者going到opposite extreme，too reckless with career decisions。可能被forced to let go of secure position。You可能becoming more generous和collaborative at work。或者lack of financial prudence在career choices。Feel out of control professionally。",
        advice: "如果facing insecurity，这是机会build新foundation even if scary。如果too reckless，需要更多prudence和planning。Learn from loss of security，what can control和what cannot。Build skills和network for resilience不是just依赖一个position。If已经lost job，this can be转机for better fit。Balance between security和flexibility。",
        warning: "Complete lack of career stability需要address，build safety net。",
        outcome: "需要find new balance between security和adaptability in career。",
        timing: "Unstable period，need to rebuild或adjust"
      }
    },
    finance: {
      upright: {
        short: "财务保守，囤积金钱",
        energy: "金钱能量tight和controlling，focused on saving和security。",
        situation: "可能very conservative with money，saving excessively。Resistant to spending even on necessities from fear。May be hoarding money not enjoying或using wisely。Overly cautious about investments missing opportunities。Financial security是top priority to point of miserliness。Tight grip on finances。",
        advice: "Financial prudence是good但不要到extreme让生活quality suffer。Money是tool不是just to hoard。Balance saving和reasonable享受life。过度fear can be as问题as recklessness。Consider if你的financial fears are realistic或anxiety-driven。Some spending on experiences和development是investment。Share和give when you can，这brings different kind of wealth。",
        warning: "Hoarding到extreme can damage relationships和life quality，要balance。",
        outcome: "Will likely maintain financial security但可能at cost of life enjoyment。",
        timing: "Financially stable但potentially too tight"
      },
      reversed: {
        short: "财务流失，或学会慷慨",
        energy: "金钱能量loosening或unstable，becoming generous或losing financial grip。",
        situation: "可能facing financial losses或instability。或者learning to be more generous和less tight with money。You可能spending more freely，好的或坏的ways。Financial security你依赖可能challenged。May be learning money isn't everything。或者opposite，complete lack of financial discipline。",
        advice: "如果facing losses，focus on what can control和rebuild。如果learning generosity，这是positive if balanced。如果spending recklessly，需要更多discipline。Learn from financial instability，build better habits。Money comes和goes，focus on what truly matters。但也不要ignore practical needs。Find balance between holding tight和complete looseness。",
        warning: "Financial instability需要practical action，不能ignore hoping会自己改善。",
        outcome: "通过adjustments，find healthier relationship with money和security。",
        timing: "Transitional period financially，需要new balance"
      }
    },
    general: {
      upright: {
        short: "紧抓安全，害怕变化",
        energy: "整体能量defensive和controlling，holding tight to security。",
        situation: "可能trying to control too many aspects of life seeking security。Resistant to change害怕失去stability。May be emotionally或physically hoarding。Very focused on保持现状even if不理想。Fear of loss driving behaviors。Life feels restricted by own defenses。Not taking risks或trying new things。",
        advice: "Understand your fear of loss和insecurity。Some control是healthy但过度suffocates growth和joy。Life requires some letting go和trust。你的tight grip可能actually creating what you fear。Learn to balance security和openness。Work on building security from within不是from controlling externally。Take小risks，experience that can survive uncertainty。Therapy可以help with control issues。",
        warning: "Living in constant defensive mode会make life small和unfulfilling。",
        outcome: "May maintain安全但at cost of growth，joy，和authentic living。",
        timing: "Restricted period，需要learn to let go some"
      },
      reversed: {
        short: "失去控制，或学会放手",
        energy: "能量releasing或chaotic，learning to let go或facing loss of security。",
        situation: "可能experiencing loss of control或stability in life。Or你learning to be less controlling和more trusting。可能becoming more generous和open。Life changes forcing you to let go of illusions of control。感到unstable或ungrounded。Learning that can't control everything。",
        advice: "如果losing control，remember some things are meant to be let go。如果learning to release，这是wisdom即使uncomfortable。Build security from inner strength不是external control。Learn from what losing或已经lost。Generosity和openness，when balanced，bring richness。Work on trust和acceptance。Life's uncertainty是reality，learning to flow with it是strength。如果truly unstable，take practical steps但也work on psychological flexibility。",
        warning: "Complete lack of grounding或security需要address，find balance。",
        outcome: "通过releasing excessive control，find更authentic security和freedom。",
        timing: "Transformational period，letting go和learning"
      }
    }
  }
});

// 星币五 (Five of Pentacles)
minorArcana_Pentacles_1_5.push({
  name: "星币五 (Five of Pentacles)",
  number: 5,
  arcana: "minor",
  suit: "Pentacles",
  element: "Earth",
  keywords: ["匮乏", "困境", "被排斥", "健康问题", "寻求帮助"],
  core_meaning: {
    upright: "经历物质或情感匮乏，困境中，但帮助往往在附近。",
    reversed: "开始恢复，接受帮助，或拒绝支持继续受苦。"
  },
  interpretations: {
    love: {
      upright: {
        short: "关系困境，感到孤独",
        energy: "感情能量cold和lacking，感到emotionally或physically被排斥。",
        situation: "可能feeling emotionally或physically冷落in relationship。感到不被爱或supported。或者外部困境（financial，health）影响关系。可能感到alone即使在relationship中。你们可能struggling together through hard times。感到excluded from warmth和comfort you need。关系在strain from hardship。",
        advice: "Reach out for support，不要suffer alone。If partner available，communicate needs。Hard times需要pulling together不是apart。如果feeling excluded，问for what you need。Remember困境是temporary。接受help from others如果offered。如果relationship itself是source of冷漠，evaluate如果这worth continuing。Warmth和support应该be available尤其in hard times。",
        warning: "Isolating during hard times会make everything worse，要reach out。",
        outcome: "通过seeking和accepting support，weather困境together或find way out。",
        timing: "Hard period，但help available如果seek"
      },
      reversed: {
        short: "关系恢复，或拒绝帮助",
        energy: "能量warming或stubbornly cold，recovery starting或refusing support。",
        situation: "可能starting to recover from relationship困境。Finding warmth和support again。或者stubbornly refusing help，继续suffer alone。You可能opening up to partner或others for support。或者shutting out available help from pride或fear。关系可能improving as external circumstances improve。",
        advice: "如果recovering，继续接受和give support。If refusing help，examine why。Pride会keep you cold when warmth is available。Let people in who want to help。如果relationship improving，nurture this recovery together。Learn from困境，how to support each other better。如果still suffering，humble yourself to accept help。No one should go through hard times completely alone。",
        warning: "Refusing help from pride会prolong suffering unnecessarily。",
        outcome: "通过accepting support，recover和rebuild或continue suffer if refuse。",
        timing: "Recovery period如果open，或continued hardship如果closed"
      }
    },
    career: {
      upright: {
        short: "职业困境，失业压力",
        energy: "职场能量struggling，可能unemployment或很困难的work situation。",
        situation: "可能unemployed或underemployed。Financial stress from work situation。Feel excluded from opportunities或success others享有。Health issues可能影响work ability。Struggling to meet基本needs through work。感到职业上left out in cold。Work environment可能toxic或unsupportive。",
        advice: "Seek help和support，programs，training，networking。Don't suffer alone in pride。Help往往available如果ask。如果health issue，address it，你的wellness matters more than job。Look for opportunities即使small start。Network和让people know you need work。Consider retraining或new direction if current path blocked。Accept help from unemployment benefits，food assistance等without shame。This困境不定义你。",
        warning: "Isolating和not seeking available help会prolong职业困境。",
        outcome: "通过seeking support和opportunities，可以find way out of困境。",
        timing: "Difficult period，但resources available如果seek"
      },
      reversed: {
        short: "职业恢复，或拒绝帮助",
        energy: "职场能量improving或stubbornly struggling，help被接受或拒绝。",
        situation: "可能finding new job或work situation improving。开始recover from unemployment或困境。或者refusing available help和opportunities from pride。You可能accepting retraining或assistance。或者too proud to ask for help继续struggle。Opportunities appearing但可能not seeing或accepting。",
        advice: "如果recovering，继续build on progress。Accept help和opportunities even if不perfect。如果refusing help，examine why pride让你continue suffer。Accepting assistance不是weakness是practical。Take available training，programs，connections。如果opportunities appearing，investigate even if not ideal。Recovery often不是一步到位。Be humble和persistent。",
        warning: "Pride can keep you in困境when help和opportunities exist，要humble。",
        outcome: "通过accepting support，recover职业上或continue struggle if stubborn。",
        timing: "Recovery possible如果open to help"
      }
    },
    finance: {
      upright: {
        short: "财务困境，缺乏资源",
        energy: "金钱能量struggling和scarce，financial hardship。",
        situation: "可能experiencing significant financial difficulty。Struggling to meet基本需求。可能debt，poverty，或sudden financial loss。感到financially excluded或left behind。Health expenses可能adding to burden。May be homeless或at risk。Financial resources severely limited。Fear和stress about money。",
        advice: "Seek all available help：assistance programs，food banks，financial counseling。Swallow pride和accept help。This不是permanent situation。Look for any income opportunities。Connect with organizations that help。If有debt，寻求professional advice about options。Protect health和基本needs first。Let people who want to help，help。This困境教导but doesn't定义你。Have faith can get through this。",
        warning: "Not seeking available assistance会make situation worse，要reach out。",
        outcome: "通过accepting help和taking practical steps，can gradually improve situation。",
        timing: "Very difficult period，但assistance exists如果seek"
      },
      reversed: {
        short: "财务恢复，或拒绝援助",
        energy: "金钱能量improving或stubbornly poor，accepting或refusing help。",
        situation: "可能starting to recover financially。Finding income或assistance。Situation improving slowly。或者too proud to accept available financial help。You可能paying off debts或rebuilding。Or refusing assistance继续struggle unnecessarily。Help和opportunities available但可能not taking。",
        advice: "如果recovering，continue prudent管理和accept ongoing support needed。如果refusing help from pride，this很foolish when struggling。Accept assistance programs，这设计来help。Take opportunities even if not ideal。Rebuild gradually，celebrate small progress。如果people offering help，let them。Learn from financial困境，build better habits和safety net。No shame in accepting help when needed。",
        warning: "Pride preventing accepting help会prolong financial suffering unnecessarily。",
        outcome: "通过accepting support和rebuilding，can recover或continue困境if refuse。",
        timing: "Recovery starting如果accept help"
      }
    },
    general: {
      upright: {
        short: "人生困境，感到孤立",
        energy: "整体能量struggling和isolated，feeling left out in cold。",
        situation: "可能experiencing hardship in multiple life areas。Physical，emotional，or financial困境。感到excluded from warmth和abundance others seem to have。可能health issues adding to struggles。Feeling alone和unsupported even if help nearby。困境making life feel cold和harsh。",
        advice: "最重要：reach out for help。Help往往比你think更近。Don't suffer alone from pride或shame。Look around for支持，它often在那里。Connect with community，support groups，services。Accept help offered。Address health如果that's issue。记住困境是temporary即使现在不感觉。你的worth不defined by circumstances。Let people care。Many经历过similar和愿意help。",
        warning: "Isolation in困境会lead to despair，要reach out for connection和support。",
        outcome: "通过seeking和accepting support，can endure和eventually overcome困境。",
        timing: "Very difficult period，但help available如果look和accept"
      },
      reversed: {
        short: "开始恢复，或拒绝援手",
        energy: "能量warming或stubbornly cold，recovery starting或refusing help。",
        situation: "可能starting to emerge from困境。Finding support和resources。Things slowly improving。或者stubbornly refusing available help，continuing to suffer alone。You可能finally accepting assistance。或者too proud让help in even when desperately needed。Recovery possible but可能blocking it。",
        advice: "如果recovering，继续accept support和rebuild。If refusing help，examine this self-destructive pride。No one should suffer alone when help available。Accepting support不是weakness是wisdom。Let community，programs，people help you。Recovery isn't instant，需要time和assistance。Be humble和grateful。Learn from困境。If people reaching out，let them in。You deserve support和warmth。",
        warning: "Continuing to refuse help when suffering is self-harm，要let go of pride。",
        outcome: "通过humility和accepting support，can recover和thrive或remain困if stubborn。",
        timing: "Turning point，recovery possible如果open"
      }
    }
  }
});

export default minorArcana_Pentacles_1_5;
