#!/bin/bash
# 处理头像：裁剪成方形并缩小

INPUT="/Users/cyauio/Documents/3d-tarot-site/avatar_original.jpg"
OUTPUT_DIR="/Users/cyauio/Documents/3d-tarot-site"

echo "🎨 处理头像..."

# 1. 裁剪成方形（以中心为基准）
ffmpeg -i "$INPUT" \
  -vf "crop=min(iw\,ih):min(iw\,ih)" \
  "$OUTPUT_DIR/avatar_square.jpg" -y

# 2. 缩小到300x300（适合视频使用）
ffmpeg -i "$OUTPUT_DIR/avatar_square.jpg" \
  -vf "scale=300:300" \
  "$OUTPUT_DIR/avatar_300.png" -y

# 3. 制作圆形蒙版版本（需要在剪映中完成效果更好）
echo "✅ 基础处理完成！"
echo ""
echo "📂 输出文件："
ls -lh "$OUTPUT_DIR"/avatar_*.jpg "$OUTPUT_DIR"/avatar_*.png
echo ""
echo "💡 建议：在剪映中使用 avatar_300.png"
echo "   然后应用「智能抠图」效果更好！"
