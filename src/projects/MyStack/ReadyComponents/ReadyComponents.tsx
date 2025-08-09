import React from 'react';
import './ReadyComponents.css';

import SectionScreen from '../../../components/SectionScreen/SectionScreen';
import ReadyComponentsMain from './ReadyComponentsMain.png';
import Slider from '../../../components/Slider/Slider';
import CodeShowcase from './CodeShowcase/CodeShowcase';



import NavOptionConfig from '../../../components/NavOption/NavOption.config';
import LearnMoreButtonConfig from '../../../components/LearnMoreButton/LearnMoreButton.config';
import MainMenuConfig from '../../../components/MainMenu/MainMenu.config';
import NavBarConfig from '../../../components/NavBar/NavBar.config';
import SliderConfig from '../../../components/Slider/Slider.config';

import CopyButton from '../../../components/CopyButton/CopyButton.config';
import CodeBlockConfig from '../../../components/CodeBlock/CodeBlock.config';









const ReadyComponents = () => {
  const renderedSlides: React.ReactNode[] = [

    <CodeShowcase {...NavBarConfig} />,
    <CodeShowcase {...NavOptionConfig} />,
    <CodeShowcase {...LearnMoreButtonConfig} />,
    <CodeShowcase {...MainMenuConfig} />,

    <CodeShowcase {...SliderConfig} />,


    <CodeShowcase {...CopyButton} />,
    <CodeShowcase {...CodeBlockConfig} />,
  ];


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
      <Slider id="ready-components-slider" slides={renderedSlides} />
    </main>
  );
};

export default ReadyComponents;
