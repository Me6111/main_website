import React from 'react';
import './ArrowsNav.css';
import ArrowButton from '../../ArrowButtons/ArrowButton/ArrowButton';

type Props = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
  onSelectSlide?: (index: number) => void;
  variant: 0 | 1;
  totalSlides?: number;
  currentIndex?: number;
  theme?: 'light' | 'dark'; // ✅ new optional theme prop
};

const ArrowsNav: React.FC<Props> = ({
  onScrollLeft,
  onScrollRight,
  onSelectSlide,
  variant,
  totalSlides = 0,
  currentIndex = 0,
  theme = 'light', // ✅ default theme is light
}) => {
  return (
    <div className={`ArrowsNav ${theme}`}> {/* ✅ apply theme class */}
      {/* Top index bar */}
      <div className="ArrowsNav-index-bar">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`ArrowsNav-index-button ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => onSelectSlide?.(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Arrows */}
      <div className="ArrowsNav-arrows">
        <ArrowButton direction="left" onClick={onScrollLeft} variant={variant} />
        <ArrowButton direction="right" onClick={onScrollRight} variant={variant} />
      </div>
    </div>
  );
};

export default ArrowsNav;
