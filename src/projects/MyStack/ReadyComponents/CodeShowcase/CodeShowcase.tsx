import React from 'react';
import './CodeShowcase.css';

import CodeBlock from './CodeBlock'; // adjust path accordingly
import CodeLivePreview from './CodeLivePreview';

interface ShowcaseProps {
  Name: string;
  ComponentUsageCodeRaw: string;
  ComponentDefinitionCodeRaw: string;
  ComponentStyleCodeRaw: string;

  language?: string;
  dependencies?: { [key: string]: any };
}

const CodeShowcase: React.FC<ShowcaseProps> = ({
  Name,
  ComponentUsageCodeRaw,
  ComponentDefinitionCodeRaw,
  ComponentStyleCodeRaw,

  language = 'tsx',
  dependencies = {},
}) => {
  return (
    <div className="CodeShowcase">
      <h2 className="section-title">{Name}</h2>


      <div className="live-preview">
        <CodeLivePreview code={ComponentUsageCodeRaw} dependencies={dependencies} />
      </div>


      <div className="code-sections">
        <div className="live-preview-section">
          <h2 className="live-preview-section-title">Usage</h2>
          <CodeBlock code={ComponentUsageCodeRaw} language={language} />
        </div>

        <div className="live-preview-section">
          <h2 className="live-preview-section-title">Definition</h2>
          <CodeBlock code={ComponentDefinitionCodeRaw} language={language} />
        </div>

        <div className="live-preview-section">
          <h2 className="live-preview-section-title">Style</h2>
          <CodeBlock code={ComponentStyleCodeRaw} language={language} />
        </div>

      </div>

    </div>
  );
};

export default CodeShowcase;
