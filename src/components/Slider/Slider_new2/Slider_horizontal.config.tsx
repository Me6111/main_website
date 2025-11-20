import React, { useRef } from 'react';
import Slider from './Slider';
import SliderWindow from './SliderWindow/SliderWindow';

const SliderConfigComponent: React.FC = () => {
  const slides = Array.from({ length: 20 }, (_, number) => <div key={number}>{number}</div>);
  const transition_seconds = 300;
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <Slider
      SliderMain={{
        slides: slides,
        transition_seconds: transition_seconds,
        orientation: "horizontal",
        Center_SliderElement: "center",
        slider_windowSize: { width: 600, height: 300 },
        slideSize: { width: 500, height: 250 },
        slides_gap: 50,
        controlMode: "global",
        scrollable: false,
        slideChangeOnClick: false
      }}
      SliderPreview={{
        HTML_Element: (
          <SliderWindow
            percent={0}
            Center_SliderElement="left"
            Position_Slider_WindowVisible="top"
            slider_windowSize={{ width: "100%", height: 70 }}
            slideSize={{ width: 100, height: 50 }}
            slides_gap={5}
            controlMode="local"
            scrollable={true}
            slideChangeOnClick={true}
            currentIndex={0}
            setIndex={() => {}}
            slides={slides}
            previewRef={previewRef}
            transition_seconds={transition_seconds}
            orientation={"horizontal"}
            isDragging={false}
            maxIndex={slides.length - 1}
          />
        ),
        position: "bottom: 0",
        size: "100%, 60px"
      }}
    />
  );
};

const SliderConfig = {
  key: 'Slider',
  Name: 'Slider',
  ComponentInstance: <SliderConfigComponent />
};

export default SliderConfig;
