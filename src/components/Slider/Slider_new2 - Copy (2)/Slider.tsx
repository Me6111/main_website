import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';

const slides = Array.from({ length: 10 }, (_, number) => (
  <div
    key={number}
    style={{
      backgroundColor: 'rgba(0, 255, 30, 0.44)',
      border: '1px solid white',
      color: 'white',
      textAlign: 'center',
      fontSize: '10px',
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {number}
  </div>
));

const transition_seconds = 300;
const orientation: 'horizontal' | 'vertical' = 'horizontal';

interface SliderWindowProps {
  slides: React.ReactNode[];
  transition_seconds: number;
  orientation: 'horizontal' | 'vertical';
  isDragging: boolean;
  percent: number;
}

const SliderWindow: React.FC<SliderWindowProps> = ({ slides, transition_seconds, orientation, isDragging, percent }) => {
  const slidesContainerRef = useRef<HTMLDivElement | null>(null);
  const maxIndex = Math.max(slides.length - 1, 0);

  const translatePercent = (percent / 100) * maxIndex * 100;
  const transformStyle = orientation === 'horizontal'
    ? `translateX(-${translatePercent}%)`
    : `translateY(-${translatePercent}%)`;

  return (
    <div className="Slider_WindowVisible">
      <div
        className="Slider_Inner"
      >
        <div
          className="Slider_SlidesContainer"
          style={{
            transform: transformStyle,
            transition: isDragging ? 'none' : `${transition_seconds}ms ease`,
          }}
          ref={slidesContainerRef}
        >
          {slides.map((slide, index) => (
            <div key={index} className="Slider_Slide">
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const maxIndex = Math.max(slides.length - 1, 0);

  useEffect(() => {
    const p = maxIndex === 0 ? 0 : (currentIndex / maxIndex) * 100;
    setPercent(Number(p.toFixed(4)));
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') setCurrentIndex((i) => Math.min(i + 1, maxIndex));
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') setCurrentIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [maxIndex]);

  const goNext = () => setCurrentIndex((i) => (i === maxIndex ? 0 : i + 1));
  const goPrev = () => setCurrentIndex((i) => (i === 0 ? maxIndex : i - 1));

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercent(Number(e.target.value));
  };

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => {
    setIsDragging(false);
    const translatedPercent = (percent / 100) * maxIndex * 100;
    const nearestIndex = Math.round(translatedPercent / 100);
    setCurrentIndex(Math.min(Math.max(nearestIndex, 0), maxIndex));
  };

  return (
    <div className="Slider_Container">
      <div className="SliderScreen">
        <SliderWindow
          slides={slides}
          transition_seconds={transition_seconds}
          orientation={orientation}
          isDragging={isDragging}
          percent={percent}
        />
      </div>

      <div className="SliderScreen">
        <div className="Slider_Nav_Buttons">
          <button onClick={goPrev}>Prev</button>
          <button onClick={goNext}>Next</button>
        </div>
      </div>

      <div className="SliderScreen">
        <div className="Slider_Nav_ScrollBar">
          <input
            type="range"
            className="slider-range"
            min={0}
            max={100}
            value={percent}
            onChange={handleRangeChange}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          />
        </div>
      </div>








    </div>
  );
};

export default Slider;
