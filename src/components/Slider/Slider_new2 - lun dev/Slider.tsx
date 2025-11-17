import React, { useState } from 'react';
import './Slider.css';

const slides = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="Slider_Container">
      <div className="Slider" style={{ '--quantity': slides.length } as React.CSSProperties}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="Item"
            style={{
              '--position': index,
              '--total': slides.length,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
