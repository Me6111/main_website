import React, { useState } from 'react';
import './CopyButton.css';
import CopyIcon_Squares from '../../Icons/CopyIcon_Squares/CopyIcon_Squares';
import CheckMark from '../../Icons/CheckMark/CheckMark';

interface CopyButtonProps {
  textToCopy: string;
  size?: number;
  showLabel?: boolean;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, size = 14, showLabel = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

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
          {copied ? <CheckMark size={size} /> : <CopyIcon_Squares size={size} />}
        </svg>
        {showLabel && <span className="copy-label">{copied ? 'Copied' : 'Copy'}</span>}
      </span>
    </button>
  );
};

export default CopyButton;
