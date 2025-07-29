import React, { useMemo } from 'react';
import './CodeShowcase.css';
import CodeBlock from './CodeBlock';

interface ShowcaseProps {
  Name: string;
  ComponentUsageCodeRaw: string | unknown;
  ComponentDefinitionCodeRaw: string | unknown;
  ComponentStyleCodeRaw: string | unknown;
  language?: string;
  dependencies?: { [key: string]: React.FC<any> };
}

const CodeShowcase: React.FC<ShowcaseProps> = ({
  Name,
  ComponentUsageCodeRaw,
  ComponentDefinitionCodeRaw,
  ComponentStyleCodeRaw,
  language = 'tsx',
  dependencies = {},
}) => {
  const safeCode = (code: string | unknown) =>
    typeof code === 'string' ? code : String(code ?? '');

  const stripExport = (code: string) =>
    code
      .replace(/^\s*export\s+default\s+/m, '')
      .replace(/^\s*export\s+(const|function|class)\s+/gm, '$1 ')
      .replace(/^\s*export\s+\{[^}]*\};?\s*$/gm, '');

  const usageCodeRaw = safeCode(ComponentUsageCodeRaw).trim();
  const usageCode = stripExport(usageCodeRaw);
  const definitionCode = stripExport(safeCode(ComponentDefinitionCodeRaw));
  const styleCode = safeCode(ComponentStyleCodeRaw);

  const LivePreviewComponent = useMemo(() => {
    try {
      const usageMatch = usageCodeRaw.match(/^<([A-Z][A-Za-z0-9]*)\b/);
      if (!usageMatch) throw new Error('Could not extract component name.');

      const ComponentName = usageMatch[1];
      const Component = dependencies[ComponentName];
      if (!Component) throw new Error(`Component "${ComponentName}" not found.`);

      const propsString = usageCodeRaw.replace(/^<\w+|\s*\/?>$/g, '').trim();

      const props: Record<string, any> = {};
      propsString.split(/\s+/).forEach((pair) => {
        const [key, valueRaw] = pair.split('=');
        if (!key) return;
        const cleanValue = valueRaw?.replace(/^['"]|['"]$/g, '');
        props[key] =
          cleanValue === 'false'
            ? false
            : cleanValue === 'true'
            ? true
            : cleanValue;
      });

      return () => <Component {...props} />;
    } catch (e) {
      console.error('Render error:', e);
      return () => <div style={{ color: 'red' }}>Error rendering component.</div>;
    }
  }, [usageCodeRaw, dependencies]);

  return (
    <div className="CodeShowcase">
      <h2 className="section-title">{Name}</h2>

      <div className="live-preview">
        <LivePreviewComponent />
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
