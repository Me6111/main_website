


// NavOptions.tsx

import React from 'react';
import NavOption from '../NavOption/NavOption';  
import './NavOptions.css';

interface Section {
  name: string;
  href: string;
}

type NavOptionsProps = {
  sections: Section[];
};

const NavOptions: React.FC<NavOptionsProps> = ({ sections }) => (
  <ul className="NavOptions">
    {sections.map(section => (
      <NavOption key={section.name} section={section} />
    ))}
  </ul>
);

export default NavOptions;

