// ArrowButton.tsx
import React from 'react';
import './ArrowButton.css';

import '../../Icons/Arrow/Arrow';

const ArrowButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => {
  return (
    <button className={`ArrowButton ${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

export default ArrowButton;
