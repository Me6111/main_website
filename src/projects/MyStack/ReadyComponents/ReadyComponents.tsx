import React, { useState } from 'react';
import './ReadyComponents.css';

import SectionScreen from '../../../components/SectionScreen/SectionScreen';
import ReadyComponentsMain from './ReadyComponentsMain.png';
import Slider from '../../../components/Slider_2/Slider';
import CodeShowcase from './CodeShowcase/CodeShowcase';

import NavOptionConfig from '../../../components/NavOption/NavOption.config';
import LearnMoreButtonConfig from '../../../components/LearnMoreButton/LearnMoreButton.config';
import MainMenuConfig from '../../../components/MainMenu/MainMenu.config';

import NavOptionsConfig from '../../../components/NavOptions/NavOptions.config';
import NavBarConfig from '../../../components/NavBar/NavBar.config';
import SliderConfig_0 from '../../../components/Slider_2/Slider.config_0';
import SliderConfig_1 from '../../../components/Slider_2/Slider.config_1';
//import SliderConfig_2 from '../../../components/Slider_2/Slider.config_2';


import CopyButton from '../../../components/CopyButton/CopyButton.config';
import CodeBlockConfig from '../../../components/CodeBlock/CodeBlock.config';

const ReadyComponents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const configs = [
    SliderConfig_0,
    SliderConfig_1,
    //SliderConfig_2,


    NavBarConfig,
    NavOptionsConfig,
    NavOptionConfig,
    LearnMoreButtonConfig,
    MainMenuConfig,
    CopyButton,
    CodeBlockConfig,
  ];

  // Pass isActive prop to each CodeShowcase slide
  const renderedSlides = configs.map((config, index) => (
    <CodeShowcase
      key={index}
      {...config}
      isActive={activeIndex === index} // THIS is critical
    />
  ));

  return (
    <main>
      <SectionScreen
        id="readyComponents"
        Image={{ item: ReadyComponentsMain, stagger: true }}
        header1={{ text: 'Ready Components', stagger: true }}
        p={{ text: 'just copy and paste', stagger: true }}
        HeaderFading={true}
        CenteredHeader={true}
      />
      <Slider
        id="ready-components-slider"
        slides={renderedSlides}
        onSlideChange={setActiveIndex}
      />
    </main>
  );
};

export default ReadyComponents;
