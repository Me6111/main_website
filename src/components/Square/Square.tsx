import React, { ReactNode } from 'react';
import './Square.css';

interface SquareProps {
  size?: number;
  children?: ReactNode;
}

const Square: React.FC<SquareProps> = ({
  size,
  children,
}) => {
  return (
    <div
      className="Square"
      style={{
        ...(size !== undefined ? { width: `${size}px`, height: `${size}px` } : {}),
      }}
    >
      {children}
    </div>
  );
};

export default Square;
