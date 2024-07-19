"use client";
import { Dropdown } from "@/components/Dropdow";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ChevronLeftIcon,
  EyeIcon,
  PencilIcon,
} from "@/components/Icons";
import useToggle from "@/hooks/useToggle";
import clsx from "clsx";
import { Formatter } from "common/src/Formatter";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RegistroStatus } from "registro";

const URL_HOME = process.env.NEXT_PUBLIC_PAGE_HOME || "";

export function FormRegistro() {
  const { reset, register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      descricao: "",
      data: new Date().toISOString().split("T")[0],
      valor: 0.0,
      status: "pendente",
    },
  });
  const [despesa, toggleDespesa] = useToggle(true);
  const [edicao, toggleEdicao] = useToggle(false);
  const router = useRouter();

  const status = watch("status");

  useEffect(() => {
    if (despesa) {
      setValue("tipo", "despesa");
    } else {
      setValue("tipo", "receita");
    }
  }, [despesa, setValue]);

  function handleStatusChange(status: RegistroStatus) {
    setValue("status", status);
  }

  function salvarformulario(data: any) {
    console.log(data);
    reset();
    router.push("/");
  }
  return (
    <section className="w-full flex min-h-screen flex-col items-center p-24 text-white gap-y-8">
      <Link
        className="flex w-full justify-start items-center text-zinc-400 gap-x-2"
        href={URL_HOME}
      >
        <ChevronLeftIcon className="size-5 hover:stroke-zinc-400 stroke-zinc-500 transitions" />
        <span className="text-lg font-medium">Voltar</span>
      </Link>
      <form
        onSubmit={handleSubmit(salvarformulario)}
        className="w-full flex flex-col gap-y-4"
      >
        <div className="w-full bg-zinc-900 rounded-md flex items-center gap-x-6 px-8 py-4 font-medium">
          <label>Modo</label>
          <button
            type="button"
            onClick={toggleEdicao}
            className={clsx(
              "px-4 py-2 rounded-md font-bold flex items-center justify-center capitalize w-40 text-center",
              {
                "text-zinc-500 bg-cinzafundo": !edicao,
                "text-yellow-500 bg-amarelofundo": edicao,
              }
            )}
          >
            {edicao ? (
              <>
                <PencilIcon className="w-4 mr-2" />
                Edição
              </>
            ) : (
              <>
                <EyeIcon className="w-6 mr-2" />
                Visualização
              </>
            )}
          </button>
        </div>
        <div className="w-full bg-zinc-900 rounded-md flex flex-col justify-between px-8 py-4 gap-y-20">
          <div className="flex justify-between items-end">
            <input
              disabled={!edicao}
              aria-disabled={!edicao}
              type="text"
              id="descricao"
              placeholder="Descrição do registro"
              className="input text-3xl text-zinc-400"
              {...register("descricao")}
            />

            <div className="flex flex-col items-end">
              <label htmlFor="status" className="label">
                Status Registro
                <input id="status" {...register("status")} type="hidden" />
              </label>
              <Dropdown
                edicao={edicao}
                handleStatusChange={handleStatusChange}
                status={status}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label htmlFor="data" className="label">
                Data Registro
              </label>
              <input
                disabled={!edicao}
                aria-disabled={!edicao}
                placeholder="Selecione uma data"
                id="data"
                type="date"
                {...register("data")}
                className="input"
                // defaultValue={new Date().toISOString().split("T")[0]}
                typeof="hidden"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="tipo_registro" className="label">
                Tipo Registro
              </label>
              <button
                type="button"
                disabled={!edicao}
                aria-disabled={!edicao}
                onClick={toggleDespesa}
                className={clsx("input cursor-pointer w-32", {
                  "text-green-500": !despesa,
                  "text-red-500": despesa,
                })}
              >
                {despesa ? (
                  <span className="flex gap-x-2 items-center">
                    <ArrowTrendingDownIcon className="size-5 stroke-red-500 stroke-2" />{" "}
                    Despesa
                  </span>
                ) : (
                  <span className="flex gap-x-2 items-center">
                    <ArrowTrendingUpIcon className="size-5 stroke-green-500 stroke-2" />{" "}
                    Receita
                  </span>
                )}
              </button>
              <input
                id="tipo_registro"
                {...register("tipo")}
                className="input"
                type="hidden"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="valor" className="label">
                Valor Registro
              </label>
              <span className="input">
                R$
                <input
                  disabled={!edicao}
                  aria-disabled={!edicao}
                  placeholder="Digite valor"
                  id="valor"
                  type="text"
                  {...register("valor", {
                    onChange: (e) =>
                      (e.target.value = Formatter.maskcurrency(e.target.value)),
                  })}
                  className="bg-transparent outline-none text-xl font-bold px-2 w-56"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-zinc-900 rounded-md flex items-center justify-start px-8 py-4 gap-x-2">
          <button type="submit" className="btn-primary  px-6 py-2">
            Salvar
          </button>

          <button type="button" className="btn-secondary">
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
