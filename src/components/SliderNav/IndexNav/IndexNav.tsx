import React from 'react';
import './IndexNav.css';

type Props = {
  onSelectSlide?: (index: number) => void;
  totalSlides?: number;
  currentIndex?: number;
  theme?: 'light' | 'dark';
};

const IndexNav: React.FC<Props> = ({
  onSelectSlide,
  totalSlides = 0,
  currentIndex = 0,
  theme = 'light',
}) => {
  return (
    <div className={`IndexNav ${theme}`}>
      <div className="IndexNav-index-bar">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`IndexNav-index-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => onSelectSlide?.(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndexNav;
