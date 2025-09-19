// ArrowsNav.tsx
import React from 'react';
import './ArrowsNav.css';
import ArrowButton from '../../ArrowButtons/ArrowButton/ArrowButton';

type Props = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
  variant: 0 | 1; 
};

const ArrowsNav: React.FC<Props> = ({ onScrollLeft, onScrollRight, variant }) => {
  return (
    <div className="ArrowsNav">
      <ArrowButton direction="left" onClick={onScrollLeft} variant={variant} />
      <ArrowButton direction="right" onClick={onScrollRight} variant={variant} />
    </div>
  );
};

export default ArrowsNav;
