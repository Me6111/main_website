import React from 'react';
import Sidebar from '../Sidebar';
import Dropdown from '../../../Dropdown/Dropdown/Dropdown';
import SidebarSourceCodeRaw from '../Sidebar.tsx?raw';
import SidebarStyleCodeRaw from '../Sidebar.css?raw';
import DropdownSourceCodeRaw from '../../../Dropdown/Dropdown/Dropdown.tsx?raw';
import DropdownStyleCodeRaw from '../../../Dropdown/Dropdown/Dropdown.css?raw';

const optionsList = [
  {
    label: 'Dashboard',
    options: [
      { label: 'Home', onClick: () => alert('Home clicked') },
      { label: 'Explore', onClick: () => alert('Explore clicked') },
      { label: 'Reels', onClick: () => alert('Reels clicked') },
      { label: 'Messages', onClick: () => alert('Messages clicked') },
    ],
    dropdownFeatures: {
      trigger: 'hover',
      arrow: true,
      rotateOnActive: true,
      arrowProps: { size: { rotate: 'left' }, hover: { rotate: 'bottom' } },
      CloseDropdown: { clickOutside: true, mouseOutside: true, clickOptionAgain: true },
    },
  },
  {
    label: 'Profile',
    options: [
      { label: 'View Profile', onClick: () => alert('View Profile clicked') },
      { label: 'Edit Profile', onClick: () => alert('Edit Profile clicked') },
      {
        label: 'Settings',
        subOptions: [
          { label: 'Privacy', onClick: () => alert('Privacy') },
          { label: 'Security', onClick: () => alert('Security') },
          {
            label: 'Advanced',
            subOptions: [
              { label: 'Data Download', onClick: () => alert('Download') },
              { label: 'Blocked Users', onClick: () => alert('Blocked Users') },
            ],
          },
        ],
      },
    ],
    dropdownFeatures: {
      arrow: true,
      rotateOnActive: true,
      arrowProps: { size: { rotate: 'left' }, hover: { rotate: 'bottom' } },
      CloseDropdown: { clickOutside: true, mouseOutside: true, clickOptionAgain: true },
    },
  },
  {
    label: 'Support',
    options: [
      { label: 'Help Center', onClick: () => alert('Help Center') },
      { label: 'Report Issue', onClick: () => alert('Report Issue') },
    ],
    dropdownFeatures: {
      arrow: true,
      rotateOnActive: true,
      arrowProps: { size: { rotate: 'left' }, hover: { rotate: 'bottom' } },
      CloseDropdown: { clickOutside: true, mouseOutside: true, clickOptionAgain: true },
    },
  },
  {
    label: 'Logout',
    options: [{ label: 'Sign Out', onClick: () => alert('Logged out') }],
    dropdownFeatures: {
      arrow: true,
      rotateOnActive: true,
      arrowProps: { size: { rotate: 'left' }, hover: { rotate: 'bottom' } },
      CloseDropdown: { clickOutside: true, mouseOutside: true, clickOptionAgain: true },
    },
  },
];

const SidebarDropdownInstance = (
  <Sidebar
    Opened={true}
    CloseButton={false}
    OpenButton={false}
    Style={{ overflowX: 'hidden', overflowY: 'auto', height: '100%', width: '200px' }}
    Style_opened={{ transform: 'translateX(0)' }}
    content={
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {optionsList.map(({ label, options, dropdownFeatures }) => (
          <Dropdown
            key={label}
            label={label}
            options={options}
            trigger={dropdownFeatures?.trigger || 'click'}
            arrow={dropdownFeatures?.arrow}
            rotateOnActive={dropdownFeatures?.rotateOnActive}
            arrowProps={dropdownFeatures?.arrowProps}
            CloseDropdown={dropdownFeatures?.CloseDropdown}
          />
        ))}
      </div>
    }
  />
);

const SidebarDropdown_Config = {
  key: 'SidebarDropdown',
  Name: 'Sidebar Dropdown',
  ComponentUsageCodeRaw: '',
  ComponentDefinitionCodeRaw: SidebarSourceCodeRaw + '\n\n' + DropdownSourceCodeRaw,
  ComponentStyleCodeRaw: SidebarStyleCodeRaw + '\n\n' + DropdownStyleCodeRaw,
  ComponentInstance: SidebarDropdownInstance,
  dependencies: { React, Sidebar, Dropdown },
};

export default SidebarDropdown_Config;
