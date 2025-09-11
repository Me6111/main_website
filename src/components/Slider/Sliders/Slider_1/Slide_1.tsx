import React from 'react';
import './Slide_1.css';


export type SlideProps = {
  position?: 'left' | 'right' | 'active';
  img: React.ReactNode; 
};

const Slide: React.FC<SlideProps> = ({ position = '', img }) => {
  return (
    <div className={`Slide_1 ${position}`}>
      <div className="slide-inner inner1">{img}</div>
      <div className="slide-inner inner2">{img}</div>
    </div>
  );
};

export default Slide;
