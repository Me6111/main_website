import React from 'react';
import Sidebar from '../Sidebar';
import Dropdown from '../../../Dropdown/Dropdown/Dropdown';

export interface OptionItemProps {
  label: string;
  onClick?: () => void;
  subOptions?: OptionItemProps[];
  content?: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  checkbox?: boolean;
  expandIcon?: boolean;
  tooltip?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
}

export interface DropdownFeatures {
  trigger?: 'hover' | 'click';
  arrow?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface SidebarFeatures {
  expanded?: boolean;
  position?: string;
  size?: string;
  closeByClick?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface SidebarDropdownProps {
  OptionsList?: { label: string; options: OptionItemProps[]; dropdownFeatures?: DropdownFeatures }[];
  SidebarFeatures?: SidebarFeatures;
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
  OptionsList = [],
  SidebarFeatures = {},
}) => {
  return (
    <Sidebar
      content={
        <>
          {OptionsList.map(({ label, options, dropdownFeatures }) => (
            <Dropdown
              key={label}
              label={label}
              options={options.map(option => ({
                ...option,
              }))}
              trigger={dropdownFeatures?.trigger || 'hover'}
              arrow={dropdownFeatures?.arrow}
              className={dropdownFeatures?.className}
              style={dropdownFeatures?.style}
            />
          ))}
        </>
      }
      expanded={SidebarFeatures.expanded ?? true}
      position={SidebarFeatures.position ?? 'left: 0'}
      size={SidebarFeatures.size ?? '250px, 100%'}
      closeByClick={SidebarFeatures.closeByClick ?? false}
      className={SidebarFeatures.className}
      style={SidebarFeatures.style}
    />
  );
};

export default SidebarDropdown;
