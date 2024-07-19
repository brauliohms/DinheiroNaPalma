import { useToggle } from "@/hooks";
import clsx from "clsx";
import { RegistroStatus } from "registro";
import { PointIcon } from "../Icons";

interface DropdownProps {
  edicao: boolean;
  handleStatusChange: (status: RegistroStatus) => void;
  status: RegistroStatus;
}

export function Dropdown({
  edicao,
  handleStatusChange,
  status,
}: DropdownProps) {
  const [isShow, toggleShow] = useToggle(false);

  function showStatus(status: RegistroStatus) {
    if (status === "pendente") {
      return "Pendente";
    } else if (status === "cancelado") {
      return "Cancelado";
    } else if (status === "consolidado") {
      return "Consolidado";
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleShow}
        disabled={!edicao}
        aria-disabled={!edicao}
        className={clsx(
          "px-4 py-2 rounded-md font-bold flex items-center justify-center capitalize w-40 text-center",
          {
            "text-green-500 bg-verdefundo": status === "consolidado",
            "text-red-500 bg-vermelhofundo": status === "cancelado",
            "text-yellow-500 bg-amarelofundo": status === "pendente",
          }
        )}
      >
        <span>
          <PointIcon className="size-5" />
        </span>
        {showStatus(status)}
      </button>

      <div
        className={clsx(
          "absolute right-0 z-10 mt-2 bg-black border border-zinc-800 p-1 shadow-md rounded-md w-32 origin-top-right transition-all ease-in-out duration-100",
          {
            "transform opacity-100 scale-100": isShow,
            "transform opacity-0 scale-95": !isShow,
          }
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <span className="block border-b border-zinc-800 px-1 py-2">Status</span>
        <div className="flex flex-col gap-y-1 py-1" role="none">
          <button
            role="menuitem"
            tabIndex={-1}
            type="button"
            className="w-full text-sm text-yellow-500 p-1 bg-transparent hover:bg-zinc-800 rounded flex items-center"
            onClick={() => {
              handleStatusChange("pendente");
              toggleShow();
            }}
          >
            <span>
              <PointIcon className="size-5 mr-1" />
            </span>
            Pendente
          </button>
          <button
            role="menuitem"
            tabIndex={-1}
            type="button"
            className="w-full text-sm text-green-500 p-1 bg-transparent hover:bg-zinc-800 rounded flex items-center"
            onClick={() => {
              handleStatusChange("consolidado");
              toggleShow();
            }}
          >
            <span>
              <PointIcon className="size-5 mr-1" />
            </span>
            Consolidado
          </button>
          <button
            role="menuitem"
            tabIndex={-1}
            type="button"
            className="w-full text-sm text-red-500 p-1 bg-transparent hover:bg-zinc-800 rounded flex items-center"
            onClick={() => {
              handleStatusChange("cancelado");
              toggleShow();
            }}
          >
            <span>
              <PointIcon className="size-5 mr-1" />
            </span>
            Cancelado
          </button>
        </div>
      </div>
    </div>
  );
}
