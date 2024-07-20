"use server";

import { BackendRegistroAdapter } from "@/adapters/backend";
import { CriarNovoRegistro, RegistroDTO } from "registro";

export async function CriarRegistroController(registro: RegistroDTO) {
  const backend = new BackendRegistroAdapter();
  const criarNovoRegistro = new CriarNovoRegistro(backend);
  try {
    return await criarNovoRegistro.executar({ registro });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
