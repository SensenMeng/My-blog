// src/lib/content-utils.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 博客文章目录（根据你的实际目录调整）
const POSTS_DIR = path.join(process.cwd(), 'src/pages/posts');

/**
 * 提取所有博客文章的文本内容
 */
export async function getAllBlogContent() {
  try {
    // 读取目录下所有 md/mdx 文件
    const fileNames = fs.readdirSync(POSTS_DIR).filter(file => 
      file.endsWith('.md') || file.endsWith('.mdx')
    );

    let allContent = '';

    for (const fileName of fileNames) {
      const fullPath = path.join(POSTS_DIR, fileName);
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      
      // 解析 frontmatter 并提取正文
      const { data, content } = matter(fileContent);
      
      // 拼接标题、日期和正文
      allContent += `标题：${data.title}\n`;
      allContent += `日期：${data.date}\n`;
      allContent += `内容：${content}\n\n`;
    }

    return allContent;
  } catch (error) {
    console.error('读取博客内容失败：', error);
    return '暂无博客内容';
  }
}