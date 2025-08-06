import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import './MainMenu.css';

type MenuItem = {
  label: string;
  href: string;
};

type MainMenuProps = {
  Sidebar_items: MenuItem[];
  Sidebar_portalTarget?: Element;
  Sidebar_closeByClick?: boolean;
  Sidebar_closeByScroll?: boolean;
};

const MainMenu: React.FC<MainMenuProps> = ({
  Sidebar_items,
  Sidebar_portalTarget,
  Sidebar_closeByClick = false,
  Sidebar_closeByScroll = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (Sidebar_closeByScroll && isOpen) setIsOpen(false);
    };
    if (Sidebar_closeByScroll) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen, Sidebar_closeByScroll]);

  return (
    <div className="MainMenu">
      <HamburgerButton isOpen={isOpen} toggle={toggleSidebar} />
      <Sidebar
        isOpen={isOpen}
        items={Sidebar_items}
        onClose={() => setIsOpen(false)}
        portalTarget={Sidebar_portalTarget}
        closeByClick={Sidebar_closeByClick}
        closeByScroll={Sidebar_closeByScroll}
      />
    </div>
  );
};

export default MainMenu;
