import React, { useEffect, useRef, useState } from 'react';
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

    //console.log("Scrolled to:", currentScrollY, "pixels");

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


  return (
    <nav className={`NavBar ${hidden ? 'NavBar-hidden' : ''}`}>
      <div className={`NavBar-courtain ${curtainHidden ? 'NavBar-courtain-hidden' : ''}`} />
      <div className={`NavBar-inner ${showContent ? 'fade-in' : 'fade-out'}`}>
        <div className="NavBar-Title"> <a href='/'> Hello </a> 
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
        <MainMenu />
      </div>
    </nav>
  );
};

export default NavBar;