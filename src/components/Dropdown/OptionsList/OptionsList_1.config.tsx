import React from 'react';
import JSXParser from 'react-jsx-parser';
import OptionsList from './OptionsList';
import OptionItem from '../OptionItem/OptionItem';

import OptionsListSourceCodeRaw from './OptionsList.tsx?raw';
import OptionsListStyleCodeRaw from './OptionsList.css?raw';

// Define exactly 10 specific options with simple black & white icons using plain Unicode or ASCII symbols
const optionsArray = [
  { name: 'Home', href: '/home', icon: '⌂' },        // Simple house symbol
  { name: 'Profile', href: '/profile', icon: '☺' },  // Simple smiley face as profile icon
  { name: 'Messages', href: '/messages', icon: '✉' }, // Envelope symbol
  { name: 'Settings', href: '/settings', icon: '⚙' }, // Gear symbol
  { name: 'Notifications', href: '/notifications', icon: '!' }, // Exclamation mark
  { name: 'Help', href: '/help', icon: '?' },         // Question mark
  { name: 'Logout', href: '/logout', icon: '→' },     // Right arrow
  { name: 'Search', href: '/search', icon: '🔎' },    // Magnifying glass outline (black & white)
  { name: 'Favorites', href: '/favorites', icon: '★' }, // Black star
  { name: 'Downloads', href: '/downloads', icon: '↓' }, // Down arrow
];

// Build JSX string for the optionItem prop that renders one OptionItem per call
const usageCodeRaw = `
<OptionsList 
  options={${JSON.stringify(optionsArray, null, 2)}} 
  optionItem={(option, index) => (
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
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, OptionsList, OptionItem },
};

export default OptionsList_1Config;
