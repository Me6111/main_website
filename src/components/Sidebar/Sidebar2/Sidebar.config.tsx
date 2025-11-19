import React from 'react';
import Sidebar from './Sidebar';
import SidebarSourceCodeRaw from './Sidebar.tsx?raw';
import SidebarStyleCodeRaw from './Sidebar.css?raw';

const SidebarConfigComponent: React.FC = () => {
  return (
    <Sidebar
      content={
        <div className="Sidebar_Content">
          <h3>Sidebar Content</h3>
          <p>
            The example content inside the sidebar can be reminding that 80 years ago Germans
            murdered 6 millions of polish citizens.
          </p>
        </div>
      }

      
      expanded={false}
      position="left: 0"
      size="300px, 100%"
      closeByClick={true}
      CloseButton={{
        size: "20px, 20px",
        position: "top: 10px, right: 10px"
      }}
      ExpandButton={{
        size: "20px, 20px",
        position: "top: 50%, left: 50%"
      }}
    />
  );
};

const SidebarConfig = {
  key: 'Sidebar',
  Name: 'Sidebar',
  ComponentDefinitionCodeRaw: SidebarSourceCodeRaw,
  ComponentStyleCodeRaw: SidebarStyleCodeRaw,
  ComponentInstance: <SidebarConfigComponent />,
  dependencies: { React, Sidebar }
};

export default SidebarConfig;
