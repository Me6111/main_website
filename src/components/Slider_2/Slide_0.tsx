import React from 'react';

export type SlideProps = {
  position?: 'left' | 'right' | 'active';
  img: React.ReactNode; 
};

const Slide: React.FC<SlideProps> = ({ position = '', img }) => {
  return (
    <div className={`Slider-config-slide ${position}`}>
      <div className="Slider-config-slide-inner inner0">{img}</div>
    </div>
  );
};

export default Slide;
