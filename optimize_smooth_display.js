/**
 * 🚀 卡牌展示流畅度优化
 * 
 * 优化目标：
 * 1. 减少动画卡顿
 * 2. 提升渲染性能
 * 3. 更流畅的卡牌翻转
 */

// === 1. CSS动画优化 ===
const ANIMATION_CONFIG = {
  // 卡牌翻转动画
  cardReveal: {
    duration: '0.4s',        // 降低到0.4秒（原520ms）
    timing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // 更弹性的曲线
    delay: 'stagger-80ms'    // 每张牌间隔80ms
  },
  
  // GPU加速优化
  transform3d: true,         // 强制GPU渲染
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden',
  perspective: '1000px'
};

// === 2. React性能优化 ===
const REACT_OPTIMIZATION = {
  // 使用useMemo缓存昂贵计算
  memoizeReadingGeneration: true,
  
  // 使用useCallback缓存函数
  callbackDependencies: ['selectedCards', 'deckCatalog'],
  
  // 虚拟化长列表（如果需要）
  virtualizeCardList: false  // 78张不需要虚拟化
};

// === 3. 渲染优化 ===
const RENDER_CONFIG = {
  // RAF节流
  throttleRAF: true,
  targetFPS: 60,
  
  // 批量更新
  batchStateUpdates: true,
  
  // 懒加载图片
  lazyLoadImages: true,
  imagePlaceholder: 'blur'
};

// === 4. 动画细节优化 ===
const ANIMATION_IMPROVEMENTS = {
  // 卡牌翻转
  flipDuration: 400,         // 毫秒
  flipEasing: 'ease-out',
  
  // 淡入效果
  fadeDuration: 300,
  fadeEasing: 'ease-in-out',
  
  // 滚动
  scrollSmooth: true,
  scrollBehavior: 'smooth'
};

// === 应用到CSS ===
/*
@keyframes cardRevealSpin {
  0% { 
    opacity: 0; 
    transform: translateY(14px) rotateY(-15deg) scale(0.96);
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) rotateY(0deg) scale(1);
  }
}

.card-reveal {
  animation: cardRevealSpin 400ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
  transform: translate3d(0, 0, 0); // GPU加速
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.card-reveal:nth-child(1) { animation-delay: 0ms; }
.card-reveal:nth-child(2) { animation-delay: 80ms; }
.card-reveal:nth-child(3) { animation-delay: 160ms; }
*/

// === 5. 性能监控 ===
const PERFORMANCE_MONITOR = {
  trackFPS: false,           // 开发时启用
  logSlowFrames: false,
  warnThreshold: 16.67       // 低于60fps时警告
};

export default {
  ANIMATION_CONFIG,
  REACT_OPTIMIZATION,
  RENDER_CONFIG,
  ANIMATION_IMPROVEMENTS,
  PERFORMANCE_MONITOR
};
