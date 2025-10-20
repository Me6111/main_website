import React, { useEffect, useRef, useState } from 'react';
import './OptionsList.css';

interface OptionsListProps {
  options: any[];
  optionElement?: (option: any, index: number) => React.ReactNode;
}

const OptionsList: React.FC<OptionsListProps> = ({ options, optionElement }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [positionAbove, setPositionAbove] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      if (!listRef.current) return;

      const rect = listRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      // If not enough space below and more space above, flip above
      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setPositionAbove(true);
      } else {
        setPositionAbove(false);
      }
    };

    // Initial check + event listeners
    checkPosition();
    window.addEventListener('resize', checkPosition);
    window.addEventListener('scroll', checkPosition, true);

    return () => {
      window.removeEventListener('resize', checkPosition);
      window.removeEventListener('scroll', checkPosition, true);
    };
  }, []);

  return (
    <ul
      ref={listRef}
      className="OptionsList"
      style={positionAbove ? { bottom: '100%', top: 'auto' } : { top: '100%', bottom: 'auto' }}
    >
      {options.map((option, index) => (
        <li key={index} className="OptionsList-Option">
          {optionElement
            ? optionElement(option, index)
            : typeof option === 'string'
            ? option
            : option?.name ?? JSON.stringify(option)}
        </li>
      ))}
    </ul>
  );
};

export default OptionsList;
