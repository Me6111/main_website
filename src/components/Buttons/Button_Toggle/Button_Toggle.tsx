import React, { useState, useRef } from 'react';

interface ButtonToggleProps {
  ElementToToggle?: React.RefObject<HTMLElement>;
  Size?: { width?: string; height?: string };
  Icon?: React.ReactNode;
  onClick?: () => void;
  ToggleBetween?: string[];
}

const Button_Toggle: React.FC<ButtonToggleProps> = ({
  ElementToToggle,
  Size,
  Icon,
  onClick,
  ToggleBetween = ['closed', 'opened']
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const finalSize = { width: Size?.width || '30px', height: Size?.height || '30px' };

  const defaultIcon = Icon || (
    <svg viewBox="0 0 16 16" width="16" height="16">
      <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="2" fill="none" />
      <line x1="4" y1="8" x2="12" y2="8" stroke="white" strokeWidth="2" />
      <line x1="8" y1="4" x2="8" y2="12" stroke="white" strokeWidth="2" />
    </svg>
  );

  const handleClick = () => {
    if (!ToggleBetween || ToggleBetween.length === 0) {
      if (ElementToToggle?.current) {
        const el = ElementToToggle.current;
        el.className = el.className.replace(/\b(closed|opened)\b/g, '').trim();
      }
      setCurrentIndex(0);
    } else {
      const nextIndex = (currentIndex + 1) % ToggleBetween.length;
      const nextClass = ToggleBetween[nextIndex];
      if (ElementToToggle?.current) {
        const el = ElementToToggle.current;
        el.className = el.className.replace(/\b(closed|opened)\b/g, '').trim();
        if (nextClass) el.classList.add(nextClass);
      }
      setCurrentIndex(nextIndex);
    }
    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      className={`Button_Toggle ${ToggleBetween[currentIndex] || ''}`}
      onClick={handleClick}
      style={{
        width: finalSize.width,
        height: finalSize.height,
        backgroundColor: '#000',
        boxSizing: 'border-box',
        border: '1px solid white',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
    >
      {defaultIcon}
    </button>
  );
};

export default Button_Toggle;
