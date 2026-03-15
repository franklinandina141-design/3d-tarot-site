#!/bin/bash
# 添加背景音乐

VIDEO="/Users/cyauio/Documents/3d-tarot-site/final-video/video_no_music.mp4"
OUTPUT_DIR="/Users/cyauio/Documents/3d-tarot-site/final-video"

echo "🎵 生成治愈系氛围音乐..."

# 获取视频时长
DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$VIDEO")

# 生成柔和的氛围音乐（正弦波 + 白噪声）
# 使用多个频率叠加，创造治愈感
ffmpeg -f lavfi -i "sine=frequency=220:duration=$DURATION,sine=frequency=330:duration=$DURATION,sine=frequency=440:duration=$DURATION" \
  -filter_complex "[0][1][2]amix=inputs=3:duration=longest:dropout_transition=2,volume=0.15,highpass=f=100,lowpass=f=8000" \
  -t "$DURATION" \
  "$OUTPUT_DIR/ambient_music.mp3" -y

echo "🎬 合成视频和音乐..."

# 合成视频和音乐
ffmpeg -i "$VIDEO" -i "$OUTPUT_DIR/ambient_music.mp3" \
  -c:v copy \
  -c:a aac \
  -b:a 128k \
  -shortest \
  "$OUTPUT_DIR/tarot_short_final.mp4" -y

# 同时生成竖屏和横屏版本
echo "📱 生成竖屏版本..."
ffmpeg -i "$OUTPUT_DIR/tarot_short_final.mp4" \
  -vf "crop=ih*9/16:ih,scale=1080:1920" \
  -c:a copy \
  "$OUTPUT_DIR/tarot_short_vertical.mp4" -y

echo "🖥️ 生成横屏版本..."
ffmpeg -i "$OUTPUT_DIR/tarot_short_final.mp4" \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black" \
  -c:a copy \
  "$OUTPUT_DIR/tarot_short_horizontal.mp4" -y

echo "✅ 全部完成！"
echo ""
echo "📂 输出文件："
ls -lh "$OUTPUT_DIR"/tarot_short*.mp4
