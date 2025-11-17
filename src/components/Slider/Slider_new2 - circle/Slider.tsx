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
      <div className="Slider_Inner">
        <div className="Slider_Track">
          {slides.map((slide, index) => {
            const angle = ((index - currentIndex) * 360) / slides.length;
            return (
              <div
                key={slide}
                className="Slider_Slide"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(300px)`,
                }}
              >
                {slide}
              </div>
            );
          })}
        </div>
      </div>

      <div className="Slider_Nav">
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
