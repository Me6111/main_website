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
      CloseButton={false}
      OpenButton={{ size: '30px, 30px', position: 'top:10px, left:10px' }}
      Style_opened={{ transform: 'translateX(0)' }}
      Style_closed={{ transform: 'translateX(-100%)' }}
      CloseByClickOutside={true}
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
