#!/bin/bash

echo "🚀 开始渐进式优化"
echo ""

# 检查当前状态
echo "📊 检查当前状态..."
if [ ! -f "index.html" ]; then
    echo "❌ index.html不存在"
    exit 1
fi

echo "✅ 当前版本：稳定版"
echo ""

# 阶段选择
echo "选择优化阶段："
echo "1. 数据优化（最安全，提升解读质量）"
echo "2. 动画优化（低风险，更流畅展示）"
echo "3. 手势优化（中风险，更准确识别）"
echo "4. 性能优化（高风险，大幅提升性能）"
echo "5. 全部优化（按顺序逐步完成）"
echo ""

# 默认选择阶段1（最安全）
STAGE=${1:-1}

case $STAGE in
    1)
        echo "🎯 执行：阶段1 - 数据优化"
        echo "  - 优化78张牌的内容"
        echo "  - 更丰富的场景描述"
        echo "  - 更具体的建议"
        ;;
    2)
        echo "🎯 执行：阶段2 - 动画优化"
        echo "  - 调整动画时长"
        echo "  - 优化过渡曲线"
        echo "  - GPU加速"
        ;;
    3)
        echo "🎯 执行：阶段3 - 手势优化"
        echo "  - MediaPipe参数"
        echo "  - 识别阈值"
        echo "  - 减少误触发"
        ;;
    4)
        echo "🎯 执行：阶段4 - 性能优化"
        echo "  - React生产版"
        echo "  - RAF优化"
        echo "  - 减少重渲染"
        ;;
    5)
        echo "🎯 执行：全部优化（逐步）"
        echo "  将按1→2→3→4顺序完成"
        ;;
    *)
        echo "❌ 无效选择"
        exit 1
        ;;
esac

echo ""
echo "准备开始优化..."
