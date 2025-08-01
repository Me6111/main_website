import React, { useEffect, useRef, useState, ReactNode } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './SectionScreen.css';

import LearnMoreButton from './../LearnMoreButton/LearnMoreButton';

interface SectionScreenProps {
  id: string;
  Image: { item: string; stagger?: boolean };
  header1: { text: string; stagger?: boolean };
  p?: { text: string; stagger?: boolean };
  buttonLabel?: { text: string; stagger?: boolean; href: string };
  HeaderFading?: boolean;
  CenteredHeader?: boolean; 
  childrenSections?: ReactNode[];
}

const SectionScreen = React.forwardRef<HTMLDivElement, SectionScreenProps>(
  (
    {
      id,
      Image,
      header1,
      p,
      buttonLabel,
      HeaderFading = false,
      CenteredHeader = false, 
      childrenSections = [],
    },
    propRef
  ) => {
    const [opacity, setOpacity] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const sectionRef = useIntersectionObserver(() => {
      if (sectionRef.current) {
        const container = sectionRef.current.querySelector('.stagger-container');
        if (container) container.classList.add('is-visible');
      }
    }, { threshold: 0.7 });

    useEffect(() => {
      if (!HeaderFading) return;
      const handleScroll = () => {
        if (!sectionRef.current || !headerRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const fadeSpeed = 0.1;
        const translateYSpeed = 0.05;
        const scrollProgress = Math.abs(rect.top);
        const fadeThreshold = rect.height * fadeSpeed;
        const visibleRatio = 1 - Math.min(scrollProgress / fadeThreshold, 1);
        setOpacity(rect.top < 0 && scrollProgress < rect.height ? visibleRatio : rect.top >= 0 ? 1 : 0);
        const translateY = -translateYSpeed * rect.height * (1 - visibleRatio);
        headerRef.current.style.transform = `translateY(${translateY}px)`;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [HeaderFading]);

    useEffect(() => {
      if (propRef) {
        if (typeof propRef === 'function') propRef(sectionRef.current);
        else if ('current' in propRef) propRef.current = sectionRef.current;
      }
    }, [propRef]);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % childrenSections.length);
      }, 5000); // Auto-slide every 5 seconds
      return () => clearInterval(interval);
    }, [childrenSections.length]);

    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}vw)`;
      }
    }, [currentIndex]);

    const goToPrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? childrenSections.length - 1 : prev - 1));
    };

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % childrenSections.length);
    };

    const containerClass = `sectionScreen${CenteredHeader ? ' CenteredHeader' : ''}`; // ✅ Dynamic class

    return (
      <div className={containerClass} ref={sectionRef} id={`sectionScreen-${id}`}>
        <div className="stagger-container">
          <div
            className="header"
            ref={headerRef}
            id={`sectionScreen-header-${id}`}
            style={
              HeaderFading
                ? {
                    opacity,
                    transition: 'opacity 0.1s ease-out',
                    pointerEvents: opacity === 0 ? 'none' : 'auto',
                  }
                : undefined
            }
          >
            <div className="header1">
              {header1?.text && (
                <h1 className={header1.stagger ? 'stagger-item header1-title' : 'header1-title'}>
                  {header1.text}
                </h1>
              )}
              {p?.text && (
                <p className={p.stagger ? 'stagger-item header1-text' : 'header1-text'}>
                  {p.text}
                </p>
              )}
            </div>

            <LearnMoreButton
              text={buttonLabel?.text}
              href={buttonLabel?.href}
              stagger={buttonLabel?.stagger}
            />
          </div>

          <div className="image">
            {Image?.item && (
              <img
                className={Image.stagger ? 'stagger-item image-item' : 'image-item'}
                src={Image.item}
                alt="Section image"
              />
            )}
          </div>
        </div>

        {childrenSections.length > 0 && (
          <div className="slider-wrapper">
            <button className="slider-arrow left" onClick={goToPrev}>
              &#10094;
            </button>
            <div className="nested-sections-container" ref={sliderRef}>
              {childrenSections.map((child, index) => (
                <div key={index} className="nested-section">
                  {child}
                </div>
              ))}
            </div>
            <button className="slider-arrow right" onClick={goToNext}>
              &#10095;
            </button>
          </div>
        )}
      </div>
    );
  }
);

export default SectionScreen;
