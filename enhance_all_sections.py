#!/usr/bin/env python3
# 为所有板块添加基于具体牌的深度分析

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 添加专业的牌面分析函数
enhanced_functions = '''
        // ========== 专业塔罗分析系统 ==========
        // 基于Rachel Pollack《78度的智慧》、Mary K. Greer《塔罗葵花宝典》、《塔罗逆位精解》

        // 获取牌的详细信息
        const getCardInfo = (card) => {
          const id = card.id || '';
          const isMajor = id.startsWith('ar');
          const cardNumber = isMajor ? Number(id.slice(2)) : null;
          
          // 大阿卡纳的荣格原型
          const jungianArchetypes = {
            0: '永恒少年（Puer Aeternus）- 纯真与冒险',
            1: '创造者/魔法师 - 显化的力量',
            2: '智慧老妪/阿尼玛 - 内在直觉',
            3: '大母神 - 丰盛与滋养',
            4: '父亲/国王 - 秩序与权威',
            5: '智慧长者 - 传统与教导',
            6: '神圣婚姻（Hieros Gamos）- 整合与选择',
            7: '英雄的旅程 - 意志的胜利',
            8: '驯服野兽 - 温柔的力量',
            9: '智慧老人（Senex）- 内在指引',
            10: '曼陀罗/周期性 - 命运之轮',
            11: '正义女神 - 因果平衡',
            12: '牺牲者/智者 - 换个角度',
            13: '转化者 - 死亡与重生',
            14: '炼金术师 - 调和对立',
            15: '阴影自我 - 束缚与欲望',
            16: '崩塌与觉醒 - 虚假结构',
            17: '希望使者 - 疗愈之光',
            18: '潜意识守门人 - 幻觉与直觉',
            19: '神性儿童 - 纯粹喜悦',
            20: '审判天使 - 召唤与重生',
            21: '舞者/完成者 - 圆满整合'
          };
          
          // Rachel Pollack关于每张牌的核心智慧
          const pollackWisdom = {
            0: '愚者是唯一超越数字顺序的牌。他的"零"既是空无也是圆满，代表无限潜能。',
            1: '魔术师教导：你已拥有所需的一切工具。桌上的四元素象征你可以掌握物质与精神的所有资源。',
            2: '女祭司守护着帷幕后的秘密。Pollack强调：真理不是全然公开的，有些智慧需要你准备好才能接收。',
            3: '皇后的丰盛是世俗的、可触摸的。她不是抽象的希望，而是现实的富足。',
            4: '皇帝与皇后互补：她的丰盛需要他的结构保护，他的秩序需要她的生命力避免僵化。',
            5: '教皇代表集体智慧。现代人常抗拒他，但传统和导师在灵性道路上有不可替代的价值。',
            6: '恋人的核心是选择。伊甸园的意象提醒：选择的能力本身是人类最神圣的礼物。',
            7: '战车手不用缰绳，靠心智力量引导黑白狮身人面兽——这是整合对立的能力。',
            8: '力量牌展示真正的力量不是征服，而是理解。女性轻柔闭合狮子的嘴——温柔比暴力更强大。',
            9: '隐士手持的灯笼内有六芒星——这是内在之光，照亮自己也照亮他人的道路。',
            10: '命运之轮提醒：变化是唯一的常数。但注意轮顶的狮身人面兽——超越变化的智慧。',
            11: '正义的天秤不是惩罚，而是因果平衡。Pollack说：你播种什么，收获什么。',
            12: '倒吊人自愿悬挂。Pollack强调：这不是被动受害，而是主动选择新视角。',
            13: '死神骑白马——转化是纯洁的。Pollack：我们必须让旧的死去，新的才能诞生。',
            14: '节制是炼金术——混合对立元素创造全新的东西。耐心是关键。',
            15: '恶魔牌中的锁链松散——Pollack：你的监狱是自己建造的，钥匙一直在你手中。',
            16: '塔的闪电是突然的真相。Pollack：有时摧毁虚假基础是最慈悲的行为。',
            17: '星星是塔之后的希望。赤裸的女性倒水——疗愈需要完全的脆弱与真实。',
            18: '月亮是最难解读的牌。Pollack：在月光下，一切看起来不同。学会辨别真实与投射。',
            19: '太阳是纯粹的喜悦。Pollack：孩童骑马——这是无拘无束的真实自我。',
            20: '审判是觉醒的召唤。Pollack：天使的号角要求你回应你真正的使命。',
            21: '世界是完成，但也是新开始的前夕。Pollack：舞者永不停歇——一个周期结束，另一个即将开始。'
          };
          
          // Mary K. Greer关于每张牌的关键洞察
          const greerInsights = {
            0: '愚者的数字零代表无限潜能。Greer提醒：他是旅程中的每一步，而非仅仅是开始。',
            1: '魔术师的"1"代表新开始和独立行动。Greer强调：他是"do-er"，但行动必须源于清晰意图。',
            2: '女祭司是"知者"而非"行者"。Greer：她常提醒我们"时机未到"——有些真理需要孵化。',
            3: '皇后的数字3代表创造性第三力量。Greer：结合魔术师的主动与女祭司的接收，她是显化的关键。',
            4: '皇帝的数字4代表稳定与物质显化。Greer：他是魔术师潜能的稳定化。',
            5: '教皇代表精神的翻译者。Greer：他的数字5代表冲突与调和——必须调和天堂与人间的法则。',
            6: '恋人的数字6代表和谐与选择的责任。Greer：这不仅关于浪漫，更关于在岔路口做出与灵魂一致的决定。',
            7: '战车的数字7代表精神性的胜利。Greer：战车手不靠武力而靠更高意识引导。这是意志而非意愿。',
            8: '力量的数字8象征无限（横倒的8）和平衡。Greer：真正的力量是平衡阴阳能量，而非单纯阳刚力量。',
            9: '隐士的数字9代表即将完成的循环。Greer称他为"内在导师"——智慧来自经验的积累。',
            10: '命运之轮的10（1+0=1）象征新循环开始。Greer：命运不是固定判决，而是倾向性——自由意志仍然有效。'
          };
          
          return {
            isMajor,
            cardNumber,
            archetype: isMajor ? jungianArchetypes[cardNumber] : null,
            pollackWisdom: isMajor ? pollackWisdom[cardNumber] : null,
            greerInsight: isMajor ? greerInsights[cardNumber] : null
          };
        };

        // 现状深度解码（板块2）- 基于具体牌
        const generateCurrentStateAnalysis = (card) => {
          const info = getCardInfo(card);
          const stance = card.isReversed ? '逆位' : '正位';
          const energy = card.isReversed ? card.reversed.energy : card.upright.energy;
          
          let analysis = `现在位【${card.name}・${stance}】`;
          
          if (info.isMajor) {
            // 大阿卡纳 - 深度荣格分析
            analysis += `这是一张大阿卡纳，意味着你正在经历灵魂层面的重要课题。\\n\\n`;
            analysis += `**荣格原型视角：** ${info.archetype}\\n`;
            analysis += `${info.pollackWisdom}\\n\\n`;
            
            if (card.isReversed) {
              analysis += `**逆位提醒：** 《塔罗逆位精解》指出，逆位的大阿卡纳不是"坏"的，而是能量被阻塞或过度。可能表现为：\\n`;
              analysis += `- 内在阻抗：你在抗拒这张牌的课题\\n`;
              analysis += `- 能量内化：原本外在的力量转向内在处理\\n`;
              analysis += `- 过度补偿：过度表现这张牌的特质导致失衡\\n\\n`;
              analysis += `${energy}`;
            } else {
              analysis += `**正位能量：** ${energy}\\n\\n`;
              analysis += `${info.greerInsight}`;
            }
          } else {
            // 小阿卡纳 - 实用生活分析
            const suit = card.id.slice(0, 2);
            const suitNames = { wa: '权杖（火）', cu: '圣杯（水）', sw: '宝剑（风）', pe: '钱币（土）' };
            const suitThemes = {
              wa: '这张牌关注你的**行动力、热情和企图心**。权杖提醒：想法必须转化为行动。',
              cu: '这张牌关注你的**情感、关系和直觉**。圣杯提醒：倾听内心的感受，而非仅仅理性分析。',
              sw: '这张牌关注你的**思维、沟通和决策**。宝剑提醒：清晰思考，但避免过度分析导致瘫痪。',
              pe: '这张牌关注你的**物质、财务和实际行动**。钱币提醒：脚踏实地，一步一个脚印。'
            };
            
            analysis += `属于${suitNames[suit]}花色。${suitThemes[suit]}\\n\\n`;
            analysis += `**当前能量：** ${energy}\\n\\n`;
            
            if (card.isReversed) {
              analysis += `**逆位调整：** 小阿卡纳逆位通常表示日常层面的调整需求——不是大灾难，而是提醒你重新平衡这个领域。`;
            } else {
              analysis += `**正位流动：** 能量在这个领域流畅运作。顺应它，采取相应行动。`;
            }
          }
          
          return analysis;
        };

        // 故事连接分析（板块3）- 过去→现在→未来
        const generateStoryConnection = (past, now, future) => {
          const pastInfo = getCardInfo(past);
          const nowInfo = getCardInfo(now);
          const futureInfo = getCardInfo(future);
          
          let story = '';
          
          // 检测是否有"英雄旅程"模式
          const majorCount = [pastInfo, nowInfo, futureInfo].filter(i => i.isMajor).length;
          
          if (majorCount === 3) {
            story += `**灵魂旅程模式：** 三张都是大阿卡纳，这是深刻的灵魂转化期。Rachel Pollack称之为"英雄的旅程"——你正在经历意识的深层蜕变。\\n\\n`;
          } else if (majorCount === 0) {
            story += `**日常成长模式：** 三张都是小阿卡纳，这是生活实际层面的调整和进展——虽然不如大阿卡纳戏剧化，但同样重要。\\n\\n`;
          } else {
            story += `**混合转化模式：** 大小阿卡纳混合，意味着灵魂课题与日常生活交织——你需要在精神觉察与实际行动间找到平衡。\\n\\n`;
          }
          
          // 过去→现在的连接
          story += `**从${past.name}到${now.name}：**\\n`;
          if (pastInfo.isMajor && nowInfo.isMajor) {
            story += `这是两个重要原型的过渡。${pastInfo.archetype}的课题正在转化为${nowInfo.archetype}的新阶段。`;
          } else {
            const pastEnergy = past.isReversed ? past.reversed.energy : past.upright.energy;
            const nowEnergy = now.isReversed ? now.reversed.energy : now.upright.energy;
            story += `你的能量从"${pastEnergy}"转变为"${nowEnergy}"。这解释了你当前的感受和挑战。`;
          }
          
          story += `\\n\\n**现在→未来的关键：**\\n`;
          if (nowInfo.isMajor && futureInfo.isMajor) {
            story += `${nowInfo.pollackWisdom} 而未来的${future.name}呼唤你整合这个学习，迈向${futureInfo.archetype}。`;
          } else {
            story += `要从现在的${now.name}跨向${future.name}，Mary K. Greer提醒：关键不是更努力，而是更清晰。专注在最重要的行动上。`;
          }
          
          return story;
        };

        // 行动指引（板块4）- 基于具体牌的实用建议
        const generateActionGuidance = (card, question) => {
          const info = getCardInfo(card);
          const isReversed = card.isReversed;
          
          let guidance = {
            mindset: '',
            action: '',
            timing: ''
          };
          
          if (info.isMajor) {
            // 大阿卡纳的行动指引更偏向心理转化
            const archetypeActions = {
              0: { mindset: '拥抱初学者心态，放下"我应该知道"的压力', action: '做一件你从未做过的小事——探索而非完美', timing: '现在就是最好的时机——不要等"准备好"' },
              1: { mindset: '相信你已拥有所需工具，停止寻找外在许可', action: '列出你现有的资源和技能，选一个立即启动', timing: '行动窗口已打开——本周内迈出第一步' },
              2: { mindset: '信任你的直觉，即使它违背逻辑', action: '每天10分钟静默冥想，记录浮现的内在声音', timing: '不要急于行动——现在是聆听和接收的阶段' },
              3: { mindset: '允许自己享受和被滋养——你值得丰盛', action: '每天为自己做一件滋养的事（美食、泡澡、大自然）', timing: '播种期——现在投入的关爱会在未来开花' },
              7: { mindset: '整合你内在的对立力量，而非压抑其中一方', action: '设定一个30天挑战，用意志力和自律推进', timing: '冲刺期——保持动力，胜利在望' }
            };
            
            const cardGuidance = archetypeActions[info.cardNumber] || {
              mindset: `体现${info.archetype}的智慧——这是你当前的灵魂功课`,
              action: '每天花时间反思这张牌的象征，让它的智慧渗透你的选择',
              timing: '灵魂转化需要时间——给自己空间，不要急于求成'
            };
            
            if (isReversed) {
              guidance.mindset = `【逆位调整】先疗愈这个原型的阴影面。${cardGuidance.mindset}，但不要用力过猛。`;
              guidance.action = `【柔和版本】${cardGuidance.action}的简化版——减少强度，增加觉察。`;
              guidance.timing = '逆位需要更多耐心——这是内在整合期，不是外在行动期。';
            } else {
              guidance = cardGuidance;
            }
          } else {
            // 小阿卡纳的行动指引更实用具体
            const suit = card.id.slice(0, 2);
            const suitActions = {
              wa: { mindset: '停止计划，开始行动', action: '今天完成一个你拖延的任务', timing: '行动的最佳时机是现在' },
              cu: { mindset: '优先处理情感诚实', action: '写下真实感受，再决定是否分享', timing: '给情感流动的空间——不要急于"解决"' },
              sw: { mindset: '先理清思绪，再做决策', action: '把问题写下来，列出利弊，设定决策截止日期', timing: '思考期——收集信息，但避免分析瘫痪' },
              pe: { mindset: '脚踏实地，一步一个脚印', action: '做财务/时间盘点，删掉一个低回报活动', timing: '稳健建设期——小步快跑胜过大跃进' }
            };
            
            guidance = suitActions[suit];
            
            if (isReversed) {
              guidance.mindset += '（逆位提醒：可能过度或不足，找到中间平衡点）';
            }
          }
          
          return guidance;
        };

'''

# 在generateClimateOverview函数前插入新函数
insert_pos = content.find('        // 根据三张牌生成独特的灵魂气候总览')
if insert_pos > 0:
    content = content[:insert_pos] + enhanced_functions + content[insert_pos:]
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ 第一步：专业分析函数已添加")
else:
    print("❌ 未找到插入位置")
