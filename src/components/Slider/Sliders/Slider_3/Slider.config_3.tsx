import React, { useState } from 'react';
import Slider from '../../Slider';
import PhotoSlide from '../../PhotoSlide/PhotoSlide';

import SliderSourceCodeRaw from '../../Slider.tsx?raw';
import SliderStyleCodeRaw from '../../Slider.css?raw';

import img0 from './images/0.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';

const usageCodeRaw = `<Slider
  Unique_Slider_Name="Slider_3"
  slides={[PhotoSlide components as above]}
  gap={100}
  NavType="arrows"
  Track_Indicator_Dragging={true}
/>`;

const SliderConfigComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [img0, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const slides = images.map((src, index) => {
    let position: 'left' | 'right' | 'active' = 'right';
    if (index === activeIndex) position = 'active';
    else if (index < activeIndex) position = 'left';

    return (
      <PhotoSlide
        key={index}
        position={position}
        images={[
          <img src={src} alt={`Slide ${index + 1}`} />,
          <img src={src} alt={`Slide ${index + 1} duplicate`} />,
        ]}
      />
    );
  });

  return (
    <Slider
      Unique_Slider_Name="Slider_3"
      gap={0}
      slideWidths={{ active: 80, left: 80, right: 80 }}
      slides={slides}
      NavType={{ NavType: 'arrows', Type: 0, Style: 1 }}
      transitionDuration={300}
      onSlideChange={setActiveIndex}
      Track_Indicator_Dragging={true} 
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
