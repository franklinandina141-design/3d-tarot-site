const TAROT_API_URL = "https://tarotapi.dev/api/v1/cards";
const LOCAL_DECK_URL = "./assets/tarot-deck.local.json";
const DRAW_API_URL = "/api/draw";
const COMMONS_FILEPATH = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const trackA = document.getElementById("trackA");
const handCanvas = document.getElementById("handCanvas");
const handVideo = document.getElementById("handVideo");
const gestureBtn = document.getElementById("gesture-toggle");
const statusText = document.getElementById("statusText");
const pickedList = document.getElementById("pickedList");

let cards = [];
let picked = [];
let offset = 0;
let cycleWidth = 0;
let cardStep = 110;
let velocity = 0;

let handsDetector = null;
let cameraController = null;
let handSeen = false;
let indexX = 0.5;
let lastIndexX = null;
let pinchFrames = 0;
let pinchCooldownUntil = 0;
let lastParticleAt = 0;
let pinchArmed = true;

const BASE_SPEED = 0.52;
const MAX_VELOCITY = 14.5;
const HAND_FORCE = 420;
const DEADZONE = 0.0022;

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
    name: card.name,
    image_url: card.image_url || codeToImageUrl(card.name_short, card.name),
    up: (card.meaning_up || "保持觉察，顺势而为。").split(";")[0].trim(),
    down: (card.meaning_rev || "暂缓行动，先回到内在。").split(";")[0].trim()
  };
}

function createBackCard() {
  const card = document.createElement("article");
  card.className = "card";
  return card;
}

function fillTrack(track, count, copies = 2) {
  track.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (let c = 0; c < copies; c += 1) {
    for (let i = 0; i < count; i += 1) {
      frag.appendChild(createBackCard());
    }
  }
  track.appendChild(frag);
}

function setupTrack() {
  fillTrack(trackA, Math.max(cards.length, 78), 3);

  requestAnimationFrame(() => {
    const oneLoopCount = trackA.children.length / 3;
    if (oneLoopCount > 0) {
      const first = trackA.children[0];
      const second = trackA.children[1];
      const last = trackA.children[oneLoopCount - 1];
      cardStep = second ? second.getBoundingClientRect().left - first.getBoundingClientRect().left : 110;
      cycleWidth = last.offsetLeft + last.offsetWidth - first.offsetLeft + 12;
    }
  });
}

function emitHandParticle(fingerTip) {
  const now = performance.now();
  if (now - lastParticleAt < 40) return;
  lastParticleAt = now;

  const rect = handCanvas.getBoundingClientRect();
  const x = rect.left + fingerTip.x * rect.width;
  const y = rect.top + fingerTip.y * rect.height;

  const dot = document.createElement("span");
  dot.className = "hand-particle";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  dot.style.width = `${4 + Math.random() * 4}px`;
  dot.style.height = dot.style.width;
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 760);
}

function distance2D(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function detectPinch(landmarks) {
  const thumb = landmarks[4];
  const index = landmarks[8];
  const palmA = landmarks[5];
  const palmB = landmarks[17];
  const pinch = distance2D(thumb, index);
  const palm = Math.max(distance2D(palmA, palmB), 0.001);
  return pinch / palm < 0.5;
}

function getCenterCardIndex() {
  if (!cards.length || cardStep <= 0) return 0;
  const wrapRect = trackA.parentElement.getBoundingClientRect();
  const centerX = wrapRect.width / 2;
  const idxFloat = (offset + centerX) / cardStep;
  let idx = Math.round(idxFloat) % cards.length;
  if (idx < 0) idx += cards.length;
  return idx;
}

function renderPicked() {
  pickedList.innerHTML = "";

  if (picked.length === 0) {
    pickedList.innerHTML = '<div class="picked-empty">捏合选择第 1 张牌</div><div class="picked-empty">捏合选择第 2 张牌</div><div class="picked-empty">捏合选择第 3 张牌</div>';
    return;
  }

  const frag = document.createDocumentFragment();
  picked.forEach((card) => {
    const item = document.createElement("article");
    item.className = "picked-card";

    const img = document.createElement("img");
    img.src = card.image_url;
    img.alt = card.name;
    img.referrerPolicy = "no-referrer";
    img.addEventListener(
      "error",
      () => {
        img.remove();
        const p = document.createElement("p");
        p.textContent = card.name;
        item.appendChild(p);
      },
      { once: true }
    );

    item.appendChild(img);
    const title = document.createElement("p");
    title.textContent = `${card.name}·${card.orient}·${card.meaning}`;
    item.appendChild(title);
    frag.appendChild(item);
  });

  while (picked.length < 3 && frag.childNodes.length < 3) {
    const empty = document.createElement("div");
    empty.className = "picked-empty";
    empty.textContent = `等待第 ${frag.childNodes.length + 1} 张`;
    frag.appendChild(empty);
  }

  pickedList.appendChild(frag);
}

async function tryPickCenterCard() {
  if (picked.length >= 3) {
    statusText.textContent = "已选满 3 张，可刷新重新开始";
    return;
  }

  const idx = getCenterCardIndex();
  const card = cards[idx];
  if (!card) return;

  if (picked.some((x) => x.id === card.id)) {
    statusText.textContent = `中心牌 ${card.name} 已选过，换一张再捏合`;
    return;
  }

  const pickedIds = picked.map((x) => x.id);

  try {
    const res = await fetch(DRAW_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cardId: card.id, pickedIds })
    });

    if (!res.ok) throw new Error(`draw api failed: ${res.status}`);
    const payload = await res.json();
    const drawn = payload?.card;
    if (!drawn?.id) throw new Error("invalid draw response");

    picked.push({
      ...drawn,
      orient: drawn.orient || "正位",
      meaning: drawn.meaning || drawn.up || "保持觉察，顺势而为。"
    });

    renderPicked();
    statusText.textContent = `已选择第 ${picked.length} 张：${drawn.name}（${drawn.orient || "正位"}）`;
  } catch (error) {
    const reversed = Math.random() < 0.5;
    picked.push({
      ...card,
      orient: reversed ? "逆位" : "正位",
      meaning: reversed ? card.down : card.up
    });
    renderPicked();
    statusText.textContent = `已选择第 ${picked.length} 张：${card.name}（${reversed ? "逆位" : "正位"}）`;
  }
}

function onHandResults(results) {
  const ctx = handCanvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, handCanvas.width, handCanvas.height);
  ctx.drawImage(results.image, 0, 0, handCanvas.width, handCanvas.height);

  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const landmarks = results.multiHandLandmarks[0];
    handSeen = true;

    const rawX = landmarks[8].x; // index fingertip X
    indexX = indexX * 0.65 + rawX * 0.35;

    if (lastIndexX !== null) {
      const dx = indexX - lastIndexX;
      if (Math.abs(dx) > DEADZONE) {
        velocity += dx * HAND_FORCE;
      }
    }
    lastIndexX = indexX;

    if (window.drawConnectors && window.HAND_CONNECTIONS) {
      window.drawConnectors(ctx, landmarks, window.HAND_CONNECTIONS, {
        color: "#ffd388",
        lineWidth: 2.1
      });
    }
    if (window.drawLandmarks) {
      window.drawLandmarks(ctx, landmarks, {
        color: "#ffffff",
        lineWidth: 1,
        radius: 2.1
      });
    }

    emitHandParticle(landmarks[8]);

    const pinching = detectPinch(landmarks);
    const now = Date.now();

    if (pinching) {
      pinchFrames += 1;
    } else {
      pinchFrames = 0;
      pinchArmed = true;
    }

    if (pinchArmed && pinchFrames >= 2 && now > pinchCooldownUntil) {
      pinchCooldownUntil = now + 700;
      pinchFrames = 0;
      pinchArmed = false;
      tryPickCenterCard();
    }
  } else {
    handSeen = false;
    lastIndexX = null;
    pinchFrames = 0;
    pinchArmed = true;
  }

  ctx.restore();
}

async function startHandControl() {
  if (cameraController) return;

  if (!window.Hands || !window.Camera) {
    statusText.textContent = "MediaPipe 未加载";
    return;
  }

  gestureBtn.disabled = true;
  statusText.textContent = "请求摄像头权限中...";

  try {
    handsDetector = new window.Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });
    handsDetector.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.62,
      minTrackingConfidence: 0.56
    });
    handsDetector.onResults(onHandResults);

    cameraController = new window.Camera(handVideo, {
      width: 320,
      height: 220,
      onFrame: async () => {
        await handsDetector.send({ image: handVideo });
      }
    });

    await cameraController.start();
    gestureBtn.textContent = "手势已开启";
    statusText.textContent = "食指左右滑动控制滚动，捏合选牌";
  } catch (error) {
    gestureBtn.disabled = false;
    statusText.textContent = "请点击按钮并允许摄像头权限";
  }
}

function animate() {
  if (!handSeen) {
    velocity *= 0.92;
  } else {
    velocity *= 0.96;
  }

  if (velocity > MAX_VELOCITY) velocity = MAX_VELOCITY;
  if (velocity < -MAX_VELOCITY) velocity = -MAX_VELOCITY;

  const speed = BASE_SPEED + velocity;

  if (cycleWidth > 0) {
    offset += speed;
    while (offset >= cycleWidth) offset -= cycleWidth;
    while (offset < 0) offset += cycleWidth;
    trackA.style.transform = `translate3d(${-offset}px,0,0)`;
  }

  requestAnimationFrame(animate);
}

async function loadCards() {
  try {
    const local = await fetch(LOCAL_DECK_URL, { cache: "no-store" });
    if (local.ok) {
      const data = await local.json();
      if (Array.isArray(data.cards) && data.cards.length >= 78) {
        cards = data.cards.map((c) => ({
          id: c.id,
          name: c.name || c.name_en || "Tarot",
          image_url: c.image_url || codeToImageUrl(c.id || "", c.name_en || c.name || ""),
          up: (c.up || "保持觉察，顺势而为。").split(";")[0].trim(),
          down: (c.down || "暂缓行动，先回到内在。").split(";")[0].trim()
        }));
      }
    }

    if (cards.length < 78) {
      const res = await fetch(TAROT_API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const payload = await res.json();
      cards = (payload.cards || []).map(normalizeApiCard);
    }

    if (cards.length < 1) throw new Error("empty deck");
    setupTrack();
    renderPicked();
    statusText.textContent = "食指滑动控制滚动；捏合选3张（正逆位已全牌打乱）";
  } catch (error) {
    cards = Array.from({ length: 78 }, (_, i) => ({
      id: `p${i + 1}`,
      name: `Tarot ${i + 1}`,
      image_url: "",
      up: "保持觉察，顺势而为。",
      down: "暂缓行动，先回到内在。"
    }));
    setupTrack();
    renderPicked();
    statusText.textContent = "离线模式：捏合选3张（正逆位已全牌打乱）";
  }
}

gestureBtn.addEventListener("click", startHandControl);

loadCards();
animate();
startHandControl();
