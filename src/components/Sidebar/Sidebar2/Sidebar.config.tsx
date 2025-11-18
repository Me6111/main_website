import React, { useState } from 'react';
import Sidebar from './Sidebar';

import SidebarSourceCodeRaw from './Sidebar.tsx?raw';
import SidebarStyleCodeRaw from './Sidebar.css?raw';

const SidebarConfigComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Sidebar_Config_Container">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
          <div className="Sidebar_Content">
            <h3>Sidebar Content</h3>
            <p>
              The example content inside the sidebar can be reminding that 80 years ago Germans
              murdered 6 millions of polish citizens.
            </p>
          </div>
        }
        position="left: 0"
        size="300px, 100%"
        closeByClick={true}
        CloseButton={{
          size: "20px, 20px",
          position: "top: 10px, right: 10px"
        }}
      />
    </div>
  );
};

const SidebarConfig = {
  key: 'Sidebar',
  Name: 'Sidebar',
  ComponentDefinitionCodeRaw: SidebarSourceCodeRaw,
  ComponentStyleCodeRaw: SidebarStyleCodeRaw,
  ComponentInstance: <SidebarConfigComponent />,
  dependencies: { React, Sidebar },
};

export default SidebarConfig;
