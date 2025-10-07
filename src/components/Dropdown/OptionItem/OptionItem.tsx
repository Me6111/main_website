import React from 'react';
import './OptionItem.css';

interface OptionItemProps {
  name: string;
  background?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
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
}) => {
  const content = (
    <div
      className={`OptionItem ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        background: background || 'transparent',
        cursor: disabled ? 'not-allowed' : href || onClick ? 'pointer' : 'default',
        ...style,
      }}
      onClick={disabled ? undefined : onClick}
      title={tooltip}
    >
      {icon && <div className="icon">{icon}</div>}
      <span className="label">{name}</span>
    </div>
  );

  return href && !disabled ? (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="OptionItem-link"
      title={tooltip}
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default OptionItem;
