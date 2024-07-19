import { Registro } from "registro";
import { TableItem } from "./TableItem";

interface TableProps {
  registros: Registro[];
}

export function Table({ registros }: TableProps) {
  return (
    <section className="w-full px-24 flex flex-col gap-y-4">
      {registros.map((registro) => (
        <TableItem registro={registro} key={registro.id} />
      ))}
    </section>
  );
}
