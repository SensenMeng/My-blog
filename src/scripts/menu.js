// 手机菜单交互逻辑
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.modern-nav-links');

  if (!mobileMenuBtn || !navLinks) return;

  // 点击菜单按钮
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 防止事件冒泡到document
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      // 关闭菜单
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.setAttribute('aria-label', '打开菜单');
      navLinks.classList.remove('open');
    } else {
      // 打开菜单
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileMenuBtn.setAttribute('aria-label', '关闭菜单');
      navLinks.classList.add('open');
    }
  });

  // 点击导航链接后关闭菜单
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', '打开菜单');
        navLinks.classList.remove('open');
      }
    });
  });

  // 点击页面其他地方关闭菜单
  document.addEventListener('click', (e) => {
    const target = e.target;
    const isMenuBtn = target.closest('.mobile-menu-btn');
    const isNavLink = target.closest('.modern-nav-links');

    if (!isMenuBtn && !isNavLink) {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', '打开菜单');
        navLinks.classList.remove('open');
      }
    }
  });

  // 窗口大小改变时处理菜单状态
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // 恢复到桌面模式
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    }
  });
});

// 为当前页面的链接添加 active 类
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.startsWith(href || '') && href !== '/')) {
      link.classList.add('active');
    }
  });
});