// NavBar.config.tsx
import React from 'react';
import NavBar from './NavBar';
import NavBarSourceCodeRaw from './NavBar.tsx?raw';
import NavBarStyleCodeRaw from './NavBar.css?raw';

const usageCodeRaw = `<NavBar
  sections={[
    { name: 'Option 1', href: '/option1' },
    { name: 'Option 2', href: '/option2' },
    { name: 'Option 3', href: '/option3' },
  ]}
/>`;

const sections = [
  { name: 'Option 1', href: '/option1' },
  { name: 'Option 2', href: '/option2' },
  { name: 'Option 3', href: '/option3' },
];

const NavBarWrapper: React.FC = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <NavBar
        sections={sections}
        disappearing_navbar={false}
        disappearing_curtain={false}
        portalTarget={undefined}
      />
    </div>

    <div
      style={{
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          height: '1000px',
        }}
      >
        Scroll down to see that NavBar remains at the top.
      </div>
    </div>
  </div>
);

const NavBarConfig = {
  key: 'NavBar',
  Name: 'NavBar',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: NavBarSourceCodeRaw,
  ComponentStyleCodeRaw: NavBarStyleCodeRaw,
  ComponentInstance: <NavBarWrapper />,
  dependencies: { React, NavBar },
};

export default NavBarConfig;
