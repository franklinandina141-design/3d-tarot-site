#!/bin/bash

echo "🚨 紧急恢复到最后可用版本"
echo ""

# 找到最近的可用备份
echo "查找备份文件..."
ls -lt index.html.backup* | head -3

echo ""
echo "选择恢复点："
echo "1. backup_before_perf_fix - 性能优化前（最稳定）"
echo "2. backup_20260308_205004 - 晚上8:50版本"
echo "3. backup_before_professional - 专业升级前"

# 恢复到性能优化前（肯定能用）
echo ""
echo "执行：恢复到 backup_before_perf_fix（最稳定版本）"

cp index.html index.html.broken_$(date +%Y%m%d_%H%M%S)
cp index.html.backup_before_perf_fix index.html

echo "✅ 已恢复index.html"

# 检查是否需要恢复数据文件
echo ""
echo "检查数据文件兼容性..."
