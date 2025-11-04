import React, { useState } from 'react';
import NavBar from '../../../NavBar/NavBar';
import NavBarSourceCodeRaw from '../../../NavBar/NavBar.tsx?raw';
import NavBarStyleCodeRaw from '../../../NavBar/NavBar.css?raw';

import PhotoSlide from '../../PhotoSlide/PhotoSlide';
import Slider from '../../Slider';

import img0 from './images/0.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';

const sections = [
  { name: 'Option 1', href: '/option1' },
  { name: 'Option 2', href: '/option2' },
  { name: 'Option 3', href: '/option3' },
];

const images = [img0, img1, img2, img3, img4];

const SliderInNavBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = images.map((src, index) => {
    let position: 'left' | 'right' | 'active' = 'right';
    if (index === activeIndex) position = 'active';
    else if (index < activeIndex) position = 'left';

    return (
      <PhotoSlide
        key={index}
        position={position}
        images={[<img src={src} alt={`Slide ${index + 1}`} />]} // Correct prop
      />
    );
  });

  return (
    <div className="slider-wrapper">
      <Slider
        Unique_Slider_Name="Slider_In_NavBar"
        gap={0}
        slideWidths={{ active: 100, left: 100, right: 100 }}
        slides={slides}
        NavType={{ NavType: 'arrows', Type: 0, Style: 1 }}
        onSlideChange={setActiveIndex} // Optional: update activeIndex if needed
      />
    </div>
  );
};

const customContent = <SliderInNavBar />;

const usageCodeRaw = `<NavBar
  sections={[
    { name: 'Option 1', href: '/option1' },
    { name: 'Option 2', href: '/option2' },
    { name: 'Option 3', href: '/option3' },
  ]}
  content={<SliderInNavBar />}
/>`;

const SliderConfig = {
  key: 'NavBar',
  Name: 'NavBar',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: NavBarSourceCodeRaw,
  ComponentStyleCodeRaw: NavBarStyleCodeRaw,
  ComponentInstance: (
    <NavBar
      sections={sections}
      disappearing_navbar={true}
      disappearing_curtain={true}
      navbar_hide_threshold={100}
      curtain_hide_threshold={0}
      content={customContent}
    />
  ),
  dependencies: { React, NavBar, Slider },
};

export default SliderConfig;
