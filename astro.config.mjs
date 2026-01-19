import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import netlify from '@astrojs/netlify/functions'; 

import preact from '@astrojs/preact';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax]
  },

  site: "https://example.com",
  integrations: [preact()],
  // 启用服务端渲染（如果你的项目需要 SSR）
  output: 'server', 
  // 配置 Netlify 适配器
  adapter: netlify()
});