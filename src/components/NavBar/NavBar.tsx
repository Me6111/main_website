import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';

import Logo from '../Logo/Logo';
import NavOptions from '../NavOptions/NavOptions';
import MainMenu from '../MainMenu/MainMenu';

interface Section {
  name: string;
  href: string;
}

interface NavBarProps {
  sections: Section;
  portalTarget?: HTMLElement;
  disappearing_navbar?: boolean;
  disappearing_curtain?: boolean;
  scrollContainer?: HTMLElement | null; // <-- new prop for external scroll container
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
  portalTarget,
  disappearing_navbar = true,
  disappearing_curtain = true,
  scrollContainer = null, // default null
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [curtainHidden, setCurtainHidden] = useState(!disappearing_curtain);
  const lastScrollY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [navBarStyle, setNavBarStyle] = useState({ left: 0, width: 0 });

  const handleScroll = () => {
    const container = scrollContainer ?? containerRef.current;

    if (container && disappearing_navbar) {
      const currentScrollY = container.scrollTop;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      setIsHidden(isScrollingDown);
      lastScrollY.current = currentScrollY;
    }

    if (disappearing_curtain) {
      const curtainTrigger = scrollContainer?.scrollTop ?? containerRef.current?.scrollTop ?? 0;
      setCurtainHidden(curtainTrigger > 740);
    }
  };

  const updatePosition = () => {
    const rect = portalTarget
      ? portalTarget.getBoundingClientRect()
      : containerRef.current?.getBoundingClientRect();

    if (rect) {
      setNavBarStyle({
        left: rect.left,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    updatePosition();

    const container = scrollContainer ?? containerRef.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('resize', updatePosition);

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', updatePosition);
    };
  }, [portalTarget, scrollContainer]);

  const navBarContent = (
    <nav
      className={`NavBar ${isHidden ? 'NavBar-hidden' : ''}`}
      style={{
        position: portalTarget ? 'fixed' : 'sticky',
        top: 0,
        left: portalTarget ? navBarStyle.left : 0,
        width: portalTarget ? navBarStyle.width : '100%',
        transition: 'opacity 0.3s ease',
        opacity: isHidden ? 0 : 1,
      }}
    >
      <div className={`NavBar-courtain ${curtainHidden ? 'NavBar-courtain-hidden' : ''}`} />
      <div className="NavBar-inner">
        <Logo />
        <NavOptions sections={sections} />
        <MainMenuButton />
      </div>
    </nav>
  );

  return portalTarget
    ? ReactDOM.createPortal(navBarContent, portalTarget)
    : <div ref={containerRef} style={{ overflowY: 'auto', height: '100%' }}>{navBarContent}</div>;
};

export default NavBar;
