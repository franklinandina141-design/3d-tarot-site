#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
集成教练模式到index.html
"""

import re

# 读取HTML
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. 在generateSoulSummary函数开始处添加模式切换和教练模式调用
coach_mode_integration = '''        const generateSoulSummary = () => {
          if (selectedCards.length < 3) return null;
          const [p, n, f] = selectedCards;

          // 🔥 教练模式开关（设置为true启用犀利模式，false使用温和模式）
          const USE_COACH_MODE = true;
          
          // 生成教练模式内容
          const coachContent = (USE_COACH_MODE && window.CoachMode) ? {
            truth: window.CoachMode.generateBrutalTruth(p, n, f, submittedQuestion),
            obstacles: window.CoachMode.generateHiddenObstacles(p, n, f),
            causal: window.CoachMode.generateCausalChain(p, n, f, submittedQuestion),
            action: window.CoachMode.generatePreciseAction(n, f, submittedQuestion)
          } : null;

          // 如果启用教练模式，返回教练模式布局
          if (coachContent) {
            return (
              <div className="space-y-8 text-[#d1d5db] font-light leading-relaxed">
                {submittedQuestion && (
                  <div className="p-5 rounded-2xl border border-[#F7E7CE]/20 bg-[#F7E7CE]/5">
                    <p className="text-xs tracking-[0.2em] uppercase text-[#F7E7CE]/80 mb-2">📋 你的问题</p>
                    <p className="text-base">{submittedQuestion}</p>
                  </div>
                )}

                <div className="p-6 rounded-2xl border border-[#ffd5d5]/30 bg-[#ffd5d5]/10">
                  <div className="text-sm whitespace-pre-line" dangerouslySetInnerHTML={{__html: coachContent.truth.replace(/\\n/g, '<br/>')}} />
                </div>

                <div className="p-6 rounded-2xl border border-[#9d85c4]/30 bg-[#9d85c4]/10">
                  <div className="text-sm whitespace-pre-line" dangerouslySetInnerHTML={{__html: coachContent.obstacles.replace(/\\n/g, '<br/>')}} />
                </div>

                <div className="p-6 rounded-2xl border border-[#F7E7CE]/30 bg-[#F7E7CE]/10">
                  <div className="text-sm whitespace-pre-line" dangerouslySetInnerHTML={{__html: coachContent.causal.replace(/\\n/g, '<br/>')}} />
                </div>

                <div className="p-6 rounded-2xl border border-[#7eb3d4]/30 bg-[#7eb3d4]/10">
                  <div className="text-sm whitespace-pre-line" dangerouslySetInnerHTML={{__html: coachContent.action.replace(/\\n/g, '<br/>')}} />
                </div>

                <div className="pt-6 border-t border-[#F7E7CE]/20">
                  <h4 className="text-[#F7E7CE] uppercase tracking-[0.2em] mb-4 text-sm">【最后提醒】</h4>
                  <div className="space-y-3 text-sm">
                    <p>这不是fortune telling，这是<strong className="text-[#F7E7CE]">现状镜像</strong>。</p>
                    <p>你看到的不是命运，而是你当前能量状态的投射。</p>
                    <p className="text-[#ffd5d5]">改变能量，结果就会改变。</p>
                    <p className="font-semibold">但记住：改变不是"想"出来的，是"做"出来的。</p>
                    <p className="text-xs opacity-70 mt-4">现在，深呼吸，选一个今天就能开始的小行动。</p>
                  </div>
                  <p className="text-xs mt-6 opacity-60 italic">
                    🔥 教练模式已启用 · 解读完成于 {new Date().toLocaleString('zh-CN')}
                    <br/>本解读仅供自我觉察与成长参考，不取代医疗、法律、财务或其他专业决策建议。
                  </p>
                </div>
              </div>
            );
          }

          // 原版温和模式（作为后备）
'''

# 找到原始的generateSoulSummary函数定义
pattern = r'(        const generateSoulSummary = \(\) => \{[^}]*?if \(selectedCards\.length < 3\) return null;[^}]*?const \[p, n, f\] = selectedCards;)'

# 替换为新版本
html = re.sub(
    pattern,
    coach_mode_integration,
    html,
    count=1,
    flags=re.DOTALL
)

# 保存
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ 教练模式集成完成！")
print("📝 修改说明：")
print("   - 在generateSoulSummary函数中添加了USE_COACH_MODE开关")
print("   - 默认启用教练模式（USE_COACH_MODE = true）")
print("   - 保留了原版温和模式作为后备")
print("   - 设置为false即可切回温和模式")
