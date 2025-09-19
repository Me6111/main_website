import React, { useState } from 'react';
import Slider from '../../Slider';
import Slide from './Slide_0';
import ArrowsNav from '../../../SliderNav/ArrowsNavIndexes/ArrowsNav'; 

import SliderSourceCodeRaw from '../../Slider.tsx?raw';
import SliderStyleCodeRaw from '../../Slider.css?raw';

import img0 from './images/0.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';

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

  const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

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
      sliderNavElement={
        <ArrowsNav
          onScrollLeft={() => {}}
          onScrollRight={() => {}}
          variant={1} // Use variant 1
          theme="light" // Added theme prop
        />
      }
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
