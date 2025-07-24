import React from 'react';
import CodeBlock from './CodeBlock'; // adjust path accordingly

interface ShowcaseProps {
  initialCode: string;
  renderComponent: (code: string) => React.ReactNode;
  language?: string;
}

const CodeShowcase: React.FC<ShowcaseProps> = ({
  initialCode,
  renderComponent,
  language = 'tsx',
}) => {
  return (
    <div className="showcase-block">
      <div
        className="live-preview"
        style={{ border: '1px solid #333', padding: 10, marginBottom: 20 }}
      >
        {renderComponent(initialCode)}
      </div>

      <CodeBlock code={initialCode} language={language} />
    </div>
  );
};

export default CodeShowcase;
