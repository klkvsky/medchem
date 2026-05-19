import { SVGProps } from "react";

export const CirclesIcon = ({
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
    <path
      d="M11 2.51429C11 3.90289 9.87432 5.02857 8.48571 5.02857C7.09711 5.02857 5.97143 3.90289 5.97143 2.51429C5.97143 1.12568 7.09711 -1.21395e-07 8.48571 0C9.87432 1.21397e-07 11 1.12568 11 2.51429Z"
      fill="currentColor"
    />
    <path
      d="M5.02857 8.48571C5.02857 9.87432 3.90289 11 2.51429 11C1.12568 11 -1.21396e-07 9.87432 0 8.48571C1.21396e-07 7.09711 1.12568 5.97143 2.51429 5.97143C3.90289 5.97143 5.02857 7.09711 5.02857 8.48571Z"
      fill="currentColor"
    />
  </svg>
);
