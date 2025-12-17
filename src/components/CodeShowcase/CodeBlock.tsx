import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CopyButton from '../Buttons/CopyButton/CopyButton';

interface CodeBlockProps {
  code: string | unknown;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const safeCode = typeof code === 'string' ? code.trim() : '';

  return (
    <>
      <style>
        {`
          .code-block-wrapper {
            display: inline-block;
            border: 1px solid #333;
            border-radius: 4px;
            font-size: 0.9rem;
            background: #1e1e1e;
            max-height: 300px;
            overflow-y: auto;
          }

          .code-block-header {
            background: #1e1e1e;
            color: #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 12px;
            font-family: monospace;
            user-select: none;
            white-space: nowrap;
            border-bottom: 1px solid #333;
          }

          .language-label {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 0.75rem;
          }

          .code-block-wrapper pre {
            margin: 0 !important;
            width: fit-content !important;
            min-width: 100px;
            max-width: 100%;
            padding: 1rem !important;
            overflow-y: auto;
            max-height: 250px;
            background: #1e1e1e !important;
          }

          .code-block-wrapper code {
            white-space: pre !important;
            display: inline-block;
          }

          .live-preview {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>

      <div className="code-block-wrapper">
        <div className="code-block-header">
          <span className="language-label">{language}</span>
          <CopyButton textToCopy={safeCode} size={18} />
        </div>

        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers
        >
          {safeCode}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeBlock;
