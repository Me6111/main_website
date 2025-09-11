// SliderNav.tsx
import React from 'react';
import './SliderNav.css';

type SliderNavProps = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
};

const SliderNav: React.FC<SliderNavProps> = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="Slider-nav">
        <button className="nav-button left" onClick={onScrollLeft}>
          &lt;
        </button>
        <button className="nav-button right" onClick={onScrollRight}>
          &gt;
        </button>
    </div>
  );
};

export default SliderNav;
