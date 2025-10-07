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

const NavBar: React.FC<NavBarProps> = ({
  sections,
  disappearing_navbar = true,
  disappearing_curtain = true,
  navbar_hide_threshold = 100,
  curtain_hide_threshold = 50,
  content,
}) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [curtainVisible, setCurtainVisible] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);

  const handleContentScroll = useCallback(() => {
    if (!contentRef.current) return;

    const scrollTop = contentRef.current.scrollTop;

    // Show curtain logic
    setCurtainVisible(scrollTop > curtain_hide_threshold);

    if (!disappearing_navbar) {
      setIsNavbarHidden(false);
      lastScrollTop.current = scrollTop;
      return;
    }

    if (scrollTop > navbar_hide_threshold) {
      if (scrollTop > lastScrollTop.current) {
        // Scrolling down past threshold => hide navbar
        setIsNavbarHidden(true);
      } else if (scrollTop < lastScrollTop.current) {
        // Scrolling up => show navbar immediately
        setIsNavbarHidden(false);
      }
    } else {
      // If not past threshold, always show navbar
      setIsNavbarHidden(false);
    }

    lastScrollTop.current = scrollTop;
  }, [navbar_hide_threshold, curtain_hide_threshold, disappearing_navbar]);

  useEffect(() => {
    const contentElem = contentRef.current;
    if (!contentElem) return;

    contentElem.addEventListener('scroll', handleContentScroll, { passive: true });

    return () => {
      contentElem.removeEventListener('scroll', handleContentScroll);
    };
  }, [handleContentScroll]);

  const menuItems = [
    { label: 'Stack', href: '/mystack' },
    { label: 'Updates', href: '/updates' },
    { label: 'Courses', href: '/courses' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Shop', href: '/shop' },
  ];

  return (
    <div className="NavBar-wrapper">
      <nav className={`NavBar ${isNavbarHidden ? 'NavBar-hidden' : ''}`}>
        <div className={`NavBar-courtain ${curtainVisible ? '' : 'NavBar-courtain-hidden'}`} />
        <div className={`NavBar-inner ${isNavbarHidden ? 'NavBar-inner-hidden' : ''}`}>
          <Logo />
          <NavOptions sections={sections} />
          <MainMenu menuItems={menuItems} />
        </div>
      </nav>

      <div className="NavBar-content" ref={contentRef}>
        {content}
      </div>
    </div>
  );
};

export default NavBar;
