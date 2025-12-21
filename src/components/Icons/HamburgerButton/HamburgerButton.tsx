import React, { useState, CSSProperties } from "react";

export interface Props {
  size?: number;
  barHeight?: number;
  gap?: number;
  color?: string;
  transition?: number;
  onClick?: () => void;
  style?: CSSProperties;
}

export const exampleHamburgerProps: Props = {
  size: 30,
  barHeight: 2,
  gap: 6,
  color: "white",
  transition: 0.5,
};

const HamburgerButton: React.FC<Props> = ({
  size = 30,
  barHeight = 2,
  gap = 6,
  color = "white",
  transition = 0.5,
  onClick,
  style,
}) => {
  const [open, setOpen] = useState(false);

  const common: CSSProperties = {
    width: size,
    height: barHeight,
    backgroundColor: color,
    transition: `transform ${transition}s ease, opacity ${transition / 2}s ease`,
    transformOrigin: "center",
    willChange: "transform, opacity",
  };

  const handleClick = () => {
    setOpen((o) => !o);
    if (onClick) onClick();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap,
          width: size,
          height: size,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            ...common,
            transform: open
              ? `translateY(${gap + barHeight}px) rotate(45deg) scaleX(0.8)`
              : "none",
          }}
        />
        <div
          style={{
            ...common,
            transform: open ? "translateX(40%) scale(0.2)" : "none",
            opacity: open ? 0 : 1,
          }}
        />
        <div
          style={{
            ...common,
            transform: open
              ? `translateY(-${gap + barHeight}px) rotate(-45deg) scaleX(0.8)`
              : "none",
          }}
        />
      </div>
    </div>
  );
};

export default HamburgerButton;
