#!/bin/bash
INPUT="/Users/cyauio/Desktop/螢幕錄影 2026-03-08 14.58.03.mov"
OUTPUT_DIR="./video-output"

echo "🎬 开始处理视频..."

# 1. 转换为高质量MP4（保持原时长）
echo "📦 转换为 MP4 格式..."
ffmpeg -i "$INPUT" \
  -c:v libx264 \
  -preset slow \
  -crf 18 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black" \
  -c:a aac \
  -b:a 192k \
  "$OUTPUT_DIR/tarot_final.mp4" \
  -y

# 2. 生成竖屏版本（9:16，适合抖音/小红书）
echo "📱 生成竖屏版本（抖音/小红书）..."
ffmpeg -i "$OUTPUT_DIR/tarot_final.mp4" \
  -vf "crop=ih*9/16:ih,scale=1080:1920" \
  -c:a copy \
  "$OUTPUT_DIR/tarot_vertical.mp4" \
  -y

# 3. 生成横屏版本（16:9，适合B站/YouTube）- 就是final版本
cp "$OUTPUT_DIR/tarot_final.mp4" "$OUTPUT_DIR/tarot_horizontal.mp4"

echo "✅ 处理完成！"
echo ""
echo "📂 输出文件："
ls -lh "$OUTPUT_DIR"/*.mp4
