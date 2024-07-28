"use client";
import clsx from "clsx";
import { useEffect } from "react";
import { XIcon } from "../Icons";

interface ModalProps {
  idModal?: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  closeButtonX?: boolean;
  closeBackdrop?: boolean;
  closeEscape?: boolean;
}

export default function Modal({
  idModal = "modal",
  children,
  closeModal,
  isOpen,
  closeButtonX = true,
  closeBackdrop = false,
  closeEscape = true,
}: ModalProps) {
  // Efeito para fechar o modal quando apertar tecla ESC
  useEffect(() => {
    // Evita quebrar quando está no Node (server components)
    if (!window || !closeEscape) return;

    // Função foi feita separada para poder remover o event listener
    function keyUpListener(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }

    // Cria a event listener para capturar a tecla ESC e fechar o modal
    window.addEventListener("keyup", keyUpListener);

    // Remover o event listener
    return () => window.removeEventListener("keyup", keyUpListener);
  }, [closeEscape, closeModal]);

  // função para fechar o modal clicando na area do backdrop
  function handleBackdropClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (e) e.preventDefault();
    if (closeBackdrop && e.target === e.currentTarget) closeModal();
  }

  return (
    // Backdrop do Modal
    <div
      id={idModal}
      onClick={handleBackdropClick}
      className={clsx(
        "fixed inset-0 z-40 flex justify-center items-center transition-colors ease-out duration-200",
        {
          "visible bg-black/50 backdrop-blur-sm": isOpen,
          invisible: !isOpen,
        }
      )}
    >
      {/* Janela do Modal */}
      <section
        role="alertdialog"
        aria-modal="true"
        className={clsx(
          "bg-black border border-zinc-800 rounded-xl z-50 shadow p-6 transition-all ease-out duration-200 max-[422px]:min-w-full sm:min-w-min flex justify-center items-center",
          {
            "scale-100 opacity-100 translate-y-0": isOpen,
            "scale-95 opacity-0": !isOpen,
          }
        )}
      >
        {closeButtonX && (
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-2 right-2 p-1 rounded-lg text-zinc-400 hover:text-zinc-600"
          >
            <XIcon />
          </button>
        )}
        {children}
      </section>
    </div>
  );
}
