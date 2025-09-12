import React, { useState } from 'react';
import Slider from '../../Slider';
import Slide from './Slide_0';

import SliderSourceCodeRaw from '../../Slider.tsx?raw';
import SliderStyleCodeRaw from '../../Slider.css?raw';

import storm0 from './stormClouds/0.jpg';
import storm1 from './stormClouds/1.jpg';
import storm2 from './stormClouds/2.jpg';
import storm3 from './stormClouds/3.jpg';
import storm4 from './stormClouds/4.jpg';
import storm5 from './stormClouds/5.jpg';
import storm6 from './stormClouds/6.jpg';
import storm7 from './stormClouds/7.jpg';
import storm8 from './stormClouds/8.jpg';

const usageCodeRaw = `<Slider
  id="Slider-config"
  slides={[
    <Slide key={0} position="active" img={<img src={storm0} alt="Slide 1" />} />,
    <Slide key={1} position="right" img={<img src={storm1} alt="Slide 2" />} />,
    <Slide key={2} position="right" img={<img src={storm2} alt="Slide 3" />} />,
  ]}
  gap={100}
  slideWidth="25%" 
/>`;

const SliderConfigComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [storm0, storm1, storm2, storm3, storm4, storm5, storm6, storm7, storm8];

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
      Unique_Slider_Name="Slider_0"
      gap={0}
      slideWidths={{ active: 80, left: 0, right: 80 }}

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
