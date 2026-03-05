import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const TAROT_API_URL = "https://tarotapi.dev/api/v1/cards";
const COMMONS_FILEPATH = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const ASSETS_DIR = new URL("../assets/cards/", import.meta.url);
const OUTPUT_JSON = new URL("../assets/tarot-deck.local.json", import.meta.url);
const REQUEST_TIMEOUT_MS = 15000;

const zhNameMap = {
  "The Fool": "愚者",
  "The Magician": "魔术师",
  "The High Priestess": "女祭司",
  "The Empress": "皇后",
  "The Emperor": "皇帝",
  "The Hierophant": "教皇",
  "The Lovers": "恋人",
  "The Chariot": "战车",
  Strength: "力量",
  "The Hermit": "隐士",
  "Wheel of Fortune": "命运之轮",
  Justice: "正义",
  "The Hanged Man": "倒吊人",
  Death: "死神",
  Temperance: "节制",
  "The Devil": "恶魔",
  "The Tower": "高塔",
  "The Star": "星星",
  "The Moon": "月亮",
  "The Sun": "太阳",
  Judgement: "审判",
  "The World": "世界"
};

function encodeFilePath(name) {
  return `${COMMONS_FILEPATH}${encodeURIComponent(name)}`;
}

function codeToImageUrl(nameShort, cardName = "") {
  const suitPrefix = nameShort.slice(0, 2);
  const rankCode = nameShort.slice(2);
  const suitMap = { wa: "Wands", cu: "Cups", sw: "Swords", pe: "Pents" };
  const rankMap = {
    ac: "01",
    "02": "02",
    "03": "03",
    "04": "04",
    "05": "05",
    "06": "06",
    "07": "07",
    "08": "08",
    "09": "09",
    "10": "10",
    pa: "11",
    kn: "12",
    qu: "13",
    ki: "14"
  };

  if (suitPrefix === "ar") {
    const rawNum = Number.parseInt(rankCode, 10);
    const majorNum = String(Number.isNaN(rawNum) ? 0 : rawNum).padStart(2, "0");
    const majorName = cardName.replace(/^The\s+/i, "").trim();
    return encodeFilePath(`RWS Tarot ${majorNum} ${majorName}.jpg`);
  }

  const suit = suitMap[suitPrefix];
  const rank = rankMap[rankCode];
  if (!suit || !rank) return "";
  return encodeFilePath(`${suit}${rank}.jpg`);
}

function normalizeApiCard(card) {
  return {
    id: card.name_short,
    name: zhNameMap[card.name] || card.name,
    name_en: card.name,
    up: (card.meaning_up || card.desc || "保持觉察，顺势前进。").split(";")[0].trim(),
    down: (card.meaning_rev || card.desc || "先稳住情绪，再做判断。").split(";")[0].trim(),
    image_url: codeToImageUrl(card.name_short, card.name)
  };
}

async function downloadImage(url, filepath) {
  if (!url) return false;
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    });
    if (!res.ok) return false;
    const arr = await res.arrayBuffer();
    await writeFile(filepath, Buffer.from(arr));
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(ASSETS_DIR, { recursive: true });

  const response = await fetch(TAROT_API_URL, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
  if (!response.ok) {
    throw new Error(`Tarot API failed: HTTP ${response.status}`);
  }

  const payload = await response.json();
  const cards = (payload.cards || []).map(normalizeApiCard);

  let downloaded = 0;
  const deck = [];

  for (const card of cards) {
    const filename = `${card.id}.jpg`;
    const filepath = new URL(filename, ASSETS_DIR);
    const ok = await downloadImage(card.image_url, filepath);

    deck.push({
      ...card,
      image_url: ok ? `./assets/cards/${filename}` : card.image_url
    });

    if (ok) downloaded += 1;
  }

  const output = {
    source: TAROT_API_URL,
    generated_at: new Date().toISOString(),
    cards: deck
  };

  await writeFile(OUTPUT_JSON, JSON.stringify(output, null, 2), "utf8");

  console.log(`Cached ${downloaded}/${cards.length} images.`);
  console.log(`Wrote ${join("assets", "tarot-deck.local.json")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
