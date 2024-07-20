"use server";

import { BackendRegistroAdapter } from "@/adapters/backend";
import { EditarRegistro, Registro } from "registro";

export async function EditarRegistroController(registro: Registro) {
  const backend = new BackendRegistroAdapter();
  const editarRegistro = new EditarRegistro(backend);
  try {
    return await editarRegistro.executar({ registro });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
