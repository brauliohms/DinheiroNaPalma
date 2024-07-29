import { useToggle } from "@/hooks";
import clsx from "clsx";
import { ReactNode, useEffect, useRef } from "react";

interface DropdownComponentProps {
  idDropdown?: string;
  children: ReactNode;
  trigger: ReactNode;
  closeBackdrop?: boolean;
  closeEscape?: boolean;
}

export default function DropdownComponent({
  idDropdown = "dropdown",
  children,
  trigger,
  closeBackdrop = true,
  closeEscape = true,
}: DropdownComponentProps) {
  // const [isShow, setShow] = useState(false);
  const [isShow, toggleShow] = useToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Efeito para fechar o dropdown quando apertar tecla ESC
  useEffect(() => {
    // Evita quebrar quando está no Node (server components)
    if (typeof window === "undefined" || !closeEscape || !isShow) return;

    // Função foi feita separada para poder remover o event listener
    function keyUpListener(e: KeyboardEvent) {
      if (e.key === "Escape") toggleShow();
    }

    // Cria a event listener para capturar a tecla ESC e fechar o dropdown
    window.addEventListener("keyup", keyUpListener);

    // Remover o event listener
    return () => window.removeEventListener("keyup", keyUpListener);
  }, [closeEscape, toggleShow]);

  // Efeito para fechar o dropdown quando clicar fora dele
  useEffect(() => {
    if (typeof window === "undefined" || !isShow || !closeBackdrop) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        toggleShow();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isShow, toggleShow]);

  return (
    <div className="w-fit relative" onClick={toggleShow} ref={dropdownRef}>
      <div className="flex items-center w-full h-full">{trigger}</div>
      {isShow ? (
        <ul
          id={idDropdown}
          className={clsx(
            "min-w-max absolute right-0 mt-2 bg-black border border-zinc-800 rounded-md shadow overflow-hidden origin-top-right transition-all ease-in-out duration-100",
            {
              "transform opacity-100 scale-100 visible": isShow,
              "transform opacity-0 scale-95 invisible": !isShow,
            }
          )}
        >
          {children}
        </ul>
      ) : null}
    </div>
  );
}
