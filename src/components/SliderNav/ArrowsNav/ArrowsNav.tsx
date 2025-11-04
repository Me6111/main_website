// ArrowsNav.tsx
import React from 'react';
import './ArrowsNav.css';
import ArrowButton from '../../Buttons/ArrowButton/ArrowButton';

type Props = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
};

const ArrowsNav: React.FC<Props> = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="ArrowsNav">
      <ArrowButton direction="left" onClick={onScrollLeft} />
      <ArrowButton direction="right" onClick={onScrollRight} />
    </div>
  );
};

export default ArrowsNav;
