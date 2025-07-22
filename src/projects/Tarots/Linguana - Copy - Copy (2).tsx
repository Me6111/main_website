import React from 'react';
import SectionScreen from '../SectionScreen/SectionScreen';
import Img_1 from './Img_1.jpg';

const WtfdPage = () => {
  return (
    <main>
        <SectionScreen
            ref={React.createRef()}
            Image={Img_1}
        />
        <SectionScreen
            ref={React.createRef()}
        />
    </main>
  );
};

export default WtfdPage;