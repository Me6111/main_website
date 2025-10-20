import React from 'react';
import './ArrowButton.css';

import Square from '../../Square/Square';
import Arrow from '../Arrow/Arrow';

import type { CSSProperties } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface HoverProps {
  notch?: number;
  width?: number;
  height?: number;
}

interface ArrowButtonProps {
  Style?: string;
  size?: number;  // deprecated
  square?: boolean;
  showArrow?: boolean;
  arrowDirection?: Direction;
  arrowSize?: number;
  arrowProps?: {
    arrowWidth?: number;
    arrowHeight?: number;
    notch?: number;
    hover?: HoverProps;
    transition?: number;
    style?: CSSProperties;
  };
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  Style,
  square = false,
  showArrow = true,
  arrowDirection = 'up',
  arrowSize = 24,
  arrowProps = {},
}) => {
  const arrowWidth = arrowProps.arrowWidth ?? arrowSize;
  const arrowHeight = arrowProps.arrowHeight ?? arrowSize;
  const maxSize = Math.max(arrowWidth, arrowHeight);

  const sizeStyle: React.CSSProperties = square
    ? { width: maxSize, height: maxSize }
    : {};

  return (
    <div
      className={`ArrowButton ${Style || ''}`.trim()}
      style={sizeStyle}
    >
      <Square size={square ? maxSize : undefined}>
        {showArrow && (
          <Arrow
            direction={arrowDirection}
            size={arrowSize}
            {...arrowProps}
          />
        )}
      </Square>
    </div>
  );
};

export default ArrowButton;
