#!/usr/bin/env python3
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 删除"關鍵轉化錨點"整个div块
anchor_pattern = r'<div className="p-4 rounded-2xl border border-\[#9d85c4\]/25 bg-\[#9d85c4\]/10">\s*<h5[^>]*>關鍵轉化錨點</h5>\s*<p[^>]*>\{anchorText\}</p>\s*</div>'
content = re.sub(anchor_pattern, '', content, flags=re.DOTALL)

# 2. 替换"靈魂氣候總覽"的固定模板为动态内容
old_climate = '''<h4 className="text-[#F7E7CE] uppercase tracking-[0.25em] mb-3 text-sm">1. 靈魂氣候總覽</h4>
                <p className="text-sm mt-2">此刻的你像站在季節交界處：一部分想向前，一部分仍想先確認安全。這不是矛盾，而是內在正在重新排序。你正在學習把感受與現實放在同一張地圖上，讓每一步更穩、更真實。</p>'''

new_climate = '''<h4 className="text-[#F7E7CE] uppercase tracking-[0.25em] mb-3 text-sm">1. 靈魂氣候總覽</h4>
                <p className="text-sm mt-2">{generateClimateOverview(p, n, f)}</p>'''

content = content.replace(old_climate, new_climate)

# 3. 添加generateClimateOverview函数（在generateSoulSummary之前）
climate_function = '''
        // 根据三张牌生成独特的灵魂气候总览
        const generateClimateOverview = (past, now, future) => {
          const cardNames = `${past.name}、${now.name}、${future.name}`;
          const reversedCount = [past, now, future].filter(c => c.isReversed).length;
          
          // 基于牌组合的独特解读
          const pastId = past.id || '';
          const nowId = now.id || '';
          const futureId = future.id || '';
          
          let climate = '';
          
          // 检测是否有大阿卡纳
          const hasMajor = [pastId, nowId, futureId].some(id => id.startsWith('ar'));
          
          if (reversedCount === 0) {
            // 全正位 - 顺流期
            climate = `你正处于相对顺畅的能量流动期。${cardNames}的组合显示，宇宙正在为你打开道路，但这不意味着不需要行动——反而需要你主动抓住当下的机遇。这是播种和建立的时期，你的选择会在未来收获。`;
          } else if (reversedCount === 3) {
            // 全逆位 - 深度内省期
            climate = `三张牌全部逆位是强烈的信号：宇宙在要求你暂停向外奔跑，转而向内审视。${cardNames}倒转后的能量提醒你，真正的突破不在于做更多，而在于疗愈旧伤、释放不再服务你的模式。这是蛹化蝶之前的蜕变期。`;
          } else if (now.isReversed && !past.isReversed && !future.isReversed) {
            // 现在逆位，过去未来正位 - 关键转折
            climate = `你正站在人生的转折点上。过去的${past.name}为你奠定了基础，未来的${future.name}展示了可能性，但此刻的${now.name}逆位提醒你：在前进之前，有些东西需要先放下或调整。这不是倒退，而是在为真正的飞跃做准备。`;
          } else if (!now.isReversed && past.isReversed) {
            // 过去逆位，现在正位 - 走出阴影
            climate = `你正在从${past.name}逆位的困境中走出来。现在的${now.name}正位显示，你已经开始找到节奏和方向。未来的${future.name}呼唤你继续保持这股势头。这是从黑暗走向光明的过渡期，每一步都算数。`;
          } else if (!future.isReversed && now.isReversed) {
            // 未来正位，现在逆位 - 希望在前
            climate = `虽然当下的${now.name}逆位让你感到卡顿或迷茫，但${future.name}正位是一个强有力的承诺：只要你愿意面对现在的课题，未来会向你打开。这段时期的关键是耐心与信任——黎明前总是最暗的。`;
          } else {
            // 混合状态 - 复杂成长期
            climate = `${cardNames}的组合呈现出复杂的能量景观——有些领域在流动，有些在阻塞。这反映了真实生活的多维性：你不是全盘顺利，也不是完全困顿。重点是辨识哪些是可以立即行动的，哪些需要等待时机。`;
          }
          
          // 添加大阿卡纳特殊提示
          if (hasMajor) {
            climate += ` 牌阵中出现大阿卡纳意味着这不是普通的日常议题，而是灵魂层面的功课——这个阶段的经历会深刻影响你未来的轨迹。`;
          }
          
          return climate;
        };

        const generateSoulSummary = () => {
'''

# 在generateSoulSummary定义前插入新函数
content = content.replace(
    '        const generateSoulSummary = () => {',
    climate_function
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 已完成:")
print("  1. 删除'關鍵轉化錨點'板块")
print("  2. 升级'靈魂氣候總覽'为动态生成")
print("  3. 每次抽牌都会有独特的解读")
