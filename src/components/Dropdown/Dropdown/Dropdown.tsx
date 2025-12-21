import React, { useState, useRef, useEffect } from 'react';

export type OptionsListPosition = 'top' | 'bottom' | 'left' | 'right' | 'inside';
export type OpenMenuMode = 'click' | 'hover';
export type CloseMenuMode = 'click_option_again' | 'click_outside' | 'mouse_leave';

export interface DropdownItem {
  label: string;
  children?: DropdownItem[];
  optionsListPosition?: OptionsListPosition;
  Indentation?: string;
  AllowMultipleMenusOpened?: boolean;
  RememberOpenedMenus?: boolean;
  element?: React.ReactNode;
}

export interface DropdownProps {
  triggerItem: DropdownItem;
  optionsListPosition?: OptionsListPosition;
  OpenMenu?: OpenMenuMode[];
  CloseMenu?: CloseMenuMode[];
  Indentation?: string;
  parentIndex?: string;
  index?: string;
  parentAllowMultiple?: boolean;
  forceOpen?: boolean;
  parentRememberList?: string[];
  isRoot?: boolean;
  DropdownOption?: (props: {
    label: string;
    onClick?: () => void;
    isOpen?: boolean;
  }) => React.ReactNode;
}

export const dropdownPropOptions = {
  optionsListPosition: ['top', 'bottom', 'left', 'right', 'inside'] as OptionsListPosition[],
  OpenMenu: ['click', 'hover'] as OpenMenuMode[],
  CloseMenu: ['click_option_again', 'click_outside', 'mouse_leave'] as CloseMenuMode[],
};

export const exampleDropdownProps: DropdownProps = {
  triggerItem: {
    label: 'Menu',
    children: [
      { label: 'Item 1' },
      {
        label: 'Item 2',
        children: [{ label: 'Sub Item 1' }],
      },
    ],
  },
  OpenMenu: ['click'],
  CloseMenu: ['click_outside'],
  optionsListPosition: 'bottom',
};

const DropdownRegistry: Map<string, () => void> = new Map();
export const OpenedMenus: Record<string, string[]> = {};

const parseIndentation = (value?: string) => {
  if (!value) return { dir: 'left', amount: '0px' };
  const [dir, amount] = value.split(',').map(s => s.trim());
  return { dir: dir || 'left', amount: amount || '0px' };
};

const DropdownOptionsListWrapper: React.FC<{
  children: React.ReactNode;
  position?: OptionsListPosition;
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
          top: position === 'bottom' ? '100%' : undefined,
          bottom: position === 'top' ? '100%' : undefined,
          left: position === 'right' ? '100%' : 0,
          right: position === 'left' ? '100%' : undefined,
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          width: 'max-content',
          ...offsetStyle,
          boxSizing: 'border-box',
        };

  return <div style={style}>{children}</div>;
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
  DropdownOption,
}) => {
  const [open, setOpen] = useState(forceOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (!OpenedMenus[index]) OpenedMenus[index] = [];

  const closeDropdown = () => setOpen(false);
  const openDropdown = () => setOpen(true);

  const toggleDropdown = () => {
    if (open && CloseMenu.includes('click_option_again')) closeDropdown();
    else if (!open && OpenMenu.includes('click')) openDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        CloseMenu.includes('click_outside') &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [CloseMenu]);

  const triggerContent = DropdownOption
    ? DropdownOption({ label: triggerItem.label, onClick: toggleDropdown, isOpen: open })
    : triggerItem?.element ?? triggerItem?.label ?? '';

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <div onClick={toggleDropdown}>{triggerContent}</div>
      {open && triggerItem?.children && Array.isArray(triggerItem.children) && (
        <DropdownOptionsListWrapper
          id={`${index}-list`}
          position={triggerItem.optionsListPosition || optionsListPosition}
          indentation={triggerItem.Indentation ?? Indentation}
        >
          {triggerItem.children.map((item, i) => (
            <div key={i}>{item?.label ?? ''}</div>
          ))}
        </DropdownOptionsListWrapper>
      )}
    </div>
  );
};

export default Dropdown;
