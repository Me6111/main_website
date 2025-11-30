import React, { useState, useRef, useEffect } from 'react';
import OptionItem from '../OptionItem/OptionItem';

export interface DropdownItem {
  id: string;
  label: string;
  children?: DropdownItem[];
  arrowProps?: any;
  checkboxProps?: any;
}

interface DropdownProps {
  triggerItem: DropdownItem;
  optionsListPosition?: 'top' | 'bottom' | 'left' | 'right';
  multipleMenusOpenedAllowed?: boolean;
  OpenMenu?: Array<'click' | 'hover'>;
  CloseMenu?: Array<'click_option_again' | 'click_outside' | 'mouse_leave'>;
  arrowDefaultRotate?: 'top' | 'bottom' | 'left' | 'right';
  arrowActiveRotate?: 'top' | 'bottom' | 'left' | 'right';
}

const openDropdowns: Set<string> = new Set();

const DropdownOptionsListWrapper: React.FC<{ children: React.ReactNode; position?: 'top' | 'bottom' | 'left' | 'right' }> = ({ children, position = 'bottom' }) => {
  const style: React.CSSProperties = {
    position: 'absolute',
    top: position === 'bottom' ? '100%' : position === 'top' ? undefined : 0,
    bottom: position === 'top' ? '100%' : undefined,
    left: position === 'right' ? '100%' : position === 'left' ? undefined : 0,
    right: position === 'left' ? '100%' : undefined,
    zIndex: 1000,
    background: '#fff',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
    width: '100%',
    boxSizing: 'border-box',
  };
  return <div style={style}>{children}</div>;
};

const Dropdown: React.FC<DropdownProps> = ({
  triggerItem,
  optionsListPosition = 'bottom',
  multipleMenusOpenedAllowed = true,
  OpenMenu = ['click'],
  CloseMenu = ['click_option_again'],
  arrowDefaultRotate = 'left',
  arrowActiveRotate = 'bottom',
}) => {
  const [open, setOpen] = useState(false);
  const idRef = useRef(triggerItem.id);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDropdown = () => {
    if (!multipleMenusOpenedAllowed) openDropdowns.clear();
    openDropdowns.add(idRef.current);
    setOpen(true);
  };

  const closeDropdown = () => {
    openDropdowns.delete(idRef.current);
    setOpen(false);
  };

  const toggleDropdown = () => {
    if (open && CloseMenu.includes('click_option_again')) closeDropdown();
    else if (!open && OpenMenu.includes('click')) openDropdown();
  };

  const handleMouseEnter = () => {
    if (!open && OpenMenu.includes('hover')) openDropdown();
  };

  const handleMouseLeave = () => {
    if (open && CloseMenu.includes('mouse_leave')) closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (CloseMenu.includes('click_outside') && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [CloseMenu]);

  const renderChildren = (items: DropdownItem[]) => {
    return items.map(item => {
      const hasChildren = item.children && item.children.length > 0;
      if (hasChildren) {
        return (
          <Dropdown
            key={item.id}
            triggerItem={item}
            optionsListPosition={optionsListPosition}
            multipleMenusOpenedAllowed={multipleMenusOpenedAllowed}
            OpenMenu={OpenMenu}
            CloseMenu={CloseMenu}
            arrowDefaultRotate={arrowDefaultRotate}
            arrowActiveRotate={arrowActiveRotate}
          />
        );
      } else {
        return (
          <OptionItem
            key={item.id}
            content={item.label}
            expandIcon={false}
            active={false}
            arrowProps={{ ...item.arrowProps, rotate: arrowDefaultRotate }}
            checkboxProps={item.checkboxProps}
            onClick={() => {}}
            style={{ width: '100%', minWidth: '100%', boxSizing: 'border-box' }}
          />
        );
      }
    });
  };

  return (
    <div
      className="Dropdown"
      ref={dropdownRef}
      style={{ position: 'relative', display: 'inline-block', width: '100%', boxSizing: 'border-box' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OptionItem
        content={triggerItem.label}
        expandIcon={!!triggerItem.children?.length}
        active={open}
        onClick={toggleDropdown}
        arrowProps={{
          ...triggerItem.arrowProps,
          rotate: open ? arrowActiveRotate : arrowDefaultRotate,
        }}
        checkboxProps={triggerItem.checkboxProps}
        style={{ width: '100%', minWidth: '100%', boxSizing: 'border-box' }}
      />
      {open && triggerItem.children && (
        <DropdownOptionsListWrapper position={optionsListPosition}>
          {renderChildren(triggerItem.children)}
        </DropdownOptionsListWrapper>
      )}
    </div>
  );
};

export default Dropdown;
