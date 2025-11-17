import React from 'react';
import './PrevNextButtons.css';


interface PrevNextButtonsProps {
  currentIndex: number;
  maxIndex: number;
  updateSlider: (newIndex: number) => void;
}

const PrevNextButtons: React.FC<PrevNextButtonsProps> = ({ currentIndex, maxIndex, updateSlider }) => {
  const goNext = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateSlider(newIndex);
  };

  const goPrev = () => {
    const newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateSlider(newIndex);
  };

  return (
    <div className="Slider_Nav_Buttons">
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default PrevNextButtons;
