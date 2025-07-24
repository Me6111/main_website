import React from 'react';
import './CopyIcon.css';

interface CopyIconProps {
  copied: boolean;
  size?: number;
  showLabel?: boolean;
}

const CopyIcon: React.FC<CopyIconProps> = ({ copied, size = 14, showLabel = true }) => {
  const squareSize = size * 0.54;
  const cornerRadius = size * 0.083;

  const Square = ({ translateX, translateY }: { translateX: number; translateY: number }) => (
    <g transform={`translate(${translateX}, ${translateY})`}>
      <rect
        x={-squareSize / 2}
        y={-squareSize / 2}
        width={squareSize}
        height={squareSize}
        rx={cornerRadius}
        ry={cornerRadius}
        stroke="currentColor"
        fill="none"
        strokeWidth={1}
      />
    </g>
  );

  return (
    <button className="copy-button" type="button" aria-pressed={copied}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {copied ? (
          <polyline points="20 6 9 17 4 12" strokeWidth={2} /> // Thinner stroke for polyline
        ) : (
          <g transform="translate(12,12)">
            <Square translateX={-4} translateY={-4} />
            <Square translateX={4} translateY={4} />
          </g>
        )}
      </svg>
      {showLabel && <span className="copy-label">{copied ? 'Copied' : 'Copy'}</span>}
    </button>
  );
};

export default CopyIcon;
