import React from 'react';
import './SliderWindow.css';

export type SliderWindowProps = {
  percent: number;
  visibleSize: { width: number; height: number };
  slideSize: { width: number; height: number };
  distance: number;
  controlMode: 'global' | 'local';
  scrollable: boolean;
  slideChangeOnClick: boolean;
  currentIndex: number;
  setIndex: (i: number) => void;
  previewRef?: React.RefObject<HTMLDivElement>;
  slides: JSX.Element[];
  transitionMs: number;
  orientation: 'horizontal' | 'vertical';
  isDragging: boolean;
  maxIndex: number;
};

const SliderWindow: React.FC<SliderWindowProps> = ({
  percent,
  visibleSize,
  slideSize,
  distance,
  controlMode,
  scrollable,
  slideChangeOnClick,
  currentIndex,
  setIndex,
  previewRef,
  slides,
  transitionMs,
  orientation,
  isDragging,
  maxIndex
}) => {
  const axisSize = orientation === 'horizontal' ? slideSize.width : slideSize.height;
  const translatePx = (percent / 100) * (maxIndex * (axisSize + distance));
  const transformStyle = orientation === 'horizontal' ? `translateX(-${translatePx}px)` : `translateY(-${translatePx}px)`;
  const overflowX = scrollable && orientation === 'horizontal' ? 'auto' : 'hidden';
  const overflowY = scrollable && orientation === 'vertical' ? 'auto' : 'hidden';

  return (
        <div
            className={`Slider_WindowVisible${slideChangeOnClick ? ' slideChangeOnClick' : ''}`}
            style={{
            width: `${visibleSize.width}px`,
            height: `${visibleSize.height}px`,
            overflowX,
            overflowY
            }}
            ref={previewRef}
        >
        <div className="Slider_Inner" style={{ flexDirection: orientation === 'horizontal' ? 'row' : 'column' }}>
            <div
                className="Slider_SlidesContainer"
                style={{
                display: 'flex',
                flexDirection: orientation === 'horizontal' ? 'row' : 'column',
                transform: controlMode === 'global' ? transformStyle : undefined,
                transition: isDragging ? 'none' : `${transitionMs}ms ease`,
                gap: `${distance}px`,
                width: orientation === 'horizontal' ? `${slideSize.width}px` : 'auto',
                height: orientation === 'vertical' ? `${slideSize.height}px` : 'auto'
                }}
            >
                {slides.map((slide, i) => (
            <div
                    key={i}
                    className={`Slider_Slide idx-${i}${i === currentIndex ? ' CurrentSlide' : ''}`}
                    style={{ width: `${slideSize.width}px`, height: `${slideSize.height}px` }}
                    onClick={() => slideChangeOnClick && setIndex(i)}
            >
                {slide}
            </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default SliderWindow;
