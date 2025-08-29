import React from 'react';
import './Slide_1.css';


export type SlideProps = {
  position?: 'left' | 'right' | 'active';
  img: React.ReactNode; 
};

const Slide: React.FC<SlideProps> = ({ position = '', img }) => {
  return (
    <div className={`Slider-config-slide ${position}`}>
      <div className="Slider-config-slide-inner inner1">{img}</div>
      <div className="Slider-config-slide-inner inner2">{img}</div>
    </div>
  );
};

export default Slide;
