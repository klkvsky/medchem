import { SVGProps } from "react";

export const SubtractIcon = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11H0V0H11V11ZM5.5002 2.20008C3.67763 2.20008 2.20016 3.6775 2.20016 5.5C2.20023 7.32245 3.67767 8.79992 5.5002 8.79992C7.32266 8.79984 8.80018 7.3224 8.80024 5.5C8.80024 3.67755 7.3227 2.20016 5.5002 2.20008Z"
      fill="currentColor"
    />
  </svg>
);
