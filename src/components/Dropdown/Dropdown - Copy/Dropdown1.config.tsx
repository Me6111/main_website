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
  inputFieldDisplay="replace"
  inputFieldProps={{
    placeholder: "Type here...",
    onChange: (e) => console.log('Input value:', e.target.value),
    style: { width: '100%', padding: '6px 10px', boxSizing: 'border-box' }
  }}
/>
`.trim();

const Dropdown1_Config = {
  key: 'Dropdown1',
  Name: 'Dropdown1',
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

export default Dropdown1_Config;
