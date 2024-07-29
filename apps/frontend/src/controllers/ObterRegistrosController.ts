"use server";
import { BackendRegistroAdapter } from "@/adapters/backend";
import { ObterRegistros, ObterRegistrosPorStatus, Registro } from "registro";

export async function ObterRegistrosController(filtro: string) {
  const backend = new BackendRegistroAdapter();
  const obterRegistros = new ObterRegistros(backend);
  const obterRegistrosPorStatus = new ObterRegistrosPorStatus(backend);
  try {
    let registros: Registro[] = [];
    if (filtro === "Todos") {
      registros = await obterRegistros.executar();
      // revalidatePath(URL_HOME);
    } else {
      registros = await obterRegistrosPorStatus.executar({ status: filtro });
      // revalidatePath(URL_HOME);
    }
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
