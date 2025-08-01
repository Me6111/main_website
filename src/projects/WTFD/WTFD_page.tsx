import React from 'react';
import SectionScreen from '../../components/SectionScreen/SectionScreen';
import Img_1 from './Img_1.jpg';

const WTFD_page = () => {
  return (
    <main>
        <SectionScreen
            ref={React.createRef()}
            Image={{item:Img_1, stagger: true}}
            
        />
        <SectionScreen
            ref={React.createRef()}
        />
    </main>
  );
};

export default WTFD_page;