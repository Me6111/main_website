import React from 'react';
import Dropdown, { DropdownItem } from './Dropdown';

const exampleItems: DropdownItem = {
  id: 'root',
  label: 'Root',
  children: [
    { id: 'child1', label: 'Child 1' },
    {
      id: 'child2',
      label: 'Child 2',
      children: [
        { id: 'sub1', label: 'Subchild 1' },
        { id: 'sub2', label: 'Subchild 2' }
      ]
    }
  ]
};

const Dropdown_Config = {
  key: 'Dropdown',
  Name: 'Dropdown',
  ComponentInstance: (
    <Dropdown triggerItem={exampleItems} />
  ),
  dependencies: { React, Dropdown }
};

export default Dropdown_Config;
