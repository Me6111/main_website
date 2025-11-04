import React, { ReactNode, useState } from 'react';
import './OptionItem.css';
import Arrow from '../../Icons/Arrow/Arrow';
import CheckBox from '../../CheckBox/CheckBox';

interface OptionItemProps {
  content: ReactNode;
  children?: ReactNode;
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
  children,
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
  const [isHovered, setIsHovered] = useState(false);

  const containerStyles: React.CSSProperties = {
    background: background || 'transparent',
    cursor: disabled ? 'not-allowed' : href || onClick ? 'pointer' : 'default',
    ...style,
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const innerContent = (
    <div
      className={`OptionItem ${disabled ? 'disabled' : ''} ${className}`}
      style={containerStyles}
      onClick={disabled ? undefined : onClick}
      title={tooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <div className="OptionItem-icon">{icon}</div>}

      <div className="OptionItem-content">
        {content}
        {children && <div className="OptionItem-children">{children}</div>}
      </div>

      {checkbox && (
        <div className="OptionItem-checkbox">
          <CheckBox 
            checked={true} 
            disabled={false}
            boxStyle={{
              background: 'transparent',
              border: '2px solid #fff',
              width: '30px',
              height: '30px',
              borderRadius: '5px',
            }}
            checkmarkStyle={{
              color: '#fff',
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
            strokeColor="transparent"
            fillColor="white"
            size={{
              width: 12,
              height: 8,
              notch: 0,
              rotate: -90,
            }}
            hover={{
              rotate: 90,

              width: 15,
              height: 19,

              transition: 0.1,
            }}
            isParentHovered={isHovered} // Pass parent hover state
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
