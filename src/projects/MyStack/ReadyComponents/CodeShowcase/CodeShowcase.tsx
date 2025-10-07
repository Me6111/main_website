import React, { useMemo } from 'react';
import './CodeShowcase.css';
import CodeBlock from '../../../../components/CodeBlock/CodeBlock';

interface ShowcaseProps {
  Name: string;
  ComponentUsageCodeRaw: string | unknown;
  ComponentDefinitionCodeRaw: string | unknown;
  ComponentStyleCodeRaw: string | unknown;
  language?: string;
  dependencies?: { [key: string]: React.FC<any> | React.ReactElement };
  ComponentInstance?: React.ReactNode; 
}

const CodeShowcase: React.FC<ShowcaseProps> = ({
  Name,
  ComponentUsageCodeRaw,
  ComponentDefinitionCodeRaw,
  ComponentStyleCodeRaw,
  language = 'tsx',
  dependencies = {},
  ComponentInstance,
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
    if (ComponentInstance) {
      return () => <>{ComponentInstance}</>;
    }

    try {
      const usageMatch = usageCodeRaw.match(/^<([A-Z][A-Za-z0-9]*)\b/);
      if (!usageMatch) throw new Error('Could not extract component name.');

      const ComponentName = usageMatch[1];
      const ComponentOrElement = dependencies[ComponentName];
      if (!ComponentOrElement) throw new Error(`Component "${ComponentName}" not found.`);

      if (React.isValidElement(ComponentOrElement)) {
        return () => ComponentOrElement;
      }

      const propsString = usageCodeRaw
        .replace(new RegExp(`^<${ComponentName}\\s*|\\s*\/?>$`, 'g'), '')
        .trim();

      const props: Record<string, any> = {};
      const propRegex = /(\w+)=({([^}]*)}|["']([^"']*)["'])/g;
      let match;
      while ((match = propRegex.exec(propsString)) !== null) {
        const key = match[1];
        const valueRaw = match[3] ?? match[4] ?? '';

        let value: any = valueRaw;
        try {
          value = new Function(`return (${valueRaw})`)();
        } catch {
          if (valueRaw === 'true') value = true;
          else if (valueRaw === 'false') value = false;
          else if (!isNaN(Number(valueRaw))) value = Number(valueRaw);
          else value = valueRaw;
        }

        props[key] = value;
      }

      return () => React.createElement(ComponentOrElement as React.FC<any>, props);
    } catch (e) {
      console.error('Render error:', e);
      return () => <div style={{ color: 'red' }}>Error rendering component.</div>;
    }
  }, [ComponentInstance, usageCodeRaw, dependencies]);

  return (
    <div className="CodeShowcase" id={"CodeShowcase-" + Name}>
      <h2 className="section-title">{Name}</h2>

      <div className="live-preview" id={"live-preview-" + Name}>
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
