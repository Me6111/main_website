import React from 'react';
import JSXParser from 'react-jsx-parser';
import OptionsList from './OptionsList';
import OptionsListSourceCodeRaw from './OptionsList.tsx?raw';
import OptionsListStyleCodeRaw from './OptionsList.css?raw';

// Dynamically create options from 1 to 30, each on a new line with indentation
const optionsArray = Array.from({ length: 30 }, (_, i) => `  "option ${i + 1}"`);

// Build the JSX string with line breaks for better formatting
const usageCodeRaw = `<OptionsList options={[\n${optionsArray.join(',\n')}\n]} />`;

const OptionsList_0Config = {
  key: 'OptionsList_0',
  Name: 'OptionsList_0',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: OptionsListSourceCodeRaw,
  ComponentStyleCodeRaw: OptionsListStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ OptionsList }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, OptionsList },
};

export default OptionsList_0Config;
