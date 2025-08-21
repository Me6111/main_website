// NavOptions.config.tsx

import React from 'react';
import NavOptions from './NavOptions';
import NavOptionsSourceCodeRaw from './NavOptions.tsx?raw';
import NavOptionsStyleCodeRaw from './NavOptions.css?raw';
import NavOption from '../NavOption/NavOption'; // Required dependency

const usageCodeRaw = `<NavOptions
  sections={[
    { name: 'Opgion 1', href: '/option1' },
    { name: 'Opgion 2', href: '/option2' },
    { name: 'Opgion 3', href: '/option3' },
  ]}
/>`;

const sections = [
  { name: 'Option 1', href: '/option1' },
  { name: 'Option 2', href: '/option2' },
  { name: 'Option 3', href: '/option3' },
];

const NavOptionsConfig = {
  key: 'NavOptions',
  Name: 'NavOptions',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: NavOptionsSourceCodeRaw,
  ComponentStyleCodeRaw: NavOptionsStyleCodeRaw,
  ComponentInstance: <NavOptions sections={sections} />,
  dependencies: { React, NavOptions, NavOption },
};

export default NavOptionsConfig;
