import React from 'react';
import JSXParser from 'react-jsx-parser';
import CopyButton from './CopyButton';
import CopyButtonSourceCodeRaw from './CopyButton.tsx?raw';
import CopyButtonStyleCodeRaw from './CopyButton.css?raw';

const usageCodeRaw = `<CopyButton textToCopy="Hello World!" size={18} />`;

const CopyButton_Config = {
  key: 'CopyButton',
  Name: 'CopyButton',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: CopyButtonSourceCodeRaw,
  ComponentStyleCodeRaw: CopyButtonStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ CopyButton: CopyButton }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, CopyButton },
};

export default CopyButton_Config;
