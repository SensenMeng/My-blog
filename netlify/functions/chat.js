require('dotenv').config();

const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1分钟
const MAX_REQUESTS = 3; // 每分钟最多3次

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const clientIp = event.headers['x-nf-client-connection-ip'] || 'unknown';
  const now = Date.now();
  const userData = rateLimit.get(clientIp) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

  if (now > userData.resetTime) {
    userData.count = 1;
    userData.resetTime = now + RATE_LIMIT_WINDOW;
  } else {
    userData.count += 1;
  }
  rateLimit.set(clientIp, userData);

  if (userData.count > MAX_REQUESTS) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: '请求过于频繁，请1分钟后再试' })
    };
  }

  try {
    const { question, context } = JSON.parse(event.body);
    const apiKey = process.env.DEEPSEEK_API_KEY;

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        stream: false,
        messages: [
          {
            role: "system",
            content: `你是博客AI助手，只根据上下文回答：\n${context}`
          },
          { role: "user", content: question }
        ]
      })
    });

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || '无法回答';

    return {
      statusCode: 200,
      body: JSON.stringify({ answer })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};