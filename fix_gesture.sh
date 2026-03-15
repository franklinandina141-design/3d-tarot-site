#!/bin/bash

echo "🔧 修复手势识别..."

# 方案1：恢复更高的精度
cat > /tmp/gesture_fix.txt << 'EOF'

优化前（更准确但稍慢）：
  modelComplexity: 1
  minDetectionConfidence: 0.7
  minTrackingConfidence: 0.5

优化后（更快但不够准确）：
  modelComplexity: 0
  minDetectionConfidence: 0.5
  minTrackingConfidence: 0.5

建议的平衡参数（准确+流畅）：
  modelComplexity: 1
  minDetectionConfidence: 0.6
  minTrackingConfidence: 0.5

EOF

cat /tmp/gesture_fix.txt

echo ""
echo "选择修复方案："
echo "1. 恢复高精度（更准确，稍慢）"
echo "2. 使用平衡参数（推荐）"
echo "3. 保持当前（快但不准）"
echo "4. 查看详细参数对比"
