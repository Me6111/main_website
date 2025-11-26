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
  onClick?: (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  active?: boolean;
  [key: string]: any;
}

const OptionItem: React.FC<OptionItemProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(!!props.active);

  useEffect(() => {
    setIsActive(!!props.active);
  }, [props.active]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    if (!props.disabled && props.onClick) props.onClick(e);
  };

  const visualActive = isHovered || isActive;

  return (
    <div
      className={`OptionItem ${props.disabled ? 'disabled' : ''} ${visualActive ? 'active' : ''} ${props.className || ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={props.tooltip}
      {...props}
    >
      {props.icon && <div className="OptionItem-icon">{props.icon}</div>}

      <div className="OptionItem-content">
        {props.content}
        {props.children && <div className="OptionItem-children">{props.children}</div>}
      </div>

      {props.checkbox && (
        <div className="OptionItem-checkbox">
          <CheckBox {...props.checkboxProps} />
        </div>
      )}

      {props.expandIcon && !props.children && (
        <div className="OptionItem-expandIcon">
          <Arrow
            isParentHovered={visualActive}
            strokeColor={visualActive ? 'black' : 'white'}
            fillColor={visualActive ? 'black' : 'white'}
            {...props.arrowProps}
          />
        </div>
      )}
    </div>
  );
};

export default OptionItem;
