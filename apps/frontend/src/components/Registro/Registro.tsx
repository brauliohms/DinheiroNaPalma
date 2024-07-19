import { ChevronLeftIcon } from "../Icons";

export function Registro() {
  return (
    <>
      <div className="flex gap-2 items-center w-full justify-start">
        <ChevronLeftIcon className="size-4" />{" "}
        <span className="font-bold text-sm text-zinc-500">Voltar</span>
      </div>
      <section></section>
    </>
  );
}
