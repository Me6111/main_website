import React, { useState, useEffect } from 'react';
import './OptionItem.css';
import Arrow from '../../Icons/Arrow/Arrow';
import CheckBox from '../../CheckBox/CheckBox';

interface OptionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  checkbox?: boolean;
  checkboxProps?: any;
  expandIcon?: boolean;
  arrowProps?: Partial<React.ComponentProps<typeof Arrow>>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  tooltip?: string;
  active?: boolean;
  className?: string;
}

const OptionItem: React.FC<OptionItemProps> = ({
  content,
  children,
  icon,
  checkbox,
  checkboxProps,
  expandIcon,
  arrowProps = {},
  onClick,
  disabled,
  tooltip,
  active,
  className,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(!!active);

  useEffect(() => {
    setIsActive(!!active);
  }, [active]);

  const visualActive = isHovered || isActive;

  const finalArrowProps: React.ComponentProps<typeof Arrow> = {
    ...arrowProps,
    size: {
      ...(arrowProps.size || {})
    },
    style: arrowProps.style,
    activeStyle: arrowProps.activeStyle,
    hover: arrowProps.hover,
    isParentHovered: visualActive
  };

  return (
    <div
      className={`OptionItem ${disabled ? 'disabled' : ''} ${visualActive ? 'active' : ''} ${className || ''}`}
      onClick={(e) => {
        if (!disabled) onClick?.(e);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={tooltip}
      {...rest}
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

      {expandIcon && (
        <div className="OptionItem-expandIcon">
          <Arrow {...finalArrowProps} />
        </div>
      )}
    </div>
  );
};

export default OptionItem;
