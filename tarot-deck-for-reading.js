/**
 * 78 张塔罗牌，牌名与 Worker 一致，供抽牌与 API 解读使用。
 */
const majorNames = [
  '愚人', '魔術師', '女祭司', '皇后', '皇帝', '教皇', '戀人', '戰車', '力量', '隱士',
  '命運之輪', '正義', '倒吊人', '死神', '節制', '惡魔', '塔', '星星', '月亮', '太陽', '審判', '世界'
];

const minorRanks = [
  '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
  '侍從', '騎士', '女王', '國王'
];

const suits = [
  { key: 'wa', name: '權杖' },
  { key: 'cu', name: '聖杯' },
  { key: 'sw', name: '寶劍' },
  { key: 'pe', name: '星幣' }
];

function buildDeck() {
  const deck = [];
  majorNames.forEach((name, i) => {
    deck.push({ id: `ar${String(i).padStart(2, '0')}`, name });
  });
  suits.forEach((suit) => {
    minorRanks.forEach((rank, i) => {
      const num = i + 1;
      deck.push({
        id: `${suit.key}${String(num).padStart(2, '0')}`,
        name: `${suit.name}${rank}`
      });
    });
  });
  return deck;
}

export const TAROT_DECK = buildDeck();
export default TAROT_DECK;
