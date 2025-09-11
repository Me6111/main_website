import React, { useState } from 'react';
import Slider from '../../Slider';
//import './Slider.config_1.css';

import Slide from './Slide_1';

import SliderSourceCodeRaw from '../../Slider.tsx?raw';
import SliderStyleCodeRaw from '../../Slider.css?raw';


import img0 from './fighterJet/0.jpg';
import img2 from './fighterJet/2.jpg';
import img3 from './fighterJet/3.jpg';
import img4 from './fighterJet/4.jpg';
import img5 from './fighterJet/5.jpg';
import img6 from './fighterJet/6.jpg';
import img7 from './fighterJet/7.jpg';
import img8 from './fighterJet/8.jpg';
import img9 from './fighterJet/9.jpg';
import img10 from './fighterJet/10.jpg';


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

  const images = [img0, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
      Unique_Slider_Name="Slider_1"
      gap={100}
      slideWidth={80} 

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
