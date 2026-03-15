#!/bin/bash
# 自动化短视频剪辑脚本
# 基于专业导演方案

INPUT="/Users/cyauio/Desktop/螢幕錄影 2026-03-08 14.58.03.mov"
OUTPUT_DIR="/Users/cyauio/Documents/3d-tarot-site/final-video"
mkdir -p "$OUTPUT_DIR"

echo "🎬 开始自动化剪辑..."

# 1. 剪辑关键片段（按照25秒脚本）
echo "✂️ 剪辑关键场景..."

# 场景1: 开场 - 网站首页 (0-3秒，从原视频0秒开始)
ffmpeg -i "$INPUT" -ss 0 -t 3 -c copy "$OUTPUT_DIR/scene1.mov" -y

# 场景2: 输入问题+点击按钮 (3-8秒，从原视频5秒开始)
ffmpeg -i "$INPUT" -ss 5 -t 5 -c copy "$OUTPUT_DIR/scene2.mov" -y

# 场景3: 抽牌过程 (8-12秒，从原视频15秒开始)
ffmpeg -i "$INPUT" -ss 15 -t 4 -c copy "$OUTPUT_DIR/scene3.mov" -y

# 场景4: 解读结果滚动 (12-20秒，从原视频25秒开始)
ffmpeg -i "$INPUT" -ss 25 -t 8 -c copy "$OUTPUT_DIR/scene4.mov" -y

# 场景5: 结尾定格 (20-25秒，从原视频45秒开始)
ffmpeg -i "$INPUT" -ss 45 -t 5 -c copy "$OUTPUT_DIR/scene5.mov" -y

# 2. 调整播放速度
echo "⏩ 调整播放速度..."

# 场景2: 输入问题部分稍微加速 (1.2x)
ffmpeg -i "$OUTPUT_DIR/scene2.mov" \
  -filter:v "setpts=PTS/1.2" \
  "$OUTPUT_DIR/scene2_speed.mov" -y

# 场景3: 抽牌过程加速 (1.5x)
ffmpeg -i "$OUTPUT_DIR/scene3.mov" \
  -filter:v "setpts=PTS/1.5" \
  "$OUTPUT_DIR/scene3_speed.mov" -y

# 场景4: 滚动部分慢动作 (0.8x)
ffmpeg -i "$OUTPUT_DIR/scene4.mov" \
  -filter:v "setpts=PTS/0.8" \
  "$OUTPUT_DIR/scene4_speed.mov" -y

# 3. 创建合并列表
cat > "$OUTPUT_DIR/concat_list.txt" << EOF
file 'scene1.mov'
file 'scene2_speed.mov'
file 'scene3_speed.mov'
file 'scene4_speed.mov'
file 'scene5.mov'
EOF

# 4. 合并所有片段
echo "🔗 合并场景..."
ffmpeg -f concat -safe 0 -i "$OUTPUT_DIR/concat_list.txt" \
  -c copy "$OUTPUT_DIR/merged.mov" -y

# 5. 转换为MP4并优化
echo "📦 转换为MP4..."
ffmpeg -i "$OUTPUT_DIR/merged.mov" \
  -c:v libx264 \
  -preset slow \
  -crf 18 \
  -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:black" \
  "$OUTPUT_DIR/video_no_music.mp4" -y

echo "✅ 基础剪辑完成！"
echo "📂 输出文件: $OUTPUT_DIR/video_no_music.mp4"
