#!/bin/bash

echo "🚀 应用高质量优化到网站..."

# 备份当前数据
cp assets/tarot-deck.local.json assets/tarot-deck.local.json.pre_optimization_$(date +%Y%m%d_%H%M%S)

# 使用批量优化的版本（244KB）
if [ -f assets/tarot-78-batch-optimized.json ]; then
    cp assets/tarot-78-batch-optimized.json assets/tarot-deck.local.json
    echo "✅ 已应用批量优化版本"
else
    echo "❌ 未找到优化文件"
    exit 1
fi

# 验证
python3 << 'VERIFY'
import json
with open('assets/tarot-deck.local.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
print(f"✅ 验证成功：{data['total_cards']}张牌")
print(f"状态：{data['status']}")
VERIFY

# 重启服务器
pkill -f "python.*http.server.*8000" 2>/dev/null
sleep 1
python3 -m http.server 8000 > /dev/null 2>&1 &
echo "✅ 服务器已重启"

echo ""
echo "🎉 优化完成！"
echo "📁 访问：http://localhost:8000"
echo ""
echo "测试建议："
echo "1. 选择3张牌"
echo "2. 输入问题"
echo "3. 查看新的详细解读"

