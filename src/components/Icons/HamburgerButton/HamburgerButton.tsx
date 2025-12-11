import React, { useState } from 'react';

const HamburgerButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const size = 30;
  const bar = 2;
  const gap = 6;

  const common: React.CSSProperties = {
    width: size,
    height: bar,
    backgroundColor: 'white',
    transition: 'transform 0.5s ease, opacity 0.3s ease',
    transformOrigin: 'center',
    willChange: 'transform, opacity',
  };

  return (


    <div 
      onClick={() => setOpen(o => !o)}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap,
        width: size,
        height: size,
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          ...common,
          transform: open ? `translateY(${gap + bar}px) rotate(45deg) scaleX(0.8)` : 'none',
        }}
      />
      <div
        style={{
          ...common,
          transform: open ? 'translateX(40%) scale(0.2)' : 'none',
          opacity: open ? 0 : 1,
        }}
      />
      <div
        style={{
          ...common,
          transform: open ? `translateY(-${gap + bar}px) rotate(-45deg) scaleX(0.8)` : 'none',
        }}
      />
    </div>
    </div>
  );
};

export default HamburgerButton;
