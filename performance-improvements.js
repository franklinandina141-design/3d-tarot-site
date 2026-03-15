// 塔罗网站性能优化和手势指引
// 需要添加的改进

/* 
 * 1. 添加状态变量
 */
const [isLoading, setIsLoading] = useState(false);
const [showGuide, setShowGuide] = useState(true);
const [cameraReady, setCameraReady] = useState(false);

/* 
 * 2. 优化手势检测设置
 */
hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 0,  // 改为0（最低复杂度，更快）
  minDetectionConfidence: 0.5,  // 降低到0.5（更快检测）
  minTrackingConfidence: 0.5   // 降低到0.5（更快追踪）
});

/* 
 * 3. 添加加载提示UI
 */
{view === 'reading' && isLoading && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
    <div className="text-center">
      <div className="mb-4">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#F7E7CE] border-r-transparent"></div>
      </div>
      <p className="text-[#F7E7CE] text-lg">正在启动摄像头...</p>
      <p className="text-[#9D85C4] text-sm mt-2">首次加载可能需要几秒钟</p>
    </div>
  </div>
)}

/* 
 * 4. 添加手势指引UI
 */
{view === 'reading' && showGuide && cameraReady && (
  <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-90">
    <div className="max-w-2xl mx-auto px-8 text-center">
      {/* 关闭按钮 */}
      <button 
        onClick={() => setShowGuide(false)}
        className="absolute top-4 right-4 text-[#F7E7CE] hover:text-white text-3xl"
      >
        ×
      </button>
      
      {/* 标题 */}
      <h2 className="text-3xl text-[#F7E7CE] mb-8 font-serif">手势操作指南</h2>
      
      {/* 手势说明 */}
      <div className="space-y-6 text-left">
        {/* 移动手势 */}
        <div className="bg-[#1a1a2e] bg-opacity-50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="text-4xl">👋</div>
            <div>
              <h3 className="text-xl text-[#F7E7CE] mb-2">1. 移动手掌 - 滚动卡牌</h3>
              <p className="text-[#d1d5db]">
                将手掌放在摄像头前，<strong className="text-[#F7E7CE]">左右移动</strong>可以滚动查看所有卡牌。
              </p>
              <p className="text-[#9D85C4] text-sm mt-2">
                💡 提示：手掌向左移动 → 卡牌向右滚动
              </p>
            </div>
          </div>
        </div>
        
        {/* 选择手势 */}
        <div className="bg-[#1a1a2e] bg-opacity-50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🤏</div>
            <div>
              <h3 className="text-xl text-[#F7E7CE] mb-2">2. 捏合手指 - 选择卡牌</h3>
              <p className="text-[#d1d5db]">
                <strong className="text-[#F7E7CE]">食指</strong> 和 <strong className="text-[#F7E7CE]">拇指</strong> 捏在一起，选中当前中心的卡牌。
              </p>
              <p className="text-[#9D85C4] text-sm mt-2">
                💡 提示：需要选择 3 张卡牌才能开始占卜
              </p>
            </div>
          </div>
        </div>
        
        {/* 注意事项 */}
        <div className="bg-[#1a1a2e] bg-opacity-50 p-6 rounded-lg border border-[#9D85C4]">
          <h3 className="text-xl text-[#F7E7CE] mb-3">⚠️ 注意事项</h3>
          <ul className="text-[#d1d5db] space-y-2 text-sm">
            <li>• 确保光线充足，让摄像头能清楚看到你的手</li>
            <li>• 手掌要正对摄像头，距离约 30-50 厘米</li>
            <li>• 动作要清晰缓慢，不要太快</li>
            <li>• 每次捏合后会有短暂冷却时间，避免误触</li>
          </ul>
        </div>
      </div>
      
      {/* 开始按钮 */}
      <button 
        onClick={() => setShowGuide(false)}
        className="mt-8 px-8 py-3 bg-[#9D85C4] text-white rounded-full hover:bg-[#8B75B4] transition-colors text-lg"
      >
        明白了，开始占卜 →
      </button>
    </div>
  </div>
)}

/* 
 * 5. 修改 startHandTracking 函数，添加加载状态
 */
const startHandTracking = async () => {
  setIsLoading(true); // 开始加载
  
  try {
    if (typeof window.Hands === 'undefined' || typeof window.Camera === 'undefined' || !videoRef.current) {
      setIsLoading(false);
      return;
    }

    const hands = new window.Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 0,  // 降低复杂度
      minDetectionConfidence: 0.5,  // 降低阈值
      minTrackingConfidence: 0.5
    });

    hands.onResults((results) => {
      // ... 原有代码 ...
    });

    const camera = new window.Camera(videoRef.current, {
      onFrame: async () => await hands.send({ image: videoRef.current }),
      width: 640,
      height: 480
    });
    
    cameraRef.current = camera;
    await camera.start();
    
    // 摄像头启动成功
    setCameraReady(true);
    setIsLoading(false);
    
  } catch (error) {
    console.error('手势追踪启动失败:', error);
    setIsLoading(false);
    alert('摄像头启动失败，请检查权限设置');
  }
};

/* 
 * 6. 添加视觉反馈 - 手势状态指示器
 */
{view === 'reading' && cameraReady && !showGuide && (
  <div className="fixed top-4 left-4 z-30">
    <div className="bg-black bg-opacity-70 px-4 py-2 rounded-lg">
      <p className="text-[#F7E7CE] text-sm">
        {isPinching ? '🤏 选择中...' : '👋 移动手掌滚动'}
      </p>
      <p className="text-[#9D85C4] text-xs mt-1">
        已选择: {selectedCards.length} / 3
      </p>
    </div>
  </div>
)}

/* 
 * 7. 添加帮助按钮（在关闭指引后可重新打开）
 */
{view === 'reading' && !showGuide && cameraReady && (
  <button 
    onClick={() => setShowGuide(true)}
    className="fixed bottom-4 right-4 z-30 bg-[#9D85C4] text-white w-12 h-12 rounded-full hover:bg-[#8B75B4] transition-colors flex items-center justify-center text-2xl"
    title="查看手势指引"
  >
    ?
  </button>
)}
