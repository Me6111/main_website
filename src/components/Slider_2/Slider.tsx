import React, { useRef, useEffect, useState } from 'react';
import './Slider.css';

import SliderNav from './SliderNav';

type SliderProps = {
  slides: React.ReactNode[];
  Unique_Slider_Name?: string;
  gap?: number;
  slideWidth: number; // Percentage (100 = full width)
};

const Slider: React.FC<SliderProps> = ({
  slides,
  Unique_Slider_Name: UniqueSliderName,
  gap = 0,
  slideWidth,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationTimeout = useRef<number | null>(null);

  const slideCount = slides.length;
  const slideWidthPx = (containerWidth * slideWidth) / 100;
  const moveUnit = slideWidthPx + gap;

  const initialTranslateX = containerWidth
    ? (containerWidth - slideWidthPx) / 2
    : 0;

  const performScroll = (index: number) => {
    const offset = initialTranslateX - index * moveUnit;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const scrollToIndex = (targetIndex: number) => {
    if (isAnimating || targetIndex === currentIndex) return;

    setIsAnimating(true);

    const direction = targetIndex > currentIndex ? 1 : -1;
    let tempIndex = currentIndex;

    const animateStep = () => {
      tempIndex += direction;
      setCurrentIndex(tempIndex);
      performScroll(tempIndex);

      if (tempIndex !== targetIndex) {
        animationTimeout.current = window.setTimeout(animateStep, 350); // match CSS transition delay
      } else {
        setIsAnimating(false);
        animationTimeout.current = null;
      }
    };

    animateStep();
  };

  const scrollLeft = () => {
    if (!isAnimating && currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (!isAnimating && currentIndex < slides.length - 1) {
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
    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    performScroll(currentIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth, slideWidth, gap]);

  useEffect(() => {
    return () => {
      if (animationTimeout.current !== null) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  return (
    <div
      id={UniqueSliderName}
      className="Slider-outer"
      style={{ overflow: 'hidden' }}
    >
      <div className="Slider-inner">
        <div className="Slider-track-1" ref={containerRef}>
          <div
            className="Slider-track-0"
            ref={trackRef}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              transition: 'transform 0.4s ease-in-out',
              willChange: 'transform',
            }}
          >
            {slides.map((slide, index) => {
              let className = 'Slider-slide';

              if (index === currentIndex) {
                className += ' active';
              } else if (index < currentIndex) {
                className += ' left';
              } else if (index > currentIndex) {
                className += ' right';
              }

              return (
                <div
                  key={index}
                  className={className}
                  style={{
                    flexShrink: 0,
                    width: `${slideWidth}%`,
                  }}
                >
                  {slide}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SliderNav onScrollLeft={scrollLeft} onScrollRight={scrollRight} />
    </div>
  );
};

export default Slider;
