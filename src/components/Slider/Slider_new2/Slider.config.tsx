import React, { useRef } from 'react';
import Slider from './Slider';

const SliderConfigComponent: React.FC = () => {
  const slides = Array.from({ length: 20 }, (_, number) => <div key={number}>{number}</div>);

  const mainSliderProps = {
    percent: 0,
    sliderWindowSize: { width: 600, height: 300 },
    slideSize: { width: 500, height: 300 },
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

  const previewRef = useRef<HTMLDivElement>(null);

  const previewSliderProps = {
    SliderWindow: {
      percent: 0,
      slides,
      sliderWindowSize: { width: '100%', height: '100%' },
      slideSize: { width: '100px', height: '50px' },
      slidesGap: 5,
      controlMode: 'local' as const,
      scrollable: true,
      slideChangeOnClick: true,
      currentIndex: 0,
      onSlideClick: () => {},
      previewRef,
      transitionSeconds: 0.5,
      orientation: 'vertical' as const
    },
    sidebarProps: {
      Style: { width: '110px', height: '100%' },
      position: '',
      size: ''
    }
  };

  return <Slider {...{ mainSlider: mainSliderProps, Slider_Preview: previewSliderProps }} />;
};

const SliderConfig = {
  key: 'Slider',
  Name: 'Slider',
  ComponentInstance: <SliderConfigComponent />
};

export default SliderConfig;
