import React from 'react';
import './ReadyComponents.css';

import SectionScreen from '../../../components/SectionScreen/SectionScreen';
import ReadyComponentsMain from './ReadyComponentsMain.png';
import Slider from '../../../components/Slider/Slider';
import CodeShowcase from './CodeShowcase/CodeShowcase';

import LearnMoreButtonSourceCodeRaw from '../../../components/LearnMoreButton/LearnMoreButton.tsx?raw';
import LearnMoreButtonStyleCodeRaw from '../../../components/LearnMoreButton/LearnMoreButton.css?raw';
import LearnMoreButton from '../../../components/LearnMoreButton/LearnMoreButton';

import CopyButtonSourceCodeRaw from '../../../components/CopyButton/CopyButton.tsx?raw';
import CopyButtonStyleCodeRaw from '../../../components/CopyButton/CopyButton.css?raw';
import CopyButton from '../../../components/CopyButton/CopyButton';

import CodeBlockSourceCodeRaw from '../../../components/CodeBlock/CodeBlock.tsx?raw';
import CodeBlockStyleCodeRaw from '../../../components/CodeBlock/CodeBlock.css?raw';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import SliderSourceCodeRaw from '../../../components/Slider/Slider.tsx?raw';
import SliderStyleCodeRaw from '../../../components/Slider/Slider.css?raw';

const ReadyComponents = () => {
  const renderedSlides: React.ReactNode[] = [
    <CodeShowcase
      key="CopyButton"
      Name="CopyButton"
      ComponentUsageCodeRaw={`<CopyButton textToCopy="Hello World!" size={18} />`}
      ComponentDefinitionCodeRaw={CopyButtonSourceCodeRaw}
      ComponentStyleCodeRaw={CopyButtonStyleCodeRaw}
      dependencies={{ React, CopyButton }}
    />,
    <CodeShowcase
      key="LearnMoreButton"
      Name="LearnMoreButton"
      ComponentUsageCodeRaw={`<LearnMoreButton text="learn more" href="#" stagger={false} />`}
      ComponentDefinitionCodeRaw={LearnMoreButtonSourceCodeRaw}
      ComponentStyleCodeRaw={LearnMoreButtonStyleCodeRaw}
      dependencies={{ React, LearnMoreButton }}
    />,
    <CodeShowcase
      key="CodeBlock"
      Name="CodeBlock"
      ComponentUsageCodeRaw={`<CodeBlock code="console.log('Hello')" language="tsx" />`}
      ComponentDefinitionCodeRaw={CodeBlockSourceCodeRaw}
      ComponentStyleCodeRaw={CodeBlockStyleCodeRaw}
      dependencies={{ React, CodeBlock }}
    />,
    <CodeShowcase
      key="Slider"
      Name="Slider"
      ComponentInstance={
        <Slider
          id="inner-slider-showcase"
          slides={[
            <div key={1}>1</div>,
            <div key={2}>2</div>,
            <div key={3}>3</div>,
          ]}
        />
      }
      ComponentUsageCodeRaw={`<Slider
  id="inner-slider-showcase"
  slides={[
    <div key={1}>1</div>,
    <div key={2}>2</div>,
    <div key={3}>3</div>,
  ]}
/>`}
      ComponentDefinitionCodeRaw={SliderSourceCodeRaw}
      ComponentStyleCodeRaw={SliderStyleCodeRaw}
      dependencies={{ React, Slider }}
    />,
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
      {/* Outer slider with unique ID */}
      <Slider id="ready-components-slider" slides={renderedSlides} />
    </main>
  );
};

export default ReadyComponents;
