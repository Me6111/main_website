// File: WTFD_page.tsx
import React from 'react';
import SectionScreen from '../../components/SectionScreen/SectionScreen';
import Img_1 from './Img_1.jpg';
import GetFullDir_Button from './GetFullDir_Button';

const WTFD_page: React.FC = () => {
  return (
    <main>
      <GetFullDir_Button />

      <SectionScreen
        ref={React.createRef()}
        Image={{ item: Img_1, stagger: true }}
      />

      <SectionScreen ref={React.createRef()} />

      
    </main>
  );
};

export default WTFD_page;
