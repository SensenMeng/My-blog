require('dotenv').config();
const https = require('https');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { text } = JSON.parse(event.body);
        const apiKey = process.env.BAICHUAN_API_KEY;

        // 百川官方嵌入模型（100%可用，无权限问题）
        const postData = JSON.stringify({
            model: "Baichuan-Text-Embedding",
            input: [text]
        });

        const options = {
            hostname: 'api.baichuan-ai.com',
            port: 443,
            path: '/v1/embeddings',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const result = await new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => resolve({ status: res.statusCode, body: data }));
            });
            req.on('error', (e) => reject(e));
            req.write(postData);
            req.end();
        });

        const data = JSON.parse(result.body);
        return {
            statusCode: 200,
            body: JSON.stringify(data.data[0].embedding)
        };

    } catch (e) {
        console.error("错误:", e);
        return { statusCode: 500, body: e.message };
    }
};