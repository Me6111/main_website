


// NavOptions.tsx

import React from 'react';
import NavOption from '../NavOption/NavOption';  
import './NavOptions.css';

interface Section {
  id: string;
  name: string;
  href: string;
}

type NavOptionsProps = {
  sections: Section[];
};

const NavOptions: React.FC<NavOptionsProps> = ({ sections }) => (
  <ul>
    {sections.map(section => (
      <NavOption key={section.id} section={section} />
    ))}
  </ul>
);

export default NavOptions;

