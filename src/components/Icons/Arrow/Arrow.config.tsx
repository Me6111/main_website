import React from 'react';
import JSXParser from 'react-jsx-parser';

import Arrow from './Arrow';
import ArrowSourceCodeRaw from './Arrow.tsx?raw';

const usageCodeRaw = `
<div style={{ display: 'flex', gap: '50px', transform: 'scale(5)', alignItems: 'center' }}>

  <Arrow
    size={{
      width: 25,
      height: 10,
      notch: 5,
      rotate: -90,
    }}
    hover={{
      notch: 0,
      rotate: 0,
      transition: 0.5,
    }}
  />


</div>
`.trim();

const Arrow_Config = {
  key: 'Arrow',
  Name: 'Arrow',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: ArrowSourceCodeRaw,
  ComponentInstance: (
    <JSXParser components={{ Arrow }} jsx={usageCodeRaw} />
  ),
  dependencies: { React, Arrow },
};

export default Arrow_Config;
