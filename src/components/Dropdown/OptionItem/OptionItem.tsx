import React from 'react';
import './OptionItem.css';

interface OptionItemProps {
  name?: string; // optional now, since children can be passed
  background?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  children?: React.ReactNode; // support arbitrary children
}

const OptionItem: React.FC<OptionItemProps> = ({
  name,
  background,
  href,
  icon,
  onClick,
  disabled = false,
  tooltip,
  className = '',
  style,
  target = '_self',
  children,
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

      {/* Render custom children if provided, else fallback to default title */}
      <div className="OptionItem-content">
        {children ? children : <div className="OptionItem-Title">{name}</div>}
      </div>
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
