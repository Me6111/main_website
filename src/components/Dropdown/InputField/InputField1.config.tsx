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

// 🔁 Just change `animationType="zoom"` to whatever you want: "fade", "slide", "none"
const usageCodeRaw = `
<InputField
  titleInner="Username"
  titleOuter="Username"  
  nameAttr="username"
  value=""
  type="text"
  background="linear-gradient(to right, #111, #333)"
  tooltip="Your unique username"
  icon={icon}
  animationType="slide"
  labelPosition="above"
/>
`.trim();

const InputField1_Config = {
  key: 'InputField1',
  Name: 'InputField1',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: InputFieldSourceCodeRaw,
  ComponentStyleCodeRaw: InputFieldStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ InputField }}
      bindings={{ icon: iconSvg }}
      jsx={`
        <InputField
          titleInner="Username"
          titleOuter="Username"           
          nameAttr="username"
          value=""
          type="text"
          background="linear-gradient(to right, #111, #333)"
          tooltip="Your unique username"
          icon={icon}
          animationType="slide"
          labelPosition="above"
        />
      `}
    />
  ),
  dependencies: { React, InputField },
};

export default InputField1_Config;
