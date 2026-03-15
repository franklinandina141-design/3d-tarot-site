// api.js
import { getPrompt, READ_TYPES } from './prompts.js';

export { READ_TYPES };

const WORKER_URL = 'https://tarot-ai-generator.natalienaomi257j.workers.dev';
const TIMEOUT_MS = 30000;

const callWorker = async (type, cards, userQuery) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cards: cards.map(c => ({
        name: c.name,
        isReversed: c.isReversed ?? false,
      })),
      topic: type,
      question: userQuery,
    }),
    signal: controller.signal,
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    let msg = `Worker 错误: ${response.status}`;
    try {
      const err = await response.json();
      msg = err.error || msg;
    } catch (_) {}
    throw new Error(msg);
  }

  const data = await response.json();
  if (!data.title || !data.paragraph1 || !data.paragraph2) {
    throw new Error('AI 响应缺少必要字段');
  }
  return data;
};

export const fetchTarotReading = async (type, cards, userQuery) => {
  getPrompt(type, cards, userQuery);
  try {
    const data = await callWorker(type, cards, userQuery);
    return [
      `## ${data.title}`,
      '',
      data.paragraph1,
      '',
      data.paragraph2,
    ].join('\n');
  } catch (error) {
    console.error('Error fetching tarot reading:', error);
    throw error;
  }
};
