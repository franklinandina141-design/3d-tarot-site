# 🚀 Cloudflare Worker 一键部署指南

## 📋 前置要求

- Cloudflare 账号（免费）：https://dash.cloudflare.com/sign-up
- OpenAI API Key：https://platform.openai.com/api-keys

---

## ⚡ 快速部署（5分钟）

### 步骤 1：登录 Cloudflare

访问：https://dash.cloudflare.com/

### 步骤 2：创建 Worker

1. 点击左侧菜单 **Workers & Pages**
2. 点击 **Create application**
3. 点击 **Create Worker**
4. 输入名称：`tarot-ai-generator`
5. 点击 **Deploy**

### 步骤 3：复制代码

1. 点击 **Quick edit**
2. **全选删除**默认代码（Ctrl+A → Delete）
3. 打开本目录的 `worker.js` 文件
4. **全选复制**所有代码（Ctrl+A → Ctrl+C）
5. **粘贴**到 Worker 编辑器（Ctrl+V）
6. 点击 **Save and deploy**

### 步骤 4：配置 API Key

1. 点击 **Settings**（设置）
2. 点击 **Variables**（变量）
3. 点击 **Add variable**（添加变量）
4. 填写：
   - **Variable name**: `OPENAI_API_KEY`
   - **Value**: 粘贴你的 OpenAI API Key
   - **勾选** ☑️ **Encrypt**（加密）
5. 点击 **Save**

**如何获取 OpenAI API Key：**
- 访问：https://platform.openai.com/api-keys
- 点击 **Create new secret key**
- 复制 Key（只显示一次，请妥善保存！）

### 步骤 5：获取 Worker URL

1. 回到 Worker 主页
2. 复制顶部的 **Worker URL**
3. 格式类似：`https://tarot-ai-generator.你的用户名.workers.dev`

### 步骤 6：配置前端

1. 打开 `tarot-ai-generator.js`
2. 找到配置部分：
```javascript
config: {
  workerUrl: '',  // 👈 粘贴你的 Worker URL
  enabled: false, // 👈 改为 true
```
3. 修改为：
```javascript
config: {
  workerUrl: 'https://tarot-ai-generator.你的用户名.workers.dev',  // 👈 你的 URL
  enabled: true,  // 👈 启用 AI
```
4. 保存文件

---

## ✅ 测试连接

打开网站，按 **F12** 打开控制台，运行：

```javascript
await TarotAI.testConnection();
```

**成功输出：**
```
✅ AI 连接测试成功: {title: "...", paragraph1: "...", paragraph2: "..."}
```

**如果失败：**
1. 检查 Worker URL 是否正确
2. 检查 `enabled: true` 是否已设置
3. 检查 OpenAI API Key 是否正确配置
4. 查看 Worker Logs（Workers → 你的 Worker → Logs）

---

## 🎯 完成！

现在刷新网站，抽一次牌，你会看到：

1. **加载动画**：🔮 靈魂解讀生成中...
2. **AI 生成的解读**：右上角会有 ✨ **AI Generated** 徽章
3. **完全不同的内容**：每次抽牌都是独一无二的解读！

---

## 💰 费用提醒

- **Cloudflare Workers**：免费（每天 100,000 次请求）
- **OpenAI API**：
  - GPT-4o: ~$0.03/次（约 0.2 元）
  - GPT-4o-mini: ~$0.005/次（约 0.03 元）

**如何省钱：**
在 `worker.js` 中找到：
```javascript
model: 'gpt-4o'  // 改为 'gpt-4o-mini' 可省80%费用
```

---

## 🆘 常见问题

### Q: Worker 返回 500 错误

**A: 检查清单**
1. ✅ API Key 是否正确？
2. ✅ API Key 是否有余额？
3. ✅ 是否勾选了 "Encrypt"？
4. ✅ 查看 Worker Logs 查看详细错误

### Q: 前端显示 "AI 生成未启用"

**A: 检查清单**
1. ✅ `enabled: true` 是否已设置？
2. ✅ `workerUrl` 是否正确？
3. ✅ 打开浏览器控制台，运行 `TarotAI.config` 查看配置

### Q: AI 响应很慢

**A: 优化方案**
1. 使用 GPT-4o-mini（更快更便宜）
2. 调低 `max_tokens`（在 worker.js 中）
3. 降低 `temperature`（更快更稳定）

### Q: 如何禁用 AI？

**A: 改回硬编码逻辑**
在 `tarot-ai-generator.js` 中：
```javascript
enabled: false  // 改为 false，立即回退到硬编码
```

---

## 🎉 部署完成！

你的塔罗网站现在拥有**真正的 AI 智能**了！

每次抽牌都将获得：
- ✨ 独一无二的解读
- 🎭 20年大师级的深度分析
- 💬 说人话的真实建议

**享受 AI 带来的全新体验吧！** 🔮
