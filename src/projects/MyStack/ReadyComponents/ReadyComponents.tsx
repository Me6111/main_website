import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './ReadyComponents.css';

import SectionScreen from '../../../SectionScreen/SectionScreen';
import LearnMoreButton from '../../../SectionScreen/LearnMoreButton/LearnMoreButton';

import ReadyComponentsMain from './ReadyComponentsMain.png';

// Raw definition of the LearnMoreButton component
const LearnMoreButtonSourceCode = `
import React from 'react';

interface LearnMoreButtonProps {
  text?: string;
  href?: string;
  stagger?: boolean;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ text, href, stagger }) => {
  if (!text || !href) return null;

  return (
    <a
      href={href}
      className={stagger ? 'stagger-item LearnMore-button' : 'LearnMore-button'}
    >
      {text}
    </a>
  );
};

export default LearnMoreButton;
`;

// JSX used to render the component instance
const LearnMoreButtonUsage = `
<LearnMoreButton
  text="Click Me"
  href="#"
  stagger={false}
/>
`;

const ReadyComponents = () => {
  return (
    <main>
      <SectionScreen
        id="readyComponents"
        Image={{ item: ReadyComponentsMain, stagger: true }}
        header1={{ text: 'Ready Components', stagger: true }}
        p={{ text: 'How to create the best websites', stagger: true }}
        HeaderFading={true}
        CenteredHeader={true}
      />

      <div className="sectionScreen" id="sectionScreen-button-1">
        <div className="content-wrapper">
          <h2 className="section-title">Live Component:</h2>
          <LearnMoreButton
            text="Click Me"
            href="#"
            stagger={false}
          />

          <h2 className="section-title">Component Usage:</h2>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus} showLineNumbers>
            {LearnMoreButtonUsage}
          </SyntaxHighlighter>

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
