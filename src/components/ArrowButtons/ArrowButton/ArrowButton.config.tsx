import React from 'react';
import JSXParser from 'react-jsx-parser';

import ArrowButton from './ArrowButton';
import ArrowButtonSourceCodeRaw from './ArrowButton.tsx?raw';
import ArrowButtonStyleCodeRaw from './ArrowButton.css?raw';

const usageCodeRaw = `
<div style={{ display: 'flex', gap: '1rem', transform: 'scale(1.5)', alignItems: 'center' }}>
  <ArrowButton 
    Style="Style_0"
    square={true}
    showArrow={true} 
    arrowDirection="right" 
    arrowProps={{
      arrowWidth: 20,
      arrowHeight: 30,
      notch: 10,
      hover: { width: 25, height: 35, notch: 15 },
    }} 
  />
</div>
`.trim();

const ArrowButton_Config = {
  key: 'ArrowButton',
  Name: 'ArrowButton',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: ArrowButtonSourceCodeRaw,
  ComponentStyleCodeRaw: ArrowButtonStyleCodeRaw,
  ComponentInstance: (
    <JSXParser components={{ ArrowButton }} jsx={usageCodeRaw} />
  ),
  dependencies: { React, ArrowButton },
};

export default ArrowButton_Config;
