// ArrowsNav.tsx
import React from 'react';
import './ArrowsNav.css';
import ArrowButton_0 from '../../ArrowButtons/ArrowButton_0/ArrowButton_0';
import ArrowButton_1 from '../../ArrowButtons/ArrowButton_1/ArrowButton_1'; 

type Props = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
  type: 0 | 1;
  style: 0 | 1;
};

const ArrowsNav: React.FC<Props> = ({ onScrollLeft, onScrollRight, type, style }) => {
  // Choose which ArrowButton component to render based on type
  const ArrowButton = type === 0 ? ArrowButton_0 : ArrowButton_1;

  return (
    <div className="ArrowsNav">
      <ArrowButton direction="left" onClick={onScrollLeft} style={style} />
      <ArrowButton direction="right" onClick={onScrollRight} style={style} />
    </div>
  );
};

export default ArrowsNav;
