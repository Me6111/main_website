import React from 'react';

import './ReadyComponents.css';

import SectionScreen from '../../../SectionScreen/SectionScreen';
import CodeShowcase from './CodeShowcase/CodeShowcase';

import LearnMoreButtonUsageCodeRaw from './LearnMoreButtonUsage.tsx?raw';
import LearnMoreButtonSourceCode from '../../../SectionScreen/LearnMoreButton/LearnMoreButton.tsx?raw';
import ComponentStyleCodeRaw from '../../../SectionScreen/LearnMoreButton/LearnMoreButton.css?raw';



import ReadyComponentsMain from './ReadyComponentsMain.png';

import LearnMoreButton from '../../../SectionScreen/LearnMoreButton/LearnMoreButton';

declare global {
  interface Window {
    Babel: any;
  }
}

const ReadyComponents = () => {
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



    <div className="readyComponents-slider">
      <div className="sectionScreen" id="sectionScreen-button-1">
        <div className="content-wrapper">
          <CodeShowcase
            Name={"LearnMoreButton"}
            ComponentUsageCodeRaw={LearnMoreButtonUsageCodeRaw}
            ComponentDefinitionCodeRaw={LearnMoreButtonSourceCode}
            ComponentStyleCodeRaw={ComponentStyleCodeRaw}
            dependencies={{ LearnMoreButton }}
          />
        </div>
      </div>



    </div>

    </main>
  );
};

export default ReadyComponents;
