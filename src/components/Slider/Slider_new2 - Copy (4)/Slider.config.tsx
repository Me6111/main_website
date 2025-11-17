import React from 'react';
import Slider from './Slider';

const SliderConfigComponent: React.FC = () => {
  return <Slider />;
};

const SliderConfig = {
  key: 'Slider',
  Name: 'Slider',
  ComponentUsageCodeRaw: `
<Slider />
`,
  ComponentInstance: <SliderConfigComponent />,
  dependencies: { React, Slider },
};

export default SliderConfig;
