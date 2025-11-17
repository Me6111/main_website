import React, { useState } from 'react';
import './ReadyComponents.css';
import SectionScreen from '../../../components/SectionScreen/SectionScreen';
import ReadyComponentsMain from './ReadyComponentsMain.png';
import Slider from '../../../components/Slider/Slider';
import CodeShowcase from './CodeShowcase/CodeShowcase';

import NavOptionConfig from '../../../components/NavBar/NavOption/NavOption.config';
import Arrow_Config from '../../../components/Icons/Arrow/Arrow.config';
import CheckBox_Config from '../../../components/CheckBox/CheckBox_Config';

import LearnMoreButtonConfig from '../../../components/Buttons/LearnMoreButton/LearnMoreButton.config';
import MainMenuConfig from '../../../components/MainMenu/MainMenu.config';
import NavOptionsConfig from '../../../components/NavOptions/NavOptions.config';
import NavBarConfig from '../../../components/NavBar/NavBar.config';

import InputField0_Config from '../../../components/Dropdown/InputField/InputField0.config'
import InputField1_Config from '../../../components/Dropdown/InputField/InputField1.config'
import InputField2_Config from '../../../components/Dropdown/InputField/InputField2.config'


import Dropdown0_Config from '../../../components/Dropdown/Dropdown/Dropdown0.config'
import Dropdown1_Config from '../../../components/Dropdown/Dropdown/Dropdown1.config'
import Dropdown_Tree_Config from '../../../components/Dropdown/Dropdown/Dropdown_Tree.config'

import OptionItemConfig from '../../../components/Dropdown/OptionItem/OptionItem.config'
import OptionsList0_Config from '../../../components/Dropdown/OptionsList/OptionsList_0.config'
import OptionsList1_Config from '../../../components/Dropdown/OptionsList/OptionsList_1.config'
import OptionsList_Dropdown_Config from '../../../components/Dropdown/OptionsList/OptionsList_Dropdown.config'





import Slider_new2_Config from '../../../components/Slider/Slider_new2/Slider.config';

import SliderConfig_0 from '../../../components/Slider/Sliders/Slider_0/Slider.config_0';
import SliderConfig_1 from '../../../components/Slider/Sliders/Slider_1/Slider.config_1';
import SliderConfig_2 from '../../../components/Slider/Sliders/Slider_2/Slider.config_2';
import SliderConfig_3 from '../../../components/Slider/Sliders/Slider_3/Slider.config_3';
import SliderConfig_4 from '../../../components/Slider/Sliders/Slider_4/Slider.config_4';


import CopyButton from '../../../components/Buttons/CopyButton/CopyButton.config';
import CodeBlockConfig from '../../../components/CodeBlock/CodeBlock.config';

SliderConfig_0.Name = 'Slider 0';
SliderConfig_1.Name = 'Slider 1';
SliderConfig_2.Name = 'Slider 2';
SliderConfig_3.Name = 'Slider 3';
SliderConfig_4.Name = 'Slider 4';


const codeShowcaseConfigs = {

Slider_new2_Config: Slider_new2_Config,




  //Slider_3: SliderConfig_3,
  //Slider_0: SliderConfig_0,
  //Slider_1: SliderConfig_1,
  //Slider_2: SliderConfig_2,
  //Slider_4: SliderConfig_4,



  CopyButton: CopyButton,


  NavBar: NavBarConfig,



  Dropdown_Tree_Config: Dropdown_Tree_Config,

  OptionItem: OptionItemConfig,

  CheckBox: CheckBox_Config,


  Arrow: Arrow_Config,









  OptionsList_0: OptionsList0_Config,


  /*
  OptionsList_Dropdown: OptionsList_Dropdown_Config,
  Dropdown_0: Dropdown0_Config,

  */

  //OptionsList_1: OptionsList1_Config,


  //Dropdown_1: Dropdown1_Config,



  /*
  InputField_0: InputField0_Config,
  InputField_1: InputField1_Config,
  InputField_2: InputField2_Config,








  NavBar: NavBarConfig,
  NavOptions: NavOptionsConfig,
  NavOption: NavOptionConfig,
  LearnMoreButton: LearnMoreButtonConfig,
  MainMenu: MainMenuConfig,


  CodeBlock: CodeBlockConfig,

  */
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
        NavType={{ NavType: 'arrows', Type: 0, Style: 0 }}
      />

      </div>
    </main>
  );
};

export default ReadyComponents;
