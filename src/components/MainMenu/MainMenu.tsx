import React, { useState } from 'react';
import HamburgerButton from '../Icons/HamburgerButton/HamburgerButton';
import Sidebar from '../Sidebar/Sidebar';
import './MainMenu.css';

type MainMenuProps = {
  menuItems: { label: string; href: string }[];
};

const MainMenu: React.FC<MainMenuProps> = ({ menuItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="MainMenu">
        <HamburgerButton
          isOpen={isSidebarOpen}
          toggle={() => setIsSidebarOpen((prev) => !prev)}
        />
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        items={menuItems}
        onClose={() => setIsSidebarOpen(false)}
        closeByClick={true}
        closeByScroll={true}
      />
    </>
  );
};

export default MainMenu;
