import React from 'react';
import Dropdown, { DropdownItem } from './Dropdown';

const arrowConfig = {
  style: { fill: 'white', stroke: 'white' },
  activeStyle: { fill: 'black', stroke: 'black' },
  size: { rotate: 'left' },
  hover: { rotate: 'bottom' }
};

const usageResourcesItems: DropdownItem = {
  id: 'usageResources',
  label: 'Usage Resources',
  arrowProps: arrowConfig,
  children: [
    {
      id: 'projects',
      label: 'Projects',
      arrowProps: arrowConfig,
      children: [
        {
          id: 'management',
          label: 'Project Management',
          arrowProps: arrowConfig,
          children: [
            {
              id: 'create',
              label: 'Create Project',
              arrowProps: arrowConfig
            },
            {
              id: 'edit',
              label: 'Edit Project'
            },
            {
              id: 'delete',
              label: 'Delete Project',
              arrowProps: arrowConfig,
              children: [
                {
                  id: 'permanent',
                  label: 'Permanently Delete'
                },
                {
                  id: 'softDelete',
                  label: 'Soft Delete',
                  arrowProps: arrowConfig
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'simpleOption',
      label: 'Plain Option'
    },
    {
      id: 'databases',
      label: 'Databases',
      arrowProps: arrowConfig,
      children: [
        {
          id: 'backups',
          label: 'Backups',
          arrowProps: arrowConfig,
          children: [
            {
              id: 'createBackup',
              label: 'Create Backup'
            },
            {
              id: 'restoreBackup',
              label: 'Restore Backup'
            }
          ]
        }
      ]
    }
  ]
};

const DropdownConfig = {
  key: 'UsageResourcesDropdown',
  Name: 'UsageResourcesDropdown',
  ComponentInstance: (
    <div style={{ width: '200px' }}>
      <Dropdown
        triggerItem={usageResourcesItems}
        optionsListPosition="bottom"
        multipleMenusOpenedAllowed={false}
        OpenMenu={['click']}
        CloseMenu={['click_option_again']}
        arrowDefaultRotate="left"
        arrowActiveRotate="left"
      />
    </div>
  ),
  dependencies: { React, Dropdown }
};

export default DropdownConfig;
