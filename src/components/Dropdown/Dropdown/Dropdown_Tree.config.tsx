import React from 'react';
import Dropdown from './Dropdown';
import DropdownSourceCodeRaw from './Dropdown.tsx?raw';
import DropdownStyleCodeRaw from './Dropdown.css?raw';

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

const usageCodeRaw = `<Dropdown options={optionsData} label="Menu" trigger="hover" />`;

const ComponentInstance = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Dropdown label="Menu" options={optionsData} trigger="hover" />
  </div>
);

const Dropdown_Tree_Config = {
  key: 'Dropdown_Tree',
  Name: 'Dropdown_Tree',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: DropdownSourceCodeRaw,
  ComponentStyleCodeRaw: DropdownStyleCodeRaw,
  ComponentInstance,
  dependencies: { React, Dropdown },
};

export default Dropdown_Tree_Config;
