import React from 'react'
import './PrevNextButtons.css'

interface PrevNextButtonsProps {
  currentIndex: number
  maxIndex: number
  updateSlider: (newIndex: number) => void
  width: string
  top?: string
  bottom?: string
}

const PrevNextButtons: React.FC<PrevNextButtonsProps> = ({
  currentIndex,
  maxIndex,
  updateSlider,
  width,
  top,
  bottom
}) => {
  const goNext = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
    updateSlider(newIndex)
  }

  const goPrev = () => {
    const newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1
    updateSlider(newIndex)
  }

  return (
    <div
      className="Slider_Nav_Buttons"
      style={{
        width,
        position: 'absolute',
        top: top,
        bottom: bottom
      }}
    >
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </div>
  )
}

export default PrevNextButtons
