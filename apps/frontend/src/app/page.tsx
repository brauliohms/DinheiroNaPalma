import { Header, Table, Vazio } from "@/components/Home";
import { ObterRegistrosController } from "@/controllers";

export default async function Home() {
  let registros = await ObterRegistrosController();
  if (!registros) registros = [];

  return (
    <section className="w-full flex min-h-screen flex-col items-center p-24 text-white gap-y-8">
      <Header quantidadeRegistros={registros.length} />
      {registros.length > 0 ? <Table registros={registros} /> : <Vazio />}
    </section>
  );
}
