import React from 'react';
import './OptionsList.css';

interface OptionsListProps {
  children: React.ReactNode;
  className?: string;
}

const OptionsList: React.FC<OptionsListProps> = ({ children, className = '' }) => {
  return <ul className={`OptionsList ${className}`}>
    {children}
  </ul>;
};

export default OptionsList;
