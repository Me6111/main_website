import React from 'react';
import JSXParser from 'react-jsx-parser';
import CodeBlock from './CodeBlock';
import CodeBlockSourceCodeRaw from './CodeBlock.tsx?raw';
import CodeBlockStyleCodeRaw from './CodeBlock.css?raw';

const usageCodeRaw = `<CodeBlock code="console.log('Hello')" language="tsx" />`;

const CodeBlockConfig = {
  key: 'CodeBlock',
  Name: 'CodeBlock',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: CodeBlockSourceCodeRaw,
  ComponentStyleCodeRaw: CodeBlockStyleCodeRaw,
  ComponentInstance: (
    <JSXParser
      components={{ CodeBlock }}
      jsx={usageCodeRaw}
    />
  ),
  dependencies: { React, CodeBlock },
};

export default CodeBlockConfig;
