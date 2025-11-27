import React, { useState, useEffect } from 'react';
import './OptionItem.css';
import Arrow from '../../Icons/Arrow/Arrow';
import CheckBox from '../../CheckBox/CheckBox';

interface OptionItemProps {
  content?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  checkbox?: boolean;
  checkboxProps?: any;
  expandIcon?: boolean;
  arrowProps?: React.ComponentProps<typeof Arrow>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  active?: boolean;
}

const OptionItem: React.FC<OptionItemProps> = ({
  content,
  children,
  icon,
  checkbox,
  checkboxProps,
  expandIcon,
  arrowProps,
  onClick,
  disabled,
  tooltip,
  className,
  active
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(!!active);

  useEffect(() => {
    setIsActive(!!active);
  }, [active]);

  const visualActive = isHovered || isActive;

  return (
    <div
      className={`OptionItem ${disabled ? 'disabled' : ''} ${visualActive ? 'active' : ''} ${className || ''}`}
      onClick={(e) => !disabled && onClick?.(e)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={tooltip}
    >
      {icon && <div className="OptionItem-icon">{icon}</div>}

      <div className="OptionItem-content">
        {content}
        {children && <div className="OptionItem-children">{children}</div>}
      </div>

      {checkbox && (
        <div className="OptionItem-checkbox">
          <CheckBox {...checkboxProps} />
        </div>
      )}

      {expandIcon && !children && (
        <div className="OptionItem-expandIcon">
          <Arrow
            isParentHovered={visualActive}
            strokeColor={visualActive ? 'black' : 'white'}
            fillColor={visualActive ? 'black' : 'white'}
            {...arrowProps}
          />
        </div>
      )}
    </div>
  );
};

export default OptionItem;
