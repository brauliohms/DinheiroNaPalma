"use server";
import { BackendRegistroAdapter } from "@/adapters/backend";
import { ObterRegistros } from "registro";

export async function ObterRegistrosController() {
  const backend = new BackendRegistroAdapter();
  const obterRegistros = new ObterRegistros(backend);
  try {
    const registros = await obterRegistros.executar();
    if (!registros) return [];

    return registros;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return [];
  }
}
