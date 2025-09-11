import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';

type SliderProps = {
  slides?: React.ReactNode[];
  id?: string;
  gap?: number;
};

const Slider: React.FC<SliderProps> = ({ slides = [], id = 'slider', gap = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div id={id} className="slider-container" ref={containerRef}>
      <div className="slider-nav-container">
        <button className="nav-button left" onClick={handlePrev}>
          &lt;
        </button>
        <button className="nav-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>

      {slideWidth !== null && (
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * (slideWidth + gap)}px)`,
            gap: `${gap}px`,
          }}
        >
          {slides.map((slide, index) => {
            let positionClass = '';
            if (index === currentIndex) {
              positionClass = 'active';
            } else if (index < currentIndex) {
              positionClass = 'left';
            } else {
              positionClass = 'right';
            }

            return (
              <div
                className={`slider-slide ${positionClass}`}
                key={index}
                style={{ width: `${slideWidth}px` }}
              >
                {slide}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;
