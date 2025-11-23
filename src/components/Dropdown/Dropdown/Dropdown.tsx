import React, { useState } from 'react';
import './Dropdown.css';
import OptionItem from '../OptionItem/OptionItem';

export interface Option {
  label: string;
  onClick?: () => void;
  subOptions?: Option[];
  disabled?: boolean;
}

interface DropdownProps {
  label: string;
  options: Option[];
  trigger?: 'click' | 'hover';
}

const DropdownItem: React.FC<{
  option: Option;
  trigger: 'click' | 'hover';
}> = ({ option, trigger }) => {
  const [subOpen, setSubOpen] = useState(false);

  const handleToggle = () => {
    if (option.disabled) return;
    if (option.subOptions && trigger === 'click') {
      setSubOpen(prev => !prev);
    } else if (option.onClick) {
      option.onClick();
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover' && option.subOptions) setSubOpen(true);
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover' && option.subOptions) setSubOpen(false);
  };

  return (
    <div
      className="DropdownItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OptionItem
        content={option.label}
        expandIcon={!!option.subOptions}
        onClick={handleToggle}
        disabled={option.disabled}
      >
        {option.subOptions && subOpen && (
          <div className="DropdownSubmenu Open">
            {option.subOptions.map((subOpt, i) => (
              <DropdownItem key={i} option={subOpt} trigger={trigger} />
            ))}
          </div>
        )}
      </OptionItem>
    </div>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ label, options, trigger = 'click' }) => {
  const mainOption: Option = { label, subOptions: options };
  return <DropdownItem option={mainOption} trigger={trigger} />;
};

export default Dropdown;
