import React from 'react';
import Sidebar from './Sidebar';
import SidebarSourceCodeRaw from './Sidebar.tsx?raw';
import SidebarStyleCodeRaw from './Sidebar.css?raw';

const SidebarConfigComponent: React.FC = () => {
  return (
    <Sidebar
      content={
        <div className="Sidebar_Content" style={{ overflow: 'hidden', padding: '10px' }}>
          <h3>Sidebar Content</h3>
          <p>Example text inside the sidebar.</p>
        </div>
      }

      Opened={true}
      OpenButton={false}
      CloseButton={false}

      Style_opened={{ transform: 'translateX(0)' }}
      Style_closed={{ transform: 'translateX(-100%)' }}

      Style_Outer={{
        width: '100%',
        height: '100%',
        position: 'absolute'
      }}

      CloseByClickOutside={false}
      CloseByHoverOutside={false}
    />

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
