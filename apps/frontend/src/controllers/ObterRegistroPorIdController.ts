"use server";

import { BackendRegistroAdapter } from "@/adapters/backend";
import { ObterRegistroPorId } from "registro";

export async function ObterRegistroPorIdController(registro_id: string) {
  const backend = new BackendRegistroAdapter();
  const obterRegistroPorId = new ObterRegistroPorId(backend);
  try {
    return await obterRegistroPorId.executar({ registro_id });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
