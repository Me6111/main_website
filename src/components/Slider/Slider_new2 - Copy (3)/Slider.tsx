import React, { useEffect, useState, useRef } from 'react';
import './Slider.css';

const slides = Array.from({ length: 10 }, (_, number) => <div key={number}>{number}</div>);

const transitionMs = 300;
const orientation: 'horizontal' | 'vertical' = 'horizontal';

const Slider_Nav_Scrollbar: React.FC<{
  percent: number;
  controlMode: 'global' | 'local';
  onPercentChange: (newPercent: number, mode: 'global' | 'local') => void;
  onDragStart: (mode: 'global' | 'local') => void;
  onDragEnd: (mode: 'global' | 'local') => void;
  numberOfSlides: number;
}> = ({ percent, controlMode, onPercentChange, onDragStart, onDragEnd, numberOfSlides }) => {
  const trackRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPercentChange(Number(e.target.value), controlMode);
  };

  return (
    <div className="Slider_Nav_ScrollBar">
      <input
        type="range"
        className="slider-range"
        min={0}
        max={100}
        value={percent}
        onChange={handleChange}
        onPointerDown={() => onDragStart(controlMode)}
        onPointerUp={() => onDragEnd(controlMode)}
        style={{ '--thumb-width': `${100 / numberOfSlides}%` } as React.CSSProperties}
        ref={trackRef}
      />
    </div>
  );
};

const Slider: React.FC = () => {
  const [percentMain, setPercentMain] = useState(0);
  const [percentPreview, setPercentPreview] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const previewDrag = useRef<{ active: boolean; lastX: number }>({ active: false, lastX: 0 });
  const maxIndex = slides.length - 1;

  useEffect(() => {
    const p = maxIndex === 0 ? 0 : (currentIndex / maxIndex) * 100;
    setPercentMain(Number(p.toFixed(4)));
    setPercentPreview(Number(p.toFixed(4)));
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [maxIndex]);

  const goNext = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const goPrev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));

  const handlePercentChange = (newPercent: number, mode: 'global' | 'local') => {
    if (mode === 'global') {
      setPercentMain(newPercent);
      setPercentPreview(newPercent);
      setCurrentIndex(Math.round((newPercent / 100) * maxIndex));
    } else {
      setPercentPreview(newPercent);
    }
  };

  const handleDragStart = () => setIsDragging(true);

  const handleDragEnd = (mode: 'global' | 'local') => {
    setIsDragging(false);
    if (mode === 'global') setCurrentIndex(Math.round((percentMain / 100) * maxIndex));
  };

  const handlePreviewPointerDown = (e: React.PointerEvent) => {
    previewDrag.current.active = true;
    previewDrag.current.lastX = e.clientX;
  };

  const handlePreviewPointerMove = (e: React.PointerEvent, visibleWidth: number) => {
    if (!previewDrag.current.active) return;
    const dx = e.clientX - previewDrag.current.lastX;
    previewDrag.current.lastX = e.clientX;
    const deltaPercent = -(dx / visibleWidth) * 100;
    setPercentPreview((p) => Math.max(0, Math.min(100, p + deltaPercent)));
  };

  const handlePreviewPointerUp = () => {
    previewDrag.current.active = false;
  };

  const renderSliderWindow = (
    percent: number,
    visibleSize: { width: number; height: number },
    slideSize: { width: number; height: number },
    distance: number,
    controlMode: 'global' | 'local'
  ) => {
    const axisSize = orientation === 'horizontal' ? slideSize.width : slideSize.height;
    const translatePx = (percent / 100) * (maxIndex * (axisSize + distance));
    const transformStyle = orientation === 'horizontal' ? `translateX(-${translatePx}px)` : `translateY(-${translatePx}px)`;

    return (
      <div className="Slider_Element_Container">
        <div
          className="Slider_WindowVisible"
          style={{ width: `${visibleSize.width}px`, height: `${visibleSize.height}px` }}
          onPointerDown={controlMode === 'local' ? handlePreviewPointerDown : undefined}
          onPointerMove={(e) => controlMode === 'local' && handlePreviewPointerMove(e, visibleSize.width)}
          onPointerUp={controlMode === 'local' ? handlePreviewPointerUp : undefined}
          onPointerLeave={controlMode === 'local' ? handlePreviewPointerUp : undefined}
        >
          <div className="Slider_Inner">
            <div
              className="Slider_SlidesContainer"
              style={{
                display: 'flex',
                transform: transformStyle,
                transition: isDragging ? 'none' : `${transitionMs}ms ease`,
                gap: `${distance}px`,
                width: `${slideSize.width}px`,
                height: `${slideSize.height}px`,
              }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="Slider_Slide">
                  {slide}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Slider_Nav_Scrollbar
          percent={percent}
          controlMode={controlMode}
          onPercentChange={handlePercentChange}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          numberOfSlides={slides.length}
        />
      </div>
    );
  };

  return (
    <div className="Slider_Container">
      <div className="SliderScreen">
        <div className="SliderScreen_Slider">
          {renderSliderWindow(percentMain, { width: 600, height: 300 }, { width: 500, height: 250 }, 50, 'global')}
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
          {renderSliderWindow(percentPreview, { width: 1000, height: 60 }, { width: 100, height: 50 }, 5, 'local')}
        </div>
      </div>
    </div>
  );
};

export default Slider;
