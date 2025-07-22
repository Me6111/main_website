import React, { useEffect, useRef } from 'react';
import './Linguana_page.css';

import SectionScreen from '../../SectionScreen/SectionScreen';


import Img_1 from './Img_1.png';


const Linguana_page = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <SectionScreen
        id="Linguana"
        Image={Img_1}
        header1="Linguana"
        p="Language learning through intelligent tech"
      />

    </main>
  );
};

export default Linguana_page;
