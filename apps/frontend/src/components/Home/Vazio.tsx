import Image from "next/image";

export function Vazio() {
  return (
    <section className="flex flex-col gap-y-4">
      <Image
        src="/img/vazio.png"
        width={300}
        height={300}
        alt="Imagem pessoa Vazia"
      />
      <div className="flex flex-col text-center justify-center items-center gap-y-4">
        <h3 className="text-zinc-400 font-bold text-2xl">Nada para Mostrar</h3>
        <div className="text-zinc-600 font-normal text-sm">
          <p>
            Clique no botão <span className="font-bold">Novo Registro</span>
          </p>
          <p>para adicionar receitas ou despesas</p>
        </div>
      </div>
    </section>
  );
}
