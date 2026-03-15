#!/bin/bash

echo "🔧 快速修复手势识别"
echo ""

# 备份当前版本
cp index.html index.html.backup_gesture_issue

# 方案1：调整MediaPipe参数为更高精度
echo "方案1：提升手势识别精度..."

# 使用sed替换参数
sed -i '' 's/modelComplexity: 0/modelComplexity: 1/' index.html
sed -i '' 's/minDetectionConfidence: 0.5/minDetectionConfidence: 0.65/' index.html

echo "✅ 参数已调整："
echo "  modelComplexity: 0 → 1 (更高精度)"
echo "  minDetectionConfidence: 0.5 → 0.65 (更准确检测)"
echo ""
echo "🔄 重启服务器..."

# 重启服务器
pkill -f "python.*http.server.*8000"
sleep 1
cd /Users/cyauio/Documents/3d-tarot-site
python3 -m http.server 8000 > /dev/null 2>&1 &

echo "✅ 服务器已重启"
echo ""
echo "📱 测试步骤："
echo "1. 清除浏览器缓存 (Cmd+Shift+R)"
echo "2. 重新打开 http://localhost:8000"
echo "3. 允许摄像头权限"
echo "4. 测试手势选牌"
echo ""
echo "💡 如果还不好用，可以："
echo "   - 检查摄像头是否被其他应用占用"
echo "   - 尝试更换浏览器"
echo "   - 调整光线（太暗会影响识别）"

