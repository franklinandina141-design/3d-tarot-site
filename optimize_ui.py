#!/usr/bin/env python3
import re

# 读取index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# UI优化改进列表
improvements = []

# 1. 改进深度解读按钮样式（更醒目）
old_button = 'className="px-12 py-4 rounded-full border border-\\[#9d85c4\\]/40'
new_button = 'className="px-16 py-5 rounded-full border-2 border-\\[#9d85c4\\]/60 bg-gradient-to-r from-\\[#9d85c4\\]/20 to-\\[#7b68ee\\]/20'
if old_button in content:
    content = content.replace(old_button, new_button)
    improvements.append("✅ 深度解读按钮更醒目")

# 2. 添加渐变背景优化
style_addition = '''
      /* 优化的渐变和动画 */
      .enhanced-gradient {
        background: linear-gradient(135deg, 
          rgba(157, 133, 196, 0.1) 0%, 
          rgba(123, 104, 238, 0.15) 50%, 
          rgba(157, 133, 196, 0.1) 100%);
        animation: gradient-shift 8s ease-in-out infinite;
      }
      
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      .card-hover {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .card-hover:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 60px rgba(157, 133, 196, 0.3);
      }
'''

# 在</style>前插入
content = content.replace('    </style>', style_addition + '    </style>')
improvements.append("✅ 添加增强的渐变动画")

# 3. 改进深度解读视图的间距和排版
# 找到deep-insight-panel的样式，增加更好的间距
old_panel = '.deep-insight-panel {'
new_panel_style = '''.deep-insight-panel {
  background: linear-gradient(135deg, rgba(26, 27, 58, 0.98) 0%, rgba(13, 14, 26, 1) 100%);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(247, 231, 206, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);'''

if old_panel in content:
    # 只替换第一个出现
    content = content.replace(old_panel, new_panel_style, 1)
    improvements.append("✅ 深度解读面板视觉升级")

# 保存
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("🎨 UI优化完成！")
for item in improvements:
    print(f"  {item}")
print()
print("📍 刷新浏览器查看效果")
