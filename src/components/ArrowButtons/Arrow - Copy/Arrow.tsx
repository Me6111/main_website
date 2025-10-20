import React, { CSSProperties, useState, useEffect } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface HoverProps {
  notch?: number;
  width?: number;
  height?: number;
}

interface ArrowProps {
  direction?: Direction;
  size?: number;
  arrowWidth?: number;
  arrowHeight?: number;
  color?: string;
  notch?: number;
  hover?: HoverProps;
  style?: CSSProperties;
  transition?: number; // seconds
}

const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(max, val));

const lerp = (start: number, end: number, t: number) =>
  start + (end - start) * t;

const Arrow: React.FC<ArrowProps> = ({
  direction = 'up',
  size = 24,
  arrowWidth = 16,
  arrowHeight = 20,
  color = 'black',
  notch = 8,
  hover,
  style = {},
  transition = 0.3, // default 0.3s
}) => {
  const rotationDegrees: Record<Direction, number> = {
    up: 0,
    right: 90,
    down: 180,
    left: 270,
  };

  const [isHovered, setIsHovered] = useState(false);

  const baseWidth = arrowWidth;
  const baseHeight = arrowHeight;
  const baseNotch = notch;

  const hoverWidth = hover?.width ?? baseWidth;
  const hoverHeight = hover?.height ?? baseHeight;
  const hoverNotch = hover?.notch ?? baseNotch;

  const duration = transition * 1000;

  const [animWidth, setAnimWidth] = useState(baseWidth);
  const [animHeight, setAnimHeight] = useState(baseHeight);
  const [animNotch, setAnimNotch] = useState(baseNotch);

  // Animate width
  useEffect(() => {
    const from = animWidth;
    const to = isHovered ? hoverWidth : baseWidth;
    if (from === to) return;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);
      setAnimWidth(lerp(from, to, t));
      if (t < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered, baseWidth, hoverWidth, duration]);

  // Animate height
  useEffect(() => {
    const from = animHeight;
    const to = isHovered ? hoverHeight : baseHeight;
    if (from === to) return;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);
      setAnimHeight(lerp(from, to, t));
      if (t < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered, baseHeight, hoverHeight, duration]);

  // Animate notch
  useEffect(() => {
    const from = animNotch;
    const to = isHovered ? hoverNotch : baseNotch;
    if (from === to) return;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);
      setAnimNotch(lerp(from, to, t));
      if (t < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered, baseNotch, hoverNotch, duration]);

  const maxWidth = Math.max(baseWidth, hoverWidth);
  const maxHeight = Math.max(baseHeight, hoverHeight);

  const currentNotch = clamp(animNotch, 0, animHeight);

  const offsetX = (maxWidth - animWidth) / 2;
  const offsetY = (maxHeight - animHeight) / 2;

  const centerX = offsetX + animWidth / 2;
  const tipY = offsetY;
  const bottomY = offsetY + animHeight;
  const notchY = offsetY + currentNotch;
  const leftX = offsetX;
  const rightX = offsetX + animWidth;

  const pathD = `
    M ${centerX} ${tipY}
    L ${leftX} ${bottomY}
    L ${centerX} ${notchY}
    L ${rightX} ${bottomY}
    Z
  `;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${maxWidth} ${maxHeight}`}
      style={{
        transform: `rotate(${rotationDegrees[direction]}deg)`,
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={pathD.trim()} fill={color} />
    </svg>
  );
};

export default Arrow;
