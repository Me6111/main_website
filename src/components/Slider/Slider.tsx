import React, { useRef, useEffect, useState } from 'react';
import './Slider.css';
import ArrowsNav from './SliderNav/ArrowsNav/ArrowsNav';
import IndexNav from './SliderNav/IndexNav/IndexNav';
import Track_Indicator from './Track_Indicator/Track_Indicator';

type SlideWidths = { active?: number; left?: number; right?: number };

type SliderNavElementProps = {
  onScrollLeft: () => void;
  onScrollRight: () => void;
  onSelectSlide?: (index: number) => void;
  currentIndex?: number;
  totalSlides?: number;
};

type NavTypeProp =
  | { NavType: 'index'; Style?: number }
  | { NavType: 'arrows'; Type: 0 | 1; Style?: number }
  | { NavType: 'custom' };

type SliderProps = {
  slides: React.ReactNode[];
  Unique_Slider_Name?: string;
  gap?: number;
  slideWidths?: SlideWidths;
  NavType?: NavTypeProp;
  sliderNavElement?: React.ReactElement<SliderNavElementProps>;
  transitionDuration?: number;
  Track_Indicator_Dragging?: boolean; // optional, defaults to false
};

const Slider: React.FC<SliderProps> = ({
  slides,
  Unique_Slider_Name: UniqueSliderName,
  gap = 0,
  slideWidths = {},
  NavType = { NavType: 'arrows', Type: 0, Style: 0 },
  sliderNavElement,
  transitionDuration = 300,
  Track_Indicator_Dragging = false, // default is false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderVisibleWidth, setSliderVisibleWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const defaultWidth = 100 / slides.length;
  const widths = {
    active: slideWidths.active ?? defaultWidth,
    left: slideWidths.left ?? defaultWidth,
    right: slideWidths.right ?? defaultWidth,
  };

  const getSlideWidthPx = (position: 'active' | 'left' | 'right') =>
    (sliderVisibleWidth * widths[position]) / 100;

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));

    const pixelWidths = slides.map((_, i) =>
      i === clampedIndex
        ? getSlideWidthPx('active')
        : i < clampedIndex
        ? getSlideWidthPx('left')
        : getSlideWidthPx('right')
    );

    const offset = pixelWidths.slice(0, clampedIndex).reduce((a, w) => a + w, 0) + gap * clampedIndex;
    const trackOffset = sliderVisibleWidth / 2 - pixelWidths[clampedIndex] / 2 - offset;

    trackRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    trackRef.current.style.transform = `translateX(${trackOffset}px)`;

    setCurrentIndex(clampedIndex);
  };

  const scrollLeft = () => scrollToIndex(Math.max(0, currentIndex - 1));
  const scrollRight = () => scrollToIndex(Math.min(slides.length - 1, currentIndex + 1));
  const handleSelectSlide = (index: number) => scrollToIndex(index);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setSliderVisibleWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [sliderVisibleWidth, slideWidths, gap]);

  const renderNav = () => {
    const commonProps = {
      onScrollLeft: scrollLeft,
      onScrollRight: scrollRight,
      onSelectSlide: handleSelectSlide,
      currentIndex,
      totalSlides: slides.length,
    };

    switch (NavType.NavType) {
      case 'index':
        return <IndexNav {...commonProps} variant={NavType.Style ?? 0} />;
      case 'arrows':
        return <ArrowsNav {...commonProps} type={NavType.Type} style={NavType.Style ?? 0} />;
      case 'custom':
        return sliderNavElement ? React.cloneElement(sliderNavElement, commonProps) : null;
      default:
        return null;
    }
  };

  return (
    <div
      id={UniqueSliderName}
      className="Slider-outer"
      style={{ overflow: 'hidden', position: 'relative' }}
    >
<Track_Indicator
  SlidesAmount={slides.length}
  CurrentSlide={currentIndex}
  onSlideChange={scrollToIndex}
  draggable={Track_Indicator_Dragging ?? false} // explicitly ensure default is false if no prop is sent
/>


      <div className="Slider-inner" style={{ paddingTop: '10px' }}>
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
            {slides.map((slide, i) => {
              const widthPercent =
                i === currentIndex
                  ? widths.active
                  : i < currentIndex
                  ? widths.left
                  : widths.right;
              return (
                <div
                  key={i}
                  className={`Slider-slide ${
                    i === currentIndex ? 'active' : i < currentIndex ? 'left' : 'right'
                  }`}
                  style={{
                    flexShrink: 0,
                    width: `${widthPercent}%`,
                    transition: 'width 0.15s ease-in-out',
                  }}
                >
                  {slide}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {renderNav()}
    </div>
  );
};

export default Slider;
