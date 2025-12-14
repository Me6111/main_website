import React, { useState, useRef, useEffect } from 'react';

export interface DropdownItem {
  label: string;
  children?: DropdownItem[];
  optionsListPosition?: 'top' | 'bottom' | 'left' | 'right' | 'inside';
  Indentation?: string;
  AllowMultipleMenusOpened?: boolean;
  RememberOpenedMenus?: boolean;
  element?: React.ReactNode;
}

interface DropdownProps {
  triggerItem: DropdownItem;
  optionsListPosition?: 'top' | 'bottom' | 'left' | 'right' | 'inside';
  OpenMenu?: Array<'click' | 'hover'>;
  CloseMenu?: Array<'click_option_again' | 'click_outside' | 'mouse_leave'>;
  Indentation?: string;
  parentIndex?: string;
  index?: string;
  parentAllowMultiple?: boolean;
  forceOpen?: boolean;
  parentRememberList?: string[];
  isRoot?: boolean;
}

const DropdownRegistry: Map<string, () => void> = new Map();
const OpenedMenus: Record<string, string[]> = {};

const parseIndentation = (value?: string) => {
  if (!value) return { dir: 'left', amount: '0px' };
  const [dir, amount] = value.split(',').map(s => s.trim());
  return { dir: dir || 'left', amount: amount || '0px' };
};

const DropdownOptionsListWrapper: React.FC<{
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'inside';
  indentation?: string;
  id: string;
}> = ({ children, position = 'bottom', indentation }) => {
  const { dir, amount } = parseIndentation(indentation);
  const offsetStyle: React.CSSProperties =
    dir === 'left'
      ? { left: amount }
      : dir === 'right'
      ? { right: amount }
      : dir === 'top'
      ? { top: amount }
      : { bottom: amount };

  const style: React.CSSProperties =
    position === 'inside'
      ? {
          position: 'relative',
          ...offsetStyle,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          boxSizing: 'border-box',
        }
      : {
          position: 'absolute',
          top: position === 'bottom' ? '100%' : position === 'top' ? undefined : 0,
          bottom: position === 'top' ? '100%' : undefined,
          left: position === 'right' ? '100%' : position === 'left' ? undefined : 0,
          right: position === 'left' ? '100%' : undefined,
          zIndex: 1000,
          border: '1px solid #ccc',
          boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          width: 'max-content',
          ...offsetStyle,
          boxSizing: 'border-box',
        };

  return <div className="options_list" style={style}>{children}</div>;
};

const Dropdown: React.FC<DropdownProps> = ({
  triggerItem,
  optionsListPosition = 'bottom',
  OpenMenu = ['click'],
  CloseMenu = ['click_option_again'],
  Indentation = 'left, 0px',
  parentIndex = '',
  index = '0',
  parentAllowMultiple = false,
  forceOpen = false,
  parentRememberList,
  isRoot = false,
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
      const siblings = Array.from(DropdownRegistry.keys()).filter((id) => {
        if (id === index) return false;
        if (!id.startsWith(parentIndex)) return false;
        return id.length === index.length;
      });
      siblings.forEach((id) => DropdownRegistry.get(id)?.());
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
      if (
        CloseMenu.includes('click_outside') &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      )
        closeDropdown();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [CloseMenu]);

  const renderChildren = (items: DropdownItem[]) =>
    items.map((item, idx) => {
      const childIndex = `${index}-${idx}`;
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
            Indentation={item.Indentation ?? Indentation}
            parentIndex={index}
            index={childIndex}
            parentAllowMultiple={triggerItem.AllowMultipleMenusOpened ?? false}
            forceOpen={childInitiallyOpen}
            parentRememberList={triggerItem.RememberOpenedMenus ? OpenedMenus[index] : undefined}
            isRoot={false}
          />
        );
      }

      if (item.element) return <div key={childIndex}>{item.element}</div>;
      return <div key={childIndex}>{item.label}</div>;
    });

  return (
    <div
      id={index}
      ref={dropdownRef}
      className="Dropdown"
      style={{
        position: isRoot ? 'absolute' : 'relative',
        top: isRoot ? '50%' : undefined,
        left: isRoot ? '50%' : undefined,
        display: 'inline-block',
        boxSizing: 'border-box',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={toggleDropdown}>
        {triggerItem.element || triggerItem.label}
      </div>
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
