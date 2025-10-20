import React from 'react';
import JSXParser from 'react-jsx-parser';

import OptionsList from './OptionsList';
import OptionsListSourceCodeRaw from './OptionsList.tsx?raw';
import OptionsListStyleCodeRaw from './OptionsList.css?raw';

import OptionItem from '../OptionItem/OptionItem';
import Dropdown from '../Dropdown/Dropdown';

const optionsArray = [
  { name: 'Home', icon: '⌂' },
  { name: 'Profile', icon: '☺' },
  {
    name: 'More Options',
    options: [
      { name: 'Settings', icon: '⚙' },
      { name: 'Notifications', icon: '!' },
    ],
  },
  {
    name: 'Help',
    options: [
      { name: 'Contact', icon: '?' },
      { name: 'Docs', icon: '📘' },
    ],
  },
  { name: 'Logout', icon: '→' },
];

// ✅ JSX string that correctly describes how this renders
const usageCodeRaw = `
<OptionsList
  options={options}
  optionElement={(option, index) =>
    option.options ? (
      <Dropdown
        options={option.options}
        placeholder={option.name}
        optionListPosition="right"
        onHover={true}
        onClick={false}
        optionElement={(subOption, subIndex) => (
          <OptionItem
            name={subOption.name}
            icon={<span style={{ color: 'white' }}>{subOption.icon}</span>}
            background="linear-gradient(to right, #222, #444)"
          />
        )}
      />
    ) : (
      <OptionItem
        name={option.name}
        icon={<span style={{ color: 'white' }}>{option.icon}</span>}
        background="linear-gradient(to right, #111, #333)"
      />
    )
  }
/>
`.trim();

const OptionsList_Dropdown_Config = {
  key: 'OptionsList_Dropdown',
  Name: 'OptionsList_Dropdown',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: OptionsListSourceCodeRaw,
  ComponentStyleCodeRaw: OptionsListStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ OptionsList, OptionItem, Dropdown }}
      bindings={{ options: optionsArray }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, OptionsList, OptionItem, Dropdown },
};

export default OptionsList_Dropdown_Config;
