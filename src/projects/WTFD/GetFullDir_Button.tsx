// File: GetFullDir.tsx
import React, { useEffect, useState } from 'react';
import Dropdown, { DropdownItem } from '../../components/Dropdown/Dropdown/Dropdown';
import Sidebar from '../../components/Sidebar/Sidebar2/Sidebar';

const GetFullDir: React.FC = () => {
  const [rootItem, setRootItem] = useState<DropdownItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Convert server folder structure to DropdownItem format
  const convertToDropdownItem = (node: any): DropdownItem => {
    const isFolder = node.type === "folder";

    return {
      label: node.name,
      children: isFolder
        ? node.children?.map((child: any) => convertToDropdownItem(child))
        : undefined, // files have no children
      optionsListPosition: "inside",
      Indentation: 'left, 20px',
      AllowMultipleMenusOpened: false,
      RememberOpenedMenus: true
    };
  };

  useEffect(() => {
    const fetchDir = async () => {
      try {
        const res = await fetch('http://localhost:3000/GetFullDir');
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const json = await res.json();

        // Transform server response → DropdownItem
        const dropdownTree = convertToDropdownItem(json);

        setRootItem(dropdownTree);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchDir();
  }, []);

  if (error) {
    return (
      <div style={{ padding: 20, color: 'red' }}>
        Error: {error}
      </div>
    );
  }

  if (!rootItem) {
    return (
      <div style={{ padding: 20, color: 'white' }}>
        Loading directory...
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1000,
        width: '100%',
        height: '100%',

      }}
    >
    <Sidebar
      content={


          <Dropdown
            triggerItem={rootItem}
            optionsListPosition="inside"
            OpenMenu={['click']}
            CloseMenu={['click_option_again']}
            Indentation={10}
          />

      }

      Opened={true}

      OpenButton={false}

      CloseButton={false}

      Style_opened={{ transform: 'translateX(0)', backgroundColor: 'blue', height: '100%', position: 'fixed'}}
      Style_closed={{ transform: 'translateX(-100%)' }}

      CloseByClickOutside={false}
      CloseByHoverOutside={false}
    />

        </div>

  );
};

export default GetFullDir;
