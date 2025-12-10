import React from 'react';
import Dropdown, { DropdownItem } from './Dropdown';

const arrowConfig = {
  style: { fill: 'white', stroke: 'white' },
  activeStyle: { fill: 'black', stroke: 'black' },
  size: { rotate: 'left' },
  hover: { rotate: 'bottom' }
};

const menuItems: DropdownItem = {
  label: 'Menu',
  optionsListPosition: 'bottom',
  Indentation: 'left, 20px',
  arrowProps: arrowConfig,
  AllowMultipleMenusOpened: true,
  RememberOpenedMenus: true,
  children: [
    {
      label: 'Projects',
      arrowProps: arrowConfig,
      optionsListPosition: 'inside',
      Indentation: 'left, 20px',
      AllowMultipleMenusOpened: true,
      RememberOpenedMenus: true,
      children: [
        {
          label: 'Project Management',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: true,
          RememberOpenedMenus: true,
          children: [
            { label: 'Create Project' },
            { label: 'Edit Project' },
            {
              label: 'Delete Project',
              arrowProps: arrowConfig,
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
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Audit Logs'},
                {
                  label: 'Import / Export',
                  arrowProps: arrowConfig,
                  optionsListPosition: 'inside',
                  Indentation: 'left, 20px',
                  AllowMultipleMenusOpened: false,
                  RememberOpenedMenus: true,
                  children: [
                    { label: 'Import File'},
                    { label: 'Export Data'},
                    {
                      label: 'File Formats',
                      arrowProps: arrowConfig,
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
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Blank'},
            { label: 'Basic'},
            {
              label: 'Industry',
              arrowProps: arrowConfig,
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
    {
      label: 'Databases',
      arrowProps: arrowConfig,
      optionsListPosition: 'inside',
      Indentation: 'left, 20px',
      AllowMultipleMenusOpened: false,
      RememberOpenedMenus: true,
      children: [
        {
          label: 'Backups',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Create Backup'},
            { label: 'Restore Backup'}
          ]
        },
        {
          label: 'Connections',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Add Connection'},
            { label: 'Remove Connection'},
            {
              label: 'Drivers',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'PostgreSQL'},
                { label: 'MySQL'},
                { label: 'SQLite'},
                { label: 'MongoDB'}
              ]
            }
          ]
        },
        {
          label: 'Monitoring',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Live Queries'},
            { label: 'Slow Queries'},
            { label: 'Storage Usage'},
            {
              label: 'Alerts',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Email Alerts'},
                { label: 'SMS Alerts'},
                {
                  label: 'Webhook Alerts',
                  arrowProps: arrowConfig,
                  optionsListPosition: 'inside',
                  Indentation: 'left, 20px',
                  AllowMultipleMenusOpened: false,
                  RememberOpenedMenus: true,
                  children: [
                    { label: 'Create Webhook'},
                    { label: 'Manage Webhooks'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Settings',
      arrowProps: arrowConfig,
      optionsListPosition: 'inside',
      Indentation: 'left, 20px',
      AllowMultipleMenusOpened: false,
      RememberOpenedMenus: true,
      children: [
        {
          label: 'Users',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Create User'},
            { label: 'Edit User'},
            { label: 'Delete User'},
            {
              label: 'Permissions',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Roles'},
                { label: 'Access Logs'}
              ]
            }
          ]
        },
        {
          label: 'Appearance',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Themes'},
            { label: 'Dark Mode'},
            {
              label: 'Layouts',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Grid'},
                { label: 'Compact'},
                { label: 'Expanded'}
              ]
            }
          ]
        },
        {
          label: 'Integrations',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 'left, 20px',
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Slack'},
            { label: 'Jira'},
            {
              label: 'Cloud Providers',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 'left, 20px',
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'AWS'},
                { label: 'Google Cloud'},
                { label: 'Azure'}
              ]
            }
          ]
        }
      ]
    },
    { label: 'Option'}
  ]
};

const DropdownConfig = {
  key: 'MainMenuDropdown',
  Name: 'MainMenuDropdown',
  ComponentInstance: (
    <Dropdown
      triggerItem={menuItems}
      optionsListPosition="bottom"
      OpenMenu={['click']}
      CloseMenu={['click_option_again']}
      arrowDefaultRotate="left"
      arrowActiveRotate="left"
      Indentation={20}
      size={{ width: 200, height: 40 }} 
    />
  ),
  dependencies: { React, Dropdown }
};

export default DropdownConfig;
