#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

# 读取文件
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 删除"关键转化锚点"模块（大约在524行）
# 找到并删除整个div块
anchor_pattern = r'<div className="p-4 rounded-2xl border border-\[#9d85c4\]/25 bg-\[#9d85c4\]/10">\s*<h5 className="text-xs tracking-\[0\.2em\] uppercase text-\[#d9c7ff\] mb-2">關鍵轉化錨點</h5>\s*<p className="text-sm">\{anchorText\}</p>\s*</div>'

content = re.sub(anchor_pattern, '', content)

# 2. 删除"预约引导"整个模块（大约631行开始）
booking_pattern = r'<div className="mt-12 p-6 md:p-8 rounded-3xl border border-\[#F7E7CE\]/20 bg-\[#F7E7CE\]/5">.*?</div>\s*</div>'

# 使用更精确的模式
booking_start = content.find('<h4 className="text-[#F7E7CE] text-sm tracking-[0.35em] mb-4 uppercase text-center">預約引導</h4>')
if booking_start > 0:
    # 找到这个h4之前的div开始
    temp_start = content.rfind('<div className="mt-12 p-6 md:p-8 rounded-3xl', 0, booking_start)
    if temp_start > 0:
        # 找到对应的闭合（两层div）
        # 从h4开始，找到第一个</div>后的</div>
        search_from = booking_start
        div_count = 1
        pos = search_from
        while div_count > 0 and pos < len(content):
            if content[pos:pos+6] == '</div>':
                div_count -= 1
                if div_count == 0:
                    # 还需要再找一个</div>
                    next_close = content.find('</div>', pos + 6)
                    if next_close > 0:
                        # 删除从temp_start到next_close+6的内容
                        content = content[:temp_start] + content[next_close+6:]
                        break
                pos += 6
            elif content[pos:pos+5] == '<div ':
                div_count += 1
                pos += 5
            else:
                pos += 1

# 保存
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 已删除：")
print("  - 关键转化锚点模块")
print("  - 预约引导模块")
