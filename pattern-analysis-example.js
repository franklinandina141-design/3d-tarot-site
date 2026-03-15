/**
 * 综合格局分析示例
 * 展示新增的牌阵格局分析功能
 */

const { generateThreeCardReading, analyzeSpreadPattern } = require('./tarot-reading-api');

// ===== 示例1：三张大阿卡纳（命运级牌局）=====
console.log('═══════════════════════════════════');
console.log('示例1：三张大阿卡纳的命运级牌局');
console.log('═══════════════════════════════════\n');

const example1_cards = [
  {
    name: "隐士 (The Hermit)",
    arcana: "major",
    element: "Earth",
    number: 9,
    interpretations: {
      love: {
        upright: {
          situation: "你正在独处中寻找答案...",
          energy: "内省深沉",
          advice: "给自己空间思考",
          warning: "不要过度孤立",
          outcome: "通过独处找到方向",
          timing: "需要时间静心"
        }
      }
    }
  },
  {
    name: "命运之轮 (Wheel of Fortune)",
    arcana: "major",
    element: "Fire",
    number: 10,
    interpretations: {
      love: {
        upright: {
          situation: "命运的转折点...",
          energy: "变化莫测",
          advice: "顺应变化",
          warning: "不要抗拒命运",
          outcome: "重大转折即将到来",
          timing: "突然的变化"
        }
      }
    }
  },
  {
    name: "正义 (Justice)",
    arcana: "major",
    element: "Air",
    number: 11,
    interpretations: {
      love: {
        upright: {
          situation: "因果平衡的时刻...",
          energy: "公正客观",
          advice: "做出公平的决定",
          warning: "逃避不了后果",
          outcome: "得到应得的结果",
          timing: "因果显现"
        }
      }
    }
  }
];

const analysis1 = analyzeSpreadPattern(example1_cards);
console.log('元素分析:', analysis1.elementAnalysis);
console.log('数字共鸣:', analysis1.numberAnalysis || '无显著共鸣');
console.log('能量评估:', analysis1.raw.overallEnergy);
console.log('\n');

// ===== 示例2：单一元素主宰（火元素×3）=====
console.log('═══════════════════════════════════');
console.log('示例2：纯火元素牌局');
console.log('═══════════════════════════════════\n');

const example2_cards = [
  {
    name: "权杖一 (Ace of Wands)",
    arcana: "minor",
    suit: "Wands",
    element: "Fire",
    number: 1,
    interpretations: {
      general: {
        upright: {
          situation: "新的激情开始...",
          energy: "创造力爆发",
          advice: "抓住灵感",
          warning: "不要冲动",
          outcome: "新的开始",
          timing: "立即行动"
        }
      }
    }
  },
  {
    name: "权杖三 (Three of Wands)",
    arcana: "minor",
    suit: "Wands",
    element: "Fire",
    number: 3,
    interpretations: {
      general: {
        upright: {
          situation: "计划展开中...",
          energy: "远见卓识",
          advice: "继续推进",
          warning: "保持耐心",
          outcome: "扩展成功",
          timing: "稳步发展"
        }
      }
    }
  },
  {
    name: "权杖骑士 (Knight of Wands)",
    arcana: "minor",
    suit: "Wands",
    element: "Fire",
    number: 12,
    interpretations: {
      general: {
        upright: {
          situation: "快速行动...",
          energy: "冲劲十足",
          advice: "大胆前进",
          warning: "避免鲁莽",
          outcome: "快速推进",
          timing: "迅速发展"
        }
      }
    }
  }
];

const analysis2 = analyzeSpreadPattern(example2_cards);
console.log('元素分析:', analysis2.elementAnalysis);
console.log('花色分析:', analysis2.suitAnalysis);
console.log('能量评估:', analysis2.raw.overallEnergy);
console.log('\n');

// ===== 示例3：数字共鸣（两张数字3）=====
console.log('═══════════════════════════════════');
console.log('示例3：数字共鸣牌局');
console.log('═══════════════════════════════════\n');

const example3_cards = [
  {
    name: "圣杯三 (Three of Cups)",
    arcana: "minor",
    suit: "Cups",
    element: "Water",
    number: 3,
    interpretations: {
      love: {
        upright: {
          situation: "庆祝和欢聚...",
          energy: "喜悦分享",
          advice: "享受当下",
          warning: "不要过度",
          outcome: "友情支持",
          timing: "当下时刻"
        }
      }
    }
  },
  {
    name: "宝剑三 (Three of Swords)",
    arcana: "minor",
    suit: "Swords",
    element: "Air",
    number: 3,
    interpretations: {
      love: {
        upright: {
          situation: "心碎时刻...",
          energy: "痛苦深刻",
          advice: "面对伤痛",
          warning: "不要逃避",
          outcome: "疗愈开始",
          timing: "痛苦期"
        }
      }
    }
  },
  {
    name: "星币五 (Five of Pentacles)",
    arcana: "minor",
    suit: "Pentacles",
    element: "Earth",
    number: 5,
    interpretations: {
      love: {
        upright: {
          situation: "感到匮乏...",
          energy: "孤独感",
          advice: "寻求帮助",
          warning: "不要孤立",
          outcome: "支持出现",
          timing: "困难期"
        }
      }
    }
  }
];

const analysis3 = analyzeSpreadPattern(example3_cards);
console.log('元素分析:', analysis3.elementAnalysis);
console.log('数字共鸣:', analysis3.numberAnalysis);
console.log('能量评估:', analysis3.raw.overallEnergy);
console.log('\n');

// ===== 示例4：完整解读（含格局分析）=====
console.log('═══════════════════════════════════');
console.log('示例4：完整三牌解读（含格局分析）');
console.log('═══════════════════════════════════\n');

// 设置正逆位
example1_cards[0].position = 'upright';
example1_cards[1].position = 'upright';
example1_cards[2].position = 'reversed'; // 正义逆位

const fullReading = generateThreeCardReading(
  example1_cards[0],
  example1_cards[1],
  example1_cards[2],
  'love'
);

console.log(fullReading.report);
console.log('\n元数据:');
console.log('- 大阿卡纳权重:', fullReading.metadata.majorArcanaWeight.weight);
console.log('- 元素互动:', fullReading.metadata.elementInteractions);

// ===== 格局分析数据结构示例 =====
console.log('\n═══════════════════════════════════');
console.log('格局分析数据结构');
console.log('═══════════════════════════════════\n');

console.log('Raw Analysis Data:');
console.log(JSON.stringify(analysis1.raw, null, 2));
