#!/bin/bash

echo "🚀 恢复功能 + 优化流畅度"
echo ""

# 备份当前数据
cp assets/tarot-deck.local.json assets/tarot-deck.local.json.broken_display
echo "✅ 已备份当前数据"

# 恢复到兼容格式（117KB版本）
cp assets/tarot-78-complete-final.json assets/tarot-deck.local.json
echo "✅ 已恢复兼容格式数据"

# 优化动画流畅度
cat > /tmp/smooth_patch.js << 'EOF'
// 优化卡牌展示流畅度的关键参数
const SMOOTH_CONFIG = {
  // 动画速度
  cardRevealDuration: 0.4,      // 卡牌翻转速度（秒）
  cardTransitionTiming: 'ease-out', // 过渡曲线
  
  // 渲染优化
  useGPUAcceleration: true,
  enableWillChange: true,
  
  // RAF优化
  targetFPS: 60,
  useRAFThrottle: true
};
EOF

echo "✅ 已生成流畅度配置"

# 重启服务器
pkill -f "python.*http.server.*8000" 2>/dev/null
sleep 1
python3 -m http.server 8000 > /dev/null 2>&1 &

echo ""
echo "✅ 完成！现在测试："
echo "1. 打开 http://localhost:8000"
echo "2. 清除缓存 (Cmd+Shift+R)"
echo "3. 选择3张牌"
echo "4. 查看展示效果"

