import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';
import SliderWindow from './SliderWindow/SliderWindow';
import PrevNextButtons from './PrevNextButtons/PrevNextButtons';
//import Sidebar from '../../Sidebar/Sidebar2/Sidebar';

interface SliderProps {
  mainSlider: {
    percent: number;
    sliderWindowSize: { width: number | string; height: number | string };
    slideSize: { width: number; height: number };
    slidesGap: number;
    controlMode: 'global' | 'local';
    scrollable: boolean;
    slideChangeOnClick: boolean;
    currentIndex: number;
    slides: JSX.Element[];
    previewRef?: React.RefObject<HTMLDivElement>;
    transitionSeconds: number;
    orientation: 'horizontal' | 'vertical';
  };
  Slider_Preview?: {
    SliderWindow: {
      percent: number;
      slides: JSX.Element[];
      sliderWindowSize: { width: number | string; height: number | string };
      slideSize: { width: number; height: number };
      slidesGap: number;
      controlMode: 'global' | 'local';
      scrollable: boolean;
      slideChangeOnClick: boolean;
      currentIndex: number;
      onSlideClick?: (index: number) => void;
      previewRef?: React.RefObject<HTMLDivElement>;
      transitionSeconds: number;
      orientation: 'horizontal' | 'vertical';
    };
    sidebarProps: {
      position: string;
      size: string;
    };
  };
}

const Slider: React.FC<SliderProps> = ({ mainSlider, Slider_Preview }) => {
  const [currentIndex, setCurrentIndex] = useState(mainSlider.currentIndex);
  const [percentMain, setPercentMain] = useState(mainSlider.percent);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maxIndex = mainSlider.slides.length - 1;
    setPercentMain(maxIndex === 0 ? 0 : (currentIndex / maxIndex) * 100);

    if (!Slider_Preview) return;
    const previewBox = previewRef.current;
    if (!previewBox) return;

    const slideEl = previewBox.querySelector<HTMLDivElement>(`.Slider_Slide.idx-${currentIndex}`);
    if (!slideEl) return;

    const slideRect = slideEl.getBoundingClientRect();
    const previewRect = previewBox.getBoundingClientRect();

    if (Slider_Preview.SliderWindow.orientation === 'vertical') {
      const previewHeight = previewBox.clientHeight;
      const currentScroll = previewBox.scrollTop;
      const topRel = slideRect.top - previewRect.top + currentScroll;
      const bottomRel = topRel + slideRect.height;

      if (topRel < currentScroll)
        previewBox.scrollTo({ top: topRel, behavior: 'smooth' });
      else if (bottomRel > currentScroll + previewHeight)
        previewBox.scrollTo({ top: bottomRel - previewHeight, behavior: 'smooth' });
    } else {
      const previewWidth = previewBox.clientWidth;
      const currentScroll = previewBox.scrollLeft;
      const leftRel = slideRect.left - previewRect.left + currentScroll;
      const rightRel = leftRel + slideRect.width;

      if (leftRel < currentScroll)
        previewBox.scrollTo({ left: leftRel, behavior: 'smooth' });
      else if (rightRel > currentScroll + previewWidth)
        previewBox.scrollTo({ left: rightRel - previewWidth, behavior: 'smooth' });
    }
  }, [currentIndex, mainSlider.slides.length, Slider_Preview]);

  const handleSlideClick = (index: number) => setCurrentIndex(index);

  return (
    <div className="Slider_Container">
      <div className="SliderScreen">
        <div className="SliderScreen_Slider_Main">
          <SliderWindow
            {...mainSlider}
            currentIndex={currentIndex}
            percent={percentMain}
            onSlideClick={handleSlideClick}
            slider_windowSize={mainSlider.sliderWindowSize}
            slides_gap={mainSlider.slidesGap}
            transition_seconds={mainSlider.transitionSeconds}
          />
        </div>
      </div>

      <div className="SliderScreen">
        <PrevNextButtons
          top="50%"
          width="50%"
          currentIndex={currentIndex}
          maxIndex={mainSlider.slides.length - 1}
          updateSlider={setCurrentIndex}
        />
      </div>

      {Slider_Preview && (
        <div className="SliderScreen_Slider_Preview">
          {(() => {
            const sidebarAllProps = {
              ...Slider_Preview.sidebarProps,
              content: (
                <SliderWindow
                  {...Slider_Preview.SliderWindow}
                  currentIndex={currentIndex}
                  onSlideClick={handleSlideClick}
                  previewRef={previewRef}
                  slider_windowSize={{ width: '100%', height: 60 }}
                  slides_gap={Slider_Preview.SliderWindow.slidesGap}
                  transition_seconds={Slider_Preview.SliderWindow.transitionSeconds}
                />
              )
            };
            //return <Sidebar {...sidebarAllProps} />; 
            return <div />;
          })()}
        </div>
      )}
    </div>
  );
};

export default Slider;
