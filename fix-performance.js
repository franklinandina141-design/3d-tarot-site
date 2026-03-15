// 性能优化方案：缓存解读结果

// 问题分析：
// generateSoulSummary() 在每次渲染时都会调用5个生成函数
// 每个函数都包含复杂的字符串拼接和逻辑判断
// 导致选牌后的卡顿

// 解决方案1：使用useMemo缓存
const soulSummary = React.useMemo(() => {
  if (selectedCards.length < 3) return null;
  const [p, n, f] = selectedCards;
  
  // 一次性生成所有内容
  const climate = generateSoulClimate(p, n, f, submittedQuestion);
  const depth = generateCurrentDepth(n, submittedQuestion);
  const story = generateStoryArc(p, n, f, submittedQuestion);
  const guidance = generateGuidance(n, submittedQuestion);
  const closing = generateGentleClosing([p, n, f], submittedQuestion);
  
  return {
    climate,
    depth,
    story,
    guidance,
    closing
  };
}, [selectedCards, submittedQuestion]);

// 解决方案2：在提交时生成并保存
const [readingResult, setReadingResult] = React.useState(null);

const handleSubmitReading = () => {
  if (selectedCards.length < 3) return;
  
  const [p, n, f] = selectedCards;
  
  // 显示loading
  setIsGenerating(true);
  
  // 使用setTimeout避免阻塞UI
  setTimeout(() => {
    const result = {
      climate: generateSoulClimate(p, n, f, question),
      depth: generateCurrentDepth(n, question),
      story: generateStoryArc(p, n, f, question),
      guidance: generateGuidance(n, question),
      closing: generateGentleClosing([p, n, f], question)
    };
    
    setReadingResult(result);
    setSubmittedQuestion(question);
    setView('result');
    setIsGenerating(false);
  }, 100);
};
