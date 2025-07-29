import React, { useState } from 'react';
import './Slider.css';
import CodeShowcase from '../CodeShowcase/CodeShowcase';

type ContentItem = {
  name: string;
  usage: string;
  definition: string;
  style: string;
  Component: React.FC<any>;
};

type SliderProps = {
  contentData: ContentItem[];
};

const Slider: React.FC<SliderProps> = ({ contentData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? contentData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % contentData.length);
  };

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

      <div className="readyComponents-slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {contentData.map((item, index) => (
            <div className="content-wrapper" key={index}>
              <CodeShowcase
                Name={item.name}
                ComponentUsageCodeRaw={item.usage}
                ComponentDefinitionCodeRaw={item.definition}
                ComponentStyleCodeRaw={item.style}
                dependencies={{ React, [item.name]: item.Component }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
