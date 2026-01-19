// src/pages/api/ask-blog.js
import { getAllBlogContent } from '../../lib/content-utils.js';

export const prerender = false;

// 智谱 AI 配置
const ZHIPU_API_KEY = import.meta.env.ZHIPU_API_KEY;
const ZHIPU_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';

export const POST = async ({ request }) => {
  try {
    const { question } = await request.json();
    
    if (!question) {
      return new Response(JSON.stringify({ error: '问题不能为空' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!ZHIPU_API_KEY) {
      return new Response(JSON.stringify({ error: '智谱 AI API Key 未配置' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 恢复最初的「获取全部博客内容」逻辑
    const allBlogContent = await getAllBlogContent();
    const prompt = `
      请基于以下内容回答用户的问题，只使用提供的内容进行回答，不要编造信息。
      
      1.博客内容：
      ${allBlogContent}

      2.森森的个人简介：
      # 关于森森

      ## 个人简介

      欢迎来到森森的博客网站！

      我的一些信息：

      - 我是森森。
      - 我来自中国河北。
      - 我是一名大学牲，就读于XJTU。
      - 我的俩爱好：敲代码和敲代码

      ## 我的技能？

      就凭你还想知道我的技能？
      行吧满足你！

      - **C++**
      - **Python**
      - **Html**

      ## 使用的工具？

      - 网页搭建：Astro
      - 博客撰写：Markdown Latex(转换工具MathJax)
      - 评论区嵌入：giscus
      - 网页托管：netlify

      ## 最后想给大家说的

      这是一个非常**无知且愚蠢**的人，如果你发现我的博客有错别字，或者对我的网页有很好的建议，欢迎联系。

      孟某在此不胜感激！
      
      3.用户问题：${question}
    `;

    console.log('开始调用智谱 AI API...');
    // 智谱 AI 请求
    const zhipuResponse = await fetch(ZHIPU_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ZHIPU_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'glm-4.5-air',
        messages: [
          { role: 'system', content: '你是一个基于指定博客内容回答问题的助手，回答要简洁、准确。' },
          { role: 'user', content: prompt }
        ],
        thinking:{
                "type": "disabled",  
                "enabled": false
            },
        temperature: 0.1,
        max_tokens: 1000,
        stream: false
      }),
    });

    console.log('智谱 AI 响应状态码：', zhipuResponse.status);
    const rawResponseText = await zhipuResponse.text();
    console.log('智谱 AI 原始响应内容：', rawResponseText);

    if (!zhipuResponse.ok) {
      throw new Error(`智谱 AI API 错误：状态码 ${zhipuResponse.status}，内容：${rawResponseText}`);
    }

    // 解析响应（格式和 DeepSeek 完全一致，无需改）
    const data = JSON.parse(rawResponseText);
    const answer = data.choices[0]?.message?.content || '未获取到回答';

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('API 处理失败：', error);
    return new Response(JSON.stringify({ 
      error: error.message || '未知错误' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};