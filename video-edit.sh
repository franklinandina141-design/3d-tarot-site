#!/bin/bash
# 自动化视频剪辑脚本
# 用法：./video-edit.sh input.mov

INPUT_VIDEO="$1"
OUTPUT_DIR="./video-output"
mkdir -p "$OUTPUT_DIR"

echo "🎬 开始处理视频..."

# 检查 ffmpeg 是否安装
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ 未检测到 ffmpeg，正在安装..."
    brew install ffmpeg
fi

# 基础文件名（无扩展名）
BASENAME=$(basename "$INPUT_VIDEO" .mov)

echo "📹 输入文件: $INPUT_VIDEO"
echo "📂 输出目录: $OUTPUT_DIR"

# 1. 剪辑掉开头和结尾的多余部分（可根据需要调整）
echo "✂️ 剪辑多余部分..."
ffmpeg -i "$INPUT_VIDEO" \
  -ss 00:00:02 \
  -to 00:02:00 \
  -c copy \
  "$OUTPUT_DIR/${BASENAME}_trimmed.mov" \
  -y

# 2. 加速某些部分（可选 - 如果录制时间过长）
echo "⏩ 调整播放速度..."
ffmpeg -i "$OUTPUT_DIR/${BASENAME}_trimmed.mov" \
  -filter:v "setpts=0.8*PTS" \
  -filter:a "atempo=1.25" \
  "$OUTPUT_DIR/${BASENAME}_speed.mov" \
  -y

# 3. 导出为 MP4 格式（兼容性更好）
echo "📦 转换为 MP4 格式..."
ffmpeg -i "$OUTPUT_DIR/${BASENAME}_speed.mov" \
  -c:v libx264 \
  -preset slow \
  -crf 18 \
  -c:a aac \
  -b:a 192k \
  "$OUTPUT_DIR/${BASENAME}_final.mp4" \
  -y

# 4. 生成竖屏版本（9:16，适合抖音/小红书）
echo "📱 生成竖屏版本..."
ffmpeg -i "$OUTPUT_DIR/${BASENAME}_final.mp4" \
  -vf "crop=ih*9/16:ih,scale=1080:1920" \
  -c:a copy \
  "$OUTPUT_DIR/${BASENAME}_vertical.mp4" \
  -y

# 5. 生成横屏版本（16:9，适合B站/YouTube）
echo "🖥️ 生成横屏版本..."
ffmpeg -i "$OUTPUT_DIR/${BASENAME}_final.mp4" \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -c:a copy \
  "$OUTPUT_DIR/${BASENAME}_horizontal.mp4" \
  -y

echo "✅ 处理完成！"
echo ""
echo "📂 输出文件："
echo "  - 最终版本: $OUTPUT_DIR/${BASENAME}_final.mp4"
echo "  - 竖屏版本: $OUTPUT_DIR/${BASENAME}_vertical.mp4"
echo "  - 横屏版本: $OUTPUT_DIR/${BASENAME}_horizontal.mp4"
echo ""
echo "🎵 下一步：添加背景音乐（我会帮你）"
echo "📝 下一步：添加字幕（我会生成 .srt 文件）"
