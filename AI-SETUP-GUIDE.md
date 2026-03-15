# 🤖 AI 动态生成 - 完整部署指南

## 📁 项目结构

```
3d-tarot-site/
├── cloudflare-worker/
│   ├── worker.js          # Cloudflare Worker 代码
│   └── README.md          # Worker 部署指南
├── tarot-ai-generator.js  # AI API 调用模块
├── tarot-reading-wrapper.js # 包装层（AI + 硬编码回退）
├── direct-reading-generator.js # 原有硬编码逻辑（保留作为回退）
└── AI-SETUP-GUIDE.md      # 本文件
```

---

## 🚀 快速开始（5步完成部署）

### 步骤 1：部署 Cloudflare Worker

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages**
3. 点击 **Create application** → **Create Worker**
4. 输入名称（例如：`tarot-ai-generator`）
5. 点击 **Deploy**

### 步骤 2：复制 Worker 代码

1. 在 Worker 页面，点击 **Quick edit**
2. 删除默认代码
3. 复制 `cloudflare-worker/worker.js` 的全部内容
4. 粘贴到编辑器
5. 点击 **Save and deploy**

### 步骤 3：配置 OpenAI API Key

1. 在 Worker 页面，点击 **Settings** → **Variables**
2. 点击 **Add variable**
3. 添加：
   - **Variable name**: `OPENAI_API_KEY`
   - **Value**: 你的 OpenAI API Key
   - 勾选 **Encrypt**
4. 点击 **Save**

**获取 API Key：** https://platform.openai.com/api-keys

### 步骤 4：配置前端

1. 打开 `tarot-ai-generator.js`
2. 找到配置项：

```javascript
const TarotAI = {
  config: {
    workerUrl: 'https://YOUR-WORKER-NAME.YOUR-ACCOUNT.workers.dev', // 改这里
    enabled: false, // 改为 true
    timeout: 30000,
    maxRetries: 2
  },
  // ...
};
```

3. 修改 `workerUrl` 为你的 Worker URL
4. 修改 `enabled: true` 启用 AI 生成

### 步骤 5：更新 HTML

在 `index.html` 中添加这两个文件的引用：

```html
<!-- 在 </body> 之前添加 -->
<script src="./tarot-ai-generator.js"></script>
<script src="./tarot-reading-wrapper.js"></script>
```

**调用方式（在你的解读生成代码中）：**

```javascript
// 原有同步调用
const html = DirectReadingGenerator.generateFullHTML(cards, topic, question);

// 改为异步调用
const html = await TarotReadingWrapper.generate(cards, topic, question);
```

---

## 🧪 测试连接

在浏览器控制台运行：

```javascript
// 测试 AI 连接
await TarotAI.testConnection();
```

如果看到 `✅ AI 连接测试成功`，说明配置正确！

---

## 🎭 工作原理

```
用户抽牌
  ↓
TarotReadingWrapper.generate()
  ↓
TarotAI.generateReading() ← 尝试 AI 生成
  ├─ 成功 → 返回 AI 生成的解读 ✨
  └─ 失败 → 回退到 DirectReadingGenerator（硬编码）
  ↓
渲染 HTML（显示"AI Generated"徽章）
```

**核心优势：**
- ✅ AI 失败不影响用户体验（自动回退）
- ✅ 保留原有硬编码逻辑作为保底
- ✅ 可以随时切换（修改 `enabled` 配置）

---

## 💰 费用说明

### Cloudflare Workers（免费）
- **免费额度**：每天 100,000 次请求
- **超出费用**：$0.50 / 百万次请求

### OpenAI API
- **GPT-4o**：~$0.03 / 次解读（约 0.2 元）
- **GPT-4o-mini**（便宜版）：~$0.005 / 次（约 0.03 元）

**示例成本：**
- 每天 100 次解读 × 30 天 = 3000 次/月
- GPT-4o: ~$90/月
- GPT-4o-mini: ~$15/月

**省钱建议：**
- 初期使用 GPT-4o-mini（便宜80%，质量仍很好）
- 在 Worker 中修改 `model: 'gpt-4o'` → `model: 'gpt-4o-mini'`

---

## 🎨 System Prompt 说明

AI 使用的核心提示词在 `cloudflare-worker/worker.js` 中：

```javascript
const SYSTEM_PROMPT = `
## Persona
20年经验传奇塔罗师，冷峻、精准、直击灵魂

## Narrative Logic
1. 严禁分段解说（不准出现"过去、现在、未来"标签）
2. 能量因果链（牌A→牌B→牌C）
3. 领域硬约束（财务只用现金流/资产/风险）
4. 场景化预言（具体现实场景）
5. 人话原则（说人话，不要专业术语）
6. 人性观察家（人性最自私、最恐惧的一面）

## Formatting
- 两段流畅散文
- 严禁分点符号/标题
- 第一段（200-300字）：深层因果叙事
- 第二段（150-200字）：直击要害的建议
`;
```

**如何调整：**
1. 修改 `cloudflare-worker/worker.js` 中的 `SYSTEM_PROMPT`
2. 保存并部署 Worker
3. 无需修改前端代码

---

## 🔧 故障排查

### 问题：Worker 返回 500 错误

**检查清单：**
1. ✅ 环境变量 `OPENAI_API_KEY` 是否正确设置
2. ✅ OpenAI API Key 是否有效（未过期、有余额）
3. ✅ 查看 Worker Logs（Workers → 你的 Worker → Logs）

### 问题：CORS 错误

**解决方案：**
- Worker 代码已包含 CORS headers，无需额外配置
- 确认前端请求的 URL 正确（包括 https://）

### 问题：前端显示"AI 生成未启用"

**解决方案：**
1. 检查 `tarot-ai-generator.js` 中的 `enabled: true`
2. 检查 `workerUrl` 是否正确
3. 打开浏览器控制台，运行 `TarotAI.config` 查看配置

### 问题：AI 响应格式错误

**解决方案：**
1. 查看 Worker Logs 中的 AI 原始响应
2. 可能是 System Prompt 导致 AI 输出不符合 JSON 格式
3. 尝试降低 `temperature`（在 Worker 中改为 0.5）

---

## 🔒 安全建议

1. ✅ **API Key 加密**：环境变量已加密存储
2. ✅ **CORS 限制**：可以在 Worker 中限制允许的域名
3. ✅ **速率限制**：可以添加请求频率限制（见 Worker README）
4. ⚠️ **定期轮换**：每 3-6 个月轮换 OpenAI API Key

---

## 📊 监控与优化

### 查看 Worker 统计

在 Cloudflare Dashboard 中：
- **请求次数**：Workers → 你的 Worker → Metrics
- **错误率**：查看 4xx/5xx 响应
- **响应时间**：平均延迟

### 设置告警

1. Workers → Analytics → 创建告警
2. 设置条件：错误率 > 5%
3. 通知方式：Email

### 性能优化

**如果响应慢：**
- 使用 GPT-4o-mini（更快更便宜）
- 减少 `max_tokens`（在 Worker 中调整）
- 调整 `temperature`（更低 = 更快更稳定）

---

## 🆘 需要帮助？

1. **查看 Worker Logs**：Workers → 你的 Worker → Logs
2. **查看浏览器控制台**：F12 → Console
3. **测试 API**：使用 curl 直接调用 Worker（见 Worker README）

---

## ✅ 部署检查清单

- [ ] Cloudflare Worker 已部署
- [ ] OpenAI API Key 已配置并加密
- [ ] Worker URL 已填入 `tarot-ai-generator.js`
- [ ] `enabled: true` 已设置
- [ ] HTML 中已引入两个 JS 文件
- [ ] 测试连接成功（`TarotAI.testConnection()`）
- [ ] 实际抽牌测试成功

---

**部署完成后，你的塔罗网站将拥有真正的 AI 智能解读！** ✨

每次抽牌都将获得独一无二的、基于 20 年塔罗师经验的深度解读！
