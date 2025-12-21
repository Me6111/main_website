import React from 'react';

interface LabelProps extends React.LiHTMLAttributes<HTMLLIElement> {
  content: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ content, ...props }) => {
  return <li {...props}>{content}</li>;
};

export default Label;
