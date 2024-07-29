"use client";
import { cn } from "@/lib";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { LoaderIcon } from "../Icons";

interface ButtonSubmitActionProps {
  children: ReactNode;
  className?: string;
}

export function ButtonSubmitAction({
  children,
  className,
}: ButtonSubmitActionProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={cn("btn-primary px-8 py-2", className)}
    >
      {pending ? <LoaderIcon className="animate-spin" /> : <>{children}</>}
    </button>
  );
}
