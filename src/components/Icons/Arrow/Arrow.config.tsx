import React from 'react';
import JSXParser from 'react-jsx-parser';

import Arrow from './Arrow';
import ArrowSourceCodeRaw from './Arrow.tsx?raw';
import ArrowStyleCodeRaw from './Arrow.css?raw';

const usageCodeRaw = `
<div style={{ display: 'flex', gap: '50px', transform: 'scale(3)', alignItems: 'center' }}>

  <Arrow 
    size={{
      width: 20,
      height: 10,
      notch: 3,
      rotate: 90,
    }}
    hover={{
      width: 15,
      height: 15,
      notch: 4,
      rotate: 180,
      transition: 0.5,
    }} 
  />

  <Arrow
    size={{
      width: 18,
      height: 12,
      notch: 2,
      rotate: 0,
    }}
    hover={{
      width: 22,
      height: 15,
      notch: 1,
      rotate: 90,
      transition: 0.2,
    }}
  />

  <Arrow
    size={{
      width: 25,
      height: 10,
      notch: 5,
      rotate: 0,
    }}
    hover={{
      width: 30,
      height: 12,
      notch: 5,
      rotate: 180,
      transition: 0.1,
    }}
  />
  


  <Arrow
    size={{
      width: 25,
      height: 10,
      notch: 0,
      rotate: -90,
    }}
    hover={{
      rotate: 90,
      transition: 0.1,
    }}
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
