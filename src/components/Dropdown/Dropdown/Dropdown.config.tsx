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
  Indentation: 20,
  arrowProps: arrowConfig,
  AllowMultipleMenusOpened: true,
  RememberOpenedMenus: true,
  children: [
    {
      label: 'Projects',
      arrowProps: arrowConfig,
      optionsListPosition: 'inside',
      Indentation: 20,
      AllowMultipleMenusOpened: true,
      RememberOpenedMenus: true,
      children: [
        {
          label: 'Project Management',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 20,
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Create Project', optionsListPosition: 'inside', arrowProps: arrowConfig, Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Edit Project', optionsListPosition: 'inside', arrowProps: arrowConfig, Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            {
              label: 'Delete Project',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 20,
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Permanent Delete', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'Soft Delete', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
              ]
            },
            {
              label: 'Advanced Tools',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 20,
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Audit Logs', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                {
                  label: 'Import / Export',
                  arrowProps: arrowConfig,
                  optionsListPosition: 'inside',
                  Indentation: 20,
                  AllowMultipleMenusOpened: false,
                  RememberOpenedMenus: true,
                  children: [
                    { label: 'Import File', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                    { label: 'Export Data', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                    {
                      label: 'File Formats',
                      arrowProps: arrowConfig,
                      optionsListPosition: 'inside',
                      Indentation: 20,
                      AllowMultipleMenusOpened: false,
                      RememberOpenedMenus: true,
                      children: [
                        { label: 'JSON', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                        { label: 'XML', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                        { label: 'CSV', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
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
          Indentation: 20,
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Blank', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Basic', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            {
              label: 'Industry',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 20,
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Construction', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'IT', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'HR', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
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
      Indentation: 20,
      AllowMultipleMenusOpened: false,
      RememberOpenedMenus: true,
      children: [
        {
          label: 'Backups',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 20,
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Create Backup', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Restore Backup', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
          ]
        },
        {
          label: 'Connections',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 20,
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Add Connection', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Remove Connection', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            {
              label: 'Drivers',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 20,
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'PostgreSQL', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'MySQL', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'SQLite', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'MongoDB', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
              ]
            }
          ]
        },
        {
          label: 'Monitoring',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 20,
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Live Queries', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Slow Queries', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Storage Usage', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            {
              label: 'Alerts',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 20,
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Email Alerts', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'SMS Alerts', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                {
                  label: 'Webhook Alerts',
                  arrowProps: arrowConfig,
                  optionsListPosition: 'inside',
                  Indentation: 20,
                  AllowMultipleMenusOpened: false,
                  RememberOpenedMenus: true,
                  children: [
                    { label: 'Create Webhook', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                    { label: 'Manage Webhooks', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
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
      Indentation: 20,
      AllowMultipleMenusOpened: false,
      RememberOpenedMenus: true,
      children: [
        {
          label: 'Users',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 20,
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Create User', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Edit User', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Delete User', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            {
              label: 'Permissions',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 20,
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Roles', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'Access Logs', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
              ]
            }
          ]
        },
        {
          label: 'Appearance',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 20,
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Themes', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Dark Mode', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            {
              label: 'Layouts',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 20,
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'Grid', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'Compact', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'Expanded', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
              ]
            }
          ]
        },
        {
          label: 'Integrations',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          Indentation: 20,
          AllowMultipleMenusOpened: false,
          RememberOpenedMenus: true,
          children: [
            { label: 'Slack', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            { label: 'Jira', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
            {
              label: 'Cloud Providers',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              Indentation: 20,
              AllowMultipleMenusOpened: false,
              RememberOpenedMenus: true,
              children: [
                { label: 'AWS', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'Google Cloud', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true },
                { label: 'Azure', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
              ]
            }
          ]
        }
      ]
    },
    { label: 'Option', optionsListPosition: 'inside', Indentation: 20, AllowMultipleMenusOpened: false, RememberOpenedMenus: true }
  ]
};

const DropdownConfig = {
  key: 'MainMenuDropdown',
  Name: 'MainMenuDropdown',
  ComponentInstance: (
    <div style={{ width: '250px' }}>
      <Dropdown
        triggerItem={menuItems}
        optionsListPosition="bottom"
        OpenMenu={['click']}
        CloseMenu={['click_option_again']}
        arrowDefaultRotate="left"
        arrowActiveRotate="left"
        Indentation={20}
      />
    </div>
  ),
  dependencies: { React, Dropdown }
};

export default DropdownConfig;
