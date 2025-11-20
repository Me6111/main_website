import React, { useState, useRef } from 'react';
import './Slider.css';





type SliderWindowProps = {
  percent: number;
  slider_windowSize: { width: number; height: number };
  slideSize: { width: number; height: number };
  slides_gap: number;
  controlMode: 'global' | 'local';
  scrollable: boolean;
  slideChangeOnClick: boolean;
  currentIndex: number;
  setIndex: (i: number) => void;
  previewRef?: React.RefObject<HTMLDivElement>;
  slides: JSX.Element[];
  transition_seconds: number;
  orientation: 'horizontal' | 'vertical';
  isDragging: boolean;
  maxIndex: number;
};

const SliderWindow: React.FC<SliderWindowProps> = ({
  percent,
  slider_windowSize,
  slideSize,
  slides_gap,
  controlMode,
  scrollable,
  slideChangeOnClick,
  currentIndex,
  setIndex,
  previewRef,
  slides,
  transition_seconds,
  orientation,
  isDragging,
  maxIndex
}) => {
  const axisSize = orientation === 'horizontal' ? slideSize.width : slideSize.height;
  const translatePx = (percent / 100) * (maxIndex * (axisSize + slides_gap));
  const transformStyle = orientation === 'horizontal' ? `translateX(-${translatePx}px)` : `translateY(-${translatePx}px)`;
  const overflowX = scrollable && orientation === 'horizontal' ? 'auto' : 'hidden';
  const overflowY = scrollable && orientation === 'vertical' ? 'auto' : 'hidden';

  return (
    <div className={`Slider_Element_Container${slideChangeOnClick ? ' slideChangeOnClick' : ''}`}>
      <div
        className="Slider_WindowVisible"
        style={{
          width: `${slider_windowSize.width}px`,
          height: `${slider_windowSize.height}px`,
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
              transition: isDragging ? 'none' : `${transition_seconds}ms ease`,
              gap: `${slides_gap}px`,
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
    </div>
  );
};

const Slider: React.FC = () => {
  const slides = Array.from({ length: 20 }, (_, number) => <div key={number}>{number}</div>);
  const transition_seconds = 300;
  const orientation: 'horizontal' | 'vertical' = 'vertical';
  const [percentMain, setPercentMain] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const maxIndex = slides.length - 1;

  const getPreviewScrollPositionForIndex = (index: number) => {
    const preview = previewRef.current;
    if (!preview) return 0;
    const slideEl = preview.querySelector<HTMLDivElement>(`.Slider_Slide.idx-${index}`);
    if (!slideEl) return 0;
    if (orientation === 'horizontal') {
      const previewWidth = preview.clientWidth;
      const slideRect = slideEl.getBoundingClientRect();
      const previewRect = preview.getBoundingClientRect();
      const currentScroll = preview.scrollLeft;
      const slideLeftRelative = slideRect.left - previewRect.left + currentScroll;
      const slideRightRelative = slideLeftRelative + slideRect.width;
      if (slideLeftRelative < currentScroll) return slideLeftRelative;
      if (slideRightRelative > currentScroll + previewWidth) return slideRightRelative - previewWidth;
      return currentScroll;
    } else {
      const previewHeight = preview.clientHeight;
      const slideRect = slideEl.getBoundingClientRect();
      const previewRect = preview.getBoundingClientRect();
      const currentScroll = preview.scrollTop;
      const slideTopRelative = slideRect.top - previewRect.top + currentScroll;
      const slideBottomRelative = slideTopRelative + slideRect.height;
      if (slideTopRelative < currentScroll) return slideTopRelative;
      if (slideBottomRelative > currentScroll + previewHeight) return slideBottomRelative - previewHeight;
      return currentScroll;
    }
  };

  const updateSlider = (newIndex: number) => {
    const p = maxIndex === 0 ? 0 : (newIndex / maxIndex) * 100;
    setPercentMain(Number(p.toFixed(4)));
    setCurrentIndex(newIndex);
    const preview = previewRef.current;
    if (preview) {
      const targetScroll = getPreviewScrollPositionForIndex(newIndex);
      if (orientation === 'horizontal') preview.scrollTo({ left: targetScroll, behavior: 'smooth' });
      else preview.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const goNext = () => updateSlider(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  const goPrev = () => updateSlider(currentIndex <= 0 ? maxIndex : currentIndex - 1);

  return (
    <div className="Slider_Container">
      <div className="SliderScreen">
        <div className="SliderScreen_Slider">
          <SliderWindow
            percent={percentMain}
            slider_windowSize={{ width: 600, height: 300 }}
            slideSize={{ width: 500, height: 250 }}
            slides_gap={50}
            controlMode="global"
            scrollable={false}
            slideChangeOnClick={false}
            currentIndex={currentIndex}
            setIndex={updateSlider}
            slides={slides}
            previewRef={undefined}
            transition_seconds={transition_seconds}
            orientation={orientation}
            isDragging={isDragging}
            maxIndex={maxIndex}
          />
        </div>
      </div>

      <div className="SliderScreen">
        <div className="Slider_Nav_Buttons">
          <button onClick={goPrev}>Prev</button>
          <button onClick={goNext}>Next</button>
        </div>
      </div>

      <div className="SliderScreen">
        <div className="SliderScreen_Slider_Preview">
          <SliderWindow
            percent={percentMain}
            slider_windowSize={{ width: 120, height: 400 }}
            slideSize={{ width: 100, height: 50 }}
            slides_gap={5}
            controlMode="local"
            scrollable={true}
            slideChangeOnClick={true}
            currentIndex={currentIndex}
            setIndex={updateSlider}
            slides={slides}
            previewRef={previewRef}
            transition_seconds={transition_seconds}
            orientation={orientation}
            isDragging={isDragging}
            maxIndex={maxIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
