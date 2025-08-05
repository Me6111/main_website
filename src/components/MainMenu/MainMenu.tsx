import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import './MainMenu.css';

type MenuItem = {
  label: string;
  href: string;
};

type MainMenuProps = {
  items: MenuItem[];
  portalTarget?: Element; // Optional portal target for Sidebar
};

const MainMenu: React.FC<MainMenuProps> = ({ items, portalTarget }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div className="MainMenu">
      <HamburgerButton isOpen={isOpen} toggle={toggleSidebar} />
      <Sidebar
        isOpen={isOpen}
        items={items}
        onClose={() => setIsOpen(false)}
        portalTarget={portalTarget} // Pass down the optional portalTarget
      />
    </div>
  );
};

export default MainMenu;
