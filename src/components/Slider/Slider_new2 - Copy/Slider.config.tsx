import React from 'react';
import Slider from './Slider';

const config = {
  orientation: 'vertical',
  slides: [0, 1, 2, 3, 4].map((number) => (
    <div
      key={number}
      style={{
        backgroundColor: 'rgba(0, 255, 30, 0.44)',
        border: '1px solid white',
        color: 'white',
        textAlign: 'center',
        fontSize: '2em',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {number}
    </div>
  )),
};

const SliderConfigComponent: React.FC = () => {
  return <Slider {...config} />;
};

const Slider_new2_Config = {
  key: 'Slider',
  Name: 'Slider',
  ComponentUsageCodeRaw: `
<Slider
  orientation="${config.orientation}"
  slides={${JSON.stringify(config.slides)}}
/>
`,
  ComponentInstance: <SliderConfigComponent />,
  dependencies: { React, Slider },
};

export default Slider_new2_Config;
