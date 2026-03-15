/**
 * TarotProEngine 使用示例
 * 展示如何使用新的专业级塔罗解读引擎
 */

const {
  generateLayeredReading,
  formatLayeredReport,
  generateEnergyBarData,
  detectSpecialCombosAndQuotes
} = require('./tarot-pro-engine');

// 模拟卡牌数据（实际使用时从数据库获取）
const sampleCards = [
  {
    id: "major_16",
    name: "高塔 (The Tower)",
    arcana: "major",
    element: null,
    keywords: ["突变", "崩塌", "觉醒", "破除幻象"],
    interpretations: {
      love: {
        upright: {
          short: "关系剧变，真相揭露",
          energy: "剧变的能量正在撼动你的世界",
          situation: "关系可能面临突然的崩塌或重大变故。长期隐藏的问题突然爆发。虽然痛苦，但这是必要的觉醒...",
          advice: "接受改变，不要抗拒崩塌。这是宇宙在清理不真实的部分...",
          warning: "固守旧有模式只会让痛苦延长",
          outcome: "经历剧痛后的重生，建立更真实的关系",
          timing: "突然而剧烈的变化"
        }
      },
      general: {
        upright: {
          short: "人生剧变，破旧立新",
          energy: "摧毁性的转变能量",
          situation: "生活中某个重要领域正在崩塌...",
          advice: "臣服于变化，这是成长的机会",
          warning: "抗拒只会让过程更痛苦",
          outcome: "旧世界的终结，新生活的开始",
          timing: "突然降临的转折点"
        }
      }
    },
    position: "upright"
  },
  {
    id: "major_17",
    name: "星星 (The Star)",
    arcana: "major",
    element: null,
    keywords: ["希望", "疗愈", "灵感", "指引"],
    interpretations: {
      love: {
        upright: {
          short: "希望重现，情感疗愈",
          energy: "温柔的疗愈能量充满心房",
          situation: "经历黑暗后，爱情的希望重新显现。心灵的伤口正在被温柔对待...",
          advice: "保持信念，允许自己被疗愈。真爱值得等待...",
          warning: "不要因为过去的伤害关闭心门",
          outcome: "内心平和，准备好迎接真正的爱",
          timing: "疗愈期，缓慢而温柔"
        }
      },
      general: {
        upright: {
          short: "希望之光，灵魂疗愈",
          energy: "纯净的希望和疗愈能量",
          situation: "黑暗已过，希望之光照进生命...",
          advice: "相信美好，允许疗愈发生",
          warning: "不要让cynicism阻止希望",
          outcome: "内心平和，重获对生活的信心",
          timing: "缓慢但稳定的疗愈过程"
        }
      }
    },
    position: "upright"
  },
  {
    id: "wands_03",
    name: "权杖三 (Three of Wands)",
    arcana: "minor",
    suit: "Wands",
    element: "Fire",
    number: 3,
    keywords: ["扩展", "远见", "计划", "等待", "机会"],
    interpretations: {
      love: {
        upright: {
          short: "关系展望，未来规划",
          energy: "展望未来的乐观能量",
          situation: "你们开始展望共同的未来，规划长远的发展...",
          advice: "保持耐心，好的关系需要时间培养",
          warning: "不要因为等待就怀疑，进展在发生",
          outcome: "关系稳步发展，未来可期",
          timing: "中期发展，稳步推进"
        }
      },
      career: {
        upright: {
          short: "事业扩展，远见规划",
          energy: "战略思维和远见",
          situation: "事业正在向更广阔的方向扩展...",
          advice: "继续执行计划，保持战略眼光",
          warning: "不要急于求成，扩展需要时间",
          outcome: "事业成功扩展，新机会出现",
          timing: "中长期发展"
        }
      },
      general: {
        upright: {
          short: "视野扩展，计划推进",
          energy: "向前看的乐观能量",
          situation: "你的视野正在扩展，看到更多可能性...",
          advice: "保持远见，耐心执行计划",
          warning: "不要因为看不到立即结果就放弃",
          outcome: "计划成功，视野扩展",
          timing: "中期发展"
        }
      }
    },
    position: "upright"
  }
];

console.log('═══════════════════════════════════');
console.log('示例1：基础使用 - 生成分层解读');
console.log('═══════════════════════════════════\n');

// 生成分层解读（感情类）
const loveReading = generateLayeredReading(sampleCards, 'love');

// 输出JSON格式（用于API响应）
console.log('JSON格式输出（用于前端）：');
console.log(JSON.stringify(loveReading, null, 2));
console.log('\n');

console.log('═══════════════════════════════════');
console.log('示例2：格式化文本报告');
console.log('═══════════════════════════════════\n');

// 生成文本报告（用于打印或纯文本显示）
const textReport = formatLayeredReport(loveReading);
console.log(textReport);

console.log('\n═══════════════════════════════════');
console.log('示例3：单独使用能量条功能');
console.log('═══════════════════════════════════\n');

const energyData = generateEnergyBarData(sampleCards);
console.log('能量分布数据：');
console.log(JSON.stringify(energyData, null, 2));
console.log('\n主导元素：', energyData.dominant.name, energyData.dominant.icon);
console.log('能量模式：', energyData.balance);

console.log('\n═══════════════════════════════════');
console.log('示例4：单独检测特殊组合');
console.log('═══════════════════════════════════\n');

const combos = detectSpecialCombosAndQuotes(sampleCards);
if (combos.length > 0) {
  console.log('检测到特殊组合！');
  combos.forEach(combo => {
    console.log('\n涉及牌：', combo.cards.join(' + '));
    console.log('金句：', combo.quote);
    console.log('洞察：', combo.insight);
  });
} else {
  console.log('未检测到特殊组合');
}

console.log('\n═══════════════════════════════════');
console.log('示例5：不同领域的解读对比');
console.log('═══════════════════════════════════\n');

// 生成不同领域的解读
const topics = ['love', 'career', 'finance', 'general'];

topics.forEach(topic => {
  const reading = generateLayeredReading(sampleCards, topic);
  console.log(`\n【${reading.insight.category}】领域洞察：`);
  console.log(reading.insight.coreInsight);
});

console.log('\n═══════════════════════════════════');
console.log('示例6：前端集成示例（Express API）');
console.log('═══════════════════════════════════\n');

// Express API端点示例
const expressExample = `
// server.js
const express = require('express');
const { generateLayeredReading } = require('./tarot-pro-engine');
const tarotDB = require('./complete-tarot-database.json').cards;

const app = express();
app.use(express.json());

// API端点：生成塔罗解读
app.post('/api/tarot/reading', (req, res) => {
  try {
    const { cardIds, topic = 'general' } = req.body;
    
    // 从数据库获取卡牌
    const cards = cardIds.map(id => {
      const card = tarotDB.find(c => c.id === id);
      if (!card) throw new Error(\`Card \${id} not found\`);
      return card;
    });
    
    // 生成解读
    const reading = generateLayeredReading(cards, topic);
    
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

// 启动服务器
app.listen(3000, () => {
  console.log('Tarot API running on port 3000');
});
`;

console.log(expressExample);

console.log('\n═══════════════════════════════════');
console.log('示例7：前端可视化代码片段');
console.log('═══════════════════════════════════\n');

const frontendExample = `
// 前端JavaScript示例
async function getTarotReading(cardIds, topic) {
  const response = await fetch('/api/tarot/reading', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cardIds, topic })
  });
  
  const result = await response.json();
  
  if (result.success) {
    // 渲染金句（如果有）
    if (result.data.insight.masterQuote) {
      renderMasterQuote(result.data.insight.masterQuote);
    }
    
    // 渲染能量条
    renderEnergyBars(result.data.visualData.energyBars);
    
    // 渲染三层内容
    renderOverview(result.data.overview);
    renderInsight(result.data.insight);
    renderDetailedReadings(result.data.detailedReadings);
  }
}

// 使用示例
getTarotReading(['major_16', 'major_17', 'wands_03'], 'love');
`;

console.log(frontendExample);

console.log('\n═══════════════════════════════════');
console.log('示例8：视觉数据结构');
console.log('═══════════════════════════════════\n');

console.log('视觉化数据（用于图表和UI组件）：');
console.log(JSON.stringify(loveReading.visualData, null, 2));

console.log('\n═══════════════════════════════════');
console.log('完整功能演示结束');
console.log('═══════════════════════════════════\n');

console.log('✨ 核心特性总结：');
console.log('1. ✅ 分层展示：局势大观 → 领域洞察 → 牌意细解');
console.log('2. ✅ 视觉化能量条：四元素 + 灵性，带颜色和百分比');
console.log('3. ✅ 自动金句：12种特殊组合，触发塔罗师箴言');
console.log('4. ✅ 领域专项：love/career/finance/general 四种');
console.log('5. ✅ 双格式输出：JSON（前端）+ Text（打印）');
console.log('6. ✅ 完整元数据：timestamp, cards info, visual data');
console.log('\n🎯 建议集成方式：');
console.log('- 后端：使用 generateLayeredReading() 作为API主函数');
console.log('- 前端：使用 visualData 渲染能量条和金句');
console.log('- 展示：按三层顺序逐步展开，增强用户体验');
