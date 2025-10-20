import React from 'react';
import JSXParser from 'react-jsx-parser';
import Dropdown from './Dropdown';
import OptionsList from '../OptionsList/OptionsList'; // Assuming this displays a plain list

import DropdownSourceCodeRaw from './Dropdown.tsx?raw';
import DropdownStyleCodeRaw from './Dropdown.css?raw';

// Options data
const optionsData = [
  { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
  { label: 'Settings', onClick: () => alert('Settings clicked') },
  {
    label: 'Profile',
    subOptions: [
      { label: 'Edit Profile', onClick: () => alert('Edit Profile') },
      { label: 'Change Password', onClick: () => alert('Change Password') },
      {
        label: 'Privacy',
        subOptions: [
          { label: 'Blocked Users', onClick: () => alert('Blocked Users') },
          { label: 'Activity Status', onClick: () => alert('Activity Status') },
        ],
      },
    ],
  },
  {
    label: 'Support',
    subOptions: [
      { label: 'Contact Us', onClick: () => alert('Contact Us') },
      { label: 'FAQ', onClick: () => alert('FAQ') },
    ],
  },
  { label: 'Logout', onClick: () => alert('Logging out...') },
];

// Usage JSX as string
const usageCodeRaw = `
<Dropdown
  options={optionsData}
  label="Select an option"
  trigger="hover"
/>
`.trim();

// Combined instance rendering both components
const ComponentInstance = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    {/* Dropdown Tree */}
    <JSXParser
      components={{ Dropdown }}
      bindings={{ optionsData }}
      jsx={usageCodeRaw}
    />

    {/* Plain List */}
    <OptionsList options={optionsData} />
  </div>
);

// Export config
const Dropdown_Tree_Config = {
  key: 'Dropdown_Tree',
  Name: 'Dropdown_Tree',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: DropdownSourceCodeRaw,
  ComponentStyleCodeRaw: DropdownStyleCodeRaw,
  ComponentInstance,
  dependencies: { React, Dropdown, OptionsList },
};

export default Dropdown_Tree_Config;
