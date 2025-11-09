import React, { useRef, useEffect, useState } from 'react'
import './Slider.css'
import ArrowsNav from './SliderNav/ArrowsNav/ArrowsNav'
import IndexNav from './SliderNav/IndexNav/IndexNav'

type SlideWidths = {
  active?: number
  left?: number
  right?: number
}

type SliderNavElementProps = {
  onScrollLeft: () => void
  onScrollRight: () => void
  onSelectSlide?: (index: number) => void
  currentIndex?: number
  totalSlides?: number
  variant?: number
}

type NavTypeProp =
  | { NavType: 'index'; Style?: number }
  | { NavType: 'arrows'; Type: 0 | 1; Style?: number }
  | { NavType: 'custom' }

type SliderProps = {
  slides: React.ReactNode[]
  Unique_Slider_Name?: string
  gap?: number
  slideWidths?: SlideWidths
  NavType?: NavTypeProp
  sliderNavElement?: React.ReactElement<SliderNavElementProps>
  transitionDuration?: number
}

const Slider: React.FC<SliderProps> = ({
  slides,
  Unique_Slider_Name: UniqueSliderName,
  gap = 0,
  slideWidths = {},
  NavType = { NavType: 'arrows', Type: 0, Style: 0 },
  sliderNavElement,
  transitionDuration = 300,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [SliderVisibleWidth, setSliderVisibleWidth] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const animationTimeout = useRef<number | null>(null)

  const slideCount = slides.length
  const defaultWidth = 100 / slideCount

  const widths = {
    active: slideWidths.active ?? defaultWidth,
    left: slideWidths.left ?? defaultWidth,
    right: slideWidths.right ?? defaultWidth,
  }

  const getSlideWidthPx = (position: 'active' | 'left' | 'right') =>
    (SliderVisibleWidth * widths[position]) / 100

  const performScroll = (index: number) => {
    const pixelWidths = slides.map((_, i) => {
      if (i === index) return getSlideWidthPx('active')
      if (i < index) return getSlideWidthPx('left')
      return getSlideWidthPx('right')
    })
    const totalBefore = pixelWidths.slice(0, index).reduce((a, w) => a + w + gap, 0)
    const offset = SliderVisibleWidth / 2 - pixelWidths[index] / 2 - totalBefore
    if (trackRef.current) {
      trackRef.current.style.transition = `transform 0.15s ease-in-out`
      trackRef.current.style.transform = `translateX(${offset}px)`
    }
  }

  const scrollToIndex = (targetIndex: number) => {
    if (isAnimating || targetIndex === currentIndex) return
    const steps = Math.abs(targetIndex - currentIndex)
    const totalTime = transitionDuration
    const stepTime = steps > 0 ? totalTime / steps : totalTime
    setIsAnimating(true)
    const direction = targetIndex > currentIndex ? 1 : -1
    let tempIndex = currentIndex
    const animateStep = () => {
      tempIndex += direction
      setCurrentIndex(tempIndex)
      performScroll(tempIndex)
      if (tempIndex !== targetIndex) {
        animationTimeout.current = window.setTimeout(animateStep, stepTime)
      } else {
        setIsAnimating(false)
        animationTimeout.current = null
      }
    }
    animateStep()
  }

  const scrollLeft = () => {
    if (!isAnimating && currentIndex > 0) scrollToIndex(currentIndex - 1)
  }

  const scrollRight = () => {
    if (!isAnimating && currentIndex < slides.length - 1) scrollToIndex(currentIndex + 1)
  }

  const handleSelectSlide = (index: number) => {
    if (!isAnimating && index >= 0 && index < slides.length) scrollToIndex(index)
  }

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setSliderVisibleWidth(containerRef.current.offsetWidth)
    }
    updateWidth()
    const resizeObserver = new ResizeObserver(updateWidth)
    if (containerRef.current) resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    performScroll(currentIndex)
  }, [SliderVisibleWidth, slideWidths, gap])

  useEffect(() => {
    return () => {
      if (animationTimeout.current !== null) clearTimeout(animationTimeout.current)
    }
  }, [])

  const renderNav = () => {
    const commonProps = {
      onScrollLeft: scrollLeft,
      onScrollRight: scrollRight,
      onSelectSlide: handleSelectSlide,
      currentIndex,
      totalSlides: slides.length,
    }
    if (!NavType) return null
    switch (NavType.NavType) {
      case 'index':
        return <IndexNav {...commonProps} variant={NavType.Style ?? 0} />
      case 'arrows':
        return (
          <ArrowsNav
            onScrollLeft={scrollLeft}
            onScrollRight={scrollRight}
            type={NavType.Type}
            style={NavType.Style ?? 0}
          />
        )
      case 'custom':
        return sliderNavElement ? React.cloneElement(sliderNavElement, commonProps) : null
      default:
        return null
    }
  }

  return (
    <div id={UniqueSliderName} className="Slider-outer" style={{ overflow: 'hidden' }}>
      <div className="Slider-inner">
        <div className="Slider-track-1" ref={containerRef}>
          <div
            className="Slider-track-0"
            ref={trackRef}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              willChange: 'transform',
            }}
          >
            {slides.map((slide, index) => {
              let className = 'Slider-slide'
              if (index === currentIndex) className += ' active'
              else if (index < currentIndex) className += ' left'
              else className += ' right'
              const widthPercent =
                index === currentIndex
                  ? widths.active
                  : index < currentIndex
                  ? widths.left
                  : widths.right
              return (
                <div
                  key={index}
                  className={className}
                  style={{
                    flexShrink: 0,
                    width: `${widthPercent}%`,
                    transition: 'width 0.15s ease-in-out',
                  }}
                >
                  {slide}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {renderNav()}
    </div>
  )
}

export default Slider
