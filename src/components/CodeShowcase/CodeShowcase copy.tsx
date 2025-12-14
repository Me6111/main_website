import React from 'react';
import './CodeShowcase.css';
import CodeBlock from '../CodeBlock/CodeBlock';

interface ShowcaseProps {
  Name: string;
  ComponentUsageCodeRaw: string | unknown;
  ComponentDefinitionCodeRaw: string | unknown;
  ComponentStyleCodeRaw: string | unknown;
  language?: string;
  ComponentInstance?: React.ReactNode;
}

const CodeShowcase: React.FC<ShowcaseProps> = ({
  Name,
  ComponentUsageCodeRaw,
  ComponentDefinitionCodeRaw,
  ComponentStyleCodeRaw,
  language = 'tsx',
  ComponentInstance,
}) => {
  const safeCode = (code: string | unknown) =>
    typeof code === 'string' ? code : String(code ?? '');

  const stripExport = (code: string) =>
    code
      .replace(/^\s*export\s+default\s+/m, '')
      .replace(/^\s*export\s+(const|function|class)\s+/gm, '$1 ')
      .replace(/^\s*export\s+\{[^}]*\};?\s*$/gm, '');

  const usageCode = stripExport(safeCode(ComponentUsageCodeRaw).trim());
  const definitionCode = stripExport(safeCode(ComponentDefinitionCodeRaw));
  const styleCode = safeCode(ComponentStyleCodeRaw);

  return (
    <div className="CodeShowcase" id={`CodeShowcase-${Name}`}>
      <h2 className="section-title">{Name}</h2>

      <div className="live-preview" id={`live-preview-${Name}`}>
        {ComponentInstance || (
          <div style={{ color: 'red' }}>ComponentInstance is missing.</div>
        )}
      </div>

      <div className="code-sections">
        <div className="live-preview-section">
          <h3>Usage</h3>
          <CodeBlock code={usageCode} language={language} />
        </div>

        <div className="live-preview-section">
          <h3>Definition</h3>
          <CodeBlock code={definitionCode} language={language} />
        </div>

        <div className="live-preview-section">
          <h3>Style</h3>
          <CodeBlock code={styleCode} language="css" />
        </div>
      </div>
    </div>
  );
};

export default CodeShowcase;
