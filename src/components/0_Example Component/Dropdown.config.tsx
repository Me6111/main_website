import React from 'react';
import JSXParser from 'react-jsx-parser';
import Dropdown from './Dropdown';
import DropdownSourceCodeRaw from './Dropdown.tsx?raw';
import DropdownStyleCodeRaw from './Dropdown.css?raw';

const usageCodeRaw = `<Dropdown text="learn more" href="#" stagger={false} />`;

const DropdownConfig = {
  key: 'Dropdown',
  Name: 'Dropdown',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: DropdownSourceCodeRaw,
  ComponentStyleCodeRaw: DropdownStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ Dropdown }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, Dropdown },
};

export default DropdownConfig;
