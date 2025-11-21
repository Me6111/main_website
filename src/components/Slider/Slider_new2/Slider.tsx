import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';
import SliderWindow from './SliderWindow/SliderWindow';
import PrevNextButtons from './PrevNextButtons/PrevNextButtons';
import Sidebar from '../../Sidebar/Sidebar2/Sidebar';

interface SliderProps {
  mainSlider: {
    percent: number;
    centerSliderElement: 'horizontal' | 'vertical' | 'center';
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
      centerSliderElement: 'horizontal' | 'vertical' | 'center';
      positionSliderWindowVisible: 'top' | 'bottom' | 'left' | 'right';
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
  };
}

const Slider: React.FC<SliderProps> = ({ mainSlider, Slider_Preview }) => {
  const [currentIndex, setCurrentIndex] = useState(mainSlider.currentIndex);
  const [percentMain, setPercentMain] = useState(mainSlider.percent);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maxIndex = mainSlider.slides.length - 1;
    const p = maxIndex === 0 ? 0 : (currentIndex / maxIndex) * 100;
    setPercentMain(Number(p.toFixed(4)));

    if (!Slider_Preview) return;
    const previewBox = previewRef.current;
    if (!previewBox) return;

    const slideEl = previewBox.querySelector<HTMLDivElement>(`.Slider_Slide.idx-${currentIndex}`);
    if (!slideEl) return;

    const previewHeight = previewBox.clientHeight;
    const slideRect = slideEl.getBoundingClientRect();
    const previewRect = previewBox.getBoundingClientRect();
    const currentScroll = previewBox.scrollTop;
    const slideTopRelative = slideRect.top - previewRect.top + currentScroll;
    const slideBottomRelative = slideTopRelative + slideRect.height;

    if (slideTopRelative < currentScroll) previewBox.scrollTo({ top: slideTopRelative, behavior: 'smooth' });
    else if (slideBottomRelative > currentScroll + previewHeight) previewBox.scrollTo({ top: slideBottomRelative - previewHeight, behavior: 'smooth' });
  }, [currentIndex, mainSlider.slides.length, Slider_Preview]);

  const handleSlideClick = (index: number) => setCurrentIndex(index);

  return (
    <div className="Slider_Container">
      <div className="SliderScreen">
        <div className="SliderScreen_Slider_Main">
          <SliderWindow
            percent={percentMain}
            Center_SliderElement={mainSlider.centerSliderElement}
            slider_windowSize={mainSlider.sliderWindowSize}
            slideSize={mainSlider.slideSize}
            slides_gap={mainSlider.slidesGap}
            controlMode={mainSlider.controlMode}
            scrollable={mainSlider.scrollable}
            slideChangeOnClick={mainSlider.slideChangeOnClick}
            currentIndex={currentIndex}
            slides={mainSlider.slides}
            previewRef={mainSlider.previewRef}
            transition_seconds={mainSlider.transitionSeconds}
            orientation={mainSlider.orientation}
            onSlideClick={handleSlideClick}
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
          <Sidebar
            content={
              <SliderWindow
                percent={Slider_Preview.SliderWindow.percent}
                Center_SliderElement={Slider_Preview.SliderWindow.centerSliderElement}
                Position_Slider_WindowVisible={Slider_Preview.SliderWindow.positionSliderWindowVisible}
                slides={Slider_Preview.SliderWindow.slides}
                slider_windowSize={Slider_Preview.SliderWindow.sliderWindowSize}
                slideSize={Slider_Preview.SliderWindow.slideSize}
                slides_gap={Slider_Preview.SliderWindow.slidesGap}
                controlMode={Slider_Preview.SliderWindow.controlMode}
                scrollable={Slider_Preview.SliderWindow.scrollable}
                slideChangeOnClick={Slider_Preview.SliderWindow.slideChangeOnClick}
                currentIndex={currentIndex}
                onSlideClick={handleSlideClick}
                previewRef={previewRef}
                transition_seconds={Slider_Preview.SliderWindow.transitionSeconds}
                orientation={Slider_Preview.SliderWindow.orientation}
              />
            }
            position="left: 0"
            size="120px, 100%"
          />
        </div>
      )}
    </div>
  );
};

export default Slider;
