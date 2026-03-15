#!/bin/bash
# 处理新头像

INPUT="/Users/cyauio/Documents/3d-tarot-site/avatar_new.jpg"
OUTPUT_DIR="/Users/cyauio/Documents/3d-tarot-site"

echo "🎨 处理新头像..."

# 1. 转换PNG为JPG（如果需要）
if [[ ! -f "$INPUT" ]]; then
    ffmpeg -i "/Users/cyauio/Documents/3d-tarot-site/avatar_new.jpg" \
        "/Users/cyauio/Documents/3d-tarot-site/avatar_new_converted.jpg" -y 2>/dev/null
    INPUT="/Users/cyauio/Documents/3d-tarot-site/avatar_new_converted.jpg"
fi

# 2. 裁剪面部区域（聚焦人脸）
# 从图片中心裁剪方形
ffmpeg -i "$INPUT" \
  -vf "crop=min(iw\,ih):min(iw\,ih)" \
  "$OUTPUT_DIR/avatar_face_square.jpg" -y 2>&1 | tail -5

# 3. 缩放到300x300（适合视频）
ffmpeg -i "$OUTPUT_DIR/avatar_face_square.jpg" \
  -vf "scale=300:300" \
  "$OUTPUT_DIR/avatar_final_300.png" -y 2>&1 | tail -5

# 4. 生成圆形版本（可选，在剪映中更好）
echo ""
echo "✅ 处理完成！"
echo ""
echo "📂 输出文件："
ls -lh "$OUTPUT_DIR"/avatar_final_*.png "$OUTPUT_DIR"/avatar_face_*.jpg 2>/dev/null
echo ""
echo "💡 推荐使用: avatar_final_300.png"
echo "   在剪映中应用「智能抠图」效果最佳！"
