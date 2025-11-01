import React from 'react';
import Dropdown from './Dropdown';
import OptionItem from '../OptionItem/OptionItem';
import DropdownSourceCodeRaw from './Dropdown.tsx?raw';
import DropdownStyleCodeRaw from './Dropdown.css?raw';

// Example dropdown options
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

// Recursive option rendering using OptionItem
const renderOptions = (options: any[]): React.ReactNode =>
  options.map((option: any, index: number) => (
    <OptionItem
      key={index}
      content={option.label}
      expandIcon={!!option.subOptions}
      onClick={option.onClick}
    >
      {option.subOptions && option.subOptions.length > 0 && (
        <div className="DropdownSubmenu Open">
          {renderOptions(option.subOptions)}
        </div>
      )}
    </OptionItem>
  ));

// JSX code snippet for documentation preview
const usageCodeRaw = `
<Dropdown
  options={optionsData}
  label="Menu"
  trigger="hover"
/>
`.trim();

// Component instance for preview/demo
const ComponentInstance = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Dropdown label="Menu" options={optionsData} trigger="hover" />

    {/* Standalone rendered tree (for documentation visualization) */}
    <div className="DropdownMenu">{renderOptions(optionsData)}</div>
  </div>
);

// Export dropdown tree configuration for docs or preview system
const Dropdown_Tree_Config = {
  key: 'Dropdown_Tree',
  Name: 'Dropdown_Tree',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: DropdownSourceCodeRaw,
  ComponentStyleCodeRaw: DropdownStyleCodeRaw,
  ComponentInstance,
  dependencies: { React, Dropdown, OptionItem },
};

export default Dropdown_Tree_Config;
