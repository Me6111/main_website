import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';
import MainMenu from '../MainMenu/MainMenu';

interface Section {
  id: string;
  name: string;
  href: string;
}

const NavBar: React.FC<{ sections: Section[] }> = ({ sections }) => {
  const [hidden, setHidden] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [curtainHidden, setCurtainHidden] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setShowContent(false);
      setTimeout(() => setHidden(true), 100);
    } else {
      setHidden(false);
      setTimeout(() => setShowContent(true), 300);
    }

    if (currentScrollY > 740) {
      setCurtainHidden(true);
    } else {
      setCurtainHidden(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Stack', href: '/mystack' },
    { label: 'Updates', href: '/updates' },
    { label: 'Courses', href: '/courses' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Shop', href: '/shop' },
  ];

  // JSX content to portal
  const navBarContent = (
    <nav className={`NavBar ${hidden ? 'NavBar-hidden' : ''}`}>
      <div className={`NavBar-courtain ${curtainHidden ? 'NavBar-courtain-hidden' : ''}`} />
      <div className={`NavBar-inner ${showContent ? 'fade-in' : 'fade-out'}`}>
        <div className="NavBar-Title">
          <a href="/">Hello</a>
        </div>
        <ul>
          {sections.map((section) => (
            <li className="nav-item" key={section.id} id={`nav-item-${section.id}`}>
              <a href={section.href}>
                {section.name}
              </a>
            </li>
          ))}
        </ul>
        <MainMenu 
          Sidebar_items={menuItems} 
          Sidebar_closeByClick={true} 
          Sidebar_closeByScroll={true} 
        />
      </div>
    </nav>
  );

  return ReactDOM.createPortal(navBarContent, document.body);
};

export default NavBar;
