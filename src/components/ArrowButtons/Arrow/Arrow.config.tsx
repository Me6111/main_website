import React from 'react';
import JSXParser from 'react-jsx-parser';

import Arrow from './Arrow';
import ArrowSourceCodeRaw from './Arrow.tsx?raw';
import ArrowStyleCodeRaw from './Arrow.css?raw';

const usageCodeRaw = `
<div style={{ display: 'flex', gap: '1rem', transform: 'scale(4)', alignItems: 'center' }}>
<Arrow
  direction="up"
  arrowWidth={30}
  arrowHeight={30}
  notch={25}
  hover={{ notch: 15}}
  transition={0.5} 
/>

<Arrow
  direction="right"
  arrowWidth={20}
  arrowHeight={20}
  notch={20}
  hover={{ notch: 5, height: 15 }}
  transition={0.3}
/>

<Arrow
  direction="down"
  arrowWidth={20}
  arrowHeight={15}
  notch={10}
  hover={{ notch: 15, height: 20 }}
  transition={0.5}
/>

<Arrow
  direction="left"
  arrowWidth={30}
  arrowHeight={15}
  notch={16}
  hover={{ notch: 20, height: 30 }}
  transition={0.25}
/>

</div>
`.trim();

const Arrow_Config = {
  key: 'Arrow',
  Name: 'Arrow',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: ArrowSourceCodeRaw,
  ComponentStyleCodeRaw: ArrowStyleCodeRaw,
  ComponentInstance: (
    <JSXParser components={{ Arrow }} jsx={usageCodeRaw} />
  ),
  dependencies: { React, Arrow },
};

export default Arrow_Config;
