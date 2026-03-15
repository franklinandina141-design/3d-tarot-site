/**
 * 塔罗逆位增强系统 - 使用示例
 */

const {
  analyzeReversedRatio,
  generateMasterRoast,
  enhanceReversedReading,
  generateReversedEnhancedReading,
  formatReversedReport
} = require('./tarot-reversed-engine');

// 模拟卡牌数据
const sampleCards = [
  {
    id: "hermit_09",
    name: "隐士 (The Hermit)",
    arcana: "major",
    element: null,
    position: "upright", // 正位
    interpretations: {
      love: {
        upright: {
          situation: "过去你处于深度的内省和独处中，寻找内心的答案...",
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
    id: "tower_16",
    name: "高塔 (The Tower)",
    arcana: "major",
    element: null,
    position: "reversed", // 逆位
    interpretations: {
      love: {
        upright: {
          situation: "关系可能面临突然的崩塌或重大变故...",
          energy: "剧变的能量正在撼动你的世界",
          advice: "接受改变，不要抗拒崩塌",
          warning: "固守旧有模式只会让痛苦延长",
          outcome: "经历剧痛后的重生",
          timing: "突然而剧烈的变化"
        },
        reversed: {
          situation: "你在抗拒必要的改变，延迟了不可避免的崩塌...",
          energy: "被压抑的变革能量",
          advice: "停止抗拒，内在改变比外在行动更重要",
          warning: "逃避只会让问题积累得更严重",
          outcome: "延迟的转变，最终仍需面对",
          timing: "拖延的改变期"
        }
      }
    }
  },
  {
    id: "star_17",
    name: "星星 (The Star)",
    arcana: "major",
    element: null,
    position: "reversed", // 逆位
    interpretations: {
      love: {
        upright: {
          situation: "经历黑暗后，爱情的希望重新显现...",
          energy: "温柔的疗愈能量",
          advice: "保持信念，允许自己被疗愈",
          warning: "不要因为过去的伤害关闭心门",
          outcome: "内心平和，准备好迎接真正的爱",
          timing: "疗愈期，缓慢而温柔"
        },
        reversed: {
          situation: "希望被内化，可能对未来感到迷茫和失望...",
          energy: "疗愈能量受阻",
          advice: "重建信念需要时间，不要放弃希望",
          warning: "cynicism会阻止疗愈",
          outcome: "延迟的疗愈，需要更多自我关爱",
          timing: "漫长的恢复期"
        }
      }
    }
  }
];

console.log('═══════════════════════════════════');
console.log('示例1：分析逆位比例');
console.log('═══════════════════════════════════\n');

const reversedAnalysis = analyzeReversedRatio(sampleCards);
console.log('逆位分析结果：');
console.log(JSON.stringify(reversedAnalysis, null, 2));
console.log('\n逆位牌数：', reversedAnalysis.reversedCount, '/', reversedAnalysis.totalCount);
console.log('逆位比例：', reversedAnalysis.percentage, '%');
console.log('能量状态：', reversedAnalysis.energyStatus);
console.log('严重等级：', reversedAnalysis.severity);
console.log('是否需要警告：', reversedAnalysis.needsWarning ? '是' : '否');

console.log('\n═══════════════════════════════════');
console.log('示例2：生成大师毒舌短评');
console.log('═══════════════════════════════════\n');

const masterRoast = generateMasterRoast(reversedAnalysis, sampleCards, 'love');
console.log('短评内容：', masterRoast.text);
console.log('严重等级：', masterRoast.severity);
console.log('分类：', masterRoast.category);

console.log('\n═══════════════════════════════════');
console.log('示例3：逆位解读增强（单张牌）');
console.log('═══════════════════════════════════\n');

const towerCard = sampleCards[1]; // 高塔逆位
const towerReading = towerCard.interpretations.love.upright;
const enhancedReading = enhanceReversedReading(towerReading, towerCard.name, true);

console.log('原始建议：');
console.log(towerReading.advice);
console.log('\n逆位增强后的建议：');
console.log(enhancedReading.advice);

console.log('\n原始警告：');
console.log(towerReading.warning);
console.log('\n逆位增强后的警告：');
console.log(enhancedReading.warning);

console.log('\n═══════════════════════════════════');
console.log('示例4：生成完整逆位增强报告');
console.log('═══════════════════════════════════\n');

const fullReading = generateReversedEnhancedReading(sampleCards, 'love');

console.log('完整报告（文本格式）：\n');
console.log(formatReversedReport(fullReading));

console.log('\n═══════════════════════════════════');
console.log('示例5：视觉效果数据（用于前端）');
console.log('═══════════════════════════════════\n');

console.log('视觉效果配置：');
console.log(JSON.stringify(fullReading.visualEffects, null, 2));

console.log('\n前端实现示例：');
console.log(`
// 应用背景变暗效果
if (visualEffects.backgroundDarkness > 0) {
  document.body.style.filter = \`brightness(\${1 - visualEffects.backgroundDarkness})\`;
  document.body.classList.add('reversed-warning');
}

// 显示呼吸灯警告
if (visualEffects.warningPulse) {
  const warningElement = document.getElementById('warning-pulse');
  warningElement.style.display = 'block';
  warningElement.style.backgroundColor = visualEffects.warningColor;
  warningElement.textContent = visualEffects.warningText;
}
`);

console.log('\n═══════════════════════════════════');
console.log('示例6：不同逆位比例场景对比');
console.log('═══════════════════════════════════\n');

// 场景1：全部正位
const scenario1 = [
  { ...sampleCards[0], position: 'upright' },
  { ...sampleCards[1], position: 'upright' },
  { ...sampleCards[2], position: 'upright' }
];

const analysis1 = analyzeReversedRatio(scenario1);
const roast1 = generateMasterRoast(analysis1, scenario1, 'love');
console.log('场景1（全正位）：');
console.log('能量状态：', analysis1.energyStatus);
console.log('短评：', roast1.text);

// 场景2：一张逆位
const scenario2 = [
  { ...sampleCards[0], position: 'upright' },
  { ...sampleCards[1], position: 'reversed' },
  { ...sampleCards[2], position: 'upright' }
];

const analysis2 = analyzeReversedRatio(scenario2);
const roast2 = generateMasterRoast(analysis2, scenario2, 'career');
console.log('\n场景2（1/3逆位）：');
console.log('能量状态：', analysis2.energyStatus);
console.log('短评：', roast2.text);

// 场景3：全部逆位
const scenario3 = [
  { ...sampleCards[0], position: 'reversed' },
  { ...sampleCards[1], position: 'reversed' },
  { ...sampleCards[2], position: 'reversed' }
];

const analysis3 = analyzeReversedRatio(scenario3);
const roast3 = generateMasterRoast(analysis3, scenario3, 'finance');
console.log('\n场景3（全逆位）：');
console.log('能量状态：', analysis3.energyStatus);
console.log('短评：', roast3.text);
console.log('警告颜色：', analysis3.warningColor);
console.log('需要呼吸灯：', analysis3.needsWarning);

console.log('\n═══════════════════════════════════');
console.log('示例7：Express API集成');
console.log('═══════════════════════════════════\n');

const apiExample = `
// server.js
const express = require('express');
const { generateReversedEnhancedReading } = require('./tarot-reversed-engine');

const app = express();
app.use(express.json());

app.post('/api/tarot/reversed-reading', (req, res) => {
  try {
    const { cards, topic = 'general' } = req.body;
    
    // 生成逆位增强解读
    const reading = generateReversedEnhancedReading(cards, topic);
    
    res.json({
      success: true,
      data: {
        masterRoast: reading.masterRoast,
        reversedAnalysis: reading.reversedAnalysis,
        visualEffects: reading.visualEffects,
        overview: reading.overview,
        insight: reading.insight,
        detailedReadings: reading.detailedReadings
      }
    });
    
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('Tarot Reversed API running on port 3000');
});
`;

console.log(apiExample);

console.log('\n═══════════════════════════════════');
console.log('示例8：关键词替换效果对比');
console.log('═══════════════════════════════════\n');

const testReadings = [
  {
    name: "测试牌1",
    original: "建议你主动出击，大胆前进，积极行动",
    enhanced: null
  },
  {
    name: "测试牌2",
    original: "建议立即行动，勇敢表达，主动沟通",
    enhanced: null
  },
  {
    name: "测试牌3",
    original: "建议抓住机会，投入感情，全力以赴",
    enhanced: null
  }
];

testReadings.forEach(test => {
  test.enhanced = enhanceReversedReading(
    { advice: test.original },
    test.name,
    true
  ).advice;
  
  console.log(`\n${test.name}:`);
  console.log('正位建议：', test.original);
  console.log('逆位建议：', test.enhanced);
});

console.log('\n═══════════════════════════════════');
console.log('完整演示结束');
console.log('═══════════════════════════════════\n');

console.log('✨ 逆位增强系统功能总结：');
console.log('1. ✅ 逆位比例分析（>50%触发警告）');
console.log('2. ✅ 大师毒舌短评生成（4种严重等级 × 4种领域）');
console.log('3. ✅ 关键词自动替换（10组行动关键词）');
console.log('4. ✅ 视觉效果数据生成（背景变暗 + 呼吸灯）');
console.log('5. ✅ 完整报告格式化输出');
console.log('\n🎯 建议使用方式：');
console.log('- 后端：使用 generateReversedEnhancedReading() 替代原有函数');
console.log('- 前端：根据 visualEffects 应用动效');
console.log('- 展示：优先显示 masterRoast，营造专业感');
