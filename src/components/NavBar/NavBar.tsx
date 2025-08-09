import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';

import Logo from '../Logo/Logo';
import NavOptions from '../NavOptions/NavOptions'; 
import MainMenu from '../MainMenu/MainMenu';

interface Section {
  id: string;
  name: string;
  href: string;
}

type MainMenuButtonProps = {};
const MainMenuButton: React.FC<MainMenuButtonProps> = () => {
  const menuItems = [
    { label: 'Stack', href: '/mystack' },
    { label: 'Updates', href: '/updates' },
    { label: 'Courses', href: '/courses' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Shop', href: '/shop' },
  ];
  return (
    <MainMenu
      Sidebar_items={menuItems}
      Sidebar_closeByClick={true}
      Sidebar_closeByScroll={true}
    />
  );
};

interface NavBarProps {
  sections: Section[];
  portalTarget?: HTMLElement; // optional prop for portal target, defaults to document.body
}

const NavBar: React.FC<NavBarProps> = ({ sections, portalTarget = document.body }) => {
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

    setCurtainHidden(currentScrollY > 740);
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBarContent = (
    <nav className={`NavBar ${hidden ? 'NavBar-hidden' : ''}`}>
      <div className={`NavBar-courtain ${curtainHidden ? 'NavBar-courtain-hidden' : ''}`} />
      <div className={`NavBar-inner ${showContent ? 'fade-in' : 'fade-out'}`}>
        <Logo />
        <NavOptions sections={sections} />
        <MainMenuButton />
      </div>
    </nav>
  );

  return ReactDOM.createPortal(navBarContent, portalTarget);
};

export default NavBar;
