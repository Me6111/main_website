import React from 'react';
import Sidebar from '../Sidebar';
import Dropdown from '../../../Dropdown/Dropdown/Dropdown';
import OptionItem from '../../../Dropdown/OptionItem/OptionItem';

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

const SidebarDropdownComponent: React.FC = () => {
  return (
    <Sidebar
      content={
        <Dropdown label="Menu" options={optionsData} trigger="hover" />
      }
      expanded={true}
      position="left: 0"
      size="300px, 100%"
      closeByClick={false}
    />
  );
};

// Renamed the object to avoid conflict
const SidebarDropdownConfig = {
  key: 'SidebarDropdown',
  Name: 'SidebarDropdown',
  ComponentInstance: <SidebarDropdownComponent />,
  dependencies: { React, Sidebar, Dropdown, OptionItem },
};

export default SidebarDropdownConfig;
