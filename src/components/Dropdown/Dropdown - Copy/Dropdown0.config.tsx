// Dropdown0_Config.tsx
import React from 'react';
import Dropdown from './Dropdown';

import DropdownSourceCodeRaw from './Dropdown.tsx?raw';
import DropdownStyleCodeRaw from './Dropdown.css?raw';

// Generate 20 options dynamically
const optionsData = Array.from({ length: 20 }, (_, i) => ({
  name: `Option ${i + 1}`,
}));

const usageCodeRaw = `
<Dropdown
  options={optionsData}
  placeholder="Select an option"
  optionListPosition="right"
  onHover={true}
  onClick={false}
/>
`.trim();

const Dropdown0_Config = {
  key: 'Dropdown0',
  Name: 'Dropdown0',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: DropdownSourceCodeRaw,
  ComponentStyleCodeRaw: DropdownStyleCodeRaw,
  ComponentInstance: (
    <Dropdown
      options={optionsData}
      placeholder="Select an option"
      optionListPosition="right"
      onHover={true}
      onClick={false}
    />
  ),
  dependencies: { React, Dropdown },
};

export default Dropdown0_Config;
