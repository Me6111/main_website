import React from 'react';
import './ReadyComponents.css';

import SectionScreen from '../../../SectionScreen/SectionScreen';
import ReadyComponentsMain from './ReadyComponentsMain.png';
import Slider from './Slider/Slider';

import LearnMoreButtonSourceCodeRaw from '../../../SectionScreen/LearnMoreButton/LearnMoreButton.tsx?raw';
import LearnMoreButtonStyleCodeRaw from '../../../SectionScreen/LearnMoreButton/LearnMoreButton.css?raw';
import LearnMoreButton from '../../../SectionScreen/LearnMoreButton/LearnMoreButton';

import CopyButtonSourceCodeRaw from '../../../CopyButton/CopyButton.tsx?raw';
import CopyButtonStyleCodeRaw from '../../../CopyButton/CopyButton.css?raw';
import CopyButton from '../../../CopyButton/CopyButton';

const ReadyComponents = () => {
  const contentData = [
    {
      name: 'CopyButton',
      usage: `<CopyButton codeToCopy="Hello World!" size={18} />`,
      definition: CopyButtonSourceCodeRaw,
      style: CopyButtonStyleCodeRaw,
      Component: () => <CopyButton codeToCopy="Hello World!" size={18} />,
    },
    {
      name: 'LearnMoreButton',
      usage: '<LearnMoreButton text="Explore" href="#" stagger={false} />',
      definition: LearnMoreButtonSourceCodeRaw,
      style: LearnMoreButtonStyleCodeRaw,
      Component: LearnMoreButton,
    },
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

      <Slider contentData={contentData} />
    </main>
  );
};

export default ReadyComponents;
