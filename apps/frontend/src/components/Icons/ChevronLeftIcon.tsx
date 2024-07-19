import { SVGAttributes } from "react";

export function ChevronLeftIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.75 19.5 8.25 12l7.5-7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
