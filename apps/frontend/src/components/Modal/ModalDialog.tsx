"use client";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalDialog: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      role="alertdialog"
      aria-modal="true"
      className={clsx(
        "bg-white rounded-xl shadow p-6 transition-all ease-out duration-300",
        {
          "scale-100 opacity-100 translate-y-0": isOpen,
          "scale-125 opacity-0": !isOpen,
        }
      )}
    >
      <div>{children}</div>
    </dialog>
  );
};
