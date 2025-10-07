import React from 'react';
import JSXParser from 'react-jsx-parser';

import Dropdown from './Dropdown';
import OptionsList from '../OptionsList/OptionsList';

import DropdownSourceCodeRaw from './Dropdown.tsx?raw';
import DropdownStyleCodeRaw from './Dropdown.css?raw';

const optionsData = [
  { name: 'Option A' },
  { name: 'Option B' },
  { name: 'Option C' }
];

const usageCodeRaw = `
<Dropdown 
  title="Select an option"
  options={optionsData}
  displayMode="replace"
/>
`.trim();

const Dropdown0_Config = {
  key: 'Dropdown0',
  Name: 'Dropdown0',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: DropdownSourceCodeRaw,
  ComponentStyleCodeRaw: DropdownStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ Dropdown, OptionsList }}
      bindings={{ optionsData }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, Dropdown, OptionsList },
};

export default Dropdown0_Config;
