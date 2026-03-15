#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

# 读取原文件
with open('index-integrated.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 在"完成儀式並回歸"按钮前添加深度解读按钮
deep_button = '''                  {/* 深度解读按钮 */}
                  <div className="flex justify-center mt-8 mb-4">
                    <button
                      onClick={() => setView('deepReading')}
                      className="px-12 py-4 rounded-full border border-[#9d85c4]/40 hover:border-[#9d85c4] hover:shadow-[0_0_30px_rgba(157,133,196,0.4)] transition-all duration-500 tracking-[0.4em] text-sm uppercase bg-[#9d85c4]/10 backdrop-blur-md"
                    >
                      ✦ 查看深度解读 ✦
                    </button>
                  </div>

'''

# 在"完成儀式並回歸"按钮前插入
content = content.replace(
    '                  <div className="flex justify-center mt-12">',
    deep_button + '                  <div className="flex justify-center mt-12">'
)

# 2. 在 result 视图后添加深度解读视图
# 找到 result 视图结束的位置（在它的闭合括号后）
deep_reading_view = '''
            {/* 深度解读视图 */}
            {view === 'deepReading' && selectedCards.length > 0 && (() => {
              // 获取第一张牌的深度解读数据
              const card = selectedCards[0];
              const cardId = card.id.startsWith('ar') ? Number.parseInt(card.id.slice(2), 10) : null;
              const enhanced = cardId !== null && window.ENHANCED_MAJOR_ARCANA ? window.ENHANCED_MAJOR_ARCANA[cardId] : null;
              
              if (!enhanced) {
                return (
                  <div className="min-h-screen p-8 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-[#F7E7CE]/60 mb-8">此牌暂无深度解读</p>
                      <button
                        onClick={() => setView('result')}
                        className="px-8 py-3 rounded-full border border-[#F7E7CE]/40 hover:border-[#F7E7CE] transition-all"
                      >
                        返回牌阵
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <div className="min-h-screen p-6 md:p-16 bg-[#0d0e1a] overflow-y-auto">
                  <button
                    onClick={() => setView('result')}
                    className="mb-8 text-[#F7E7CE]/60 hover:text-[#F7E7CE] transition-colors tracking-[0.3em] text-xs uppercase flex items-center gap-2"
                  >
                    ← 返回牌阵
                  </button>

                  <div className="max-w-5xl mx-auto">
                    {/* 标题 */}
                    <div className="text-center mb-16 card-reveal">
                      <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em] text-[#F7E7CE] mb-4">
                        {enhanced.name}
                      </h1>
                      <p className="text-xl text-[#9d85c4] italic tracking-wider">
                        {enhanced.nameEn}
                      </p>
                      <div className="mt-6 inline-block px-6 py-2 rounded-full border border-[#F7E7CE]/30 bg-[#F7E7CE]/5">
                        <span className="text-sm tracking-[0.3em] text-[#F7E7CE]">
                          {card.isReversed ? '逆位 REVERSED' : '正位 UPRIGHT'}
                        </span>
                      </div>
                    </div>

                    {/* 荣格原型分析 */}
                    {enhanced.jungian && (
                      <div className="deep-insight-panel rounded-3xl p-8 md:p-12 mb-8" style={{animationDelay: '100ms'}}>
                        <h2 className="text-2xl font-light tracking-[0.4em] text-[#9d85c4] mb-6 flex items-center gap-3">
                          <span className="text-3xl">🧠</span>
                          荣格原型分析
                        </h2>
                        <h3 className="text-xl text-[#F7E7CE] mb-4 tracking-wide">
                          {enhanced.jungian.archetype}
                        </h3>
                        <p className="text-[#e5e7eb] leading-relaxed text-base md:text-lg">
                          {enhanced.jungian.description}
                        </p>
                      </div>
                    )}

                    {/* 符号系统解构 */}
                    {enhanced.symbolism && (
                      <div className="deep-insight-panel rounded-3xl p-8 md:p-12 mb-8" style={{animationDelay: '200ms'}}>
                        <h2 className="text-2xl font-light tracking-[0.4em] text-[#f7e7ce] mb-6 flex items-center gap-3">
                          <span className="text-3xl">🔮</span>
                          符号系统解构
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(enhanced.symbolism).map(([key, value]) => (
                            <div key={key} className="wisdom-card symbol">
                              <p className="text-[#F7E7CE] text-sm tracking-wide mb-2 font-semibold">
                                {value.split(/[：——]/)[0] || value.substring(0, 20)}
                              </p>
                              <p className="text-[#e5e7eb]/80 text-sm leading-relaxed">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 生活情境指引 */}
                    {enhanced.deepInsights && (
                      <div className="deep-insight-panel rounded-3xl p-8 md:p-12 mb-8" style={{animationDelay: '300ms'}}>
                        <h2 className="text-2xl font-light tracking-[0.4em] text-[#7b68ee] mb-6 flex items-center gap-3">
                          <span className="text-3xl">💫</span>
                          生活情境指引
                        </h2>
                        
                        <div className="wisdom-card jungian">
                          <h3 className="text-[#F7E7CE] text-base tracking-wide mb-3 flex items-center gap-2">
                            <span>❤️</span> 爱情关系
                          </h3>
                          <p className="text-[#e5e7eb]/90 leading-relaxed">
                            {enhanced.deepInsights.love}
                          </p>
                        </div>

                        <div className="wisdom-card jungian">
                          <h3 className="text-[#F7E7CE] text-base tracking-wide mb-3 flex items-center gap-2">
                            <span>💼</span> 事业发展
                          </h3>
                          <p className="text-[#e5e7eb]/90 leading-relaxed">
                            {enhanced.deepInsights.career}
                          </p>
                        </div>

                        <div className="wisdom-card jungian">
                          <h3 className="text-[#F7E7CE] text-base tracking-wide mb-3 flex items-center gap-2">
                            <span>🌟</span> 心灵成长
                          </h3>
                          <p className="text-[#e5e7eb]/90 leading-relaxed">
                            {enhanced.deepInsights.spiritual}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 经典塔罗著作的智慧 */}
                    {enhanced.bookWisdom && (
                      <div className="deep-insight-panel rounded-3xl p-8 md:p-12 mb-8" style={{animationDelay: '400ms'}}>
                        <h2 className="text-2xl font-light tracking-[0.4em] text-[#f7e7ce] mb-6 flex items-center gap-3">
                          <span className="text-3xl">📚</span>
                          经典塔罗著作的智慧
                        </h2>
                        
                        <div className="wisdom-card book">
                          <h3 className="text-[#F7E7CE] tracking-wide mb-3">《塔罗逆位精解》</h3>
                          <p className="text-[#e5e7eb]/90 leading-relaxed italic">
                            {enhanced.bookWisdom.reversed}
                          </p>
                        </div>

                        <div className="wisdom-card book">
                          <h3 className="text-[#F7E7CE] tracking-wide mb-3">《塔罗葵花宝典》</h3>
                          <p className="text-[#e5e7eb]/90 leading-relaxed italic">
                            {enhanced.bookWisdom.greer}
                          </p>
                        </div>

                        <div className="wisdom-card book">
                          <h3 className="text-[#F7E7CE] tracking-wide mb-3">《78度的智慧》</h3>
                          <p className="text-[#e5e7eb]/90 leading-relaxed italic">
                            {enhanced.bookWisdom.pollack}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 自由意志提醒 */}
                    {enhanced.freeWill && (
                      <div className="deep-insight-panel rounded-3xl p-10 md:p-14 mb-12 bg-gradient-to-br from-[#9d85c4]/20 to-[#7b68ee]/10 border-[#9d85c4]/30" style={{animationDelay: '500ms'}}>
                        <h2 className="text-2xl font-light tracking-[0.4em] text-[#F7E7CE] mb-6 text-center flex items-center justify-center gap-3">
                          <span className="text-3xl">🕊️</span>
                          你的选择，你的力量
                        </h2>
                        <p className="text-[#F7E7CE]/95 text-lg leading-relaxed text-center italic">
                          {enhanced.freeWill}
                        </p>
                      </div>
                    )}

                    {/* 返回按钮 */}
                    <div className="text-center pb-12">
                      <button
                        onClick={() => setView('result')}
                        className="px-12 py-4 rounded-full border border-[#F7E7CE]/40 hover:border-[#F7E7CE] hover:shadow-[0_0_30px_rgba(247,231,206,0.3)] transition-all duration-500 tracking-[0.4em] text-sm uppercase bg-[#F7E7CE]/5 backdrop-blur-md"
                      >
                        返回牌阵总结
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
'''

# 在 result 视图的闭合括号后插入深度解读视图
# 找到 "            )}" 后面紧跟 "            </div>" 的位置（result 视图结束）
pattern = r'(\s+\)\}\s+</div>\s+</div>)'
matches = list(re.finditer(pattern, content))

if matches:
    # 在最后一个匹配之前插入（result 视图结束处）
    insert_pos = matches[-1].start()
    content = content[:insert_pos] + deep_reading_view + content[insert_pos:]

# 保存最终文件
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 深度解读已成功整合到 index.html")
print("📍 添加了：")
print("  - 深度解读样式")
print("  - enhanced-tarot-data.js 引用")
print("  - 深度解读按钮（在 result 视图）")
print("  - 完整的深度解读视图")
