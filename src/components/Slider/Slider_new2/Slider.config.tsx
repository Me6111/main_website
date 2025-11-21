import React from 'react';
import Slider from './Slider';

const SliderConfigComponent: React.FC = () => {
  const slides = Array.from({ length: 20 }, (_, number) => <div key={number}>{number}</div>);

  const mainSliderProps = {
    percent: 0,
    centerSliderElement: 'center' as const,
    sliderWindowSize: { width: 600, height: 300 },
    slideSize: { width: 500, height: 250 },
    slidesGap: 50,
    controlMode: 'global' as const,
    scrollable: false,
    slideChangeOnClick: false,
    currentIndex: 0,
    slides,
    previewRef: undefined,
    transitionSeconds: 1,
    orientation: 'horizontal' as const
  };

  const previewSliderProps = {
    SliderWindow: {
      percent: 0,
      centerSliderElement: 'left' as const,
      positionSliderWindowVisible: 'top' as const,
      slides,
      sliderWindowSize: { width: 120, height: '100%' },
      slideSize: { width: 100, height: 50 },
      slidesGap: 5,
      controlMode: 'local' as const,
      scrollable: true,
      slideChangeOnClick: true,
      currentIndex: 0,
      onSlideClick: () => {},
      previewRef: React.createRef(),
      transitionSeconds: 0.5,
      orientation: 'vertical' as const
    }
  };

  return <Slider mainSlider={mainSliderProps} Slider_Preview={previewSliderProps} />;
};

const SliderConfig = {
  key: 'Slider',
  Name: 'Slider',
  ComponentInstance: <SliderConfigComponent />
};

export default SliderConfig;
