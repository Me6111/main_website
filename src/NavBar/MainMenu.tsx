import React, { useState, useEffect } from 'react';
import './MainMenu.css';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  const items = ['Stack', 'Updates', 'Courses', 'Reviews', 'Shop'];

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div className="MainMenu">
      <label className="hamburger-menu">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={toggleSidebar}
        />
      </label>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-optionsList">
          {isOpen &&
            items.map((item, index) => (
              <div
                key={`${item}-${isOpen}`}
                className="sidebar-optionsList-item"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {item}
              </div>
            ))}
        </div>
      </aside>

      <aside
        className={`menu-curtain ${isOpen ? 'menu-curtain--open' : ''}`}
        onClick={() => setIsOpen(false)}
      ></aside>
    </div>
  );
};

export default MainMenu;
