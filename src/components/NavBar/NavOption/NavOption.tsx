import React from 'react';
import './NavOption.css';

interface Section {
  name: string;
  href: string;
}

type NavOptionProps = {
  section: Section;
};

const NavOption: React.FC<NavOptionProps> = ({ section }) => {
  return (
    <li className="NavOption" id={`NavOption-${section.name}`}>
      <a href={section.href}>{section.name}</a>
    </li>
  );
};

export default NavOption;
