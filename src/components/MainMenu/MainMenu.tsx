import React, { useState, useEffect } from 'react';
import './MainMenu.css';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  const items = [
    { label: 'Stack', href: '/mystack' },
    { label: 'Updates', href: '/updates' },
    { label: 'Courses', href: '/courses' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Shop', href: '/shop' },
  ];

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
              <a
                key={`${item.label}-${isOpen}`}
                href={item.href}
                className="sidebar-optionsList-item"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {item.label}
              </a>
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
