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
  Position_Slider_WindowVisible?: 'top' | 'bottom' | 'left' | 'right';
  Center_SliderElement: 'horizontal' | 'vertical' | 'center';
};

const SliderWindow: React.FC<SliderWindowProps> = ({
    slider_windowSize,
    slideSize,
    slides_gap,
    slides,
    transition_seconds,
    orientation,
    Position_Slider_WindowVisible,
    Center_SliderElement,
    scrollable,
    slideChangeOnClick,

    percent,
    controlMode,
    currentIndex,
    onSlideClick,
    previewRef,
}) => {
  const maxIndex = slides.length - 1;
  const axisSize = orientation === 'horizontal' ? slideSize.width : slideSize.height;
  const translatePx = (percent / 100) * (maxIndex * (axisSize + slides_gap));
  const transformStyle =
    orientation === 'horizontal'
      ? `translateX(-${translatePx}px)`
      : `translateY(-${translatePx}px)`;

  const overflowX = scrollable && orientation === 'horizontal' ? 'auto' : 'hidden';
  const overflowY = scrollable && orientation === 'vertical' ? 'auto' : 'hidden';

  const positionStyle: React.CSSProperties = {
    position: 'absolute',
    top: Position_Slider_WindowVisible === 'top' ? 0 : undefined,
    bottom: Position_Slider_WindowVisible === 'bottom' ? 0 : undefined,
    left: Position_Slider_WindowVisible === 'left' ? 0 : undefined,
    right: Position_Slider_WindowVisible === 'right' ? 0 : undefined
  };

  const centerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent:
      Center_SliderElement === 'horizontal' || Center_SliderElement === 'center'
        ? 'center'
        : undefined,
    alignItems:
      Center_SliderElement === 'vertical' || Center_SliderElement === 'center'
        ? 'center'
        : undefined
  };

  const resolveSize = (value: number | string) =>
    typeof value === 'number' ? `${value}px` : value;

  return (
    <div className="SliderElement_Container" style={centerStyle}>
      <div
        className={`Slider_WindowVisible${slideChangeOnClick ? ' slideChangeOnClick' : ''}`}
        style={{
          width: resolveSize(slider_windowSize.width),
          height: resolveSize(slider_windowSize.height),
          overflowX,
          overflowY,
          ...positionStyle
        }}
        ref={previewRef}
      >
        <div
          className="Slider_Inner"
          style={{
            flexDirection: orientation === 'horizontal' ? 'row' : 'column'
          }}
        >
          <div
            className="Slider_SlidesContainer"
            style={{
              display: 'flex',
              flexDirection: orientation === 'horizontal' ? 'row' : 'column',
              transform: controlMode === 'global' ? transformStyle : undefined,
              transition: `${transition_seconds}s ease`,
              gap: `${slides_gap}px`,
              width: orientation === 'horizontal' ? `${slideSize.width}px` : 'auto',
              height: orientation === 'vertical' ? `${slideSize.height}px` : 'auto'
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`Slider_Slide idx-${i}${i === currentIndex ? ' CurrentSlide' : ''}`}
                style={{
                  width: `${slideSize.width}px`,
                  height: `${slideSize.height}px`,
                  cursor: slideChangeOnClick ? 'pointer' : 'default'
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
