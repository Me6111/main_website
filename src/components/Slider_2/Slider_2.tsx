import React, { useRef, useEffect, useState } from 'react';
import './Slider_2.css';
import SliderNav from './SliderNav';

type SliderProps = {
  slides: React.ReactNode[];
  id?: string;
  gap?: number;
  slideWidth: number; // Width of slide in pixels
};

const Slider: React.FC<SliderProps> = ({
  slides,
  id,
  gap = 0,
  slideWidth,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const moveUnit = slideWidth + gap;

  const initialTranslateX = containerWidth
    ? (containerWidth - (slideWidth )) / 2
    : 0;

  const scrollToIndex = (index: number) => {
    const offset = initialTranslateX - index * moveUnit;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }

    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < slides.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollToIndex(currentIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth, slideWidth, gap]);

  return (
    <div
      id={id}
      className="Slider_0"
      style={{ overflow: 'hidden' }}
    >
      <div className="Slider_1">
        <div className="Slider_curtain">
          <div className="track0" ref={containerRef}>      
          <div
            className="slider-track"
            ref={trackRef}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              transition: 'transform 0.4s ease',
              willChange: 'transform',
            }}
          >
            {slides.map((slide, index) => {
              let className = 'slider-slide';

              if (index === currentIndex) {
                className += ' active';
              } else if (index === currentIndex - 1) {
                className += ' left';
              } else if (index === currentIndex + 1) {
                className += ' right';
              }

              return (
                <div
                  key={index}
                  className={className}
                  style={{
                    flexShrink: 0,
                    width: `${slideWidth}px`,
                  }}
                >
                  {slide}
                </div>
              );
            })}
          </div>
          </div>   
        </div>


      </div>

      <div className="Slider_curtain" id="curtain-nav">
          <SliderNav onScrollLeft={scrollLeft} onScrollRight={scrollRight} />
      </div>

    </div>
  );
};

export default Slider;
