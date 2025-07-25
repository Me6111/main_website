import React from 'react';
import './CopyIcon.css';

interface CopyIconProps {
  copied: boolean;
  size?: number;
  showLabel?: boolean;
}

const CopyIcon: React.FC<CopyIconProps> = ({ copied, size = 14, showLabel = true }) => {
  const squareSize = size * 0.5;
  const cornerRadius = size * 0.1;

  const Square = ({
    translateX,
    translateY,
    id,
  }: {
    translateX: number;
    translateY: number;
    id: string;
  }) => (
    <g id={id} transform={`translate(${translateX}, ${translateY})`}>
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
  );

  return (
    <button className="copy-button" type="button" aria-pressed={copied}>
      <svg
        className="copy-icon-svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {copied ? (
          <polyline className="copy-check" points="20 6 9 17 4 12" />
        ) : (
          <g transform="translate(12,12)">
            <Square id="CopyIconSquare1" translateX={2} translateY={-1.5} />
            <Square id="CopyIconSquare2" translateX={-2} translateY={1.5} />
          </g>
        )}
      </svg>
      {showLabel && <span className="copy-label">{copied ? 'Copied' : 'Copy'}</span>}
    </button>
  );
};

export default CopyIcon;
