import { URL_REGISTRO } from "@/adapters/backend";
import Link from "next/link";
import { ChevronDownIcon, PlusCircleIcon } from "../Icons";
interface HeaderProps {
  quantidadeRegistros: number;
}

export function Header({ quantidadeRegistros }: HeaderProps) {
  return (
    <div className="flex items-center justify-between w-full px-24">
      <div>
        <h1 className="text-white font-bold text-3xl">Minhas Finanças</h1>
        <p className="text-white font-normal text-sm">
          {quantidadeRegistros > 0
            ? `Você possui ${quantidadeRegistros} registros`
            : "Não possui registros"}
        </p>
      </div>
      <div className="flex gap-x-12">
        <div className="flex justify-between items-center gap-x-1">
          <span className="font-bold">Filtrar por Status</span>
          <ChevronDownIcon className="size-5 text-purple-700 stroke-2" />
        </div>
        <Link href={URL_REGISTRO}>
          <button className="btn-primary">
            <PlusCircleIcon className="size-11 fill-white stroke-purple-700" />
            <span className="pr-4 font-semibold">Novo Registro</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
