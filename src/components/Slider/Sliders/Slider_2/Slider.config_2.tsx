import React, { useState } from 'react';
import Slider from '../../Slider';
import PhotoSlide from '../../PhotoSlide/PhotoSlide';

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

// Corrected usage code raw (all 8 images)
const usageCodeRaw = `
<Slider
  id="Slider-config"
  slides={[
    <PhotoSlide key={0} position="active" images={[<img src={img0} alt="Slide 1" />]} />,
    <PhotoSlide key={1} position="right" images={[<img src={img1} alt="Slide 2" />]} />,
    <PhotoSlide key={2} position="right" images={[<img src={img2} alt="Slide 3" />]} />,
    <PhotoSlide key={3} position="right" images={[<img src={img3} alt="Slide 4" />]} />,
    <PhotoSlide key={4} position="right" images={[<img src={img4} alt="Slide 5" />]} />,
    <PhotoSlide key={5} position="right" images={[<img src={img5} alt="Slide 6" />]} />,
    <PhotoSlide key={6} position="right" images={[<img src={img6} alt="Slide 7" />]} />,
    <PhotoSlide key={7} position="right" images={[<img src={img7} alt="Slide 8" />]} />,
  ]}
  gap={100}
  slideWidth="25%" 
/>
`;

const SliderConfigComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [img0, img1, img2, img3, img4, img5, img6, img7];

  const slides = images.map((src, index) => {
    let position: 'left' | 'right' | 'active' = 'right';
    if (index === activeIndex) position = 'active';
    else if (index < activeIndex) position = 'left';

    return (
      <PhotoSlide
        key={index}
        position={position}
        images={[<img src={src} alt={`Slide ${index + 1}`} />]} 
      />
    );
  });

  return (
    <Slider
      Unique_Slider_Name="Slider_2"
      gap={0}
      slideWidths={{ active: 50, left: 10, right: 10 }}
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
