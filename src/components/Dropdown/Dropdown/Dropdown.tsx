import React, { useState, MouseEventHandler } from 'react';
import './Dropdown.css';
import OptionItem from '../OptionItem/OptionItem';

interface DropdownOption {
  label: string;
  onClick?: () => void;
  subOptions?: DropdownOption[];
  disabled?: boolean;
  href?: string;
  icon?: React.ReactNode;
  tooltip?: string;
}

interface DropdownProps {
  options: DropdownOption[];
  trigger?: 'hover' | 'click';
  label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  trigger = 'hover',
  label = 'Select Option',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (trigger === 'hover') setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') setIsOpen(false);
  };

  const handleClick = () => {
    if (trigger === 'click') setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="Dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="DropdownBtn" onClick={handleClick}>
        {label}
      </button>

      {isOpen && (
        <ul className="DropdownMenu">
          {options.map((option, i) => (
            <DropdownItem key={i} option={option} trigger={trigger} />
          ))}
        </ul>
      )}
    </div>
  );
};

interface DropdownItemProps {
  option: DropdownOption;
  trigger: 'hover' | 'click';
}

const DropdownItem: React.FC<DropdownItemProps> = ({ option, trigger }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const hasSubOptions = Array.isArray(option.subOptions) && option.subOptions.length > 0;

  const handleMouseEnter = () => {
    if (trigger === 'hover' && hasSubOptions) setIsSubOpen(true);
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover' && hasSubOptions) setIsSubOpen(false);
  };

  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    if (trigger === 'click' && hasSubOptions) {
      setIsSubOpen((prev) => !prev);
    }
    if (option.onClick && !hasSubOptions) {
      option.onClick();
    }
  };

  return (
    <li
      className="DropdownItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <OptionItem
        name={option.label}
        onClick={option.disabled ? undefined : option.onClick}
        disabled={option.disabled}
        href={option.href}
        tooltip={option.tooltip}
      />

      {hasSubOptions && (
        <ul className={`DropdownSubmenu ${isSubOpen ? 'Open' : ''}`}>
          {option.subOptions?.map((subOption, i) => (
            <DropdownItem key={i} option={subOption} trigger={trigger} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
