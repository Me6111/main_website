import React from 'react';
import './IndexNav.css';

type Props = {
  onSelectSlide: (index: number) => void;
  totalSlides: number;
  currentIndex: number;
  offset: number; 
};

const IndexNav: React.FC<Props> = ({
  onSelectSlide,
  totalSlides,
  currentIndex,
  offset,
}) => {
  return (
    <div className="IndexNav light">
      <div className="IndexNav-index-bar">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              className={`IndexNav-index-button ${isActive ? 'active' : ''}`}
              onClick={() => onSelectSlide(index)}
              style={{
                transform: isActive ? `translateX(${offset}px)` : undefined,
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default IndexNav;
