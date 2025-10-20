import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: any[];
  placeholder?: string;
  onSelect?: (option: any) => void;
  value?: any;
  defaultValue?: any;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  dropdownClassName?: string;
  closeOnSelect?: boolean;
  onClick?: boolean;
  onHover?: boolean;
  optionListPosition?: 'left' | 'right' | 'above' | 'below';
  optionElement?: (option: any, index: number) => React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select...',
  onSelect,
  value,
  defaultValue = null,
  disabled = false,
  className = '',
  style,
  dropdownClassName = '',
  closeOnSelect = true,
  onClick = true,
  onHover = false,
  optionListPosition = 'below',
  optionElement,
}) => {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const actualSelected = value !== undefined ? value : selected;

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: any) => {
    if (value === undefined) setSelected(option);
    if (onSelect) onSelect(option);
    if (closeOnSelect) setIsOpen(false);
  };

  const renderLabel = () => {
    if (actualSelected === null || actualSelected === undefined) return placeholder;
    return typeof actualSelected === 'string'
      ? actualSelected
      : actualSelected.name ?? JSON.stringify(actualSelected);
  };

  // Hover logic with delay
  const handleMouseEnter = () => {
    if (disabled || !onHover) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (disabled || !onHover) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Small delay to prevent flicker on nested dropdown
  };

  const handleToggleClick = () => {
    if (disabled || !onClick) return;
    setIsOpen(prev => !prev);
  };

  const menuClass = `Dropdown-menu position-${optionListPosition} ${dropdownClassName}`;

  return (
    <div
      ref={dropdownRef}
      className={`Dropdown ${className} ${disabled ? 'disabled' : ''}`}
      style={style}
      onMouseEnter={onHover ? handleMouseEnter : undefined}
      onMouseLeave={onHover ? handleMouseLeave : undefined}
    >
      <button
        type="button"
        className="Dropdown-toggle"
        disabled={disabled}
        onClick={onClick ? handleToggleClick : undefined}
      >
        {renderLabel()}
        <span className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className={menuClass}>
          {options.map((option, index) => (
            <div
              key={index}
              className="Dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {optionElement
                ? optionElement(option, index)
                : typeof option === 'string'
                ? option
                : option.name ?? JSON.stringify(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
