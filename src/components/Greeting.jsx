import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

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
  };

  const buttonHoverStyle = {
    backgroundColor: '#4338ca',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h3>{greeting}谢谢你长这么好看还来看我!</h3>
      <button 
        style={{...buttonStyle, ...(isHovered ? buttonHoverStyle : {})}}
        onClick={() => setGreeting(randomMessage())}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        点我有小惊喜
      </button>
    </div>
  );
}