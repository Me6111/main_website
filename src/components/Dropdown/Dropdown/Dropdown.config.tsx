import React from 'react';
import Dropdown, { DropdownItem } from './Dropdown';

const menuItems: DropdownItem = {
  label: 'Menu',
  optionsListPosition: 'bottom',
  Indentation: 'left, 20px',
  AllowMultipleMenusOpened: true,
  RememberOpenedMenus: true,
  children: [
    {
      label: 'Projects',
      optionsListPosition: 'inside',
      Indentation: 'left, 20px',
      AllowMultipleMenusOpened: true,
      RememberOpenedMenus: true,
      children: [
        {
          label: 'Project Management',
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: true,
          RememberOpenedMenus: true,
          children: [
            { label: 'Create Project' },
            { label: 'Edit Project' },
            {
              label: 'Delete Project',
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Permanent Delete'},
                { label: 'Soft Delete'}
              ]
            },
            {
              label: 'Advanced Tools',
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Audit Logs'},
                {
                  label: 'Import / Export',
                  optionsListPosition: 'inside',
                  Indentation: 'left, 20px',
                  AllowMultipleMenusOpened: false,
                  RememberOpenedMenus: true,
                  children: [
                    { label: 'Import File'},
                    { label: 'Export Data'},
                    {
                      label: 'File Formats',
                      optionsListPosition: 'inside',
                      Indentation: 'left, 20px',
                      AllowMultipleMenusOpened: false,
                      RememberOpenedMenus: true,
                      children: [
                        { label: 'JSON'},
                        { label: 'XML'},
                        { label: 'CSV'}
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'Templates',
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Blank'},
            { label: 'Basic'},
            {
              label: 'Industry',
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Construction'},
                { label: 'IT'},
                { label: 'HR'}
              ]
            }
          ]
        }
      ]
    },
    { label: 'Option' }
  ]
};

const SimpleDropdownOption: React.FC<{ label: string; onClick?: () => void; active?: boolean }> = ({ label, onClick, active }) => (
  <div onClick={onClick} style={{ padding: '8px 16px', backgroundColor: active ? '#eee' : 'white', cursor: 'pointer' }}>
    {label}
  </div>
);

const DropdownConfig = {
  key: 'MainMenuDropdown',
  Name: 'MainMenuDropdown',
  ComponentInstance: (
    <Dropdown
      triggerItem={menuItems}
      optionsListPosition="bottom"
      OpenMenu={['click']}
      CloseMenu={['click_option_again']}
      DropdownOption={SimpleDropdownOption}
    />
  ),
  dependencies: { React, Dropdown }
};

export default DropdownConfig;
