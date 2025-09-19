// ArrowButton.tsx
import React from 'react';
import './ArrowButton.css';
import './0.css';
import './1.css';


type ArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
  variant: 0 | 1;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, variant }) => {
  const isLeft = direction === 'left';
  const variantClass = `ArrowButton_${variant}`;

  return (
    <button className={`ArrowButton ${variantClass} ${direction}`} onClick={onClick}>
      {isLeft ? '<' : '>'}
    </button>
  );
};

export default ArrowButton;
