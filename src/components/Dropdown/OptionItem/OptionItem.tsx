import React, { useState, useEffect, useContext } from 'react';
import './OptionItem.css';
import Arrow from '../../Icons/Arrow/Arrow';
import CheckBox from '../../CheckBox/CheckBox';
import { OptionsContext } from '../OptionsList/OptionsList';

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
  arrowProps,
  onClick,
  disabled,
  tooltip,
  className,
  active,
  ...rest
}) => {
  const { activeId, onSelect, restProps } = useContext(OptionsContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(!!active || restProps?.id === activeId);

  useEffect(() => {
    setIsActive(!!active || restProps?.id === activeId);
  }, [active, activeId, restProps]);

  const visualActive = isHovered || isActive;

  // Merge context/default arrow props with caller-provided props
  const finalArrowProps: React.ComponentProps<typeof Arrow> = {
    isParentHovered: visualActive,
    fillColor: visualActive ? 'black' : 'white',
    strokeColor: visualActive ? 'black' : 'white',
    // Correctly update rotation based on active state
    size: {
      ...(arrowProps?.size || {}),
      rotate: visualActive ? 'bottom' : 'top',
    },
    ...arrowProps,
  };

  return (
    <div
      className={`OptionItem ${disabled ? 'disabled' : ''} ${visualActive ? 'active' : ''} ${className || ''}`}
      onClick={(e) => !disabled && (onClick?.(e) || (restProps?.id && onSelect?.(restProps.id)))}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={tooltip}
      {...restProps}
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
