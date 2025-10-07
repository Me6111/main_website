import React, { useState } from 'react';
import './Dropdown.css';

import OptionsList from '../OptionsList/OptionsList';
import InputField, { InputFieldProps } from '../InputField/InputField';  // Import props if needed

interface DropdownProps {
  title: string;
  options: any[];
  displayMode?: 'replace' | 'append' | 'prepend';  // for title + selected display
  onChange?: (selectedOption: any) => void;
  defaultSelected?: any;
  disabled?: boolean;
  placeholder?: string;
  renderOption?: (option: any) => React.ReactNode;
  className?: string;
  expandTrigger?: 'click' | 'hover' | 'manual'; 
  isOpen?: boolean;

  // NEW PROPS for optional InputField
  inputFieldProps?: Partial<InputFieldProps>;
  inputFieldDisplay?: 'replace' | 'append' | 'prepend' | 'none'; // default none means no input field
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
  displayMode = 'replace',
  onChange,
  defaultSelected = null,
  disabled = false,
  placeholder = 'Select...',
  renderOption,
  className = '',
  expandTrigger = 'click',
  isOpen: manualOpen = false,

  inputFieldProps,
  inputFieldDisplay = 'none',
}) => {
  const [selected, setSelected] = useState(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: any) => {
    if (disabled) return;
    setSelected(option);
    if (onChange) onChange(option);
    if (expandTrigger === 'click') setIsOpen(false);
  };

  const displayTitle = () => {
    if (!selected) return title || placeholder;

    const rendered = renderOption
      ? renderOption(selected)
      : selected.label || selected.name || selected.toString();

    switch (displayMode) {
      case 'replace':
        return rendered;
      case 'append':
        return (
          <>
            {title} {rendered}
          </>
        );
      case 'prepend':
        return (
          <>
            {rendered} {title}
          </>
        );
      default:
        return title;
    }
  };

  const handleToggle = () => {
    if (expandTrigger === 'click') {
      setIsOpen((prev) => !prev);
    }
  };

  const dropdownOpen = expandTrigger === 'manual' ? manualOpen : isOpen;

  // Helper to render title + optional input field based on inputFieldDisplay
  const renderToggleContent = () => {
    if (inputFieldDisplay === 'none') {
      return displayTitle();
    }

    if (inputFieldDisplay === 'replace') {
      // only input field shown instead of title
      return <InputField {...inputFieldProps} disabled={disabled} placeholder={placeholder} />;
    }

    if (inputFieldDisplay === 'append') {
      return (
        <>
          {displayTitle()}
          <InputField {...inputFieldProps} disabled={disabled} placeholder={placeholder} />
        </>
      );
    }

    if (inputFieldDisplay === 'prepend') {
      return (
        <>
          <InputField {...inputFieldProps} disabled={disabled} placeholder={placeholder} />
          {displayTitle()}
        </>
      );
    }

    return displayTitle();
  };

  return (
    <div
      className={`dropdown ${className} ${disabled ? 'disabled' : ''}`}
      onMouseEnter={() => expandTrigger === 'hover' && setIsOpen(true)}
      onMouseLeave={() => expandTrigger === 'hover' && setIsOpen(false)}
    >
      <button
        type="button"
        className="dropdown-toggle"
        disabled={disabled}
        onClick={handleToggle}
      >
        {renderToggleContent()}
      </button>

      {dropdownOpen && (
        <OptionsList
          options={options}
          optionItem={(option, index) => (
            <div
              key={index}
              className={`dropdown-option ${selected === option ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelect(option);
                }
              }}
            >
              {renderOption ? renderOption(option) : option.label || option.name || option.toString()}
            </div>
          )}
        />
      )}
    </div>
  );
};

export default Dropdown;
