import React, { useState, useEffect, ChangeEvent } from 'react';
import './InputField.css';

interface InputFieldProps {
  name: string;
  nameAttr?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  tooltip?: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  readOnly?: boolean;
  animation?: boolean;
  labelPosition?: 'inside' | 'above'; // <-- New prop
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  nameAttr,
  value = '',
  onChange,
  type = 'text',
  icon,
  disabled = false,
  tooltip,
  placeholder = '',
  className = '',
  style,
  background,
  onClick,
  autoFocus,
  maxLength,
  minLength,
  required,
  readOnly,
  animation = false,
  labelPosition = 'above', // <-- default is above
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) setIsFocused(false);
  };

  useEffect(() => {
    if (value) setIsFocused(true);
  }, [value]);

  const showFloating = animation || labelPosition === 'inside';

  return (
    <div className="input-field-container">
      <div
        className={`InputField ${className} ${disabled ? 'disabled' : ''}`}
        style={{ background: background || 'transparent', ...style }}
        onClick={disabled ? undefined : onClick}
        title={tooltip}
      >
        {icon && <div className="icon">{icon}</div>}

        <div className={`input-wrapper ${showFloating ? 'animate' : ''}`}>
          <label
            className={`floating-label ${isFocused || value ? 'focused' : ''} ${showFloating ? '' : 'static-label'}`}
          >
            {name}
          </label>
          <input
            type={type}
            name={nameAttr}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            autoFocus={autoFocus}
            maxLength={maxLength}
            minLength={minLength}
            required={required}
            readOnly={readOnly}
            placeholder={showFloating ? placeholder : ''}
            className="input-element"
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
