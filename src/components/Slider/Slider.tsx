import React, { useRef, useEffect, useState } from 'react';
import './Slider.css';
import ArrowsNav from '../SliderNav/ArrowsNav/ArrowsNav';

type SlideWidths = {
  active?: number;
  left?: number;
  right?: number;
};

// ✅ Extended to include new optional props
type SliderNavElementProps = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
  onSelectSlide?: (index: number) => void;
  currentIndex?: number;
  totalSlides?: number;
  variant?: number;
};

type SliderProps = {
  slides: React.ReactNode[];
  Unique_Slider_Name?: string;
  gap?: number;
  slideWidths?: SlideWidths;
  sliderNavElement?: React.ReactElement<SliderNavElementProps>;
  transitionDuration?: number; // ✅ duration in milliseconds for full transition (e.g., 300ms)
};

const Slider: React.FC<SliderProps> = ({
  slides,
  Unique_Slider_Name: UniqueSliderName,
  gap = 0,
  slideWidths = {},
  sliderNavElement,
  transitionDuration = 300, // ✅ default 0.3s
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationTimeout = useRef<number | null>(null);

  const slideCount = slides.length;
  const defaultWidth = 100 / slideCount;

  const widths = {
    active: slideWidths.active ?? defaultWidth,
    left: slideWidths.left ?? defaultWidth,
    right: slideWidths.right ?? defaultWidth,
  };

  const getSlideWidthPx = (position: 'active' | 'left' | 'right') =>
    (containerWidth * widths[position]) / 100;

  const performScroll = (index: number) => {
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
      trackRef.current.style.transition = `transform 0.15s ease-in-out`; // ✅ single step transition speed
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const scrollToIndex = (targetIndex: number) => {
    if (isAnimating || targetIndex === currentIndex) return;

    const steps = Math.abs(targetIndex - currentIndex);
    const totalTime = transitionDuration;
    const stepTime = steps > 0 ? totalTime / steps : totalTime;

    setIsAnimating(true);

    const direction = targetIndex > currentIndex ? 1 : -1;
    let tempIndex = currentIndex;

    const animateStep = () => {
      tempIndex += direction;
      setCurrentIndex(tempIndex);
      performScroll(tempIndex);

      if (tempIndex !== targetIndex) {
        animationTimeout.current = window.setTimeout(animateStep, stepTime);
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

  const handleSelectSlide = (index: number) => {
    if (!isAnimating && index >= 0 && index < slides.length) {
      scrollToIndex(index);
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
  }, [containerWidth, slideWidths, gap]);

  useEffect(() => {
    return () => {
      if (animationTimeout.current !== null) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  const renderedNav = sliderNavElement
    ? React.cloneElement(sliderNavElement, {
        onScrollLeft: scrollLeft,
        onScrollRight: scrollRight,
        onSelectSlide: handleSelectSlide,
        currentIndex,
        totalSlides: slides.length,
      })
    : (
      <ArrowsNav
        onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
        onSelectSlide={handleSelectSlide}
        currentIndex={currentIndex}
        totalSlides={slides.length}
        variant={0}
      />
    );

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

              const widthPercent =
                index === currentIndex
                  ? widths.active
                  : index < currentIndex
                  ? widths.left
                  : widths.right;

              return (
                <div
                  key={index}
                  className={className}
                  style={{
                    flexShrink: 0,
                    width: `${widthPercent}%`,
                    transition: 'width 0.15s ease-in-out', // ✅ match with track transition
                  }}
                >
                  {slide}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {renderedNav}
    </div>
  );
};

export default Slider;
