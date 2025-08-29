import React, { useState } from 'react';
import Slider from './Slider';
import Slide from './Slide_0';

import SliderSourceCodeRaw from './Slider.tsx?raw';
import SliderStyleCodeRaw from './Slider.css?raw';

import './SliderConfig_Style_0.css';

import storm0 from './stormClouds/0.jpg';
import storm1 from './stormClouds/1.jpg';
import storm2 from './stormClouds/2.jpg';

const usageCodeRaw = `<Slider
  id="Slider-config"
  slides={[
    <Slide key={0} position="active" img={<img src={storm0} alt="Slide 1" />} />,
    <Slide key={1} position="right" img={<img src={storm1} alt="Slide 2" />} />,
    <Slide key={2} position="right" img={<img src={storm2} alt="Slide 3" />} />,
  ]}
  gap={100}
/>`;

const SliderConfigComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [storm0, storm1, storm2];

  const slides = images.map((src, index) => {
    let position: 'left' | 'right' | 'active' = 'right';
    if (index === activeIndex) position = 'active';
    else if (index < activeIndex) position = 'left';

    return (
      <Slide
        key={index}
        position={position}
        img={<img src={src} alt={`Slide ${index + 1}`} />}
      />
    );
  });

  return (
    <Slider
      id="Slider-config"
      gap={100}
      slides={slides}
      onSlideChange={setActiveIndex}
    />
  );
};

const SliderConfig = {
  key: 'Slider',
  Name: 'Slider',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: SliderSourceCodeRaw,
  ComponentStyleCodeRaw: SliderStyleCodeRaw,
  ComponentInstance: <SliderConfigComponent />,
  dependencies: { React, Slider },
};

export default SliderConfig;
