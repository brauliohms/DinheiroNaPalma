"use server";
import { BackendRegistroAdapter } from "@/adapters/backend";
import { DeletarRegistro } from "registro";

export async function DeletarRegistroController(registro_id: string) {
  const backend = new BackendRegistroAdapter();
  const deleteRegistro = new DeletarRegistro(backend);
  try {
    await deleteRegistro.executar({ registro_id });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
