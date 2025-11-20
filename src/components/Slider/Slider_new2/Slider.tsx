import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';
import SliderWindow from './SliderWindow/SliderWindow';
import PrevNextButtons from './PrevNextButtons/PrevNextButtons';
import Sidebar from '../../Sidebar/Sidebar2/Sidebar';

const Slider: React.FC = () => {
  const slides = Array.from({ length: 20 }, (_, number) => <div key={number}>{number}</div>);
  const transition_seconds = 1;
  const orientation: 'horizontal' | 'vertical' = 'vertical';
  const [percentMain, setPercentMain] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  // update percentMain whenever currentIndex changes
  useEffect(() => {
    const maxIndex = slides.length - 1;
    const p = maxIndex === 0 ? 0 : (currentIndex / maxIndex) * 100;
    setPercentMain(Number(p.toFixed(4)));

    // scroll preview
    const preview = previewRef.current;
    if (!preview) return;

    const slideEl = preview.querySelector<HTMLDivElement>(`.Slider_Slide.idx-${currentIndex}`);
    if (!slideEl) return;

    if (orientation === 'horizontal') {
      const previewWidth = preview.clientWidth;
      const slideRect = slideEl.getBoundingClientRect();
      const previewRect = preview.getBoundingClientRect();
      const currentScroll = preview.scrollLeft;
      const slideLeftRelative = slideRect.left - previewRect.left + currentScroll;
      const slideRightRelative = slideLeftRelative + slideRect.width;
      if (slideLeftRelative < currentScroll) preview.scrollTo({ left: slideLeftRelative, behavior: 'smooth' });
      else if (slideRightRelative > currentScroll + previewWidth) preview.scrollTo({ left: slideRightRelative - previewWidth, behavior: 'smooth' });
    } else {
      const previewHeight = preview.clientHeight;
      const slideRect = slideEl.getBoundingClientRect();
      const previewRect = preview.getBoundingClientRect();
      const currentScroll = preview.scrollTop;
      const slideTopRelative = slideRect.top - previewRect.top + currentScroll;
      const slideBottomRelative = slideTopRelative + slideRect.height;
      if (slideTopRelative < currentScroll) preview.scrollTo({ top: slideTopRelative, behavior: 'smooth' });
      else if (slideBottomRelative > currentScroll + previewHeight) preview.scrollTo({ top: slideBottomRelative - previewHeight, behavior: 'smooth' });
    }
  }, [currentIndex, slides.length, orientation]);

  return (
    <div className="Slider_Container">
      <div className="SliderScreen">
        <div className="SliderScreen_Slider_Main">
          <SliderWindow
            percent={percentMain}
            Center_SliderElement="center"
            slider_windowSize={{ width: 600, height: 300 }}
            slideSize={{ width: 500, height: 250 }}
            slides_gap={50}
            controlMode="global"
            scrollable={false}
            slideChangeOnClick={false}
            currentIndex={currentIndex}
            slides={slides}
            previewRef={undefined}
            transition_seconds={transition_seconds}
            orientation={orientation}
          />
        </div>
      </div>

      <div className="SliderScreen">
        <PrevNextButtons
          top="50%"
          width="50%"
          currentIndex={currentIndex}
          maxIndex={slides.length - 1}
          updateSlider={setCurrentIndex}
        />
      </div>

      <div className="SliderScreen_Slider_Preview">
        <Sidebar
          content={
              <SliderWindow
                percent={percentMain}
                Center_SliderElement="left"
                Position_Slider_WindowVisible="top"
                slider_windowSize={{ width: 120, height: "100%" }}
                slideSize={{ width: 100, height: 50 }}
                slides_gap={5}
                controlMode="local"
                scrollable={true}
                slideChangeOnClick={true}
                currentIndex={currentIndex}
                onSlideClick={setCurrentIndex} // preview click updates main slider
                slides={slides}
                previewRef={previewRef}
                transition_seconds={transition_seconds}
                orientation={orientation}
              />
          }
          position="left: 0"
          size="120px, 100%"
        />
      </div>
    </div>
  );
};

export default Slider;
