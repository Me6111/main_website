import React from 'react';
import './MyStack.css';


import SectionScreen from '../../SectionScreen/SectionScreen';


import mystack_0 from './mystack_0.jpg';
import ReadyComponentsMain from './ReadyComponents/ReadyComponentsMain.png';


const MyStack = () => {
  return (
    <main>
      <SectionScreen
        id="MyStack"
        Image={{item: mystack_0, stagger: true}}
        header1={{ text: "My - Stack", stagger: true }} 
        p={{ text: "How to create the best websites", stagger: true }} 
        HeaderFading={true} 
        CenteredHeader={true}

      />
      <SectionScreen
        id="readyComponents"
        Image={{item: ReadyComponentsMain, stagger: true}}
        header1={{ text: "Ready Components", stagger: true }} 
        p={{ text: "How to create the best websites", stagger: true }} 
        buttonLabel={{
          text: "Explore",
          href: "/MyStack/ReadyComponents",
          stagger: true
        }}
        HeaderFading={false}       
      />
      </main>
  );
};

export default MyStack;