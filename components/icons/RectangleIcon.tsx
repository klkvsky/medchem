import { SVGProps } from "react";

export const RectangleIcon = ({
  width = 11,
  height = 11,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 5.5L5.5 0L11 5.5L5.5 11L0 5.5Z" fill="currentColor" />
  </svg>
);
