import React from 'react';
import JSXParser from 'react-jsx-parser';
import LearnMoreButton from './LearnMoreButton';
import LearnMoreButtonSourceCodeRaw from './LearnMoreButton.tsx?raw';
import LearnMoreButtonStyleCodeRaw from './LearnMoreButton.css?raw';

const usageCodeRaw = `<LearnMoreButton text="learn more" href="#" stagger={false} />`;

const LearnMoreButtonConfig = {
  key: 'LearnMoreButton',
  Name: 'LearnMoreButton',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: LearnMoreButtonSourceCodeRaw,
  ComponentStyleCodeRaw: LearnMoreButtonStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ LearnMoreButton }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, LearnMoreButton },
};

export default LearnMoreButtonConfig;
