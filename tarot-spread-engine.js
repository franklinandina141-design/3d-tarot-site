/**
 * 塔羅牌陣解讀引擎
 * 功能：
 * 1. 元素生克判定
 * 2. 大阿卡納權重計算
 * 3. 三張牌動態組裝解讀
 * 4. 生成完整解讀報告
 */

// ============================================
// 1. 元素互動規則配置
// ============================================
const ELEMENT_INTERACTIONS = {
  // 相生相容
  harmonious: {
    'Water-Earth': {
      name: '水土相生',
      effect: '互相滋養，事情發展穩定且深刻',
      bonus: 15,
      message: (past, future) => 
        `🌊🌍 水土相生：從《${past}》到《${future}》，能量互相滋養，事情會穩定且深入地發展。這是一個紮根的好時機。`
    },
    'Fire-Air': {
      name: '火風相助',
      effect: '風助火勢，行動力與決斷力極強，進展快速',
      bonus: 20,
      message: (past, future) =>
        `🔥💨 火風相助：從《${past}》到《${future}》，風助火勢，你的行動力和決斷力會極強，事情進展飛快！`
    },
    'Earth-Fire': {
      name: '火土煉金',
      effect: '火煉土成器，穩健中帶有激情',
      bonus: 15,
      message: (past, future) =>
        `🔥🌍 火土煉金：從《${past}》到《${future}》，激情與穩健結合，你的計劃會逐步成形並實現。`
    },
    'Air-Water': {
      name: '風水流動',
      effect: '思維與情感和諧，溝通順暢',
      bonus: 12,
      message: (past, future) =>
        `💨🌊 風水流動：從《${past}》到《${future}》，思維與情感和諧流動，你的溝通會很順暢，直覺敏銳。`
    }
  },

  // 相剋衝突
  conflicting: {
    'Water-Fire': {
      name: '水火不容',
      effect: '情緒波動大，計劃容易出現戲劇性反轉',
      penalty: -20,
      message: (past, future) =>
        `🌊🔥 水火不容：從《${past}》到《${future}》，情緒能量與行動能量激烈碰撞，預示著一段情緒起伏較大的過渡期。請保持內心的定力，不要被外部變化牽著走。`
    },
    'Air-Earth': {
      name: '風土僵局',
      effect: '理念與現實的碰撞，容易陷入僵局',
      penalty: -15,
      message: (past, future) =>
        `💨🌍 風土僵局：從《${past}》到《${future}》，理想與現實產生摩擦，你可能會陷入過度思考的狀態。別想太多，先行動起來。`
    }
  }
};

// ============================================
// 2. 元素互動檢測函數
// ============================================
function checkElementInteraction(element1, element2) {
  // 標準化元素組合鍵（按字母排序）
  const key1 = [element1, element2].sort().join('-');
  const key2 = [element2, element1].sort().join('-');
  
  // 檢查相生
  if (ELEMENT_INTERACTIONS.harmonious[key1] || ELEMENT_INTERACTIONS.harmonious[key2]) {
    return ELEMENT_INTERACTIONS.harmonious[key1] || ELEMENT_INTERACTIONS.harmonious[key2];
  }
  
  // 檢查相剋
  if (ELEMENT_INTERACTIONS.conflicting[key1] || ELEMENT_INTERACTIONS.conflicting[key2]) {
    return ELEMENT_INTERACTIONS.conflicting[key1] || ELEMENT_INTERACTIONS.conflicting[key2];
  }
  
  // 相同元素
  if (element1 === element2) {
    const symbols = {
      'Fire': '🔥',
      'Water': '🌊',
      'Air': '💨',
      'Earth': '🌍'
    };
    return {
      name: `雙${element1}能量`,
      effect: '能量強化但需注意平衡',
      message: () => `${symbols[element1]}${symbols[element1]} 雙重${element1}元素：能量集中且強大，但要注意不要過度。`
    };
  }
  
  return null;
}

// ============================================
// 3. 大阿卡納權重計算
// ============================================
function calculateMajorArcanaWeight(cards) {
  const majorCards = cards.filter(card => card.arcana === 'major');
  const majorCount = majorCards.length;
  const majorNames = majorCards.map(c => c.name).join('、');
  
  if (majorCount === 3) {
    return {
      weight: 'critical',
      message: `⚡ **命運的轉折點**：三張全部都是大阿卡納（${majorNames}）！這是人生的重大轉折期，宇宙正在強制升級你的靈魂。接下來的 3-6 個月將是你人生最關鍵的時刻，請全力以赴。`
    };
  }
  
  if (majorCount === 2) {
    return {
      weight: 'high',
      message: `🔮 **宿命的召喚**：這次抽到了 ${majorCount} 張大阿卡納（${majorNames}），這是一個宿命感極強的時期。你所面臨的轉變將對人生產生長遠的影響，請順應大勢，不要抗拒命運的安排。`
    };
  }
  
  if (majorCount === 1) {
    return {
      weight: 'medium',
      message: `💫 這次出現了大阿卡納《${majorNames}》，它將是這個牌陣的核心主題，其他牌圍繞它展開。`
    };
  }
  
  return {
    weight: 'low',
    message: '這次都是小阿卡納，代表這是日常生活層面的問題，通過實際行動可以改善。'
  };
}

// ============================================
// 4. 生成三張牌解讀報告（核心函數）
// ============================================
function generateThreeCardReading(pastCard, presentCard, futureCard, topic = 'general') {
  // 確定牌的正逆位
  const pastPosition = pastCard.position || 'upright';
  const presentPosition = presentCard.position || 'upright';
  const futurePosition = futureCard.position || 'upright';
  
  // 獲取解讀內容
  const pastReading = pastCard.interpretations[topic]?.[pastPosition];
  const presentReading = presentCard.interpretations[topic]?.[presentPosition];
  const futureReading = futureCard.interpretations[topic]?.[futurePosition];
  
  // 檢查元素互動
  const pastPresentInteraction = checkElementInteraction(pastCard.element, presentCard.element);
  const presentFutureInteraction = checkElementInteraction(presentCard.element, futureCard.element);
  
  // 計算大阿卡納權重
  const majorWeight = calculateMajorArcanaWeight([pastCard, presentCard, futureCard]);
  
  // ============================================
  // 組裝完整報告
  // ============================================
  let report = '';
  
  // ========== 標題 ==========
  report += `═══════════════════════════════════\n`;
  report += `🔮 塔羅解讀報告\n`;
  report += `═══════════════════════════════════\n\n`;
  
  // ========== 牌組展示 ==========
  report += `📋 **抽到的牌**：\n`;
  report += `   過去：${pastCard.name} ${pastPosition === 'reversed' ? '(逆位)' : ''}\n`;
  report += `   現在：${presentCard.name} ${presentPosition === 'reversed' ? '(逆位)' : ''}\n`;
  report += `   未來：${futureCard.name} ${futurePosition === 'reversed' ? '(逆位)' : ''}\n\n`;
  
  // ========== 大阿卡納權重警告 ==========
  if (majorWeight.weight !== 'low') {
    report += `${majorWeight.message}\n\n`;
    report += `───────────────────────────────────\n\n`;
  }
  
  // ========== 第一部分：過去（根源）==========
  report += `## 📜 過去的影響（根源）\n\n`;
  report += `**${pastCard.name}** ${pastPosition === 'reversed' ? '(逆位)' : '(正位)'}\n\n`;
  report += `💭 **簡述**：${pastReading.short}\n\n`;
  report += `🌀 **能量狀態**：\n${pastReading.energy}\n\n`;
  report += `📖 **具體情況**：\n${pastReading.situation}\n\n`;
  
  // 過去到現在的元素互動
  if (pastPresentInteraction) {
    report += `\n🔮 **元素互動提示**：\n`;
    report += `${pastPresentInteraction.message(pastCard.name, presentCard.name)}\n\n`;
  }
  
  report += `───────────────────────────────────\n\n`;
  
  // ========== 第二部分：現在（當下挑戰）==========
  report += `## ⚡ 當下的挑戰（現在）\n\n`;
  report += `**${presentCard.name}** ${presentPosition === 'reversed' ? '(逆位)' : '(正位)'}\n\n`;
  report += `💭 **簡述**：${presentReading.short}\n\n`;
  report += `🌀 **能量狀態**：\n${presentReading.energy}\n\n`;
  report += `📖 **具體情況**：\n${presentReading.situation}\n\n`;
  report += `💡 **行動建議**：\n${presentReading.advice}\n\n`;
  
  // 現在是逆位 -> 特別警告
  if (presentPosition === 'reversed') {
    report += `⚠️ **特別提醒**：\n${presentReading.warning}\n\n`;
  }
  
  // 現在到未來的元素互動
  if (presentFutureInteraction) {
    report += `\n🔮 **元素互動提示**：\n`;
    report += `${presentFutureInteraction.message(presentCard.name, futureCard.name)}\n\n`;
  }
  
  report += `───────────────────────────────────\n\n`;
  
  // ========== 第三部分：未來（趨勢）==========
  report += `## 🌟 未來的發展（趨勢）\n\n`;
  report += `**${futureCard.name}** ${futurePosition === 'reversed' ? '(逆位)' : '(正位)'}\n\n`;
  report += `💭 **簡述**：${futureReading.short}\n\n`;
  report += `🌀 **能量狀態**：\n${futureReading.energy}\n\n`;
  report += `🔮 **可能的結果**：\n${futureReading.outcome}\n\n`;
  report += `⏳ **預計時間點**：${futureReading.timing}\n\n`;
  
  // 未來是逆位 -> 特別警告
  if (futurePosition === 'reversed') {
    report += `⚠️ **特別提醒**：\n${futureReading.warning}\n\n`;
  }
  
  report += `───────────────────────────────────\n\n`;
  
  // ========== 第四部分：塔羅師的總結 ==========
  report += `## 💬 塔羅師的悄悄話（總結）\n\n`;
  
  // 綜合元素分析
  if (pastPresentInteraction || presentFutureInteraction) {
    report += `從元素能量來看，`;
    if (pastPresentInteraction && presentFutureInteraction) {
      report += `你經歷了兩次元素轉換：先是${pastPresentInteraction.name}，接著是${presentFutureInteraction.name}。`;
    } else if (pastPresentInteraction) {
      report += `過去到現在經歷了${pastPresentInteraction.name}。`;
    } else {
      report += `現在到未來將經歷${presentFutureInteraction.name}。`;
    }
    report += `\n\n`;
  }
  
  // 時間線總結
  report += `**時間線總結**：\n`;
  report += `從《${pastCard.name}》的根源，到《${presentCard.name}》的當下，再到《${futureCard.name}》的未來，`;
  report += `這是一個 ${pastReading.timing} → ${presentReading.timing} → ${futureReading.timing} 的發展過程。\n\n`;
  
  // 核心建議
  report += `**核心建議**：\n`;
  report += `${presentReading.advice}\n\n`;
  
  // 如果有逆位，強調風險
  const reversedCards = [
    pastPosition === 'reversed' ? pastCard.name : null,
    presentPosition === 'reversed' ? presentCard.name : null,
    futurePosition === 'reversed' ? futureCard.name : null
  ].filter(Boolean);
  
  if (reversedCards.length > 0) {
    report += `**風險提示**：\n`;
    report += `這次出現了 ${reversedCards.length} 張逆位牌（${reversedCards.join('、')}），`;
    report += `代表你需要特別注意這些方面的阻礙和內在課題。不要逃避，勇敢面對才能突破。\n\n`;
  }
  
  report += `═══════════════════════════════════\n`;
  report += `✨ 願塔羅的智慧為你指引方向 ✨\n`;
  report += `═══════════════════════════════════\n`;
  
  return {
    report: report,
    metadata: {
      topic: topic,
      cards: [
        { position: 'past', ...pastCard, reversed: pastPosition === 'reversed' },
        { position: 'present', ...presentCard, reversed: presentPosition === 'reversed' },
        { position: 'future', ...futureCard, reversed: futurePosition === 'reversed' }
      ],
      majorArcanaWeight: majorWeight,
      elementInteractions: {
        pastToPresent: pastPresentInteraction,
        presentToFuture: presentFutureInteraction
      },
      warnings: reversedCards
    }
  };
}

// ============================================
// 5. API 端點示例（Node.js/Express）
// ============================================
function createTarotReadingAPI(tarotDatabase) {
  /**
   * POST /api/tarot/reading
   * Body: {
   *   pastCardId: "major_09",
   *   presentCardId: "major_10",
   *   futureCardId: "major_11",
   *   topic: "love",  // love | career | finance | general
   *   positions: ["upright", "upright", "reversed"]  // 可選
   * }
   */
  return async (req, res) => {
    try {
      const { pastCardId, presentCardId, futureCardId, topic = 'general', positions } = req.body;
      
      // 從數據庫獲取卡牌
      const pastCard = tarotDatabase.find(c => c.id === pastCardId);
      const presentCard = tarotDatabase.find(c => c.id === presentCardId);
      const futureCard = tarotDatabase.find(c => c.id === futureCardId);
      
      if (!pastCard || !presentCard || !futureCard) {
        return res.status(400).json({ error: '卡牌ID無效' });
      }
      
      // 設置正逆位
      if (positions) {
        pastCard.position = positions[0] || 'upright';
        presentCard.position = positions[1] || 'upright';
        futureCard.position = positions[2] || 'upright';
      }
      
      // 生成解讀
      const reading = generateThreeCardReading(pastCard, presentCard, futureCard, topic);
      
      // 返回結果
      res.json({
        success: true,
        reading: reading.report,
        metadata: reading.metadata,
        timestamp: new Date().toISOString()
      });
      
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  };
}

// ============================================
// 6. 導出函數
// ============================================
module.exports = {
  generateThreeCardReading,
  checkElementInteraction,
  calculateMajorArcanaWeight,
  createTarotReadingAPI
};

// ============================================
// 7. 使用示例
// ============================================
/*
// 載入數據庫
const tarotDB = require('./tarot-complete-database.json');

// 創建測試牌組
const testPast = tarotDB.find(c => c.id === 'major_09');  // 隱士
const testPresent = tarotDB.find(c => c.id === 'major_10'); // 命運之輪
const testFuture = tarotDB.find(c => c.id === 'major_11');  // 正義

testPresent.position = 'reversed';  // 設置逆位

// 生成解讀
const result = generateThreeCardReading(testPast, testPresent, testFuture, 'love');
console.log(result.report);
*/
