import React, { useState } from 'react';
import './Dropdown.css';
import OptionItem from '../OptionItem/OptionItem';

export interface Option {
  label: string;
  onClick?: () => void;
  subOptions?: Option[];
  [key: string]: any;
}

interface DropdownProps {
  options: Option[];
  trigger?: 'click' | 'hover';
  DropdownListPosition?: 'left' | 'right' | 'top' | 'bottom';
}

const DropdownItem: React.FC<{
  option: Option;
  trigger: 'click' | 'hover';
  position: 'left' | 'right' | 'top' | 'bottom';
}> = ({ option, trigger, position }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (option.disabled) return;
    if (option.subOptions && trigger === 'click') {
      setOpen(prev => !prev);
    } else if (option.onClick) {
      option.onClick();
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (trigger === 'hover' && option.subOptions) setOpen(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (trigger === 'hover' && option.subOptions) setOpen(false);
  };

  const handleSubDropdownMouseEnter = () => {
    if (trigger === 'hover') setHovered(true);
  };

  const handleSubDropdownMouseLeave = () => {
    if (trigger === 'hover') setHovered(false);
  };

  const optionProps = {
    content: option.content ?? option.label,
    expandIcon: !!option.subOptions,
    active: hovered || open,
    ...option,
  };

  return (
    <div
      className="DropdownItem"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <OptionItem {...optionProps} />
      {option.subOptions && open && (
        <div
          className={`DropdownList ${position}`}
          onMouseEnter={handleSubDropdownMouseEnter}
          onMouseLeave={handleSubDropdownMouseLeave}
        >
          {option.subOptions.map((subOpt, idx) => (
            <DropdownItem key={idx} option={subOpt} trigger={trigger} position={position} />
          ))}
        </div>
      )}
    </div>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ options, trigger = 'click', DropdownListPosition = 'bottom' }) => {
  return (
    <div>
      {options.map((opt, idx) => (
        <DropdownItem key={idx} option={opt} trigger={trigger} position={DropdownListPosition} />
      ))}
    </div>
  );
};

export default Dropdown;
