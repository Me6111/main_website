import React, { useState } from 'react';
import './ReadyComponents.css';
import SectionScreen from '../../../components/SectionScreen/SectionScreen';
import ReadyComponentsMain from './ReadyComponentsMain.png';
import Slider from '../../../components/Slider/Slider';
import CodeShowcase from './CodeShowcase/CodeShowcase';

import NavOptionConfig from '../../../components/NavOption/NavOption.config';
import LearnMoreButtonConfig from '../../../components/LearnMoreButton/LearnMoreButton.config';
import MainMenuConfig from '../../../components/MainMenu/MainMenu.config';
import NavOptionsConfig from '../../../components/NavOptions/NavOptions.config';
import NavBarConfig from '../../../components/NavBar/NavBar.config';
import SliderConfig_0 from '../../../components/Slider/Sliders/Slider_0/Slider.config_0';
import SliderConfig_1 from '../../../components/Slider/Sliders/Slider_1/Slider.config_1';
import SliderConfig_2 from '../../../components/Slider/Sliders/Slider_2/Slider.config_2';
import CopyButton from '../../../components/CopyButton/CopyButton.config';
import CodeBlockConfig from '../../../components/CodeBlock/CodeBlock.config';

// ✅ Manually inject unique names for sliders
SliderConfig_0.Name = 'Slider 0';
SliderConfig_1.Name = 'Slider 1';
SliderConfig_2.Name = 'Slider 2';

// ✅ Define config as a dictionary
const codeShowcaseConfigs = {
  Slider_0: SliderConfig_0,
  Slider_1: SliderConfig_1,
  Slider_2: SliderConfig_2,
  NavBar: NavBarConfig,
  NavOptions: NavOptionsConfig,
  NavOption: NavOptionConfig,
  LearnMoreButton: LearnMoreButtonConfig,
  MainMenu: MainMenuConfig,
  CopyButton: CopyButton,
  CodeBlock: CodeBlockConfig,
};

const ReadyComponents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedSlides = Object.entries(codeShowcaseConfigs).map(([key, config], index) => (
    <CodeShowcase
      key={key}
      Name={config.Name}
      ComponentUsageCodeRaw={config.ComponentUsageCodeRaw}
      ComponentDefinitionCodeRaw={config.ComponentDefinitionCodeRaw}
      ComponentStyleCodeRaw={config.ComponentStyleCodeRaw}
      language={config.language}
      dependencies={config.dependencies}
      ComponentInstance={config.ComponentInstance}
      isActive={activeIndex === index}
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
      <div className="s0">
        <Slider
          Unique_Slider_Name="readyComponents-slider"
          gap={500}
          slideWidths={{ active: 100, left: 100, right: 100 }}
          slides={renderedSlides}
          onSlideChange={setActiveIndex}
        />
      </div>
    </main>
  );
};

export default ReadyComponents;
