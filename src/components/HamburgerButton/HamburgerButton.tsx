// HamburgerButton.tsx
import React from 'react';
import './HamburgerButton.css';

type HamburgerButtonProps = {
  isOpen: boolean;
  toggle: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, toggle }) => {
  return (
    <label className="hamburger-menu">
      <input type="checkbox" checked={isOpen} onChange={toggle} />
    </label>
  );
};

export default HamburgerButton;
