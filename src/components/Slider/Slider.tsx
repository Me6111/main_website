import React, { useState } from 'react';
import './Slider.css';

type SliderProps = {
  slides?: React.ReactNode[]; // Make slides optional
};

const Slider: React.FC<SliderProps> = ({ slides = [] }) => { // Default to empty array
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (!Array.isArray(slides)) {
    console.error('Slider: slides prop must be an array');
    return <div style={{ color: 'red' }}>Error: slides must be an array.</div>;
  }

  if (slides.length === 0) {
    return <div className="slider-container">No slides available.</div>;
  }

  return (
    <div className="slider-container">
      <div className="slider-nav-container">
        <button className="nav-button left" onClick={handlePrev}>
          &lt;
        </button>
        <button className="nav-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>

      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slider-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
