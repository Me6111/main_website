import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './ReadyComponents.css';

import SectionScreen from '../../../SectionScreen/SectionScreen';
import CodeShowcase from './CodeShowcase/CodeShowcase';

import LearnMoreButtonSourceCode from '../../../SectionScreen/LearnMoreButton/LearnMoreButton.tsx?raw';
import LearnMoreButtonUsageCodeRaw from './LearnMoreButtonUsage.tsx?raw';

import ReadyComponentsMain from './ReadyComponentsMain.png';

import LearnMoreButton from '../../../SectionScreen/LearnMoreButton/LearnMoreButton';

declare global {
  interface Window {
    Babel: any;
  }
}

const ReadyComponents = () => {
  // Remove import statements from the raw usage code string
  const LearnMoreButtonUsageCode = LearnMoreButtonUsageCodeRaw
    .split('\n')
    .filter(line => !line.trim().startsWith('import '))
    .join('\n');

  return (
    <main>
      <SectionScreen
        id="readyComponents"
        Image={{ item: ReadyComponentsMain, stagger: true }}
        header1={{ text: 'Ready Components', stagger: true }}
        p={{ text: 'just copy and paste', stagger: true }}
        HeaderFading={true}
        CenteredHeader={true}
      />

      <div className="sectionScreen" id="sectionScreen-button-1">
        <div className="content-wrapper">
          <h2 className="section-title">Live Component with Code:</h2>

          <CodeShowcase
            initialCode={LearnMoreButtonUsageCodeRaw}
            renderComponent={(code) => {
              try {
                // Strip import statements
                const codeWithoutImports = code
                  .split('\n')
                  .filter(line => !line.trim().startsWith('import '))
                  .join('\n');

                if (!window.Babel) {
                  throw new Error(
                    'Babel is not loaded. Make sure to add <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> in your index.html'
                  );
                }

                // Transpile JSX+TSX code to plain JS using Babel from global window
                const transformedCode = window.Babel.transform(codeWithoutImports, {
                  filename: 'file.tsx', // <-- Add filename here to fix preset error
                  presets: ['react', 'typescript'],
                  plugins: ['proposal-class-properties'],
                }).code;

                // Wrap transformed code in a function and pass React and LearnMoreButton
                const Comp = new Function('React', 'LearnMoreButton', `${transformedCode}; return LearnMoreButtonUsage;`)(
                  React,
                  LearnMoreButton
                );

                return <Comp />;
              } catch (error) {
                return (
                  <div style={{ color: 'red' }}>
                    Error rendering component: {String(error)}
                  </div>
                );
              }
            }}
          />

          <h2 className="section-title">Component Definition:</h2>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus} showLineNumbers>
            {LearnMoreButtonSourceCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </main>
  );
};

export default ReadyComponents;
