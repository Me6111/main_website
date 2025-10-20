import React from 'react';

import Dropdown from './Dropdown';

import DropdownSourceCodeRaw from './Dropdown.tsx?raw';
import DropdownStyleCodeRaw from './Dropdown.css?raw';

// Nested options data: some options contain their own sub-options
const optionsData = [
  { name: 'Dashboard' },
  { name: 'Settings' },
  {
    name: 'Profile',
    options: [
      { name: 'Edit Profile' },
      { name: 'Change Password' },
      {
        name: 'Privacy',
        options: [
          { name: 'Blocked Users' },
          { name: 'Activity Status' },
        ],
      },
    ],
  },
  {
    name: 'Support',
    options: [
      { name: 'Contact Us' },
      { name: 'FAQ' },
    ],
  },
  { name: 'Logout' },
];

// Recursive helper function for nested dropdowns
const renderDropdownTree = (options: any[]): React.ReactNode =>
  options.map((option, index) =>
    option.options ? (
      <div key={index} className="nested-dropdown">
        <Dropdown
          options={option.options}
          placeholder={option.name}
          optionListPosition="right"
          onHover={true}
          onClick={false}
          optionElement={(subOption: any) =>
            subOption.options ? (
              renderDropdownTree([subOption])
            ) : (
              <div>{subOption.name}</div>
            )
          }
        />
      </div>
    ) : (
      <div key={index}>{option.name}</div>
    )
  );

// Top-level dropdown usage JSX string for display
const usageCodeRaw = `
<Dropdown
  options={optionsData}
  placeholder="Select an option"
  optionListPosition="right"
  onHover={true}
  onClick={false}
  optionElement={(option) =>
    option.options ? (
      <Dropdown
        options={option.options}
        placeholder={option.name}
        optionListPosition="right"
        onHover={true}
        onClick={false}
        optionElement={(subOption) =>
          subOption.options ? (
            // recursively render nested dropdowns
            <Dropdown
              options={subOption.options}
              placeholder={subOption.name}
              optionListPosition="right"
              onHover={true}
              onClick={false}
            />
          ) : (
            <div>{subOption.name}</div>
          )
        }
      />
    ) : (
      <div>{option.name}</div>
    )
  }
/>
`.trim();

// The actual React element for rendering
const topLevelDropdown = (
  <Dropdown
    options={optionsData}
    placeholder="Select an option"
    optionListPosition="right"
    onHover={true}
    onClick={false}
    optionElement={(option: any) =>
      option.options ? (
        <Dropdown
          options={option.options}
          placeholder={option.name}
          optionListPosition="right"
          onHover={true}
          onClick={false}
          optionElement={(subOption: any) =>
            subOption.options ? (
              <Dropdown
                options={subOption.options}
                placeholder={subOption.name}
                optionListPosition="right"
                onHover={true}
                onClick={false}
              />
            ) : (
              <div>{subOption.name}</div>
            )
          }
        />
      ) : (
        <div>{option.name}</div>
      )
    }
  />
);

const Dropdown_Tree_Config = {
  key: 'Dropdown_Tree',
  Name: 'Dropdown_Tree',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: DropdownSourceCodeRaw,
  ComponentStyleCodeRaw: DropdownStyleCodeRaw,
  ComponentInstance: topLevelDropdown,
  dependencies: { React, Dropdown },
};

export default Dropdown_Tree_Config;
