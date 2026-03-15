# 🚨 严重Bug报告

**时间：** 2026-03-09 07:14  
**问题：** 图片映射完全错误

---

## ❌ 确认的问题

### 问题1：图片映射错误（严重）
**现象：**
- 星币八 显示的是 教皇(THE HIEROPHANT) 的图片
- 说明card_id到图片的映射完全混乱

**根本原因：**
1. 图片文件缺失（只有55张，需要78张）
2. 代码中的图片映射逻辑有问题
3. buildCardByIndex() 函数可能用错了index

### 问题2：性能卡顿
**现象：**
- 手势选牌有卡顿
- 用户体验差

---

## 🔧 必须修复的内容

### 1. 图片映射逻辑
```javascript
// 当前代码有问题
const fallback = buildCardByIndex(index);
const cardId = source.id || fallback.id;
image: resolveCardImage(cardId, source.image_url, fallback.image)

// 问题：
- index 不等于 card_id
- pe08 的 index 可能是 50+
- 但 buildCardByIndex(50+) 返回了 ar05 的数据
```

### 2. 正确的映射应该是
```javascript
// 直接用 card_id 构建图片路径
const cardId = source.card_id || source.id;
const imagePath = `./assets/cards/${cardId}.jpg`;

// 如果文件不存在，用通用fallback
// 不要用其他牌的图片！
```

---

## 📋 修复计划

### 第1步：停止所有公网访问 ✅
已执行

### 第2步：检查代码逻辑
- 找到 buildCardByIndex()
- 找到 resolveCardImage()
- 分析为什么pe08→ar05

### 第3步：修复映射
- 移除复杂的 buildCardByIndex() fallback
- 直接用 card_id 映射图片
- 缺失的图片用统一的占位图

### 第4步：优化性能
- 优化手势识别参数
- 减少不必要的重渲染
- 添加防抖

### 第5步：完整测试
- 测试所有78张牌的图片
- 确保名称和图片匹配
- 性能测试

---

## ⏸️ 当前状态

**已停止：**
- [x] 公网tunnel已关闭

**待修复：**
- [ ] 分析buildCardByIndex()逻辑
- [ ] 修复图片映射
- [ ] 性能优化
- [ ] 完整测试

**不会发布直到：**
- ✅ 所有78张牌图片正确
- ✅ 性能流畅
- ✅ 完整测试通过

---

**🚨 修复中，请稍候...**
