"use server";
import { BackendRegistroAdapter } from "@/adapters/backend";
import { ObterRegistros, ObterRegistrosPorStatus, Registro } from "registro";

export async function ObterRegistrosController(filtro: string = "Todos") {
  const backend = new BackendRegistroAdapter();
  const obterRegistros = new ObterRegistros(backend);
  const obterRegistrosPorStatus = new ObterRegistrosPorStatus(backend);
  try {
    let registros: Registro[] = [];
    if (filtro === "Todos") {
      registros = await obterRegistros.executar();
    } else {
      registros = await obterRegistrosPorStatus.executar({ status: filtro });
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
