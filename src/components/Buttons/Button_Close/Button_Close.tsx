import React from 'react';

interface ButtonCloseProps {
  Container?: React.RefObject<HTMLElement>;
  Size?: { width?: string; height?: string };
  Icon?: React.ReactNode;
  onClick?: () => void;
}

const Button_Close: React.FC<ButtonCloseProps> = ({ Container, Size, Icon, onClick }) => {
  const finalSize = { width: Size?.width || '30px', height: Size?.height || '30px' };
  const defaultIcon = Icon || (
    <svg viewBox="0 0 16 16" width="16" height="16">
      <line x1="0" y1="0" x2="16" y2="16" stroke="white" strokeWidth="2" />
      <line x1="16" y1="0" x2="0" y2="16" stroke="white" strokeWidth="2" />
    </svg>
  );

  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      className="Button_Close"
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

export default Button_Close;
