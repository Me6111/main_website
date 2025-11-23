import React from 'react';
import './SliderWindow.css';

export type SliderWindowProps = {
  percent: number;
  slider_windowSize: { width: number | string; height: number | string };
  slideSize: { width: number; height: number };
  slides_gap: number;
  controlMode: 'global' | 'local';
  scrollable: boolean;
  slideChangeOnClick: boolean;
  currentIndex: number;
  onSlideClick?: (index: number) => void; 
  previewRef?: React.RefObject<HTMLDivElement>;
  slides: JSX.Element[];
  transition_seconds: number;
  orientation: 'horizontal' | 'vertical';
};

const SliderWindow: React.FC<SliderWindowProps> = ({
  slider_windowSize,
  slideSize,
  slides_gap,
  slides,
  transition_seconds,
  orientation,
  scrollable,
  slideChangeOnClick,

  percent,
  controlMode,
  currentIndex,
  onSlideClick,
  previewRef
}) => {

  const maxIndex = slides.length - 1;
  const axisSize = orientation === 'horizontal' ? slideSize.width : slideSize.height;

  const translatePx =
    (percent / 100) * (maxIndex * (axisSize + slides_gap));

  const transformStyle =
    orientation === 'horizontal'
      ? `translateX(-${translatePx}px)`
      : `translateY(-${translatePx}px)`;

  const overflowX =
    scrollable && orientation === 'horizontal' ? 'auto' : 'hidden';
  const overflowY =
    scrollable && orientation === 'vertical' ? 'auto' : 'hidden';

  const resolveSize = (value: number | string) =>
    typeof value === 'number' ? `${value}px` : value;

  return (
    <div className="SliderElement_Container">
      <div
        className={`Slider_WindowVisible${
          slideChangeOnClick ? ' slideChangeOnClick' : ''
        }`}
        style={{
          width: resolveSize(slider_windowSize.width),
          height: resolveSize(slider_windowSize.height),
          overflowX,
          overflowY
        }}
        ref={previewRef}
      >
        <div
          className="Slider_Inner"
          style={{
            flexDirection:
              orientation === 'horizontal' ? 'row' : 'column'
          }}
        >
          <div
            className="Slider_SlidesContainer"
            style={{
              display: 'flex',
              flexDirection:
                orientation === 'horizontal' ? 'row' : 'column',
              transform: controlMode === 'global' ? transformStyle : undefined,
              transition: `${transition_seconds}s ease`,
              gap: `${slides_gap}px`,
              width:
                orientation === 'horizontal'
                  ? `${slideSize.width}px`
                  : 'auto',
              height:
                orientation === 'vertical'
                  ? `${slideSize.height}px`
                  : 'auto'
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`Slider_Slide idx-${i}${
                  i === currentIndex ? ' CurrentSlide' : ''
                }`}
                style={{
                  width: `${slideSize.width}px`,
                  height: `${slideSize.height}px`,
                  cursor: slideChangeOnClick ? 'pointer' : 'default'
                }}
                onClick={() =>
                  slideChangeOnClick && onSlideClick?.(i)
                }
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
