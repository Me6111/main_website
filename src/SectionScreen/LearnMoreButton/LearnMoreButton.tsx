import React from 'react';
import './LearnMoreButton.css';


interface LearnMoreButtonProps {
  text?: string;
  href?: string;
  stagger?: boolean;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ text, href, stagger }) => {
  if (!text || !href) return null;

  return (
    <a
      href={href}
      className={stagger ? 'stagger-item LearnMoreButton' : 'LearnMoreButton'}
    >
      {text}
    </a>
  );
};

export default LearnMoreButton;
