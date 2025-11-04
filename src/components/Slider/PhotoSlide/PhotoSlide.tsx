import React from 'react';
import './PhotoSlide.css';

export type SlideProps = {
  position?: 'left' | 'right' | 'active';
  images: React.ReactNode[]; 
};

const PhotoSlide: React.FC<SlideProps> = ({ position = '', images }) => {
  return (
    <div className={`PhotoSlide ${position}`}>
      {images.map((img, index) => (
        <div key={index} className={`Slide-inner inner${index}`}>
          {img}
        </div>
      ))}
    </div>
  );
};

export default PhotoSlide;
