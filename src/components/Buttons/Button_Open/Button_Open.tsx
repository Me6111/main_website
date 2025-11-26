import React from 'react';

interface ButtonOpenProps {
  Container?: React.RefObject<HTMLElement>;
  Size?: { width?: string; height?: string };
  Icon?: React.ReactNode;
  onClick?: () => void;
}

const Button_Open: React.FC<ButtonOpenProps> = ({ Container, Size, Icon, onClick }) => {
  const finalSize = { width: Size?.width || '30px', height: Size?.height || '30px' };
  const defaultIcon = Icon || (
    <svg viewBox="0 0 16 16" width="16" height="16">
      <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="2" fill="none" />
      <line x1="8" y1="4" x2="8" y2="12" stroke="white" strokeWidth="2" />
      <line x1="4" y1="8" x2="12" y2="8" stroke="white" strokeWidth="2" />
    </svg>
  );

  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      className="Button_Open"
      onClick={handleClick}
      style={{
        width: finalSize.width,
        height: finalSize.height,
        backgroundColor: '#000000ff',
        boxSizing: 'border-box',
        border: '1px, white, solid, ',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      {defaultIcon}
    </button>
  );
};

export default Button_Open;
