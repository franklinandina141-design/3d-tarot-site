#!/bin/bash

# 生成专业占位图

MISSING_CARDS=(
"ar08:力量" "ar10:命运之轮" "ar20:审判"
"wa01:权杖一" "wa05:权杖五" "wa07:权杖七" "wa09:权杖九"
"wa11:权杖侍从" "wa12:权杖骑士" "wa13:权杖王后" "wa14:权杖国王"
"cu01:圣杯一" "cu03:圣杯三" "cu05:圣杯五" "cu06:圣杯六" "cu08:圣杯八"
"cu11:圣杯侍从" "cu12:圣杯骑士" "cu13:圣杯王后" "cu14:圣杯国王"
"sw01:宝剑一" "sw03:宝剑三" "sw05:宝剑五" "sw07:宝剑七"
"sw11:宝剑侍从" "sw12:宝剑骑士" "sw13:宝剑王后" "sw14:宝剑国王"
"pe01:星币一" "pe04:星币四" "pe08:星币八" "pe10:星币十"
"pe11:星币侍从" "pe12:星币骑士" "pe13:星币王后" "pe14:星币国王"
)

echo "🎨 生成专业占位图..."

for card_info in "${MISSING_CARDS[@]}"; do
    IFS=':' read -r cid name <<< "$card_info"
    output="assets/cards/${cid}.jpg"
    
    # 使用ImageMagick生成
    convert -size 1086x1810 \
        -background "#0d0e1a" \
        -fill "#9d85c4" \
        -draw "roundrectangle 30,30 1056,1780 20,20" \
        -fill "#F7E7CE" \
        -gravity center \
        -font "/System/Library/Fonts/Helvetica.ttc" \
        -pointsize 100 \
        -annotate +0-100 "${cid^^}" \
        -font "/System/Library/Fonts/PingFang.ttc" \
        -pointsize 70 \
        -annotate +0+50 "$name" \
        -quality 85 \
        "$output"
    
    echo "✅ $cid - $name"
done

echo "✅ 完成！"
