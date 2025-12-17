import React from "react";

type Dir = number | "top" | "bottom" | "left" | "right";

export interface Props {
  width?: number;
  height?: number;
  notch?: number;
  rotate?: Dir;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  transition?: number;
  style?: React.CSSProperties;
}

const directionToDegrees = (dir: Dir = "top") => {
  if (typeof dir === "number") return dir;
  switch (dir) {
    case "right":
      return 90;
    case "bottom":
      return 180;
    case "left":
      return -90;
    default:
      return 0;
  }
};

const Arrow: React.FC<Props> = ({
  width = 12,
  height = 8,
  notch = 0,
  rotate = "top",
  strokeWidth = 0.25,
  strokeColor = "black",
  fillColor = "none",
  transition = 0.25,
  style = {}
}) => {
  const rotateDeg = directionToDegrees(rotate);
  const cx = width / 2;
  const cy = height / 2;

  const polygonPoints = [
    `${cx},${cy - height / 2}`,
    `${cx - width / 2},${cy + height / 2}`,
    `${cx},${cy + height / 2 - notch}`,
    `${cx + width / 2},${cy + height / 2}`
  ].join(" ");

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          transform: `rotate(${rotateDeg}deg)`,
          transformOrigin: "center",
          transition: `all ${transition}s ease`
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
