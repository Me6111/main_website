import React, { useRef, useEffect, useState } from 'react';
import './SliderWindow.css';

export type SliderWindowProps = {
  percent: number;
  sliderWindowSize: { width: number | string; height: number | string };
  slideSize: { width: number | string; height: number | string };
  slidesGap: number;
  controlMode: 'global' | 'local';
  scrollable: boolean;
  slideChangeOnClick: boolean;
  currentIndex: number;
  onSlideClick?: (index: number) => void;
  previewRef?: React.RefObject<HTMLDivElement>;
  slides: JSX.Element[];
  transitionSeconds: number;
  orientation: 'horizontal' | 'vertical';
  scrollbar?: {
    thumbSize?: number;
    thumbColor?: string;
    trackSize?: number;
    trackColor?: string;
  };
};

const SliderWindow: React.FC<SliderWindowProps> = ({
  sliderWindowSize,
  slideSize,
  slidesGap,
  slides,
  transitionSeconds,
  orientation,
  scrollable,
  slideChangeOnClick,
  percent,
  controlMode,
  currentIndex,
  onSlideClick,
  previewRef,
  scrollbar,
}) => {
  const containerRef = previewRef || useRef<HTMLDivElement>(null);
  const [resolvedSliderSize, setResolvedSliderSize] = useState({ width: 0, height: 0 });
  const [resolvedSlideSize, setResolvedSlideSize] = useState({ width: 0, height: 0 });

  const resolveToPixels = (value: number | string, parentSize: number) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.endsWith('%')) {
      return (parseFloat(value) / 100) * parentSize;
    }
    return parseFloat(value);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    let parent: HTMLElement | null = containerRef.current.parentElement;
    while (parent && (!parent.clientHeight || !parent.clientWidth)) {
      parent = parent.parentElement;
    }

    const parentWidth = parent?.clientWidth || window.innerWidth;
    const parentHeight = parent?.clientHeight || window.innerHeight;

    const sliderWidth = resolveToPixels(sliderWindowSize.width, parentWidth);
    const sliderHeight = resolveToPixels(sliderWindowSize.height, parentHeight);
    const slideW = resolveToPixels(slideSize.width, sliderWidth);
    const slideH = resolveToPixels(slideSize.height, sliderHeight);

    setResolvedSliderSize({ width: sliderWidth, height: sliderHeight });
    setResolvedSlideSize({ width: slideW, height: slideH });
  }, [sliderWindowSize, slideSize, containerRef]);

  const maxIndex = slides.length - 1;
  const axisSize = orientation === 'horizontal' ? resolvedSlideSize.width : resolvedSlideSize.height;
  const translatePx = (percent / 100) * (maxIndex * (axisSize + slidesGap));
  const transformStyle = orientation === 'horizontal' ? `translateX(-${translatePx}px)` : `translateY(-${translatePx}px)`;

  const overflowX = scrollable && orientation === 'horizontal' ? 'auto' : 'hidden';
  const overflowY = scrollable && orientation === 'vertical' ? 'auto' : 'hidden';

  return (
    <div className="SliderElement_Container" style={{ height: resolvedSliderSize.height }}>
      <div
        className={`Slider_WindowVisible${slideChangeOnClick ? ' slideChangeOnClick' : ''}`}
        style={{
          width: `${resolvedSliderSize.width}px`,
          height: `${resolvedSliderSize.height}px`,
          overflowX,
          overflowY,
        }}
        ref={containerRef}
      >
        <style>
          {`
            .Slider_WindowVisible::-webkit-scrollbar {
              width: ${scrollbar?.trackSize || 10}px;
              height: ${scrollbar?.trackSize || 10}px;
            }
            .Slider_WindowVisible::-webkit-scrollbar-track {
              background-color: ${scrollbar?.trackColor || '#1a1a1a'};
            }
            .Slider_WindowVisible::-webkit-scrollbar-thumb {
              background-color: ${scrollbar?.thumbColor || '#555555'};
              border-radius: ${scrollbar?.thumbSize ? scrollbar.thumbSize / 2 : 5}px;
            }
            .Slider_WindowVisible::-webkit-scrollbar-thumb:hover {
              background-color: ${scrollbar?.thumbColor || '#888888'};
            }
          `}
        </style>
        <div className="Slider_Inner" style={{ flexDirection: orientation === 'horizontal' ? 'row' : 'column', height: '100%' }}>
          <div
            className="Slider_SlidesContainer"
            style={{
              display: 'flex',
              flexDirection: orientation === 'horizontal' ? 'row' : 'column',
              transform: controlMode === 'global' ? transformStyle : undefined,
              transition: `${transitionSeconds}s ease`,
              gap: `${slidesGap}px`,
              width: orientation === 'horizontal' ? `${resolvedSlideSize.width}px` : '100%',
              height: orientation === 'vertical' ? `${resolvedSlideSize.height}px` : '100%',
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`Slider_Slide idx-${i}${i === currentIndex ? ' CurrentSlide' : ''}`}
                style={{
                  width: `${resolvedSlideSize.width}px`,
                  height: `${resolvedSlideSize.height}px`,
                  cursor: slideChangeOnClick ? 'pointer' : 'default',
                }}
                onClick={() => slideChangeOnClick && onSlideClick?.(i)}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderWindow;
