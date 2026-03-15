#!/usr/bin/env python3
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 删除重复的CSS定义
# 找到第一个 .deep-insight-panel 定义
pattern = r'\.deep-insight-panel \{\s*background: linear-gradient\(135deg, rgba\(26, 27, 58, 0\.98\).*?\n.*?box-shadow: 0 8px 32px rgba\(0, 0, 0, 0\.3\);'

content = re.sub(pattern, '', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ CSS冲突已修复")
