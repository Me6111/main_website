import React, { ChangeEvent } from 'react';
import './InputField.css';

interface InputFieldProps {
  name: string;
  nameAttr?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  style?: React.CSSProperties;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  readOnly?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  nameAttr,
  value,
  onChange,
  placeholder,
  type = 'text',
  icon,
  disabled = false,
  tooltip,
  className = '',
  style,
  background,
  onClick,
  autoFocus,
  maxLength,
  minLength,
  required,
  readOnly,
}) => {
  return (
    <div
      className={`InputField ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        background: background || 'transparent',
        cursor: disabled ? 'not-allowed' : 'text',
        ...style,
      }}
      onClick={disabled ? undefined : onClick}
      title={tooltip}
    >
      {icon && <div className="icon">{icon}</div>}

      <input
        type={type}
        className="input-element"
        name={nameAttr}
        value={value}
        onChange={onChange}
        placeholder={placeholder || name}
        disabled={disabled}
        title={tooltip}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
};

export default InputField;
