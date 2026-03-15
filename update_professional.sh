#!/bin/bash
# 更新为专业塔罗咨询师解读风格

cd /Users/cyauio/Documents/3d-tarot-site

# 备份当前版本
cp index.html index.html.backup_$(date +%Y%m%d_%H%M%S)

# 使用Python进行复杂的文本替换
python3 << 'PYTHON_EOF'
import re

# 读取文件
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到generateSoulClimate函数并修改其签名，接受question参数
content = re.sub(
    r'const generateSoulClimate = \(past, now, future\)',
    'const generateSoulClimate = (past, now, future, question)',
    content
)

# 修改generateCurrentDepth函数签名
content = re.sub(
    r'const generateCurrentDepth = \(card\)',
    'const generateCurrentDepth = (card, question)',
    content
)

# 修改generateStoryArc函数签名  
content = re.sub(
    r'const generateStoryArc = \(past, now, future\)',
    'const generateStoryArc = (past, now, future, question)',
    content
)

# 修改generateGentleClosing函数签名
content = re.sub(
    r'const generateGentleClosing = \(past, now, future\)',
    'const generateGentleClosing = (cards, question)',
    content
)

# 更新函数调用，传递question参数
content = re.sub(
    r'generateSoulClimate\(p, n, f\)',
    'generateSoulClimate(p, n, f, submittedQuestion)',
    content
)

content = re.sub(
    r'generateCurrentDepth\(n\)',
    'generateCurrentDepth(n, submittedQuestion)',
    content
)

content = re.sub(
    r'generateStoryArc\(p, n, f\)',
    'generateStoryArc(p, n, f, submittedQuestion)',
    content
)

content = re.sub(
    r'generateGentleClosing\(p, n, f\)',
    'generateGentleClosing([p, n, f], submittedQuestion)',
    content
)

# 保存修改
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 函数签名已更新，现在接受question参数")

PYTHON_EOF

echo "✅ 专业版本更新完成！"
echo "现在所有解读函数都会根据用户的问题类型（事业/感情/一般）给出更具体的场景化建议。"
