import React from 'react';
import Dropdown from './Dropdown';
import DropdownSourceCodeRaw from './Dropdown.tsx?raw';
import DropdownStyleCodeRaw from './Dropdown.css?raw';

const defaultArrowProps = { size: { rotate: 'left' }, hover: { rotate: 'right' } };

const optionsData = [
  {
    label: 'Menu',
    arrowProps: defaultArrowProps,
    subOptions: [
      { label: 'Dashboard', onClick: () => alert('Dashboard clicked'), arrowProps: defaultArrowProps },
      { label: 'Settings', onClick: () => alert('Settings clicked'), arrowProps: defaultArrowProps },
      {
        label: 'Profile',
        arrowProps: defaultArrowProps,
        subOptions: [
          { label: 'Edit Profile', onClick: () => alert('Edit Profile'), arrowProps: defaultArrowProps },
          { label: 'Change Password', onClick: () => alert('Change Password'), arrowProps: defaultArrowProps },
          {
            label: 'Privacy',
            arrowProps: defaultArrowProps,
            subOptions: [
              { label: 'Blocked Users', onClick: () => alert('Blocked Users'), arrowProps: defaultArrowProps },
              { label: 'Activity Status', onClick: () => alert('Activity Status'), arrowProps: defaultArrowProps },
            ],
          },
        ],
      },
      {
        label: 'Support',
        arrowProps: defaultArrowProps,
        subOptions: [
          { label: 'Contact Us', onClick: () => alert('Contact Us'), arrowProps: defaultArrowProps },
          { label: 'FAQ', onClick: () => alert('FAQ'), arrowProps: defaultArrowProps },
        ],
      },
      { label: 'Logout', onClick: () => alert('Logging out...'), arrowProps: defaultArrowProps },
    ],
  },
];

const usageCodeRaw = `<Dropdown options={optionsData} trigger="hover" />`;

const ComponentInstance = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Dropdown options={optionsData} trigger="hover" />
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
