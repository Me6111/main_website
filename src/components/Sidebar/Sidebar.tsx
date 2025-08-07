// Sidebar.tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';

type SidebarProps = {
  isOpen: boolean;
  items: { label: string; href: string }[] | undefined | null;
  onClose: () => void;
  portalTarget?: Element;
  closeByClick?: boolean;
  closeByScroll?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  items,
  onClose,
  portalTarget,
  closeByClick = false,
  closeByScroll = false,
}) => {
  const safeItems = Array.isArray(items) ? items : [];
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Don't close if clicking on hamburger menu
      const isHamburgerClick = (target as HTMLElement)?.closest('.hamburger-menu');
      const isOutside = sidebarRef.current && !sidebarRef.current.contains(target);

      if (closeByClick && isOutside && !isHamburgerClick) {
        onClose();
      }
    };

    const handleScroll = () => {
      if (closeByScroll) {
        onClose();
      }
    };

    if (closeByClick) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    if (closeByScroll) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (closeByClick) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      if (closeByScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen, onClose, closeByClick, closeByScroll]);

  const sidebarContent = (
    <aside ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-optionsList">
        {isOpen &&
          safeItems.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.href}
              className="sidebar-optionsList-item"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
      </div>
    </aside>
  );

  return portalTarget
    ? ReactDOM.createPortal(sidebarContent, portalTarget)
    : sidebarContent;
};

export default Sidebar;
