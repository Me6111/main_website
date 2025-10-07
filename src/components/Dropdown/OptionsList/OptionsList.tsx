import React from 'react';
import './OptionsList.css';

import OptionItem from '../OptionItem/OptionItem';

interface OptionsListProps {
  options: string[] | any[]; 
  optionItem?: (option: any, index: number) => React.ReactNode;
}

const OptionsList: React.FC<OptionsListProps> = ({ options, optionItem }) => {
  return (
    <ul className="OptionsList">
      {options.map((option, index) => (
        <li key={index}>
          {optionItem ? optionItem(option, index) : option}
        </li>
      ))}
    </ul>
  );
};

export default OptionsList;
