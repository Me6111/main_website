import React from 'react';
import Dropdown, { DropdownItem } from './Dropdown';
import OptionItem from '../OptionItem/OptionItem';

const usageResourcesItems: DropdownItem = {
  id: 'usageResources',
  label: 'Usage Resources',
  children: [
    {
      id: 'projects',
      label: 'Projects',
      children: [
        {
          id: 'management',
          label: 'Project Management',
          children: [
            { id: 'create', label: 'Create Project' },
            { id: 'edit', label: 'Edit Project' },
            {
              id: 'delete',
              label: 'Delete Project',
              children: [
                { id: 'permanent', label: 'Permanently Delete' },
                { id: 'softDelete', label: 'Soft Delete' }
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
      children: [
        {
          id: 'backups',
          label: 'Backups',
          children: [
            { id: 'createBackup', label: 'Create Backup' },
            { id: 'restoreBackup', label: 'Restore Backup' }
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
    <Dropdown
      triggerItem={usageResourcesItems}
      optionsListPosition="bottom"
      multipleMenusOpenedAllowed={false}
      OpenMenu={['click']}
      CloseMenu={['click_option_again', 'click_outside', 'mouse_leave']}
      renderArrow={(active: boolean) => ({
        arrowProps: {
          size: { rotate: active ? 'bottom' : 'top' },
        }
      })}
    />
  ),
  dependencies: { React, Dropdown, OptionItem }
};

export default DropdownConfig;
