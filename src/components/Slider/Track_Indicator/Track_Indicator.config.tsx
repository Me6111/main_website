import React from 'react';
import JSXParser from 'react-jsx-parser';

import Track_Indicator from './Track_Indicator';
import Track_Indicator_SourceCodeRaw from './Track_Indicator.tsx?raw';
import Track_Indicator_StyleCodeRaw from './Track_Indicator.css?raw';

const usageCodeRaw = `
<div style={{
  display: 'flex',
  justifyContent: 'center',  
  alignItems: 'center',  
  height: '100vh',
  position: 'absolute',
}}>  
  <Track_Indicator
    SlidesAmount={10}
    CurrentSlide={0}
    SectionMargin={5}
    IndicatorWidth="100%"
    draggable={true}
    onSlideChange={(index) => console.log('Slide changed to:', index)}
  />
</div>
`.trim();

const Track_Indicator_Config = {
  key: 'Track_Indicator',
  Name: 'Track_Indicator',
  ComponentUsageCodeRaw: usageCodeRaw, 
  ComponentDefinitionCodeRaw: Track_Indicator_SourceCodeRaw,
  ComponentStyleCodeRaw: Track_Indicator_StyleCodeRaw,
  ComponentInstance: (
    <JSXParser components={{ Track_Indicator }} jsx={usageCodeRaw} />
  ),
  dependencies: { React, Track_Indicator },
};

export default Track_Indicator_Config;
