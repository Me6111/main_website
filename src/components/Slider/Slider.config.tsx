import React from 'react';
import Slider from './Slider';
import SliderSourceCodeRaw from './Slider.tsx?raw';
import SliderStyleCodeRaw from './Slider.css?raw';

const usageCodeRaw = `<Slider
  id="inner-slider-showcase"
  slides={[
    <div key={1}>1</div>,
    <div key={2}>2</div>,
    <div key={3}>3</div>,
  ]}
/>`;

const SliderConfig = {
  key: 'Slider',
  Name: 'Slider',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: SliderSourceCodeRaw,
  ComponentStyleCodeRaw: SliderStyleCodeRaw,
  ComponentInstance: (
    <Slider
      id="inner-slider-showcase"
      slides={[
        <div key={1}>1</div>,
        <div key={2}>2</div>,
        <div key={3}>3</div>,
      ]}
    />
  ),
  dependencies: { React, Slider },
};

export default SliderConfig;
