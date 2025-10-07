import React from 'react';
import JSXParser from 'react-jsx-parser';

import OptionItem from './OptionItem';
import OptionItemSourceCodeRaw from './OptionItem.tsx?raw';
import OptionItemStyleCodeRaw from './OptionItem.css?raw';

// Example usage with an inline black/white SVG icon
const usageCodeRaw = `
<OptionItem 
  name="Dashboard" 
  href="/dashboard" 
  background="linear-gradient(to right, #111, #333)" 
  icon={
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" fill="white"/>
    </svg>
  } 
  tooltip="Go to dashboard" 
/>
`.trim();

const OptionItemConfig = {
  key: 'OptionItem',
  Name: 'OptionItem',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: OptionItemSourceCodeRaw,
  ComponentStyleCodeRaw: OptionItemStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ OptionItem }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, OptionItem },
};

export default OptionItemConfig;
