import React from 'react';
import SectionScreen from './components/SectionScreen/SectionScreen';

import Sidebar from './components/Sidebar/Sidebar2/Sidebar';




import profileImage from './assets/images/Img_1.png';
import designImg from './assets/images/designImg.png';
import constructionImg from './assets/images/constructionImg.png';
import expandingImg from './assets/images/expandingImg.png';

const MainPage = () => {
  const sectionData = [
    {
      id: "profileSection",
      Image: profileImage,
      header1: "Maksym Pawlowski",
      p: "Software Developer",
      buttonLabel: "Learn More",
      href: "/DevBusinessCard"
    },
    {
      id: "designSection",
      Image: designImg,
      header1: "Perfect UI",
      p: "Get beauty and functionality",
      buttonLabel: "Learn More",
    },
    {
      id: "constructionSection",
      Image: constructionImg,
      header1: "Solid Construction",
      p: "Make it strong like nature itself",
      buttonLabel: "Learn More",
    },
    {
      id: "expandingSection",
      Image: expandingImg,
      header1: "Scalability",
      p: "Make it ready to grow",
      buttonLabel: "Learn More",
    },
  ];

  return (
    <main style={{position:'relative'}}>


<Sidebar
  content={
    <div
      className="Sidebar_Content"
      style={{ overflow: 'hidden', padding: '10px' }}
    >
      <h3>Sidebar Content</h3>
      <p>Example text inside the sidebar.</p>
    </div>
  }

  Opened={true}
  OpenButton={false}
  CloseButton={false}

  Style_opened={{
                  width: '100%',
                  height: '100px',
                  position: 'absolute',
                  top: 0,
                  backgroundColor: 'blue'
  }}

  Style_Outer={{

  }}

  CloseByClickOutside={false}
/>














      {sectionData.map((section) => (
        <SectionScreen
            key={section.id}
            id={section.id}
            Image={{item:section.Image, stagger: false}}
            header1={{ text: section.header1, stagger: true }} 
            p={{ text: section.p, stagger: true }} 
            buttonLabel={{ text: section.buttonLabel, stagger: true, href: section.href }} 
        />
      ))}

                  <footer
              className="footer"
              style={{
                width: '100%',
                height: '100px',
                padding: '20px',
                textAlign: 'center',
                backgroundColor: 'black',
                color: '#eee',
                boxSizing: 'border-box',
                position: 'relative',
                bottom: 0,
                zIndex: 1,
              }}
            >
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>
                &copy; {new Date().getFullYear()} John P2. All rights reserved.
              </p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>
                Built with React, Vite, and Tailwind CSS.
              </p>
            </footer>

    </main>
  );
};

export default MainPage;
