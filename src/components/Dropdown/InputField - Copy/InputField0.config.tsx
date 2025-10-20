import React from 'react';
import JSXParser from 'react-jsx-parser';

import InputField from './InputField';
import InputFieldSourceCodeRaw from './InputField.tsx?raw';
import InputFieldStyleCodeRaw from './InputField.css?raw';

const iconSvg = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      fill="white"
    />
  </svg>
);

/**
 * Usage example showing labelPosition explicitly set to "above"
 * and animation disabled; placeholder is omitted to avoid overlap.
 */
const usageCodeRaw = `
<InputField
  name="Username"
  nameAttr="username"
  value=""
  type="text"
  background="linear-gradient(to right, #111, #333)"
  tooltip="Your unique username"
  icon={icon}
  animation={false}
  labelPosition="above"
/>
`.trim();

const InputField0_Config = {
  key: 'InputField0',
  Name: 'InputField0',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: InputFieldSourceCodeRaw,
  ComponentStyleCodeRaw: InputFieldStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ InputField }}
      bindings={{ icon: iconSvg }}
      jsx={`
        <InputField
          name="Username"
          nameAttr="username"
          value=""
          type="text"
          background="linear-gradient(to right, #111, #333)"
          tooltip="Your unique username"
          icon={icon}
          animation={false}
          labelPosition="above"
        />
      `}
    />
  ),
  dependencies: { React, InputField },
};

export default InputField0_Config;
