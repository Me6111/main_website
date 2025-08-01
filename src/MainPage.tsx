import React from 'react';
import SectionScreen from './components/SectionScreen/SectionScreen';

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
    <main>
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
    </main>
  );
};

export default MainPage;
