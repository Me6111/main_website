import React, { useRef, useEffect, useState } from 'react';
import './Slider.css';
import SliderNav from './SliderNav';

type SlideWidths = {
  active?: number;
  left?: number;
  right?: number;
};

type SliderProps = {
  slides: React.ReactNode[];
  Unique_Slider_Name?: string;
  gap?: number;
  slideWidths?: SlideWidths; // Custom widths per slide type (in %)
};

const Slider: React.FC<SliderProps> = ({
  slides,
  Unique_Slider_Name: UniqueSliderName,
  gap = 0,
  slideWidths = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationTimeout = useRef<number | null>(null);

  const slideCount = slides.length;

  // Default all slide widths to equal if not defined
  const defaultWidth = 100 / slideCount;

  const widths = {
    active: slideWidths.active ?? defaultWidth,
    left: slideWidths.left ?? defaultWidth,
    right: slideWidths.right ?? defaultWidth,
  };

  // Converts a width in % to pixels
  const getSlideWidthPx = (position: 'active' | 'left' | 'right') =>
    (containerWidth * widths[position]) / 100;

  const performScroll = (index: number) => {
    // Build array of widths for all slides based on their position relative to currentIndex
    const pixelWidths = slides.map((_, i) => {
      if (i === index) return getSlideWidthPx('active');
      if (i < index) return getSlideWidthPx('left');
      return getSlideWidthPx('right');
    });

    const totalBefore = pixelWidths
      .slice(0, index)
      .reduce((acc, w) => acc + w + gap, 0);

    const offset =
      containerWidth / 2 - pixelWidths[index] / 2 - totalBefore;

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
        animationTimeout.current = window.setTimeout(animateStep, 350);
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

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    performScroll(currentIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth, slideWidths, gap]);

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
              } else {
                className += ' right';
              }

              let widthPercent = 0;
              if (index === currentIndex) widthPercent = widths.active;
              else if (index < currentIndex) widthPercent = widths.left;
              else widthPercent = widths.right;

              return (
                <div
                  key={index}
                  className={className}
                  style={{
                    flexShrink: 0,
                    width: `${widthPercent}%`,
                    transition: 'width 0.4s ease-in-out',
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
