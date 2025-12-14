import React, { useState } from 'react';
import Slider from '../../../components/Slider/Slider';
import CodeShowcase from '../../../components/CodeShowcase/CodeShowcase';
import Sidebar from '../../../components/Sidebar/Sidebar';

import Dropdown_ComponentsCatalogue from './Dropdown_ComponentsCatalogue';


import HamburgerButton_Config from '../../../components/Icons/HamburgerButton/HamburgerButton.config';
import Arrow_Config from '../../../components/Icons/Arrow/Arrow.config';
import CheckBox_Config from '../../../components/CheckBox/CheckBox_Config';
import Dropdown_Config from '../../../components/Dropdown/Dropdown/Dropdown.config';
import OptionItemConfig from '../../../components/Dropdown/OptionItem/OptionItem.config';
import CopyButton from '../../../components/Buttons/CopyButton/CopyButton.config';

const codeShowcaseConfigs = {
  Arrow: Arrow_Config,


  HamburgerButton: HamburgerButton_Config,
  Dropdown_Config: Dropdown_Config,
  OptionItem: OptionItemConfig,
  CopyButton: CopyButton,
  CheckBox: CheckBox_Config,
};

const ReadyComponents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedSlides = Object.entries(codeShowcaseConfigs).map(
    ([key, config], index) => (
      <CodeShowcase
        key={key}
        Name={config.Name}
        ComponentUsageCodeRaw={config.ComponentUsageCodeRaw}
        ComponentDefinitionCodeRaw={config.ComponentDefinitionCodeRaw}
        ComponentStyleCodeRaw={config.ComponentStyleCodeRaw}
        language={config.language}
        dependencies={config.dependencies}
        ComponentInstance={config.ComponentInstance}
        isActive={activeIndex === index}
      />
    )
  );






  const a_10_content = (
    <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
      <Sidebar
        Style__Sidebar_Field={{
          backgroundColor: 'rgba(0, 0, 0, 0.58)',
          width: '300px',
          height: '100vh',
          position: 'relative',
          top: 0,
          right: 0,
          zIndex: 11,
        }}
        OpenButton={false}
        Opened={true}
        content={



            <Dropdown_ComponentsCatalogue/>

        }
      />
    </div>
  );






  /* ---------- a_11 (Main content section) ---------- */
  const a_11_content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      {renderedSlides}
    </div>
  );

  return (
    <main>
      <div className="s0" style={{ backgroundColor: 'rgba(246, 236, 202, 1)' }}>
        <Slider
          a_10={a_10_content}
          a_11={a_11_content}
          orientation="vertical"
        />
      </div>
    </main>
  );
};

export default ReadyComponents;
