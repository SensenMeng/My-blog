import { useState, useRef } from 'preact/hooks';

export default function Greeting({messages}) {
  // 存储按钮的DOM引用，用于计算烟花发射位置
  const buttonRef = useRef(null);
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(messages[0]);

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#1A1B1F',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative', // 新增：让烟花粒子相对于按钮定位
    overflow: 'visible',  // 新增：允许粒子超出按钮范围
  };

  const buttonHoverStyle = {
    backgroundColor: '#4338ca',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  };

  const [isHovered, setIsHovered] = useState(false);

  // 烟花动画核心函数
  const createFireworks = (e) => {
    // 获取按钮的位置和尺寸
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    
    // 计算按钮中心坐标（相对于视口）
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 定义烟花粒子数量和样式
    const particleCount = 20; // 粒子数量
    const colors = ['#ff0043', '#4361ee', '#3a86ff', '#8338ec', '#ffbe0b', '#fb5607', '#ffffff']; // 烟花颜色

    // 创建粒子
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // 随机角度和距离
      const angle = (i / particleCount) * Math.PI * 2; // 圆周分布
      const distance = 10 + Math.random() * 40; // 粒子扩散距离
      
      // 计算粒子最终位置
      const endX = centerX + Math.cos(angle) * distance;
      const endY = centerY + Math.sin(angle) * distance;

      // 设置粒子初始样式
      Object.assign(particle.style, {
        position: 'fixed',
        zIndex: '1000',
        width: `${3 + Math.random() * 5}px`,
        height: `${3 + Math.random() * 5}px`,
        borderRadius: '50%',
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        left: `${centerX}px`,
        top: `${centerY}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', // 防止粒子遮挡鼠标事件
        opacity: '1',
        transition: `all 0.6s cubic-bezier(0.17, 0.89, 0.32, 1.28)`,
      });

      // 添加到文档中
      document.body.appendChild(particle);

      // 触发动画（需要延迟一下让浏览器渲染初始状态）
      setTimeout(() => {
        Object.assign(particle.style, {
          left: `${endX}px`,
          top: `${endY}px`,
          opacity: '0',
        });
      }, 10);

      // 动画结束后移除粒子
      setTimeout(() => {
        particle.remove();
      }, 600);
    }
  };

  // 点击事件：同时更新问候语和创建烟花
  const handleClick = () => {
    setGreeting(randomMessage());
    createFireworks();
  };

  return (
    <div>
      <h3>{greeting}</h3>
      <button 
        ref={buttonRef} // 绑定按钮引用
        style={{...buttonStyle, ...(isHovered ? buttonHoverStyle : {})}}
        onClick={handleClick} // 修改：使用新的点击处理函数
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        点我有小惊喜
      </button>
    </div>
  );
}