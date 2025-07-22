import './Linguana_page.css';

import SectionScreen from '../../SectionScreen/SectionScreen';


import Img_1 from './Img_1.png';


const Linguana_page = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <SectionScreen
        id="Linguana"
        Image={{item:Img_1, stagger: true}}
        header1={{ text: "Linguana", stagger: true }} 
        p={{ text: "Language learning through intelligent tech", stagger: true }} 
        HeaderFading={true} 

      />
      <SectionScreen

      />
      <SectionScreen

      />


    </main>
  );
};

export default Linguana_page;
