import React from 'react';
import NavBar from './NavBar';
import NavBarSourceCodeRaw from './NavBar.tsx?raw';
import NavBarStyleCodeRaw from './NavBar.css?raw';

import SectionScreen from '../SectionScreen/SectionScreen';

import flatiron from './flatiron.jpg';
import new_york from './new_york.jpg';

const usageCodeRaw = `<NavBar
  sections={[
    { name: 'Option 1', href: '/option1' },
    { name: 'Option 2', href: '/option2' },
    { name: 'Option 3', href: '/option3' },
  ]}
  content={
      <SectionScreen
        id="SectionScreen-flatiron"
        Image={{item: flatiron, stagger: false}}
        header1={{ text: "flatiron", stagger: true }} 
        buttonLabel={{
          text: "Explore",
          stagger: true
        }}
        HeaderFading={false}       
      />
  }
/>`;

const sections = [
  { name: 'Option 1', href: '/option1' },
  { name: 'Option 2', href: '/option2' },
  { name: 'Option 3', href: '/option3' },
];

const customContent = (
  <>
    <SectionScreen
      id="SectionScreen-flatiron"
      Image={{ item: flatiron, stagger: false }}
      header1={{ text: "flatiron", stagger: true }}
      buttonLabel={{
        text: "Explore",
        stagger: true
      }}
      HeaderFading={false}
    />
    <SectionScreen
      id="SectionScreen-new_york"
      Image={{ item: new_york, stagger: false }}
      header1={{ text: "new_york", stagger: true }}
      buttonLabel={{
        text: "Explore",
        stagger: true
      }}
      HeaderFading={false}
    />
  </>
);


const NavBarConfig = {
  key: 'NavBar',
  Name: 'NavBar',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: NavBarSourceCodeRaw,
  ComponentStyleCodeRaw: NavBarStyleCodeRaw,
  ComponentInstance: (
    <NavBar
      sections={sections}
      disappearing_navbar={true}
      disappearing_curtain={true}
      navbar_hide_threshold={100}
      curtain_hide_threshold={1235}
      content={customContent}
    />
  ),
  dependencies: { React, NavBar },
};

export default NavBarConfig;
