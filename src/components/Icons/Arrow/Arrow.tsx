import React, { useState, useEffect, useRef } from "react";

type Dir = number | "top" | "bottom" | "left" | "right";

interface HoverArguments {
  width?: number;
  height?: number;
  notch?: number;
  rotate?: Dir;
  transition?: number;
}

interface ArrowProps {
  size?: { width?: number; height?: number; notch?: number; rotate?: Dir };
  hover?: HoverArguments;
  isParentHovered?: boolean;
  style?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
}

const directionToDegrees = (dir: Dir = "top") => {
  if (typeof dir === "number") return dir;
  switch (dir) {
    case "top": return 0;
    case "right": return 90;
    case "bottom": return 180;
    case "left": return -90;
    default: return 0;
  }
};

const Arrow: React.FC<ArrowProps> = ({
  size = {},
  hover = {},
  isParentHovered = false,
  style = {},
  activeStyle = {},
  strokeWidth = 0.25,
  strokeColor = "black",
  fillColor = "none"
}) => {
  const baseWidth = size.width ?? 12;
  const baseHeight = size.height ?? 8;
  const baseNotch = size.notch ?? 0;
  const rotate = size.rotate ?? "top";
  const baseRotateDeg = directionToDegrees(rotate);

  const bigWidth = baseWidth * 4;
  const bigHeight = baseHeight * 4;
  const bigNotch = baseNotch * 4;

  const hoverWidth = (hover.width ?? baseWidth) * 4;
  const hoverHeight = (hover.height ?? baseHeight) * 4;
  const hoverNotch = (hover.notch ?? baseNotch) * 4;
  const hoverRotateDeg = directionToDegrees(hover.rotate ?? rotate);
  const transition = hover.transition ?? 0.25;

  const [isHovered, setIsHovered] = useState(false);
  const [animated, setAnimated] = useState({ width: bigWidth, height: bigHeight, notch: bigNotch, rotate: baseRotateDeg });
  const animationRef = useRef<number | null>(null);
  const startValuesRef = useRef(animated);
  const targetValuesRef = useRef(animated);
  const startTimeRef = useRef(0);
  const durationRef = useRef(transition * 1000);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = () => {
    const elapsed = Date.now() - startTimeRef.current;
    const t = Math.min(elapsed / durationRef.current, 1);
    const newValues = {
      width: lerp(startValuesRef.current.width, targetValuesRef.current.width, t),
      height: lerp(startValuesRef.current.height, targetValuesRef.current.height, t),
      notch: lerp(startValuesRef.current.notch, targetValuesRef.current.notch, t),
      rotate: lerp(startValuesRef.current.rotate, targetValuesRef.current.rotate, t)
    };
    setAnimated(newValues);
    if (t < 1) animationRef.current = requestAnimationFrame(animate);
  };

  const startAnimation = (hovered: boolean) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    const target = hovered
      ? { width: hoverWidth, height: hoverHeight, notch: hoverNotch, rotate: hoverRotateDeg }
      : { width: bigWidth, height: bigHeight, notch: bigNotch, rotate: baseRotateDeg };
    startValuesRef.current = animated;
    targetValuesRef.current = target;
    startTimeRef.current = Date.now();
    durationRef.current = Math.max(transition * 1000, 10);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAnimation(isParentHovered || isHovered);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isHovered, isParentHovered]);

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

  const mergedStyle = isHovered || isParentHovered ? { ...style, ...activeStyle } : style;

  return (
    <div
      style={{
        width: bigWidth / 2,
        height: bigHeight / 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...mergedStyle
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width={bigWidth}
        height={bigHeight}
        viewBox={`0 0 ${bigWidth} ${bigHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          transform: `rotate(${animated.rotate}deg) scale(1)`,
          transformOrigin: "center"
        }}
      >
        <polygon
          points={polygonPoints}
          style={{ fill: fillColor, stroke: strokeColor, strokeWidth }}
        />
      </svg>
    </div>
  );
};

export default Arrow;
