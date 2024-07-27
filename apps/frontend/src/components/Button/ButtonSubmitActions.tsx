"use client";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { LoaderIcon } from "../Icons";

interface ButtonSubmitActionProps {
  children: ReactNode;
}

export function ButtonSubmitAction({ children }: ButtonSubmitActionProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="btn-primary px-8 py-2"
    >
      {pending ? <LoaderIcon className="animate-spin" /> : <>{children}</>}
    </button>
  );
}
