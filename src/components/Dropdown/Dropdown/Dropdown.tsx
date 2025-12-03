import React, { useState, useRef, useEffect } from 'react';
import OptionItem from '../OptionItem/OptionItem';

export interface DropdownItem {
  label: string;
  children?: DropdownItem[];
  optionsListPosition?: 'top' | 'bottom' | 'left' | 'right' | 'inside';
  arrowProps?: any;
  checkboxProps?: any;
  Indentation?: number;
  AllowMultipleMenusOpened?: boolean;
  RememberOpenedMenus?: boolean;
}

interface DropdownProps {
  triggerItem: DropdownItem;
  optionsListPosition?: 'top' | 'bottom' | 'left' | 'right' | 'inside';
  OpenMenu?: Array<'click' | 'hover'>;
  CloseMenu?: Array<'click_option_again' | 'click_outside' | 'mouse_leave'>;
  arrowDefaultRotate?: 'top' | 'bottom' | 'left' | 'right';
  arrowActiveRotate?: 'top' | 'bottom' | 'left' | 'right';
  Indentation?: number;
  parentIndex?: string;
  index?: string;
  parentAllowMultiple?: boolean;
  forceOpen?: boolean;
  parentRememberList?: string[];
}

const DropdownRegistry: Map<string, () => void> = new Map();
const OpenedMenus: Record<string, string[]> = {};

const DropdownOptionsListWrapper: React.FC<{
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'inside';
  indentation?: number;
  id: string;
}> = ({ children, position = 'bottom', indentation = 0 }) => {
  const style: React.CSSProperties =
    position === 'inside'
      ? { position: 'relative', width: '100%', boxSizing: 'border-box', paddingLeft: indentation }
      : {
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
          paddingLeft: indentation
        };
  return <div className="OPTIONS_LIST" style={style}>{children}</div>;
};

const Dropdown: React.FC<DropdownProps> = ({
  triggerItem,
  optionsListPosition = 'bottom',
  OpenMenu = ['click'],
  CloseMenu = ['click_option_again'],
  arrowDefaultRotate = 'left',
  arrowActiveRotate = 'bottom',
  Indentation = 0,
  parentIndex = '',
  index = '0',
  parentAllowMultiple = false,
  forceOpen = false,
  parentRememberList
}) => {
  const [open, setOpen] = useState(forceOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (!OpenedMenus[index]) OpenedMenus[index] = [];

  const addToParentRememberList = () => {
    if (parentRememberList && !parentRememberList.includes(index)) parentRememberList.push(index);
  };

  const removeFromParentRememberList = () => {
    if (parentRememberList) {
      const i = parentRememberList.indexOf(index);
      if (i !== -1) parentRememberList.splice(i, 1);
    }
  };

  const closeDropdown = () => {
    removeFromParentRememberList();
    setOpen(false);
  };

  const openDropdown = () => {
    if (!triggerItem.AllowMultipleMenusOpened && !parentAllowMultiple) {
      const siblings = Array.from(DropdownRegistry.keys()).filter(id => {
        if (id === index) return false;
        if (!id.startsWith(parentIndex)) return false;
        return id.length === index.length;
      });
      siblings.forEach(id => DropdownRegistry.get(id)?.());
    }

    DropdownRegistry.set(index, closeDropdown);
    setOpen(true);
    addToParentRememberList();
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
      if (CloseMenu.includes('click_outside') && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) closeDropdown();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [CloseMenu]);

  const renderChildren = (items: DropdownItem[]) =>
    items.map((item, idx) => {
      const childIndex = `${index}${idx}`;
      if (!OpenedMenus[childIndex]) OpenedMenus[childIndex] = [];

      const childInitiallyOpen = triggerItem.RememberOpenedMenus && OpenedMenus[index]?.includes(childIndex);

      if (item.children?.length) {
        return (
          <Dropdown
            key={childIndex}
            triggerItem={item}
            optionsListPosition={item.optionsListPosition || optionsListPosition}
            OpenMenu={OpenMenu}
            CloseMenu={CloseMenu}
            arrowDefaultRotate={arrowDefaultRotate}
            arrowActiveRotate={arrowActiveRotate}
            Indentation={item.Indentation ?? Indentation}
            parentIndex={index}
            index={childIndex}
            parentAllowMultiple={triggerItem.AllowMultipleMenusOpened ?? false}
            forceOpen={childInitiallyOpen}
            parentRememberList={triggerItem.RememberOpenedMenus ? OpenedMenus[index] : undefined}
          />
        );
      }

      return (
        <OptionItem
          key={childIndex}
          id={childIndex}
          content={item.label}
          expandIcon={false}
          active={false}
          arrowProps={{ ...item.arrowProps, rotate: arrowDefaultRotate }}
          checkboxProps={item.checkboxProps}
          onClick={() => {}}
          style={{
            width: '100%',
            minWidth: '100%',
            boxSizing: 'border-box',
            paddingLeft: item.Indentation ?? Indentation
          }}
        />
      );
    });

  return (
    <div
      id={index}
      ref={dropdownRef}
      className="Dropdown"
      style={{ position: 'relative', display: 'inline-block', width: '100%', boxSizing: 'border-box' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OptionItem
        content={triggerItem.label}
        expandIcon={!!triggerItem.children?.length}
        active={open}
        onClick={toggleDropdown}
        arrowProps={{ ...triggerItem.arrowProps, rotate: open ? arrowActiveRotate : arrowDefaultRotate }}
        checkboxProps={triggerItem.checkboxProps}
        style={{ width: '100%', minWidth: '100%', boxSizing: 'border-box' }}
      />
      {open && triggerItem.children && (
        <DropdownOptionsListWrapper
          id={`${index}-list`}
          position={triggerItem.optionsListPosition || optionsListPosition}
          indentation={triggerItem.Indentation ?? Indentation}
        >
          {renderChildren(triggerItem.children)}
        </DropdownOptionsListWrapper>
      )}
    </div>
  );
};

export default Dropdown;
export { OpenedMenus };
