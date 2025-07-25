import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CopyIcon from '../../../../CopyIcon/CopyIcon';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="language-label">{language}</span>
        <button
          className="copy-button"
          onClick={handleCopy}
          aria-label="Copy code"
          title="Copy code"
          type="button"
        >
          <CopyIcon copied={copied} size={18} />
        </button>
      </div>

      <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers>
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
