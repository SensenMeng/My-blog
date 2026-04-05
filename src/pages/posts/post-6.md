---
layout: ../../layouts/MarkdownPostLayout.astro
title: Overview Effect For Ghost & PE
author: MSensen
description: 今日刷到一个用ghost刷机的视频，突然想起来好久没用这玩意了，于是有感而发...
image: none
pubDate: 2026-2-9
tags: ["日常小思考","成长与经历"]
---

<!-- 响应式图片核心样式（写在MDX开头） -->
<style>
  /* 基础响应式图片：适配任意尺寸，核心规则 */
  .md-img {
    display: block;
    max-width: 100%; /* 不超过容器宽度 */
    height: auto !important; /* 强制保持宽高比，覆盖任何内联样式 */
    margin: 16px auto; /* 上下间距，左右居中 */
    object-fit: contain; /* 确保图片完整显示，不裁剪（适配异形图） */
  }

  /* 桌面端（屏幕>768px）：限制图片最大宽度，避免太宽 */
  @media (min-width: 768px) {
    .md-img {
      max-width: 85%; /* 占容器85%，适配大屏 */
      /* 可选：给超大图额外限制（比如原图宽度>1200px时） */
      max-width: min(85%, 1200px); 
    }
  }

  /* 多图并排容器：适配任意数量的图片 */
  .img-row {
    display: flex;
    flex-wrap: wrap; /* 自动换行，适配图片数量 */
    gap: 12px; /* 图片间距，避免挤在一起 */
    margin: 20px 0;
    justify-content: center; /* 图片居中排列 */
  }

  /* 多图容器里的图片：平分宽度 */
  .img-row .md-img {
    flex: 1; /* 自动平分宽度 */
    min-width: 200px; /* 最小宽度，避免太窄 */
    margin: 0; /* 取消单图的上下间距 */
  }

  /* 移动端多图：从并排改为垂直排列 */
  @media (max-width: 768px) {
    .img-row {
      flex-direction: column;
      gap: 16px; /* 垂直间距加大 */
    }
    .img-row .md-img {
      min-width: unset; /* 取消最小宽度，占满屏幕 */
    }
  }

  /* 可选：小图专用类（比如图标、缩略图） */
  .md-img.small {
    max-width: 300px; /* 桌面端最大300px */
  }
  @media (max-width: 768px) {
    .md-img.small {
      max-width: 200px; /* 移动端最大200px */
    }
  }
</style>

突然发现上一次用ghost重装系统已经是很久远的事情了，也有挺多年没用PE的了。

<div align="center">
    <img src="/images/ghost.jpg" alt="Ghost"  class="md-img">
    <p>Ghost</p>
</div>

没想到当年这么好用的两个玩意也落得了个这般狼狈结局...

其实同样的事情还有很多，比如曾经不可一世，但现在仅剩收藏价值的9900K等等。

科技发展真的是日新月异，它们从未曾幻想，到高不可攀，再到飞入寻常百姓家，最终被淘汰。

或许我在说这句话的时候，你能想起小时候电视上播的3G广告。

哦对，说到电视，我们也好久没看过电视了。

还记着以前拉天线的日子吗？

哈哈。这感觉真的好奇妙，像你看着你家养的狗从出生到去世，或者目睹一个朝代的繁荣和没落。

现在人工智能是风口，是热点，是大家向往并追求的东西。

它已经从高不可攀到了飞入寻常百姓家的阶段，那么什么时候会被淘汰呢？

或许是10年后我刚好就业的那年，或许是20年，或许是几十年几百年。

谁知道呢？

牛顿经典力学理论统治物理好几百年，人人奉之为真理，可最终还是被爱因斯坦的相对论给打败了...

这样想来，没有什么东西是永恒的，人会死亡，真理会被证伪，就连宇宙也会消失。

有了这种宏观视角，那么平常那些琐碎还算什么呢？

那些对繁杂事业的疲惫，对未知的迷茫，对左转没让直行的愤懑，在这个维度下，好像都变得不值一提。

奥对，就连这篇博客，也不会永远存在，或者说永远是对的。