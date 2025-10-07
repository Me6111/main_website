import React, { useEffect, useRef } from 'react';
import './Sidebar.css';

type SidebarProps = {
  isOpen: boolean;
  items: { label: string; href: string }[] | undefined | null;
  onClose: () => void;
  closeByClick?: boolean;
  closeByScroll?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  items,
  onClose,
  closeByClick = false,
  closeByScroll = false,
}) => {
  const safeItems = Array.isArray(items) ? items : [];
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
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

    const scrollContainer = document.querySelector('.NavBar-content');

    if (closeByClick) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    if (closeByScroll && scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (closeByClick) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      if (closeByScroll && scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen, onClose, closeByClick, closeByScroll]);

  return (
    <aside ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-optionsList" style={{ animationDelay: `0.3s` }}>
        {isOpen &&
          safeItems.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.href}
              className="sidebar-optionsList-item"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;
