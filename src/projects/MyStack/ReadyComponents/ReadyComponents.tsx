import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Footer from '../../../Footer';
import Slider from '../../../components/Slider/Slider';
import Catalogue from './Catalogue';
import CodeShowcase from '../../../components/CodeShowcase/CodeShowcase';

import Arrow, { exampleArrowProps, arrowPropOptions } from '../../../components/Icons/Arrow/Arrow';
import HamburgerButton, { exampleHamburgerProps } from '../../../components/Icons/HamburgerButton/HamburgerButton';
import Dropdown, { exampleDropdownProps, dropdownPropOptions } from '../../../components/Dropdown/Dropdown/Dropdown';

import img0 from './images/0.png';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';

const fields = [
  { Image: img0, header1: 'Maksym Pawlowski', p: 'Software Developer', buttonLabel: 'Learn More' },
  { Image: img1, header1: 'Perfect UI', p: 'Get beauty and functionality', buttonLabel: 'Learn More' },
  { Image: img2, header1: 'Solid Construction', p: 'Make it strong like nature itself', buttonLabel: 'Learn More' },
  { Image: img3, header1: 'Scalability', p: 'Make it ready to grow', buttonLabel: 'Learn More' },
];

const componentsMap = {
  Arrow: { component: Arrow, exampleProps: exampleArrowProps, propOptions: arrowPropOptions },
  Hamburger: { component: HamburgerButton, exampleProps: exampleHamburgerProps },
  Dropdown: { component: Dropdown, exampleProps: exampleDropdownProps, propOptions: dropdownPropOptions },
};

const MainPage = ({ orientation = 'vertical' }) => {
  const [clickedValue, setClickedValue] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1024);
  const isHorizontal = orientation === 'horizontal';
  const catalogueItems = Object.keys(componentsMap);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const a_10_content = (
    <Sidebar
      Style__Sidebar_Field={{
        backgroundColor: 'rgba(0,0,0,0.463)',
        color: '#eee',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 11,
        transition: 'width 0.3s ease',
        overflow: 'hidden',
      }}
      Style__Sidebar_FieldOpened={{ width: '300px' }}
      Style__Sidebar_FieldClosed={{ width: '0' }}
      Style__Sidebar_Button={
        isDesktop ? { display: 'none' } : { position: 'relative' }
      }
      OpenButton={true}
      Opened={isDesktop}
      ButtonElement={<HamburgerButton />}
      content={<Catalogue items={catalogueItems} onItemClick={setClickedValue} />}
    />
  );

  const a_11_content = clickedValue ? (
    <div
      style={{
        color: 'white',
        fontSize: '36px',
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {clickedValue}
      {componentsMap[clickedValue] && (
        <CodeShowcase
          component={componentsMap[clickedValue].component}
          exampleProps={componentsMap[clickedValue].exampleProps}
          propOptions={componentsMap[clickedValue].propOptions}
        />
      )}
    </div>
  ) : (
    <>
      <div style={{ width: '100%' }}>
        {fields.map((field, index) => (
          <div
            key={index}
            style={{
              flex: isHorizontal ? '0 0 100vw' : 'none',
              width: isHorizontal ? '100vw' : '100%',
              height: isHorizontal ? '100%' : '100vh',
              background: `url(${field.Image}) no-repeat center center`,
              backgroundSize: 'cover',
              border: '1px solid white',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>{field.header1}</h1>
              <p style={{ fontSize: '18px', marginBottom: '20px' }}>{field.p}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );

  return (
    <Slider
      a_10Style={

        isDesktop ? {         
          width: '400px',
        height: '100vh',
        top: '0',
        position: 'sticky',
        overflow: 'hidden',
        pointerEvents: 'all', } : {           width: '0',
 }


      }
      a_10={a_10_content}
      a_11={a_11_content}
      orientation={orientation}
    />
  );
};

export default MainPage;
