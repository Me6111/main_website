import React from 'react';
import './Dropdown.css';


interface DropdownProps {
  text?: string;
  href?: string;
  stagger?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ text, href }) => {
  if (!text || !href) return null;

  return (
    <a
      href={href}
      className='Dropdown'
    >
      {text}
    </a>
  );
};

export default Dropdown;
