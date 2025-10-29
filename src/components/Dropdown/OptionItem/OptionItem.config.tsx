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
    background="black" 
    tooltip="Go to home" 
  />

  <OptionItem 
    content="Settings" 
    background="black" 
    icon={<SettingsIcon style={{ fontSize: '24px', color: 'white' }} />}
    tooltip="Go to settings"
  />

  <OptionItem 
    content="Enable Notifications" 
    background="black" 
    icon={<NotificationsIcon style={{ fontSize: '24px', color: 'white' }} />}
    checkbox={true}
    tooltip="Toggle notifications"
  />

  <OptionItem 
    content="Manage Account" 
    background="black" 
    expandIcon={true} 
    tooltip="Open account settings" 
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
