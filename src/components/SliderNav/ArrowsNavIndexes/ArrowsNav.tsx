import React from 'react';
import './ArrowsNav.css';
import ArrowButton_0 from '../../ArrowButtons/ArrowButton_0/ArrowButton_0';
import ArrowButton_1 from '../../ArrowButtons/ArrowButton_1/ArrowButton_1';

type ArrowsType = 0 | 1 | 'custom';

type Props = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
  onSelectSlide?: (index: number) => void;
  ArrowsType: ArrowsType;
  totalSlides?: number;
  currentIndex?: number;
  theme?: 'light' | 'dark';
  customArrows?: React.ReactNode; // Your custom arrows component
};

const ArrowsNav: React.FC<Props> = ({
  onScrollLeft,
  onScrollRight,
  onSelectSlide,
  ArrowsType,
  totalSlides = 0,
  currentIndex = 0,
  theme = 'light',
  customArrows,
}) => {
  // Render arrow buttons based on ArrowsType
  const renderArrowButton = (direction: 'left' | 'right') => {
    if (ArrowsType === 0) {
      return <ArrowButton_0 direction={direction} onClick={direction === 'left' ? onScrollLeft : onScrollRight} />;
    }
    if (ArrowsType === 1) {
      return <ArrowButton_1 direction={direction} onClick={direction === 'left' ? onScrollLeft : onScrollRight} />;
    }
    return null; // custom arrows rendered separately
  };

  return (
    <div className={`ArrowsNav ${theme}`}>
      {/* Index Bar */}
      <div className="ArrowsNav-index-bar">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`ArrowsNav-index-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => onSelectSlide?.(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Arrows */}
      <div className="ArrowsNav-arrows">
        {ArrowsType === 'custom' ? (
          customArrows
        ) : (
          <>
            {renderArrowButton('left')}
            {renderArrowButton('right')}
          </>
        )}
      </div>
    </div>
  );
};

export default ArrowsNav;
