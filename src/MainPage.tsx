import React from 'react';
import OptionItem from './components/Dropdown/OptionItem/OptionItem';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './Footer';
import Slider from './components/Slider/Slider';
import HamburgerButton from './components/Icons/HamburgerButton/HamburgerButton';
import LearnMoreButton from './components/Buttons/LearnMoreButton/LearnMoreButton';
import img0 from './images/0.png';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';

const fields = [
  {
    Image: img0,
    header1: 'Maksym Pawlowski',
    p: 'Software Developer',
    buttonLabel: 'Learn More',
    href: '/DevBusinessCard',
  },
  {
    Image: img1,
    header1: 'Perfect UI',
    p: 'Get beauty and functionality',
    buttonLabel: 'Learn More',
  },
  {
    Image: img2,
    header1: 'Solid Construction',
    p: 'Make it strong like nature itself',
    buttonLabel: 'Learn More',
  },
  {
    Image: img3,
    header1: 'Scalability',
    p: 'Make it ready to grow',
    buttonLabel: 'Learn More',
  },
];

const MainPage = ({ orientation = 'horizontal' }) => {
  const isHorizontal = orientation === 'horizontal';

  const a_10_content = (
    <div style={{ position: 'sticky', top: 0 }}>
      <Sidebar
        Style__Sidebar_Field={{
          backgroundColor: 'rgba(58, 78, 255, 0.58)',
          width: '100%',
          height: '100px',
          position: 'relative',
          top: 0,
          right: 0,
          zIndex: 11,
          transition: 'transform 0.3s ease',
        }}
        Style__Sidebar_FieldOpened={{ transform: 'translateX(0%)' }}
        Style__Sidebar_FieldClosed={{ transform: 'translateX(100%)' }}
        OpenButton={false}
        Opened={true}
        ButtonElement={<HamburgerButton />}
        content={
          <div
            className="menuHorizontal"
            style={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <OptionItem content={<a href="/ReadyComponents">ReadyComponents</a>} />
            <Sidebar
              Style__Sidebar_Field={{
                backgroundColor: 'rgba(0,0,0,0.463)',
                color: '#eee',
                width: '300px',
                height: '100vh',
                position: 'fixed',
                top: 0,
                right: 0,
                zIndex: 11,
                transition: 'width 0.3s ease',
                overflow: 'hidden',
              }}
              Style__Sidebar_FieldOpened={{ width: '200px' }}
              Style__Sidebar_FieldClosed={{ width: '0' }}
              OpenButton={true}
              Opened={false}
              ButtonElement={<HamburgerButton />}
              content={
                <div>
                  <h1>Hello</h1>
                  <p>This can be any HTML or React component</p>
                </div>
              }
            />
          </div>
        }
      />
    </div>
  );

  const a_11_content = (
    <>
      {fields.map((field, index) => {
        return (
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
              <LearnMoreButton text={field.buttonLabel} href={field.href || '#'} />
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );

  return <Slider a_10={a_10_content} a_11={a_11_content} orientation={orientation} />;
};

export default MainPage;
