import React from "react";

const svg = {
  width: "779px",
  height: "759px",
  stopColor: "rgb(237, 247, 255)",
};

interface IDirectionProps {
  direction: "left" | "right";
  className: "shape-home-banner" | "shape-project" | `inner-page-shape-banner-${"left" | "right"}`;
}

const BackgroundShape = ({ direction, className }: IDirectionProps) => {
  return (
    <svg
      className={`bg-shape ${className} reveal-from-${direction}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={svg.width}
      height={svg.height}
    >
      <defs>
        <linearGradient id="PSgrad_01" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
          <stop offset="0%" stopColor={svg.stopColor} stopOpacity="1" />
          <stop offset="100%" stopColor={svg.stopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        fill="url(#PSgrad_01)"
        d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
      />
    </svg>
  );
};

export { BackgroundShape };
