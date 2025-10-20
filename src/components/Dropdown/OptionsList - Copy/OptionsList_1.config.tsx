import React from 'react';
import JSXParser from 'react-jsx-parser';
import OptionsList from './OptionsList';
import OptionItem from '../OptionItem/OptionItem';

import OptionsListSourceCodeRaw from './OptionsList.tsx?raw';
import OptionsListStyleCodeRaw from './OptionsList.css?raw';

// 10 predefined options with black & white icons
const optionsArray = [
  { name: 'Home', href: '/home', icon: '⌂' },
  { name: 'Profile', href: '/profile', icon: '☺' },
  { name: 'Messages', href: '/messages', icon: '✉' },
  { name: 'Settings', href: '/settings', icon: '⚙' },
  { name: 'Notifications', href: '/notifications', icon: '!' },
  { name: 'Help', href: '/help', icon: '?' },
  { name: 'Logout', href: '/logout', icon: '→' },
  { name: 'Search', href: '/search', icon: '🔎' },
  { name: 'Favorites', href: '/favorites', icon: '★' },
  { name: 'Downloads', href: '/downloads', icon: '↓' },
];

// Usage JSX as string with optionElement prop using OptionItem
const usageCodeRaw = `
<OptionsList 
  options={options} 
  optionElement={(option, index) => (
    <OptionItem
      key={index}
      name={option.name}
      href={option.href}
      background="linear-gradient(to right, #111, #333)"
      icon={<span style={{ color: 'white' }}>{option.icon}</span>}
    />
  )}
/>
`.trim();

const OptionsList_1Config = {
  key: 'OptionsList_1',
  Name: 'OptionsList_1',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: OptionsListSourceCodeRaw,
  ComponentStyleCodeRaw: OptionsListStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ OptionsList, OptionItem }}
      bindings={{ options: optionsArray }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, OptionsList, OptionItem },
};

export default OptionsList_1Config;
