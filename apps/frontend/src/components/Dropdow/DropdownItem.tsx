import { ReactNode } from "react";

export function DropdowItem({ children }: { children: ReactNode }) {
  return (
    <li
      className={`
      flex gap-3 items-center px-4 py-2
      bg-transparent hover:bg-zinc-800
      rounded cursor-pointer text-zinc-200
      `}
    >
      {children}
    </li>
  );
}
