import React from 'react';
import './CheckMark.css';

interface CheckMarkProps {
  size?: number;
  color?: string;
}

const CheckMark: React.FC<CheckMarkProps> = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      className="checkmark-icon"
    >
      <polyline className="copy-check" points="20 6 9 17 4 12" />
    </svg>
  );
};

export default CheckMark;
