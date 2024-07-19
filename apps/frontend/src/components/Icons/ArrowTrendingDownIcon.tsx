import { SVGAttributes } from "react";

export function ArrowTrendingDownIcon(props: SVGAttributes<SVGElement>) {
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
        d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
