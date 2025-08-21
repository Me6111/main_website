import React, { useEffect, useRef, useState, useCallback } from 'react';
import './NavBar.css';

import Logo from '../Logo/Logo';
import NavOptions from '../NavOptions/NavOptions';
import MainMenu from '../MainMenu/MainMenu';

interface Section {
  name: string;
  href: string;
}

interface NavBarProps {
  sections: Section[];
  disappearing_navbar?: boolean;
  disappearing_curtain?: boolean;
  navbar_hide_threshold?: number;
  curtain_hide_threshold?: number;
  content?: React.ReactNode;
}

const MainMenuButton: React.FC = () => {
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

const NavBar: React.FC<NavBarProps> = ({
  sections,
  disappearing_navbar = true,
  disappearing_curtain = true,
  navbar_hide_threshold,
  curtain_hide_threshold,
  content,
}) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [curtainVisible, setCurtainVisible] = useState(false);
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const currentScrollY = container.scrollTop;

    // Navbar hide logic
    if (disappearing_navbar && typeof navbar_hide_threshold === 'number') {
      const hasScrolledDown = currentScrollY > lastScrollY.current;
      const passedThreshold = currentScrollY > navbar_hide_threshold;
      setIsScrollingDown(hasScrolledDown && passedThreshold);
    } else {
      setIsScrollingDown(false);
    }

    // Curtain visibility logic (curtain appears after threshold)
    if (disappearing_curtain && typeof curtain_hide_threshold === 'number') {
      setCurtainVisible(currentScrollY > curtain_hide_threshold);
    } else {
      setCurtainVisible(false);
    }

    lastScrollY.current = currentScrollY;
  }, [disappearing_navbar, disappearing_curtain, navbar_hide_threshold, curtain_hide_threshold]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="NavBar-wrapper">
      <div className="scrollableContainer" ref={scrollContainerRef}>
        <nav className={`NavBar ${isScrollingDown ? 'NavBar-hidden' : ''}`}>
          <div className={`NavBar-courtain ${curtainVisible ? '' : 'NavBar-courtain-hidden'}`} />
          <div className={`NavBar-inner ${isScrollingDown ? 'NavBar-inner-hidden' : ''}`}>
            <Logo />
            <NavOptions sections={sections} />
            <MainMenuButton />
          </div>
        </nav>

        {/* NavBar content that sticks */}
        <div className="NavBar-content">
          {content ?? null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
