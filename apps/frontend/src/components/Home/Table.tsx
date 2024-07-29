import { Registro } from "registro";
import { TableItem } from "./TableItem";

interface TableProps {
  registros: Registro[];
}

export function Table({ registros }: TableProps) {
  return (
    <section className="w-full h-full px-4 sm:px-24 flex flex-col gap-y-2 sm:gap-y-4 max-h-full sm:max-h-[620px] overflow-y-auto">
      {registros.map((registro) => (
        <TableItem registro={registro} key={registro.id} />
      ))}
    </section>
  );
}
