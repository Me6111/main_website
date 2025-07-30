import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CopyButton from '../../../../CopyButton/CopyButton';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string | unknown;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const safeCode = typeof code === 'string' ? code.trim() : '';

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="language-label">{language}</span>
        {/* Pass raw code string directly to CopyButton */}
        <CopyButton textToCopy={safeCode} size={18} />
      </div>

      <div>
        <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers>
          {safeCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
