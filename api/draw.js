const fs = require("node:fs");
const path = require("node:path");

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 40;
const buckets = new Map();

function getIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff.trim()) return xff.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function checkRateLimit(ip) {
  const now = Date.now();
  const item = buckets.get(ip) || { count: 0, resetAt: now + WINDOW_MS };

  if (now > item.resetAt) {
    item.count = 0;
    item.resetAt = now + WINDOW_MS;
  }

  item.count += 1;
  buckets.set(ip, item);

  return item.count <= LIMIT;
}

function isOriginAllowed(req) {
  const origin = req.headers.origin;
  if (!origin) return true;

  const host = req.headers.host;
  const sameOrigin = host && (origin === `https://${host}` || origin === `http://${host}`);
  if (sameOrigin) return true;

  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  if (allowedOrigin && origin === allowedOrigin) return true;

  return false;
}

function loadDeck() {
  const file = path.join(process.cwd(), "assets", "tarot-deck.local.json");
  const raw = fs.readFileSync(file, "utf8");
  const json = JSON.parse(raw);
  if (!Array.isArray(json.cards)) throw new Error("invalid deck");
  return json.cards;
}

function normalize(card) {
  return {
    id: card.id,
    name: card.name || card.name_en || "Tarot",
    image_url: card.image_url || "",
    up: (card.up || "保持觉察，顺势而为。").split(";")[0].trim(),
    down: (card.down || "暂缓行动，先回到内在。").split(";")[0].trim()
  };
}

module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const ip = getIp(req);
  if (!checkRateLimit(ip)) {
    res.status(429).json({ ok: false, error: "rate_limited" });
    return;
  }

  if (!isOriginAllowed(req)) {
    res.status(403).json({ ok: false, error: "forbidden_origin" });
    return;
  }

  try {
    const body = req.body || {};
    const cardId = typeof body.cardId === "string" ? body.cardId : "";
    const pickedIds = Array.isArray(body.pickedIds) ? body.pickedIds.filter((x) => typeof x === "string") : [];
    const pickedSet = new Set(pickedIds);

    const deck = loadDeck().map(normalize);
    const available = deck.filter((c) => !pickedSet.has(c.id));

    if (available.length === 0) {
      res.status(400).json({ ok: false, error: "no_cards_available" });
      return;
    }

    let target = deck.find((c) => c.id === cardId && !pickedSet.has(c.id));
    if (!target) {
      target = available[Math.floor(Math.random() * available.length)];
    }

    const reversed = Math.random() < 0.5;
    const orient = reversed ? "逆位" : "正位";

    res.status(200).json({
      ok: true,
      card: {
        ...target,
        orient,
        meaning: reversed ? target.down : target.up
      }
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: "draw_failed" });
  }
};
