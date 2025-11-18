import React, { useState, useRef } from 'react';
import './Slider.css';

import SliderWindow from './SliderWindow/SliderWindow';
import PrevNextButtons from './PrevNextButtons/PrevNextButtons';
import Sidebar from '../../Sidebar/Sidebar2/Sidebar';


const Slider: React.FC = () => {
  const slides = Array.from({ length: 20 }, (_, number) => <div key={number}>{number}</div>);
  const transitionMs = 300;
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

  return (
    <div className="Slider_Container">

      <div className="SliderScreen">
        <div className="SliderScreen_Slider_Main">
          <SliderWindow
            percent={percentMain}
            Center_SliderElement="center"
            visibleSize={{ width: 600, height: 300 }}
            slideSize={{ width: 500, height: 250 }}
            distance={50}
            controlMode="global"
            scrollable={false}
            slideChangeOnClick={false}
            currentIndex={currentIndex}
            setIndex={updateSlider}
            slides={slides}
            previewRef={undefined}
            transitionMs={transitionMs}
            orientation={orientation}
            isDragging={isDragging}
            maxIndex={maxIndex}
          />
        </div>
      </div>

      <div className="SliderScreen">
  <PrevNextButtons
    top="50%"
    width="50%"
    currentIndex={currentIndex}
    maxIndex={maxIndex}
    updateSlider={updateSlider}
  />

      </div>

      <div className="SliderScreen">

        
        <div className="SliderScreen_Slider_Preview">
          <SliderWindow
            percent={percentMain}
            Center_SliderElement="left"
            Position_Slider_WindowVisible="top"
            visibleSize={{ width: 120, height: "100%" }}
            slideSize={{ width: 100, height: 50 }}
            distance={5}
            controlMode="local"
            scrollable={true}
            slideChangeOnClick={true}
            currentIndex={currentIndex}
            setIndex={updateSlider}
            slides={slides}
            previewRef={previewRef}
            transitionMs={transitionMs}
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
