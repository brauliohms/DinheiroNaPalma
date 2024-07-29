"use client";
import { URL_REGISTRO } from "@/adapters/backend";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdowFiltrarStatus, { DropdowItem } from "../Dropdow";
import { CheckIcon, ChevronDownIcon, PlusCircleIcon } from "../Icons";
interface HeaderProps {
  quantidadeRegistros: number;
  handleFiltroStatus: (filtro: string) => void;
}

const statusItens = ["Todos", "Consolidado", "Pendente", "Cancelado"];

export function Header({
  quantidadeRegistros,
  handleFiltroStatus,
}: HeaderProps) {
  const [filtroStatus, setFiltroStatus] = useState<string>("Todos");

  useEffect(() => {
    handleFiltroStatus(filtroStatus);
  }, [filtroStatus]);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full px-2 sm:px-24 gap-4">
        <div>
          <h1 className="text-white text-center font-bold text-3xl">
            Minhas Finanças
          </h1>
          <p className="text-white text-center font-normal text-sm">
            {quantidadeRegistros > 0
              ? `Você possui ${quantidadeRegistros} registros`
              : "Não possui registros"}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
          <DropdowFiltrarStatus
            trigger={
              <button className="flex justify-between items-center gap-x-1">
                <span className="font-bold">Filtrar por Status</span>
                <ChevronDownIcon className="size-5 text-purple-700 stroke-2" />
              </button>
            }
          >
            {statusItens.map((item, index) => (
              <DropdowItem key={index}>
                <button
                  type="button"
                  className="flex gap-4 w-full"
                  onClick={() => setFiltroStatus(item)}
                >
                  <CheckIcon
                    className={clsx("size-5", {
                      visible: filtroStatus === item,
                      invisible: filtroStatus !== item,
                    })}
                  />
                  {item}
                </button>
              </DropdowItem>
            ))}
            {/* <DropdowItem>Consolidados</DropdowItem>
            <DropdowItem>Pendentes</DropdowItem>
            <DropdowItem>Cancelados</DropdowItem> */}
          </DropdowFiltrarStatus>
          <Link href={URL_REGISTRO}>
            <button className="btn-primary">
              <PlusCircleIcon className="size-11 fill-white stroke-purple-700" />
              <span className="pr-4 font-semibold">Novo Registro</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
