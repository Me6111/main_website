import React from 'react';

interface CodeLivePreviewProps {
  code: string;
  dependencies?: { [key: string]: any };
}

const CodeLivePreview: React.FC<CodeLivePreviewProps> = ({ code, dependencies = {} }) => {
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
      filename: 'file.tsx',
      presets: ['react', 'typescript'],
      plugins: ['proposal-class-properties'],
    }).code;

    // Prepare dependency keys and values
    const depKeys = Object.keys(dependencies);
    const depValues = Object.values(dependencies);

    // Wrap transformed code in a function and pass React and other dependencies
    const Comp = new Function('React', ...depKeys, `${transformedCode}; return LearnMoreButtonUsage;`)(React, ...depValues);

    return <Comp />;
  } catch (error) {
    return <div style={{ color: 'red' }}>Error rendering component: {String(error)}</div>;
  }
};

export default CodeLivePreview;
