# 🤖 Claude 版本 - 一键部署指南

## 📋 前置要求

- Cloudflare 账号（免费）：https://dash.cloudflare.com/sign-up
- Anthropic API Key：https://console.anthropic.com/

---

## ⚡ 快速部署（5分钟）

### 步骤 1：获取 Anthropic API Key

1. 访问：https://console.anthropic.com/
2. 注册/登录账号
3. 进入 **API Keys** 页面
4. 点击 **Create Key**
5. 复制 API Key（格式：`sk-ant-...`）

**💡 提示：**
- Anthropic 新用户有 $5 免费额度
- 之后需要充值（最低 $5）
- 价格：Claude 3.5 Sonnet ~$0.015/次（比 GPT-4o 便宜一半）

### 步骤 2：创建 Worker

1. 访问：https://dash.cloudflare.com/
2. 点击 **Workers & Pages**
3. 点击 **Create application** → **Create Worker**
4. 输入名称：`tarot-ai-claude`
5. 点击 **Deploy**

### 步骤 3：复制 Claude Worker 代码

1. 点击 **Quick edit**
2. **全选删除**默认代码（Ctrl+A → Delete）
3. 打开 `worker-claude.js` 文件
4. **全选复制**所有代码（Ctrl+A → Ctrl+C）
5. **粘贴**到 Worker 编辑器（Ctrl+V）
6. 点击 **Save and deploy**

### 步骤 4：配置 API Key

1. 点击 **Settings**
2. 点击 **Variables**
3. 点击 **Add variable**
4. 填写：
   - **Variable name**: `ANTHROPIC_API_KEY`（注意不是 OPENAI_API_KEY）
   - **Value**: 粘贴你的 Anthropic API Key（`sk-ant-...`）
   - **勾选** ☑️ **Encrypt**
5. 点击 **Save**

### 步骤 5：获取 Worker URL

1. 回到 Worker 主页
2. 复制顶部的 **Worker URL**
3. 格式：`https://tarot-ai-claude.你的用户名.workers.dev`

### 步骤 6：配置前端

1. 打开 `tarot-ai-generator.js`
2. 修改配置：

```javascript
config: {
  workerUrl: 'https://tarot-ai-claude.你的用户名.workers.dev',  // 👈 你的 Claude Worker URL
  enabled: true,  // 👈 启用 AI
```

3. 保存文件

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

---

## 🆚 Claude vs GPT-4o 对比

| 特性 | Claude 3.5 Sonnet | GPT-4o |
|------|------------------|--------|
| **质量** | ⭐⭐⭐⭐⭐ 顶级 | ⭐⭐⭐⭐⭐ 顶级 |
| **速度** | ⚡⚡⚡⚡ 很快 | ⚡⚡⚡⚡ 快 |
| **价格** | **~$0.015/次** (¥0.1) | ~$0.03/次 (¥0.2) |
| **指令遵循** | **更好** ✨ | 很好 |
| **创造性** | 更自然、更有文采 | 更准确、更稳定 |
| **上下文** | 200K tokens | 128K tokens |
| **适合** | 文学性强的内容 | 技术性强的内容 |

**对于塔罗解读：**
- ✅ Claude 可能更适合（文学性强、更自然）
- ✅ 价格便宜一半
- ✅ 指令遵循更好（更容易控制输出格式）

---

## 💰 成本对比（每月 100 次解读）

| 方案 | 单次价格 | 月成本 |
|------|---------|--------|
| **Claude 3.5 Sonnet** | ¥0.1 | ≈ **¥10** ⭐⭐⭐ |
| GPT-4o | ¥0.2 | ≈ ¥20 |
| GPT-4o-mini | ¥0.03 | ≈ ¥3 |

**省钱建议：**
- Claude 3.5 Sonnet 性价比最高
- 如果预算有限，可以混合使用（重要解读用 Claude，日常用 mini）

---

## 🎯 Claude 特别优势

**1️⃣ 更好的指令遵循**
- 更准确地理解"说人话"、"不要专业术语"
- 更容易控制输出格式

**2️⃣ 更自然的语言**
- 文学性更强，更适合塔罗解读
- 不会太"机械"或"模板化"

**3️⃣ 更长的上下文**
- 200K tokens（可以处理更长的对话历史）
- 更好地理解复杂的牌阵关系

**4️⃣ 更好的推理**
- 在"因果链"分析上可能更强
- 更擅长"人性观察"

---

## 🔧 可选配置

### 如果想用更便宜的 Claude Haiku

在 `worker-claude.js` 中修改：

```javascript
model: 'claude-3-5-sonnet-20241022',  // 改为下面这行
model: 'claude-3-haiku-20240307',     // 便宜5倍，但质量稍差
```

### 如果想用最强的 Claude Opus

```javascript
model: 'claude-3-opus-20240229',  // 最强，但贵2倍
```

### 调整创造性

```javascript
temperature: 0.8,  // 默认值
// 降低 = 更稳定、更保守（0.5-0.7）
// 提高 = 更创造性、更冒险（0.9-1.0）
```

---

## 🆘 故障排查

### 问题：Worker 返回 401 错误

**检查：**
- API Key 是否正确？（应该是 `sk-ant-...`）
- 环境变量名是否是 `ANTHROPIC_API_KEY`（不是 OPENAI_API_KEY）

### 问题：Worker 返回 400 错误

**检查：**
- API Key 是否有余额？
- 是否已经通过 Anthropic 的验证？

### 问题：响应格式错误

**解决：**
- Claude 有时会在 JSON 外包含其他文本
- Worker 代码已经处理了这种情况（提取 JSON）
- 如果仍有问题，查看 Worker Logs

---

## 🎉 部署完成！

**现在你的塔罗网站使用的是 Claude 3.5 Sonnet！**

**优势：**
- ✨ 顶级 AI 质量
- 💰 价格便宜一半
- 📚 更好的文学性
- 🎯 更准确的指令遵循

**立即刷新网站，抽一次牌试试 Claude 的解读！** 🔮

---

## 📊 监控使用情况

**Anthropic Console：**
- 访问：https://console.anthropic.com/settings/usage
- 查看 API 使用量和花费

**Cloudflare Dashboard：**
- Workers → 你的 Worker → Analytics
- 查看请求次数和错误率

---

**享受 Claude 带来的更自然、更深刻的塔罗解读吧！** ✨
