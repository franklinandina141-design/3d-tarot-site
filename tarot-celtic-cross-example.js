/**
 * 凯尔特十字牌阵 - 使用示例
 */

const {
  CELTIC_POSITIONS,
  generateCelticCrossReading,
  formatCelticCrossReport
} = require('./tarot-celtic-cross-engine');

// 模拟10张卡牌数据
const sampleCards = [
  // 位置1：核心现状
  {
    id: "major_00",
    name: "愚者 (The Fool)",
    arcana: "major",
    position: "upright",
    interpretations: { /* ... */ }
  },
  // 位置2：阻碍挑战
  {
    id: "major_16",
    name: "高塔 (The Tower)",
    arcana: "major",
    position: "upright",
    interpretations: { /* ... */ }
  },
  // 位置3：潜意识根源
  {
    id: "major_02",
    name: "女祭司 (The High Priestess)",
    arcana: "major",
    position: "upright",
    interpretations: { /* ... */ }
  },
  // 位置4：过去影响
  {
    id: "wands_03",
    name: "权杖三 (Three of Wands)",
    arcana: "minor",
    suit: "Wands",
    position: "upright",
    interpretations: { /* ... */ }
  },
  // 位置5：意识目标
  {
    id: "major_17",
    name: "星星 (The Star)",
    arcana: "major",
    position: "upright",
    interpretations: { /* ... */ }
  },
  // 位置6：近未来发展
  {
    id: "cups_06",
    name: "圣杯六 (Six of Cups)",
    arcana: "minor",
    suit: "Cups",
    position: "upright",
    interpretations: { /* ... */ }
  },
  // 位置7：内在状态
  {
    id: "major_08",
    name: "力量 (Strength)",
    arcana: "major",
    position: "upright",
    interpretations: { /* ... */ }
  },
  // 位置8：外部环境
  {
    id: "major_19",
    name: "太阳 (The Sun)",
    arcana: "major",
    position: "upright",
    interpretations: { /* ... */ }
  },
  // 位置9：希望与恐惧
  {
    id: "major_18",
    name: "月亮 (The Moon)",
    arcana: "minor",
    position: "reversed",
    reversed: true,
    interpretations: { /* ... */ }
  },
  // 位置10：最终归宿
  {
    id: "major_21",
    name: "世界 (The World)",
    arcana: "major",
    position: "upright",
    interpretations: { /* ... */ }
  }
];

console.log('═══════════════════════════════════');
console.log('示例1：查看位置定义');
console.log('═══════════════════════════════════\n');

Object.entries(CELTIC_POSITIONS).forEach(([pos, info]) => {
  console.log(`${info.emoji} 位置${pos} - ${info.name}：${info.description}`);
});

console.log('\n═══════════════════════════════════');
console.log('示例2：生成完整凯尔特十字解读');
console.log('═══════════════════════════════════\n');

// 生成解读（感情类）
const loveReading = generateCelticCrossReading(sampleCards, 'love');

console.log('解读类型：', loveReading.topic);
console.log('牌阵类型：', loveReading.spreadType);
console.log('整体能量：', loveReading.energySnapshot.energyStatus);
console.log('\n卡牌位置：');
loveReading.cardPositions.forEach(pos => {
  const reversedMark = pos.isReversed ? '（逆位）' : '';
  console.log(`  ${pos.emoji} ${pos.name}：${pos.card}${reversedMark}`);
});

console.log('\n═══════════════════════════════════');
console.log('示例3：输出完整文本报告');
console.log('═══════════════════════════════════\n');

const textReport = formatCelticCrossReport(loveReading);
console.log(textReport);

console.log('\n═══════════════════════════════════');
console.log('示例4：JSON格式输出（用于前端）');
console.log('═══════════════════════════════════\n');

console.log('完整JSON结构：');
console.log(JSON.stringify(loveReading, null, 2));

console.log('\n═══════════════════════════════════');
console.log('示例5：提取核心分析部分');
console.log('═══════════════════════════════════\n');

const { analysis } = loveReading;

console.log('【核心矛盾】');
console.log(analysis.coreConflict.analysis);
console.log('\n温柔建议：', analysis.coreConflict.gentle);

console.log('\n【心理根源】');
console.log(analysis.psychological.analysis);
console.log('\n温柔建议：', analysis.psychological.gentle);

console.log('\n【外部环境】');
console.log(analysis.environment.analysis);
console.log('\n温柔建议：', analysis.environment.gentle);

console.log('\n【最终预测】');
console.log(analysis.finalOutcome.analysis);
console.log('\n温柔建议：', analysis.finalOutcome.gentle);

console.log('\n═══════════════════════════════════');
console.log('示例6：不同占卜类型对比');
console.log('═══════════════════════════════════\n');

const topics = ['love', 'career', 'finance', 'general'];

topics.forEach(topic => {
  const reading = generateCelticCrossReading(sampleCards, topic);
  console.log(`\n【${topic}类型】核心矛盾分析：`);
  console.log(reading.analysis.coreConflict.analysis.substring(0, 150) + '...');
});

console.log('\n═══════════════════════════════════');
console.log('示例7：Express API集成');
console.log('═══════════════════════════════════\n');

const apiExample = `
// server.js
const express = require('express');
const { generateCelticCrossReading } = require('./tarot-celtic-cross-engine');
const tarotDB = require('./complete-tarot-database.json').cards;

const app = express();
app.use(express.json());

// API端点：凯尔特十字解读
app.post('/api/tarot/celtic-cross', (req, res) => {
  try {
    const { cardIds, topic = 'general' } = req.body;
    
    // 验证卡牌数量
    if (!cardIds || cardIds.length !== 10) {
      return res.status(400).json({
        success: false,
        error: '凯尔特十字牌阵需要10张牌'
      });
    }
    
    // 从数据库获取卡牌
    const cards = cardIds.map(id => {
      const card = tarotDB.find(c => c.id === id);
      if (!card) throw new Error(\`Card \${id} not found\`);
      return card;
    });
    
    // 生成解读
    const reading = generateCelticCrossReading(cards, topic);
    
    // 返回JSON
    res.json({
      success: true,
      data: reading,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('Tarot Celtic Cross API running on port 3000');
});
`;

console.log(apiExample);

console.log('\n═══════════════════════════════════');
console.log('示例8：前端渲染示例');
console.log('═══════════════════════════════════\n');

const frontendExample = `
// 前端JavaScript示例
async function getCelticCrossReading(cardIds, topic) {
  const response = await fetch('/api/tarot/celtic-cross', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cardIds, topic })
  });
  
  const result = await response.json();
  
  if (result.success) {
    const data = result.data;
    
    // 1. 渲染能量快照
    renderEnergySnapshot(data.energySnapshot);
    
    // 2. 渲染牌阵布局
    renderCardGrid(data.cardPositions);
    
    // 3. 按顺序渲染核心分析
    renderCoreConflict(data.analysis.coreConflict);
    await delay(1000);
    
    renderPsychological(data.analysis.psychological);
    await delay(1000);
    
    renderEnvironment(data.analysis.environment);
    await delay(1000);
    
    renderFinalOutcome(data.analysis.finalOutcome);
    
    // 4. 渲染补充分析
    renderSupplementary(data.supplementary);
  }
}

// 渲染核心矛盾
function renderCoreConflict(conflict) {
  const container = document.getElementById('core-conflict');
  container.innerHTML = \`
    <h3>📌 核心矛盾</h3>
    <p class="analysis">\${conflict.analysis}</p>
    <div class="gentle-advice">💝 \${conflict.gentle}</div>
  \`;
}

// 使用示例
const cardIds = [
  'major_00', 'major_16', 'major_02', 'wands_03', 'major_17',
  'cups_06', 'major_08', 'major_19', 'major_18', 'major_21'
];

getCelticCrossReading(cardIds, 'love');
`;

console.log(frontendExample);

console.log('\n═══════════════════════════════════');
console.log('示例9：补充分析内容');
console.log('═══════════════════════════════════\n');

const { supplementary } = loveReading;

console.log('【时间演变】');
console.log('趋势：', supplementary.timeline.trend);
console.log(supplementary.timeline.analysis);

console.log('\n【希望与恐惧】');
console.log('卡牌：', supplementary.hopesAndFears.card);
console.log(supplementary.hopesAndFears.analysis);
console.log('\n温柔建议：', supplementary.hopesAndFears.gentle);

console.log('\n═══════════════════════════════════');
console.log('示例10：元数据统计');
console.log('═══════════════════════════════════\n');

const { metadata } = loveReading;
console.log('总卡牌数：', metadata.totalCards);
console.log('大阿卡纳：', metadata.majorArcanaCount);
console.log('小阿卡纳：', metadata.minorArcanaCount);
console.log('逆位牌数：', metadata.reversedCount);

console.log('\n═══════════════════════════════════');
console.log('完整演示结束');
console.log('═══════════════════════════════════\n');

console.log('✨ 凯尔特十字牌阵功能总结：');
console.log('1. ✅ 10张牌完整位置映射');
console.log('2. ✅ 核心矛盾分析（位置1 vs 位置2）');
console.log('3. ✅ 心理根源分析（潜意识 vs 意识目标）');
console.log('4. ✅ 外部环境影响分析');
console.log('5. ✅ 时间演变分析（过去 → 近未来）');
console.log('6. ✅ 希望与恐惧分析');
console.log('7. ✅ 最终预测分析');
console.log('8. ✅ 温柔且专业的语气');
console.log('9. ✅ 四种占卜类型支持（love/career/finance/general）');
console.log('10. ✅ 双格式输出（JSON + Text）');

console.log('\n🎯 输出顺序（按要求）：');
console.log('核心矛盾 → 心理根源 → 外部环境 → 最终预测');

console.log('\n📝 建议使用方式：');
console.log('- 后端：使用 generateCelticCrossReading() 生成完整解读');
console.log('- 前端：按顺序逐层展开，增强用户体验');
console.log('- 展示：每个分析都包含"温柔建议"，提升温暖感');
