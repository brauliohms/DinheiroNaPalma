"use client";
import { URL_HOME } from "@/adapters/backend";
import { LoaderIcon, TrashIcon } from "@/components/Icons";
import { DeletarRegistroController } from "@/controllers/DeletarRegistroController";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Registro } from "registro";
import { ErrorState, ValidationErrorState } from "../FormRegistro";

interface FormDeleteProps {
  registro: Registro;
  onCancel: () => void;
}

function isErrorState(
  state: ValidationErrorState | ErrorState
): state is ErrorState {
  return (state as ErrorState).message !== undefined;
}

export function FormDelete({ registro, onCancel }: FormDeleteProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const result = await DeletarRegistroController(registro.id);
      if (result?.error) {
        console.error(result.error);
        if (isErrorState(result)) {
          toast.error(result.message);
        } else {
          toast.error(
            "Erro desconhecido ao excluir, tente novamente mais tarde"
          );
        }
      }
      if (!result?.error && result?.message) {
        onCancel(); // Fecha o modal
        toast.success(result.message);
        router.push(URL_HOME);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Erro ao excluir: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="text-center w-96" id="form-delete" name="form-delete">
      <div className="mx-auto my-4 w-full sm:w-48 md:w-64 flex flex-col items-center justify-center gap-y-4 text-wrap">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-300">
          Excluir Registro
        </h3>
        <TrashIcon width={56} className="mx-auto text-red-500" />
        <p className="text-sm sm:text-base text-zinc-400">
          Tem certeza que deseja excluir esse registro?
        </p>
      </div>
      <div className="w-full flex items-center justify-center sm:justify-evenly gap-4 mt-8 px-4">
        <button
          type="submit"
          className="btn btn-danger w-28 text-center flex justify-center items-center"
          onClick={handleSubmit}
          disabled={isLoading}
          aria-disabled={isLoading}
        >
          {isLoading ? <LoaderIcon className="animate-spin" /> : "Excluir"}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
