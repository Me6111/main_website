import React from 'react';

export type SlideProps = {
  position?: 'left' | 'right' | 'active';
  number: number;
};

const Slide: React.FC<SlideProps> = ({ position = '', number }) => {
  return (
    <div className={`Slider-config-slide ${position}`}>
      <div className="Slider-config-slide-inner inner0">{number}</div>
      <div className="Slider-config-slide-inner inner1">
        <div className="slide-section one">1</div>
        <div className="slide-section two">2</div>
      </div>
    </div>
  );
};

export default Slide;
