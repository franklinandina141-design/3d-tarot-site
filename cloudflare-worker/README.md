# Cloudflare Workers 部署指南

## 步骤 1：创建 Cloudflare Worker

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages**
3. 点击 **Create application** → **Create Worker**
4. 输入名称（例如：`tarot-ai-generator`）
5. 点击 **Deploy**

## 步骤 2：复制代码

1. 在 Worker 页面，点击 **Quick edit**
2. 删除默认代码
3. 复制 `worker.js` 的全部内容
4. 粘贴到编辑器
5. 点击 **Save and deploy**

## 步骤 3：配置环境变量

1. 在 Worker 页面，点击 **Settings** → **Variables**
2. 点击 **Add variable**
3. 添加以下变量：
   - **Variable name**: `OPENAI_API_KEY`
   - **Value**: 你的 OpenAI API Key（从 https://platform.openai.com/api-keys 获取）
   - 勾选 **Encrypt**（重要！）
4. 点击 **Save**

## 步骤 4：获取 Worker URL

1. 在 Worker 页面顶部，复制 Worker URL
2. 格式类似：`https://tarot-ai-generator.你的账号.workers.dev`
3. 将这个 URL 填入前端配置

## 步骤 5：测试 Worker

使用 curl 测试：

```bash
curl -X POST https://your-worker.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "cards": [
      {"name": "權杖10", "isReversed": false},
      {"name": "寶劍7", "isReversed": false},
      {"name": "皇后", "isReversed": false}
    ],
    "topic": "finance",
    "question": "我的财务何时能改善？"
  }'
```

应该返回类似：

```json
{
  "title": "从负重前行到自然丰盛",
  "paragraph1": "你的财务改善将在...",
  "paragraph2": "停止那些聪明的小动作..."
}
```

## 费用说明

- Cloudflare Workers 免费额度：**每天 100,000 次请求**
- 超出免费额度：**$0.50 / 百万次请求**
- OpenAI API 费用：
  - GPT-4o: **~$0.03 / 次解读**
  - 每月解读 100 次 ≈ $3

## 故障排查

### 问题：Worker 返回 500 错误

**检查：**
1. 环境变量 `OPENAI_API_KEY` 是否正确设置
2. OpenAI API Key 是否有效
3. 查看 Worker Logs（Workers → 你的 Worker → Logs）

### 问题：CORS 错误

**解决：**
- Worker 代码已包含 CORS headers，无需额外配置
- 如果仍有问题，检查前端请求是否使用正确的 URL

### 问题：AI 响应格式错误

**解决：**
- 查看 Worker Logs 中的 AI 原始响应
- 可能需要调整 `temperature` 参数（降低以获得更稳定的输出）

## 安全建议

1. ✅ **已加密**：环境变量已加密存储
2. ✅ **CORS 限制**：可以在 Worker 中限制允许的域名
3. ✅ **速率限制**：可以添加请求频率限制
4. ⚠️ **API Key**：定期轮换 OpenAI API Key

## 可选优化

### 添加速率限制

在 Worker 中添加：

```javascript
// 在 fetch 函数开头添加
const ip = request.headers.get('CF-Connecting-IP');
const rateLimitKey = `ratelimit:${ip}`;

// 检查速率限制（每分钟 10 次）
const rateLimitCount = await env.KV.get(rateLimitKey);
if (rateLimitCount && parseInt(rateLimitCount) >= 10) {
  return new Response('请求过于频繁，请稍后再试', { status: 429 });
}

// 增加计数
await env.KV.put(rateLimitKey, (parseInt(rateLimitCount || 0) + 1).toString(), {
  expirationTtl: 60
});
```

### 限制允许的域名

修改 CORS headers：

```javascript
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://your-domain.com', // 改为你的域名
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

## 监控

在 Cloudflare Dashboard 中可以查看：
- 请求次数
- 错误率
- 响应时间
- Worker Logs

建议设置告警：
- Workers → Analytics → 创建告警
- 设置条件：错误率 > 5%
- 通知方式：Email
