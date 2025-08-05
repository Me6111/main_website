import React from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';

type SidebarProps = {
  isOpen: boolean;
  items: { label: string; href: string }[] | undefined | null;
  onClose: () => void;
  portalTarget?: Element; // Optional custom portal target
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, items, onClose, portalTarget }) => {
  const safeItems = Array.isArray(items) ? items : [];

  const sidebarContent = (
    <div className="sidebar-container">
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
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
    </div>
  );

  // If portalTarget is provided, use portal; otherwise, render in place
  return portalTarget
    ? ReactDOM.createPortal(sidebarContent, portalTarget)
    : sidebarContent;
};

export default Sidebar;
