import React, { useState } from 'react';
import './CopyButton.css';

interface CopyButtonProps {
  textToCopy: string;
  size?: number;
  showLabel?: boolean;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, size = 14, showLabel = true }) => {
  const [copied, setCopied] = useState(false);

  const squareSize = size * 0.5;
  const cornerRadius = size * 0.1;

  const handleCopy = () => {
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

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
    <button
      className="copy-button"
      onClick={handleCopy}
      aria-label="Copy code"
      title="Copy code"
      type="button"
    >
      <span className="copy-button-content" aria-pressed={copied}>
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
      </span>
    </button>
  );
};

export default CopyButton;
