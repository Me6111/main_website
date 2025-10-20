import React from 'react';
import JSXParser from 'react-jsx-parser';

import Square from './Square';
import SquareSourceCodeRaw from './Square.tsx?raw';
import SquareStyleCodeRaw from './Square.css?raw';

const usageCodeRaw = `
<div style={{ display: 'flex', gap: '1rem', transform: 'scale(2)' }}>
  <Square />
  <Square size={30} />
  <Square size={40} />
  <Square size={20} />
</div>
`.trim();

const Square_Config = {
  key: 'Square',
  Name: 'Square',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: SquareSourceCodeRaw,
  ComponentStyleCodeRaw: SquareStyleCodeRaw,
  ComponentInstance: (
    <JSXParser components={{ Square }} jsx={usageCodeRaw} />
  ),
  dependencies: { React, Square },
};

export default Square_Config;
