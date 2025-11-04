import React, { useState } from 'react';
import './CheckBox.css';
import Icon_X from '../Icons/Icon_X/Icon_X';

interface CheckBoxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  boxStyle?: React.CSSProperties;
  checkmarkStyle?: React.CSSProperties;
  checkmarkSymbol?: string | React.ReactNode;
}

const CheckBox: React.FC<CheckBoxProps> = ({ 
  checked = false, 
  onChange, 
  disabled = false, 
  boxStyle, 
  checkmarkStyle,
  checkmarkSymbol
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const renderCheckmark = () => {
    if (!isChecked) return null;
    if (checkmarkSymbol === 'Icon_X') return <Icon_X />;
    if (typeof checkmarkSymbol === 'string' || React.isValidElement(checkmarkSymbol)) {
      return <>{checkmarkSymbol}</>;
    }
    return null;
  };

  return (
    <div
      className={`CheckBox-outer ${isChecked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}
      style={boxStyle}
      onClick={handleChange}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleChange();
        }
      }}
    >
      <div className="CheckBox-inner">
        {isChecked && (
          <div className="CheckBox-CheckMark" style={checkmarkStyle}>
            {renderCheckmark()}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckBox;
