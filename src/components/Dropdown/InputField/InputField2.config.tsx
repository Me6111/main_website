import React from 'react';
import JSXParser from 'react-jsx-parser';

import InputField from './InputField';
import InputFieldSourceCodeRaw from './InputField.tsx?raw';
import InputFieldStyleCodeRaw from './InputField.css?raw';

const usageCodeRaw = `
  <InputField
    titleInner="Email address"
    nameAttr="Email address"
    value=""
    type="text"
    background="linear-gradient(to right, #111, #333)"
    icon={icon}
    animationType="fade"
    labelPosition="above"
  />
`.trim();

const InputField2_Config = {
  key: 'InputField2',
  Name: 'InputField2',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: InputFieldSourceCodeRaw,
  ComponentStyleCodeRaw: InputFieldStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ InputField }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, InputField },
};

export default InputField2_Config;
