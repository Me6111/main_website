import React from 'react';
import JSXParser from 'react-jsx-parser';
import NavOption from './NavOption';
import NavOptionSourceCodeRaw from './NavOption.tsx?raw';
import NavOptionStyleCodeRaw from './NavOption.css?raw';

const usageCodeRaw = `<NavOption section={{ name: "Option", href: "#" }} />`;

const NavOptionConfig = {
  key: 'NavOption',
  Name: 'NavOption',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: NavOptionSourceCodeRaw,
  ComponentStyleCodeRaw: NavOptionStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ NavOption }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, NavOption },
};

export default NavOptionConfig;
