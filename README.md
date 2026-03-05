# 3D 塔罗占卜网站（新手版）

这是一个不需要复杂框架的前端项目，直接用 `HTML + CSS + JavaScript + Three.js`。  
页面也已接入 MediaPipe 脚本（`hands / drawing_utils / camera_utils`），可继续扩展手势抽牌。

## 1. 运行方法

在项目目录执行：

```bash
cd /Users/cyauio/Documents/3d-tarot-site
python3 -m http.server 5500
```

然后浏览器打开：

`http://localhost:5500`

## 2. 你能看到什么

- 3D 牌堆与桌面
- 输入问题后抽出三张牌（过去/现在/建议）
- 自动请求 Tarot API（78 张）并显示图鉴
- 图片加载前显示金色雾气 Loading，加载后淡入

## 3. 本地缓存牌图（可选）

执行：

```bash
cd /Users/cyauio/Documents/3d-tarot-site
node scripts/cache_tarot_assets.mjs
```

会生成：

- `assets/cards/*.jpg`（本地缓存图片）
- `assets/tarot-deck.local.json`（本地牌组清单）

页面会优先读取本地清单，读取不到再回退到 Tarot API 在线数据。

## 4. API 防护（已接入）

项目新增了 `POST /api/draw`：

- 抽牌方向（正位/逆位）与结果在服务端生成
- 基础限流：同一 IP 10 分钟最多 40 次请求
- 基础来源校验：默认同源，可通过环境变量 `ALLOWED_ORIGIN` 放行指定来源

Vercel 环境变量示例：

```bash
ALLOWED_ORIGIN=https://你的域名.com
```

> 说明：这不是“绝对防复制”，但能把核心抽牌逻辑从前端移到后端，降低被一键照搬的风险。

## 5. 你下一步可以升级

- 把牌义扩展成 78 张完整塔罗牌
- 接入你的品牌配色和背景音乐
- 增加“单张日运 / 爱情 / 事业”不同牌阵
- 加登录和历史记录（需要后端）
