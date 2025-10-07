import React from 'react';
import './Slide_4.css';




export type SlideProps = {
  position?: 'left' | 'right' | 'active';
  img: React.ReactNode; 
};

const Slide: React.FC<SlideProps> = ({ position = '', img }) => {
  return (
    <div className={`Slide_4 ${position}`}>
      <div className="Slide-inner inner0">{img}</div>
    </div>
  );
};

export default Slide;
