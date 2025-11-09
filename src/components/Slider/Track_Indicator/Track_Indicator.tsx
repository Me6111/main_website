import React, { useRef } from 'react';
import './Track_Indicator.css';

type TrackIndicatorProps = {
  SlidesAmount: number;
  CurrentSlide: number;
  onSlideChange?: (index: number) => void;
  IndicatorWidth?: number | string;
  draggable?: boolean;
  SectionMargin?: number; 
};

const Track_Indicator: React.FC<TrackIndicatorProps> = ({
  SlidesAmount,
  CurrentSlide,
  onSlideChange,
  IndicatorWidth = '100%',
  draggable = false,
  SectionMargin = 5,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  if (SlidesAmount <= 0) return null;

  const sectionWidth = (100 - (SlidesAmount - 1) * SectionMargin) / SlidesAmount;
  const current = Math.max(0, Math.min(CurrentSlide, SlidesAmount - 1));
  
  const barLeft = `${(sectionWidth + SectionMargin) * current}%`;
  const barWidth = `${sectionWidth}%`;

  const getSlideFromPosition = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return current;
    const rect = track.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const ratio = Math.max(0, Math.min(relativeX / rect.width, 1));
    return Math.floor(ratio * SlidesAmount);
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (draggable) {
      const newIndex = getSlideFromPosition(e.clientX);
      onSlideChange?.(newIndex);
    }
  };

  const renderSections = () => {
    const sections = [];
    for (let i = 0; i < SlidesAmount; i++) {
      sections.push(
        <div
          key={i}
          className="Track_Indicator-section"
          style={{
            left: `${(sectionWidth + SectionMargin) * i}%`,
            width: `${sectionWidth}%`,
            marginRight: i === SlidesAmount - 1 ? 0 : `${SectionMargin}px`,
          }}
        />
      );
    }
    return sections;
  };

  return (
    <div className="Track_Indicator-outer" style={{ width: IndicatorWidth }}>
      <div
        className="Track_Indicator-track"
        ref={trackRef}
        onClick={handleTrackClick}
        style={{
          cursor: draggable ? 'grab' : 'pointer',
        }}
      >
        {renderSections()}
        <div
          className="Track_Indicator-bar"
          style={{
            width: barWidth,
            left: barLeft,
          }}
        />
      </div>
    </div>
  );
};

export default Track_Indicator;
