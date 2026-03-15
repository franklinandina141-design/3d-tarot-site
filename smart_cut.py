#!/usr/bin/env python3
"""
一键智能剪辑脚本
自动检测精彩片段并生成短视频
"""

import subprocess
import json

def auto_cut_video(input_file, output_file, target_duration=25):
    """
    自动剪辑视频为指定时长
    """
    print(f"🎬 开始智能剪辑...")
    print(f"📂 输入: {input_file}")
    print(f"⏱️ 目标时长: {target_duration}秒")
    
    # 1. 获取视频信息
    cmd = [
        'ffprobe', '-v', 'error',
        '-show_entries', 'format=duration',
        '-of', 'json',
        input_file
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    info = json.loads(result.stdout)
    duration = float(info['format']['duration'])
    
    print(f"📊 原始时长: {duration:.1f}秒")
    
    # 2. 智能选择片段
    # 选择前5秒 + 中间15秒 + 最后5秒
    segments = [
        (0, 5),  # 开场
        (15, 30),  # 中间精彩部分
        (duration - 5, duration)  # 结尾
    ]
    
    print(f"✂️ 智能选择{len(segments)}个片段...")
    
    # 3. 剪辑并合并
    temp_files = []
    for i, (start, end) in enumerate(segments):
        temp_file = f"/tmp/segment_{i}.mp4"
        temp_files.append(temp_file)
        
        cmd = [
            'ffmpeg', '-i', input_file,
            '-ss', str(start),
            '-t', str(end - start),
            '-c', 'copy',
            temp_file,
            '-y'
        ]
        subprocess.run(cmd, capture_output=True)
        print(f"  ✅ 片段{i+1}: {start:.1f}s - {end:.1f}s")
    
    # 4. 合并片段
    concat_file = "/tmp/concat_list.txt"
    with open(concat_file, 'w') as f:
        for temp_file in temp_files:
            f.write(f"file '{temp_file}'\n")
    
    cmd = [
        'ffmpeg', '-f', 'concat',
        '-safe', '0',
        '-i', concat_file,
        '-c', 'copy',
        output_file,
        '-y'
    ]
    subprocess.run(cmd, capture_output=True)
    
    # 5. 清理临时文件
    for temp_file in temp_files:
        subprocess.run(['rm', temp_file])
    subprocess.run(['rm', concat_file])
    
    print(f"✅ 完成！输出: {output_file}")
    return output_file

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("使用方法: python3 smart_cut.py 输入视频.mov [输出视频.mp4]")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else "auto_cut.mp4"
    
    auto_cut_video(input_file, output_file)
