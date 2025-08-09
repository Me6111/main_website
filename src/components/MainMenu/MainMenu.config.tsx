import React from 'react';
import MainMenu from './MainMenu';
import MainMenuSourceCodeRaw from './MainMenu.tsx?raw';
import MainMenuStyleCodeRaw from './MainMenu.css?raw';

const usageCodeRaw = `<MainMenu 
  Sidebar_items={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Projects', href: '/projects' },
    { label: 'Team', href: '/team' },
    { label: 'Calendar', href: '/calendar' },
    { label: 'Settings', href: '/settings' }
  ]}
  Sidebar_portalTarget={document.body}
  Sidebar_closeByClick={false}
  Sidebar_closeByScroll={false}
/>`;

const SidebarItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Settings', href: '/settings' }
];

const MainMenuConfig = {
  key: 'MainMenu',
  Name: 'MainMenu',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: MainMenuSourceCodeRaw,
  ComponentStyleCodeRaw: MainMenuStyleCodeRaw,
  ComponentInstance: (
    <MainMenu
      Sidebar_items={SidebarItems}
      Sidebar_portalTarget={document.body}
      Sidebar_closeByClick={false}
      Sidebar_closeByScroll={false}
    />
  ),
  dependencies: { React, MainMenu },
};

export default MainMenuConfig;
