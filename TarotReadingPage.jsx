import React, { useState } from 'react';
import { READ_TYPES, fetchTarotReading } from './api.js';
import TAROT_DECK from './tarot-deck-for-reading.js';

const TYPE_LABELS = {
  [READ_TYPES.CAREER]: '事业',
  [READ_TYPES.LOVE]: '感情',
  [READ_TYPES.FINANCE]: '财务',
};

function drawCardsFromDeck(deck, num = 3) {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, num).map((card) => ({
    ...card,
    isReversed: Math.random() < 0.5,
  }));
}

function ReadingContent({ text }) {
  if (!text || typeof text !== 'string') return null;
  const parts = text.split(/\n\n+/);
  return (
    <div className="reading-content">
      {parts.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith('## ')) {
          return <h2 key={i} style={{ marginTop: i ? '1em' : 0, marginBottom: '0.5em' }}>{trimmed.slice(3)}</h2>;
        }
        return <p key={i} style={{ marginBottom: '0.75em', whiteSpace: 'pre-wrap' }}>{trimmed}</p>;
      })}
    </div>
  );
}

const TarotReadingPage = () => {
  const [selectedType, setSelectedType] = useState(READ_TYPES.CAREER);
  const [userQuery, setUserQuery] = useState('');
  const [drawnCards, setDrawnCards] = useState([]);
  const [reading, setReading] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setReading('');
    setDrawnCards([]);
    setError('');
  };

  const drawCards = () => {
    const selected = drawCardsFromDeck(TAROT_DECK, 3);
    setDrawnCards(selected);
    setReading('');
    setError('');
  };

  const getReading = async () => {
    if (drawnCards.length === 0) {
      setError('请先抽牌！');
      return;
    }
    if (!userQuery.trim()) {
      setError('请输入你的问题！');
      return;
    }

    setLoading(true);
    setReading('');
    setError('');

    try {
      const result = await fetchTarotReading(selectedType, drawnCards, userQuery.trim());
      setReading(result);
    } catch (err) {
      setError('获取解读失败，请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  const typeLabels = {
    [READ_TYPES.CAREER]: '💼 事业脱困',
    [READ_TYPES.LOVE]: '❤️ 感情真相',
    [READ_TYPES.FINANCE]: '💰 财务救急',
  };

  const label = TYPE_LABELS[selectedType] || '解读';

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '720px', margin: '0 auto' }}>
      <h1>塔罗务实咨询</h1>

      <div style={{ marginBottom: '20px' }}>
        {Object.entries(typeLabels).map(([type, typeLabel]) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: selectedType === type ? '#007bff' : '#f0f0f0',
              color: selectedType === type ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {typeLabel}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          placeholder={`请输入你的${label}问题...`}
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={drawCards} style={{ padding: '10px 20px' }}>
          抽牌（3张）
        </button>
        {drawnCards.length > 0 && (
          <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {drawnCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  textAlign: 'center',
                  minWidth: '100px',
                  borderRadius: '6px',
                  backgroundColor: '#fafafa',
                }}
              >
                <p style={{ margin: 0, fontWeight: 600 }}>{card.name}</p>
                <p style={{ margin: '4px 0 0', fontSize: '0.9em', color: '#666' }}>
                  {card.isReversed ? '逆位' : '正位'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={getReading}
        disabled={loading || drawnCards.length === 0}
        style={{
          padding: '10px 20px',
          backgroundColor: drawnCards.length && !loading ? '#28a745' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: drawnCards.length && !loading ? 'pointer' : 'not-allowed',
        }}
      >
        {loading ? '正在务实分析中...' : `获取${label}解读`}
      </button>

      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          minHeight: '100px',
          borderRadius: '8px',
        }}
      >
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading && <p>正在连接务实顾问，请稍候...</p>}
        {reading && <ReadingContent text={reading} />}
        {!reading && !loading && !error && drawnCards.length > 0 && (
          <p style={{ color: '#666' }}>牌已抽好，请输入问题并点击按钮获取务实解读。</p>
        )}
      </div>
    </div>
  );
};

export default TarotReadingPage;
