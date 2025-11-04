import React from 'react';
import './CopyIcon_Squares.css';

interface CopyIconSquaresProps {
  size?: number;
  color?: string;
}

const CopyIcon_Squares: React.FC<CopyIconSquaresProps> = ({ size = 24, color = 'currentColor' }) => {
  const squareSize = size * 0.5;
  const cornerRadius = size * 0.1;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      className="copy-icon-squares"
    >
      <g transform="translate(12,12)">
        <g transform="translate(2,-1.5)">
          <rect
            x={-squareSize / 2}
            y={-squareSize / 2}
            width={squareSize}
            height={squareSize}
            rx={cornerRadius}
            ry={cornerRadius}
            className="copy-square-rect"
          />
        </g>
        <g transform="translate(-2,1.5)">
          <rect
            x={-squareSize / 2}
            y={-squareSize / 2}
            width={squareSize}
            height={squareSize}
            rx={cornerRadius}
            ry={cornerRadius}
            className="copy-square-rect"
          />
        </g>
      </g>
    </svg>
  );
};

export default CopyIcon_Squares;
