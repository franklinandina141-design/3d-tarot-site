#!/bin/bash
# 安装专业视频处理库

echo "🎬 安装MoviePy（专业视频剪辑库）..."

# 安装MoviePy
pip3 install moviepy pillow numpy

# 检查安装
python3 << 'EOF'
try:
    import moviepy
    print("✅ MoviePy 安装成功！")
    print(f"版本：{moviepy.__version__}")
except ImportError:
    print("❌ MoviePy 安装失败")
    exit(1)
EOF

echo ""
echo "✅ 准备完成！现在可以用Python做专业剪辑了"
