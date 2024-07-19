import { Header, Table, Vazio } from "@/components/Home";
import { Registro } from "registro";

export default function Home() {
  // TODO: trocar objeto mockado por fetch
  const registros: Registro[] = [
    {
      descricao: "Conta Luz",
      data: new Date("2024-07-15T00:00:00"),
      tipo: "despesa",
      valor: 1350.21,
      status: "pendente",
      id: "Q5MDLN",
    },
    {
      descricao: "Conta Água",
      data: new Date("2024-07-16T00:00:00"),
      tipo: "despesa",
      valor: 250,
      status: "cancelado",
      id: "Q5MDLY",
    },
    {
      descricao: "Salário",
      data: new Date("2024-07-05T00:00:00"),
      tipo: "receita",
      valor: 4250,
      status: "consolidado",
      id: "Q5MDLT",
    },
  ];

  return (
    <section className="w-full flex min-h-screen flex-col items-center p-24 text-white gap-y-8">
      <Header quantidadeRegistros={registros.length} />
      {registros.length > 0 ? <Table registros={registros} /> : <Vazio />}
    </section>
  );
}
