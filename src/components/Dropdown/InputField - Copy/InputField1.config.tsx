import React, { useState } from 'react';
import JSXParser from 'react-jsx-parser';

import InputField from './InputField';
import InputFieldSourceCodeRaw from './InputField.tsx?raw';
import InputFieldStyleCodeRaw from './InputField.css?raw';

const usageCodeRaw = `
<InputField
  name="Email address"
  nameAttr="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email address"
  type="email"
  background="linear-gradient(to right, #111, #333)"
  tooltip="Enter your email"
  animation={true}
/>
`.trim();

const InputField1_Config = () => {
  const [email, setEmail] = useState('');

  return (
    <JSXParser
      components={{ InputField }}
      jsx={`
        <InputField
          name="Email address"
          nameAttr="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          tooltip="Enter your email"
          animation={true}
        />
      `}
    />
  );
};

export default {
  key: 'InputField1',
  Name: 'InputField1',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: InputFieldSourceCodeRaw,
  ComponentStyleCodeRaw: InputFieldStyleCodeRaw,
  ComponentInstance: <InputField1_Config />,
  dependencies: { React, InputField },
};
