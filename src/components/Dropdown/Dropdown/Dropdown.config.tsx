import React from 'react';
import Dropdown, { DropdownItem } from './Dropdown';

const arrowConfig = {
  style: { fill: 'white', stroke: 'white' },
  activeStyle: { fill: 'black', stroke: 'black' },
  size: { rotate: 'left' },
  hover: { rotate: 'bottom' }
};

const menuItems: DropdownItem = {
  id: 'root',
  label: 'Menu',
  optionsListPosition: 'bottom',
  arrowProps: arrowConfig,
  children: [
    {
      id: 'projects',
      label: 'Projects',
      arrowProps: arrowConfig,
      optionsListPosition: 'inside',
      children: [
        {
          id: 'projectManagement',
          label: 'Project Management',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          children: [
            { id: 'createProject', label: 'Create Project', optionsListPosition: 'inside', arrowProps: arrowConfig },
            { id: 'editProject', label: 'Edit Project', optionsListPosition: 'inside', arrowProps: arrowConfig },
            {
              id: 'deleteProject',
              label: 'Delete Project',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              children: [
                { id: 'deletePermanent', label: 'Permanent Delete', optionsListPosition: 'inside' },
                { id: 'deleteSoft', label: 'Soft Delete', optionsListPosition: 'inside' }
              ]
            },
            {
              id: 'projectTools',
              label: 'Advanced Tools',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              children: [
                { id: 'auditLogs', label: 'Audit Logs', optionsListPosition: 'inside' },
                {
                  id: 'importExport',
                  label: 'Import / Export',
                  arrowProps: arrowConfig,
                  optionsListPosition: 'inside',
                  children: [
                    { id: 'importFile', label: 'Import File', optionsListPosition: 'inside' },
                    { id: 'exportData', label: 'Export Data', optionsListPosition: 'inside' },
                    {
                      id: 'fileFormats',
                      label: 'File Formats',
                      arrowProps: arrowConfig,
                      optionsListPosition: 'inside',
                      children: [
                        { id: 'formatJson', label: 'JSON', optionsListPosition: 'inside' },
                        { id: 'formatXml', label: 'XML', optionsListPosition: 'inside' },
                        { id: 'formatCsv', label: 'CSV', optionsListPosition: 'inside' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'projectTemplates',
          label: 'Templates',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          children: [
            { id: 'templateBlank', label: 'Blank', optionsListPosition: 'inside' },
            { id: 'templateBasic', label: 'Basic', optionsListPosition: 'inside' },
            {
              id: 'templateIndustry',
              label: 'Industry',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              children: [
                { id: 'templateConstruction', label: 'Construction', optionsListPosition: 'inside' },
                { id: 'templateIT', label: 'IT', optionsListPosition: 'inside' },
                { id: 'templateHR', label: 'HR', optionsListPosition: 'inside' }
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'databases',
      label: 'Databases',
      arrowProps: arrowConfig,
      optionsListPosition: 'inside',
      children: [
        {
          id: 'databaseBackups',
          label: 'Backups',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          children: [
            { id: 'backupCreate', label: 'Create Backup', optionsListPosition: 'inside' },
            { id: 'backupRestore', label: 'Restore Backup', optionsListPosition: 'inside' }
          ]
        },
        {
          id: 'databaseConnections',
          label: 'Connections',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          children: [
            { id: 'addConnection', label: 'Add Connection', optionsListPosition: 'inside' },
            { id: 'removeConnection', label: 'Remove Connection', optionsListPosition: 'inside' },
            {
              id: 'databaseDrivers',
              label: 'Drivers',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              children: [
                { id: 'driverPostgres', label: 'PostgreSQL', optionsListPosition: 'inside' },
                { id: 'driverMySQL', label: 'MySQL', optionsListPosition: 'inside' },
                { id: 'driverSQLite', label: 'SQLite', optionsListPosition: 'inside' },
                { id: 'driverMongo', label: 'MongoDB', optionsListPosition: 'inside' }
              ]
            }
          ]
        },
        {
          id: 'databaseMonitoring',
          label: 'Monitoring',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          children: [
            { id: 'liveQueries', label: 'Live Queries', optionsListPosition: 'inside' },
            { id: 'slowQueries', label: 'Slow Queries', optionsListPosition: 'inside' },
            { id: 'storageUsage', label: 'Storage Usage', optionsListPosition: 'inside' },
            {
              id: 'alerts',
              label: 'Alerts',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              children: [
                { id: 'emailAlerts', label: 'Email Alerts', optionsListPosition: 'inside' },
                { id: 'smsAlerts', label: 'SMS Alerts', optionsListPosition: 'inside' },
                {
                  id: 'webhookAlerts',
                  label: 'Webhook Alerts',
                  arrowProps: arrowConfig,
                  optionsListPosition: 'inside',
                  children: [
                    { id: 'createWebhook', label: 'Create Webhook', optionsListPosition: 'inside' },
                    { id: 'manageWebhooks', label: 'Manage Webhooks', optionsListPosition: 'inside' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'settings',
      label: 'Settings',
      arrowProps: arrowConfig,
      optionsListPosition: 'inside',
      children: [
        {
          id: 'users',
          label: 'Users',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          children: [
            { id: 'userCreate', label: 'Create User', optionsListPosition: 'inside' },
            { id: 'userEdit', label: 'Edit User', optionsListPosition: 'inside' },
            { id: 'userDelete', label: 'Delete User', optionsListPosition: 'inside' },
            {
              id: 'userPermissions',
              label: 'Permissions',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              children: [
                { id: 'roles', label: 'Roles', optionsListPosition: 'inside' },
                { id: 'accessLogs', label: 'Access Logs', optionsListPosition: 'inside' }
              ]
            }
          ]
        },
        {
          id: 'appearance',
          label: 'Appearance',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          children: [
            { id: 'themes', label: 'Themes', optionsListPosition: 'inside' },
            { id: 'darkMode', label: 'Dark Mode', optionsListPosition: 'inside' },
            {
              id: 'layouts',
              label: 'Layouts',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              children: [
                { id: 'layoutGrid', label: 'Grid', optionsListPosition: 'inside' },
                { id: 'layoutCompact', label: 'Compact', optionsListPosition: 'inside' },
                { id: 'layoutExpanded', label: 'Expanded', optionsListPosition: 'inside' }
              ]
            }
          ]
        },
        {
          id: 'integrations',
          label: 'Integrations',
          arrowProps: arrowConfig,
          optionsListPosition: 'inside',
          children: [
            { id: 'slack', label: 'Slack', optionsListPosition: 'inside' },
            { id: 'jira', label: 'Jira', optionsListPosition: 'inside' },
            {
              id: 'cloudProviders',
              label: 'Cloud Providers',
              arrowProps: arrowConfig,
              optionsListPosition: 'inside',
              children: [
                { id: 'aws', label: 'AWS', optionsListPosition: 'inside' },
                { id: 'gcp', label: 'Google Cloud', optionsListPosition: 'inside' },
                { id: 'azure', label: 'Azure', optionsListPosition: 'inside' }
              ]
            }
          ]
        }
      ]
    },

    { id: 'simpleOption', label: 'Option', optionsListPosition: 'inside' }
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
