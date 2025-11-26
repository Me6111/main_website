import React from 'react';
import JSXParser from 'react-jsx-parser';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OptionItem from './OptionItem';
import OptionItemSourceCodeRaw from './OptionItem.tsx?raw';
import OptionItemStyleCodeRaw from './OptionItem.css?raw';

const usageCodeRaw = `
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>

  <OptionItem 
    content="Saved" 
    tooltip="Go to home" 
  />

  <OptionItem 
    content="Settings" 
    icon={<SettingsIcon style={{ fontSize: '24px', color: 'white' }} />}
    tooltip="Go to settings"
  />

  <OptionItem 
    content="Enable Notifications" 
    icon={<NotificationsIcon style={{ fontSize: '24px', color: 'white' }} />}
    checkbox={true}
    tooltip="Toggle notifications"
  />

<OptionItem
  content="Manage Account"
  expandIcon={true}
  tooltip="Open account settings"
  arrowProps={{
    size: { width: 12, height: 8, notch: 0, rotate: 'right' },
    hover: { rotate: 'bottom', transition: 0.25 },
  }}
/>


</div>
`.trim();

const OptionItem_Config = {
  key: 'OptionItem',
  Name: 'OptionItem',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: OptionItemSourceCodeRaw,
  ComponentStyleCodeRaw: OptionItemStyleCodeRaw,
  ComponentInstance: (
    <JSXParser components={{ OptionItem, SettingsIcon, NotificationsIcon }} jsx={usageCodeRaw} />
  ),
  dependencies: { React, OptionItem, SettingsIcon, NotificationsIcon },
};

export default OptionItem_Config;
