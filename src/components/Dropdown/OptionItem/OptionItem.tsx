import React, { ReactNode } from 'react';
import './OptionItem.css';

import Arrow from '../../ArrowButtons/Arrow/Arrow';
import CheckBox from '../../CheckBox/CheckBox';

interface OptionItemProps {
  content: ReactNode;
  background?: string;
  href?: string;
  icon?: ReactNode;
  checkbox?: boolean;
  expandIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
}

const OptionItem: React.FC<OptionItemProps> = ({
  content,
  background,
  href,
  icon,
  checkbox,
  expandIcon,
  onClick,
  disabled = false,
  tooltip,
  className = '',
  style,
  target = '_self',
}) => {
  const containerStyles: React.CSSProperties = {
    background: background || 'transparent',
    cursor: disabled ? 'not-allowed' : href || onClick ? 'pointer' : 'default',
    ...style,
  };

  const innerContent = (
    <div
      className={`OptionItem ${disabled ? 'disabled' : ''} ${className}`}
      style={containerStyles}
      onClick={disabled ? undefined : onClick}
      title={tooltip}
    >
      {icon && <div className="OptionItem-icon">{icon}</div>}

      <div className="OptionItem-content">
        {content}
      </div>

      {checkbox && (
        <div className="OptionItem-checkbox">
  <CheckBox 
    checked={true} 
    disabled={false}
    boxStyle={{
      background: 'transparent',
      border: '2px solid #ffffffff',
      width: '30px',
      height: '30px',
      borderRadius: '5px',
    }}
    checkmarkStyle={{
      color: '#ffffffff',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
    checkmarkSymbol="✔"
  />
        </div>
      )}

      {expandIcon && (
        <div className="OptionItem-expandIcon">
          <Arrow 
            strokeColor='transparent'
            fillColor='white'
            size={{
              width: 20,
              height: 20,
              notch: 0,
              rotate: -90,
            }}
            hover={{
              rotate: 90,
              transition: 0.1,
            }} 
          />
        </div>
      )}
    </div>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="OptionItem-link"
        title={tooltip}
      >
        {innerContent}
      </a>
    );
  }

  return innerContent;
};

export default OptionItem;
