#!/usr/bin/env python3
# 将网站改造为专业塔罗分析师风格

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到所有分析函数的位置，准备完全重写
import_pos = content.find('        // ========== 专业塔罗分析系统 ==========')

if import_pos < 0:
    import_pos = content.find('        // 根据三张牌生成独特的灵魂气候总览')

if import_pos < 0:
    print("❌ 未找到插入位置")
    exit(1)

# 删除旧的分析函数，准备插入新的
end_pos = content.find('        const generateSoulSummary = () => {')

if end_pos < 0:
    print("❌ 未找到generateSoulSummary")
    exit(1)

# 准备全新的专业分析系统
new_professional_system = '''
        // ========== 資深塔羅分析師系統（20年經驗） ==========
        // 風格：Mary K. Greer 影響 + 心理占卜 + 內在轉化
        // 語氣：溫柔的鏡子 - 引導面對真相而非恐懼

        // 获取牌的核心信息
        const getCardEssence = (card) => {
          const id = card.id || '';
          const isMajor = id.startsWith('ar');
          const cardNumber = isMajor ? Number(id.slice(2)) : null;
          
          // 逆位核心概念（Mary K. Greer）
          const reversalCore = {
            0: { from: 'Recklessness', to: 'Conscious Choice', lesson: '從魯莽到有意識的選擇' },
            1: { from: 'Manipulation', to: 'Authentic Power', lesson: '從操控到真實力量' },
            2: { from: 'Secrets', to: 'Inner Knowing', lesson: '從隱瞞到內在知曉' },
            3: { from: 'Neglect', to: 'Self-Nurturing', lesson: '從忽略到自我滋養' },
            4: { from: 'Rigidity', to: 'Flexible Authority', lesson: '從僵化到彈性權威' },
            5: { from: 'Dogma', to: 'Personal Truth', lesson: '從教條到個人真理' },
            6: { from: 'Codependency', to: 'Authentic Choice', lesson: '從共依附到真實選擇' },
            7: { from: 'Forcing', to: 'Allowing', lesson: '從強迫到允許' },
            8: { from: 'Control', to: 'Gentle Mastery', lesson: '從控制到溫柔駕馭' },
            9: { from: 'Isolation', to: 'Inner Guidance', lesson: '從孤立到內在指引' },
            10: { from: 'Resistance', to: 'Flow', lesson: '從抗拒到流動' },
            11: { from: 'Judgment', to: 'Discernment', lesson: '從評判到洞察' },
            12: { from: 'Martyrdom', to: 'Surrender', lesson: '從殉道到臣服' },
            13: { from: 'Stagnation', to: 'Release', lesson: '從停滯到釋放' },
            14: { from: 'Excess', to: 'Balance', lesson: '從過度到平衡' },
            15: { from: 'Bondage', to: 'Liberation', lesson: '從束縛到解放' },
            16: { from: 'Chaos', to: 'Awakening', lesson: '從混亂到覺醒' },
            17: { from: 'Despair', to: 'Hope', lesson: '從絕望到希望' },
            18: { from: 'Illusion', to: 'Clarity', lesson: '從幻覺到清晰' },
            19: { from: 'Arrogance', to: 'Joy', lesson: '從傲慢到喜悅' },
            20: { from: 'Self-Doubt', to: 'Calling', lesson: '從自我懷疑到召喚' },
            21: { from: 'Incompletion', to: 'Integration', lesson: '從未完成到整合' }
          };
          
          return {
            isMajor,
            cardNumber,
            reversalCore: isMajor ? reversalCore[cardNumber] : null
          };
        };

        // 1. 靈魂氣候總覽
        const generateSoulClimate = (past, now, future) => {
          const cards = [past, now, future];
          const reversedCount = cards.filter(c => c.isReversed).length;
          const majorCount = cards.filter(c => (c.id || '').startsWith('ar')).length;
          
          let climate = '';
          
          // 多張逆位的特殊解讀
          if (reversedCount === 3) {
            climate = `此刻你正處於深度的**內向能量期**——三張牌全部逆位，這不是阻塞，而是靈魂要求你暫停外在奔跑，轉而向內整合。\\n\\n`;
            climate += `Mary K. Greer 稱這種狀態為「蛻變的繭期」：你正在消化過去的經驗，重組內在的能量架構。這段時間可能感覺沉悶或卡住，但其實是在為下一階段的飛躍做準備。\\n\\n`;
            climate += `**關鍵提醒**：不要急於向外證明什麼。現在是向內聆聽、修復、沉澱的神聖時刻。`;
          } else if (reversedCount === 2) {
            climate = `你的能量場正在**修正節奏**——兩張逆位牌顯示，某些領域的能量正在內縮或重新校準。這不是倒退，而是在調整方向。\\n\\n`;
            climate += `逆位牌常常意味著「內在真實」正在浮現：那些你一直壓抑、迴避或過度表現的部分，現在要求被看見。這是一個**誠實面對自己**的邀請。`;
          } else if (reversedCount === 1) {
            const reversedCard = cards.find(c => c.isReversed);
            const position = reversedCard === now ? '現在' : reversedCard === past ? '過去' : '未來';
            climate = `整體能量相對流暢，但${position}位的【${reversedCard.name}】逆位提醒你：在這個領域，有些東西需要**放慢、內化或重新檢視**。\\n\\n`;
            climate += `這張逆位牌不是障礙，而是一個溫柔的提醒：某個地方需要你更深的覺察。`;
          } else {
            // 全正位
            climate = `你正處於**向外流動期**——三張牌全部正位，顯示能量在相對順暢地展開。但請記住：順流不等於不需行動，反而需要你主動抓住當下的機會。\\n\\n`;
            climate += `正位的流暢感容易讓人放鬆警覺。真正的智慧在於：在順境中保持覺察，在每個選擇點都與內在真實對齊。`;
          }
          
          // 大阿卡納的特殊標註
          if (majorCount >= 2) {
            climate += `\\n\\n**靈魂課題標記**：牌陣中有${majorCount}張大阿卡納（Major Arcana），意味著這不是日常瑣事，而是靈魂層面的重要功課。這段時期的經驗會深刻影響你未來的軌跡。`;
          }
          
          return climate;
        };

        // 2. 現狀深度解碼
        const generateCurrentDepth = (card) => {
          const essence = getCardEssence(card);
          const stance = card.isReversed ? '逆位' : '正位';
          const energy = card.isReversed ? (card.reversed?.energy || '') : (card.upright?.energy || '');
          
          let depth = `**現在位：${card.name} (${card.nameEn || ''})・${stance}**\\n\\n`;
          
          if (card.isReversed) {
            // 逆位深度心理剖析
            if (essence.isMajor && essence.reversalCore) {
              depth += `這張逆位的大阿卡納正在呼喚你進行一場內在的煉金術。Mary K. Greer 將這種轉化描述為從「${essence.reversalCore.from}」到「${essence.reversalCore.to}」的旅程。\\n\\n`;
              depth += `**你現在可能正在經歷的三種狀態之一**：\\n`;
              depth += `1. **能量內縮**：原本向外展現的特質轉為向內探索\\n`;
              depth += `2. **延遲顯化**：時機未到，宇宙要求你再等待、再準備\\n`;
              depth += `3. **過度補償**：過度表現這張牌的特質，導致失衡\\n\\n`;
            } else {
              depth += `這張逆位牌像一面**溫柔的鏡子**，映照出你內在的某個真實：\\n\\n`;
            }
            
            depth += `**隱藏的焦慮**：${energy || '你可能在這個領域感到不確定或缺乏掌控感'}\\n\\n`;
            depth += `**心理防禦機制**：注意你是否在用「忙碌」、「完美主義」或「過度理性」來迴避真正的感受？\\n\\n`;
            depth += `**真實的渴望**：逆位常常揭示你真正想要的，但還不敢承認或追求的東西。問問自己：如果沒有恐懼，我會怎麼做？`;
            
          } else {
            // 正位深度解讀
            depth += `這張正位的牌顯示，能量在這個領域相對暢通。但「正位」不等於「完美」——它只是代表能量在流動。\\n\\n`;
            depth += `**當前能量流**：${energy}\\n\\n`;
            
            if (essence.isMajor) {
              depth += `作為一張大阿卡納，它邀請你思考：我是真的在體現這股能量，還是只是表面上符合期待？\\n\\n`;
              depth += `**深層邀請**：這張牌要求你更深地活出它的原型——不是完美地扮演，而是真實地體現。`;
            } else {
              depth += `作為一張小阿卡納，它提醒你：生活的智慧在細節中。這個領域的小調整，可能帶來意想不到的改變。`;
            }
          }
          
          return depth;
        };

        // 3. 你的故事如何走到這裡
        const generateStoryArc = (past, now, future) => {
          const pastEssence = getCardEssence(past);
          const nowEssence = getCardEssence(now);
          const futureEssence = getCardEssence(future);
          
          let story = '**能量的動態演變**\\n\\n';
          
          // 過去→現在的轉變
          story += `從【${past.name}】到【${now.name}】，你經歷了一場能量的轉化。\\n\\n`;
          
          if (past.isReversed && !now.isReversed) {
            story += `你正在從過去的**內縮狀態**走向現在的**外放流動**。過去那個逆位的${past.name}代表的掙扎、延遲或內在整合，現在開始在${now.name}中找到出口。\\n\\n`;
            if (pastEssence.reversalCore) {
              story += `這是從「${pastEssence.reversalCore.from}」邁向「${pastEssence.reversalCore.to}」的關鍵轉折。`;
            }
          } else if (!past.isReversed && now.isReversed) {
            story += `你從過去相對順暢的狀態，進入了現在的**內省期**。這不是倒退——${now.name}逆位是在要求你停下來，重新檢視某些你以為已經處理好的議題。\\n\\n`;
            if (nowEssence.reversalCore) {
              story += `現在的功課是從「${nowEssence.reversalCore.from}」蛻變為「${nowEssence.reversalCore.to}」。這需要你誠實面對內在的陰影。`;
            }
          } else {
            const pastEnergy = past.isReversed ? (past.reversed?.energy || '') : (past.upright?.energy || '');
            const nowEnergy = now.isReversed ? (now.reversed?.energy || '') : (now.upright?.energy || '');
            story += `你的能量從「${pastEnergy}」演變為「${nowEnergy}」。這個轉變解釋了你當前的感受與挑戰。`;
          }
          
          // 現在→未來的關鍵
          story += `\\n\\n**從現在到未來的關鍵**\\n\\n`;
          story += `要從【${now.name}】跨向【${future.name}】，核心不是「做更多」，而是「修正節奏」。\\n\\n`;
          
          if (now.isReversed && !future.isReversed) {
            story += `好消息是：未來的${future.name}正位顯示，只要你願意在現在這個階段誠實面對內在功課，能量會自然流向正位的展開。\\n\\n`;
            story += `**關鍵轉折點**：從內在整合（逆位）到外在顯化（正位）的橋樑，是「自我誠實」。`;
          } else if (!now.isReversed && future.isReversed) {
            story += `未來的${future.name}逆位提醒你：即使現在感覺順暢，未來仍需要你深化內在工作。這不是警告，而是預告——更深的成長在等著你。`;
          } else {
            story += `延續當前的節奏，但要記住：每個階段都需要**覺察與調整**。不要僵化地重複，而要靈活地回應。`;
          }
          
          return story;
        };

        // 4. 你現在最需要的方向
        const generateGuidance = (card, question) => {
          const essence = getCardEssence(card);
          
          let guidance = {
            mindShift: '',
            action: '',
            timing: ''
          };
          
          if (card.isReversed) {
            // 逆位的指引
            guidance.mindShift = `**觀念翻轉**：停止把「逆位」視為「不好」。${card.name}逆位是在邀請你進入更深的自我誠實。問自己：我在這個領域真正恐懼的是什麼？`;
            
            guidance.action = `**具體行動**：每天花10分鐘寫下關於「${question || '這個議題'}」的真實感受——不是你「應該」感受的，而是你「真正」感受到的。寫完不評判，只是看見。`;
            
            guidance.timing = `**時機提醒**：逆位牌常常意味著「還不是向外行動的時候」。現在是**向內整合期**——給自己3-7天的沉澱時間，不急於做決定。`;
            
          } else {
            // 正位的指引
            if (essence.isMajor) {
              guidance.mindShift = `**觀念翻轉**：${card.name}正位不是要求你「完美體現」這個原型，而是邀請你「真實體現」。放下表演，回到真實。`;
              
              guidance.action = `**具體行動**：選擇一個與${card.name}能量一致的小行動，在未來72小時內完成。不要等「準備好」——行動本身就是準備。`;
              
              guidance.timing = `**時機提醒**：正位牌顯示**行動窗口已開啟**。但記住：快速行動不等於衝動行動。保持覺察地前進。`;
            } else {
              const suit = (card.id || '').slice(0, 2);
              const suitGuidance = {
                wa: { mind: '停止計劃，開始行動', action: '今天完成一個你拖延已久的小任務', timing: '行動的最佳時機是現在' },
                cu: { mind: '優先處理情感誠實', action: '與某人進行一次真實的對話（或寫封不寄出的信）', timing: '給情感流動的空間，不要急於「解決」' },
                sw: { mind: '先理清思緒，再做決策', action: '用紙筆列出問題的所有面向，設定決策截止日', timing: '思考期——但避免分析癱瘓，給自己3天期限' },
                pe: { mind: '腳踏實地，一步一個腳印', action: '做一次資源盤點（時間/金錢/能力），刪掉一個低回報活動', timing: '穩健建設期——小步快跑勝過大躍進' }
              };
              
              const sg = suitGuidance[suit] || suitGuidance.pe;
              guidance.mindShift = `**觀念翻轉**：${sg.mind}`;
              guidance.action = `**具體行動**：${sg.action}`;
              guidance.timing = `**時機提醒**：${sg.timing}`;
            }
          }
          
          return guidance;
        };

        // 5. 給你的溫柔結語
        const generateGentleClosing = (past, now, future) => {
          const reversedCount = [past, now, future].filter(c => c.isReversed).length;
          
          let closing = '';
          
          if (reversedCount >= 2) {
            closing = `親愛的靈魂，\\n\\n`;
            closing += `逆位牌不是懲罰，而是宇宙溫柔的提醒：慢下來，向內看，誠實地感受。在這個快速的世界裡，能夠停下來面對自己的真實，本身就是一種勇氣。\\n\\n`;
            closing += `記住：**塔羅牌揭示的是可能性與邀請，不是命運判決**。你永遠擁有選擇的自由——選擇如何回應、何時行動、以及成為怎樣的自己。\\n\\n`;
            closing += `這些牌是鏡子，映照出你已經知道、但還沒完全承認的真相。當你願意面對，轉化就已經開始。\\n\\n`;
            closing += `**決定權始終在你手中。** 你比你以為的更有力量。`;
          } else {
            closing = `親愛的靈魂，\\n\\n`;
            closing += `牌陣為你映照出一條路徑，但真正的旅程由你創造。每一張牌都是一個邀請，邀請你更深地認識自己、更真實地生活。\\n\\n`;
            closing += `記住：**塔羅不是算命，而是照鏡**。它不會告訴你「會發生什麼」，而是反映「你現在在哪裡」以及「你擁有什麼可能性」。\\n\\n`;
            closing += `當你帶著覺察做出選擇，當你願意面對真實的感受，當你在每個當下與內在對齊——你就已經在改寫自己的故事。\\n\\n`;
            closing += `**決定權始終在你手中。** 信任你的內在智慧，它比任何牌陣都更了解你需要什麼。`;
          }
          
          return closing;
        };

        const generateSoulSummary = () => {
'''

# 替换旧系统
content = content[:import_pos] + new_professional_system + content[end_pos:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 第一步：專業分析師系統框架已建立")
