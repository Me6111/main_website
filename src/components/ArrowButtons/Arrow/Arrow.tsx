import React, { useState, useEffect, useRef } from "react";
import './Arrow.css';

interface HoverArguments {
  width?: number;
  height?: number;
  notch?: number;
  rotate?: number;
  transition?: number;
}

interface ArrowProps {
  size: {
    width: number;
    height: number;
    notch: number;
    rotate: number;
  };
  hover?: HoverArguments;
  strokeColor?: string; // Optional stroke color
  fillColor?: string;   // Optional fill color
}

const Arrow: React.FC<ArrowProps> = ({ size, hover = {}, strokeColor = 'white', fillColor = 'none' }) => {
  const { width, height, notch, rotate } = size;

  const {
    width: hoverWidth = width,
    height: hoverHeight = height,
    notch: hoverNotch = notch,
    rotate: hoverRotate = rotate,
    transition = 1,
  } = hover;

  const [isHovered, setIsHovered] = useState(false);
  const [animated, setAnimated] = useState({ width, height, notch, rotate });

  const animationRef = useRef<number | null>(null);
  const startValuesRef = useRef(animated);
  const targetValuesRef = useRef(animated);
  const durationRef = useRef(transition * 1000);
  const startTimeRef = useRef(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = () => {
    const elapsed = Date.now() - startTimeRef.current;
    const t = Math.min(elapsed / durationRef.current, 1);

    const newValues = {
      width: lerp(startValuesRef.current.width, targetValuesRef.current.width, t),
      height: lerp(startValuesRef.current.height, targetValuesRef.current.height, t),
      notch: lerp(startValuesRef.current.notch, targetValuesRef.current.notch, t),
      rotate: lerp(startValuesRef.current.rotate, targetValuesRef.current.rotate, t),
    };

    setAnimated((prevValues) => ({
      width: isNaN(newValues.width) ? prevValues.width : newValues.width,
      height: isNaN(newValues.height) ? prevValues.height : newValues.height,
      notch: isNaN(newValues.notch) ? prevValues.notch : newValues.notch,
      rotate: isNaN(newValues.rotate) ? prevValues.rotate : newValues.rotate,
    }));

    if (t < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  const startAnimation = (toHover: boolean) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    const current = animated;
    const target = toHover
      ? { width: hoverWidth, height: hoverHeight, notch: hoverNotch, rotate: hoverRotate }
      : { width, height, notch, rotate };

    const totalDistance =
      Math.abs(hoverWidth - width) +
      Math.abs(hoverHeight - height) +
      Math.abs(hoverNotch - notch) +
      Math.abs(hoverRotate - rotate);

    const currentDistance =
      Math.abs(current.width - width) +
      Math.abs(current.height - height) +
      Math.abs(current.notch - notch) +
      Math.abs(current.rotate - rotate);

    const progressToHover = totalDistance === 0 ? 0 : currentDistance / totalDistance;
    const remaining = toHover ? 1 - progressToHover : progressToHover;

    durationRef.current = Math.max(remaining * transition * 1000, 10);

    startValuesRef.current = current;
    targetValuesRef.current = target;
    startTimeRef.current = Date.now();

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAnimation(isHovered);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const cx = animated.width / 2;
  const cy = animated.height / 2;
  const topX = cx;
  const topY = cy - animated.height / 2;
  const leftX = cx - animated.width / 2;
  const leftY = cy + animated.height / 2;
  const rightX = cx + animated.width / 2;
  const rightY = cy + animated.height / 2;
  const bottomX = cx;
  const bottomY = cy + animated.height / 2 - animated.notch;
  const polygonPoints = `${topX},${topY} ${leftX},${leftY} ${bottomX},${bottomY} ${rightX},${rightY}`;

  const maxSize = Math.max(
    size.width,
    size.height,
    hover?.width ?? size.width,
    hover?.height ?? size.height
  );

  return (
    <div
      className="Arrow"
      style={{ width: maxSize, height: maxSize }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width={animated.width}
        height={animated.height}
        viewBox={`0 0 ${animated.width} ${animated.height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          transform: `rotate(${animated.rotate}deg)`,
          transformOrigin: "center",
        }}
      >
        <polygon points={polygonPoints} fill={fillColor} stroke={strokeColor} strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Arrow;
