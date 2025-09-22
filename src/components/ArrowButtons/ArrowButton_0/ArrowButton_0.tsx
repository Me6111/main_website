// ArrowButton_0.tsx
import React from 'react';
import './ArrowButton_0.css';
import './0.css';
import './1.css';

type ArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
  style: 0 | 1;  // changed from variant to style
};

const ArrowButton_0: React.FC<ArrowButtonProps> = ({ direction, onClick, style }) => {
  const isLeft = direction === 'left';
  const styleClass = `style_${style}`;

  return (
    <button className={`ArrowButton_0 ${styleClass} ${direction}`} onClick={onClick}>
      {isLeft ? '<' : '>'}
    </button>
  );
};

export default ArrowButton_0;
