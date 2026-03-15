#!/bin/bash

echo "🔧 快速修复显示问题"
echo ""

# 创建一个极简版本用于调试
cat > test_simple.html << 'HTML'
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        const { useState, useEffect } = React;
        
        function App() {
            const [cards, setCards] = useState([]);
            const [view, setView] = useState('select');
            const [selected, setSelected] = useState([]);
            
            useEffect(() => {
                fetch('./assets/tarot-deck.local.json')
                    .then(r => r.json())
                    .then(data => {
                        console.log('✅ 数据加载：', data.cards.length, '张');
                        setCards(data.cards);
                    })
                    .catch(e => console.error('❌ 加载失败：', e));
            }, []);
            
            const selectCard = (card) => {
                if (selected.length < 3) {
                    const newSelected = [...selected, card];
                    setSelected(newSelected);
                    if (newSelected.length === 3) {
                        console.log('✅ 3张牌已选择，切换视图');
                        setTimeout(() => setView('result'), 500);
                    }
                }
            };
            
            if (view === 'select') {
                return (
                    <div style={{padding: '20px'}}>
                        <h1>选择3张牌 ({selected.length}/3)</h1>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px'}}>
                            {cards.map((card, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => selectCard(card)}
                                    style={{
                                        padding: '10px',
                                        background: selected.includes(card) ? '#4CAF50' : '#ddd'
                                    }}
                                >
                                    {card.name}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            }
            
            return (
                <div style={{padding: '20px'}}>
                    <h1>解读结果</h1>
                    {selected.map((card, i) => (
                        <div key={i} style={{margin: '20px 0', padding: '15px', border: '1px solid #ddd'}}>
                            <h2>{card.name}</h2>
                            <p><strong>up:</strong> {card.up}</p>
                            <p><strong>down:</strong> {card.down}</p>
                        </div>
                    ))}
                    <button onClick={() => {setView('select'); setSelected([]);}}>
                        重新选择
                    </button>
                </div>
            );
        }
        
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
HTML

echo "✅ 创建了简化测试版本：test_simple.html"
echo "访问：http://localhost:8000/test_simple.html"

