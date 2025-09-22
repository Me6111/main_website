// ArrowButton_1.tsx
import React from 'react';
import './ArrowButton_1.css';
import './0.css';
import './1.css';


type ArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
  variant: 0 | 1;
};

const ArrowButton_1: React.FC<ArrowButtonProps> = ({ direction, onClick, variant }) => {
  const isLeft = direction === 'left';
  const variantClass = `ArrowButton_1${variant}`;

  return (
    <button className={`ArrowButton_1 ${variantClass} ${direction}`} onClick={onClick}>
      {isLeft ? '<' : '>'}
    </button>
  );
};

export default ArrowButton_1;
