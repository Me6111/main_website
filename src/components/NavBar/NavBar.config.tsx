// NavBar.config.tsx
import React, { useRef, useEffect, useState } from 'react';
import NavBar from './NavBar';
import NavBarSourceCodeRaw from './NavBar.tsx?raw';
import NavBarStyleCodeRaw from './NavBar.css?raw';

const usageCodeRaw = `<NavBar
  sections={[
    { id: 'stack', name: 'Stack', href: '/mystack' },
    { id: 'updates', name: 'Updates', href: '/updates' },
    { id: 'courses', name: 'Courses', href: '/courses' },
    { id: 'reviews', name: 'Reviews', href: '/reviews' },
    { id: 'shop', name: 'Shop', href: '/shop' },
  ]}
/>`;

const sections = [
  { id: 'stack', name: 'Stack', href: '/mystack' },
  { id: 'updates', name: 'Updates', href: '/updates' },
  { id: 'courses', name: 'Courses', href: '/courses' },
  { id: 'reviews', name: 'Reviews', href: '/reviews' },
  { id: 'shop', name: 'Shop', href: '/shop' },
];

const NavBarWrapper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', height: '100px' }}>
      {mounted && containerRef.current && (
        <NavBar sections={sections} portalTarget={containerRef.current} />
      )}
    </div>
  );
};

const NavBarConfig = {
  key: 'NavBar',
  Name: 'NavBar',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: NavBarSourceCodeRaw,
  ComponentStyleCodeRaw: NavBarStyleCodeRaw,
  ComponentInstance: <NavBarWrapper />,
  dependencies: { React, NavBar },
};

export default NavBarConfig;
