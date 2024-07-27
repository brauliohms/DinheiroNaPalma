"use server";
import { BackendRegistroAdapter, URL_HOME } from "@/adapters/backend";
import { revalidatePath } from "next/cache";
import { DeletarRegistro } from "registro";

export async function DeletarRegistroController(registro_id: string) {
  const backend = new BackendRegistroAdapter();
  const deleteRegistro = new DeletarRegistro(backend);
  try {
    await deleteRegistro.executar({ registro_id });
    revalidatePath(URL_HOME);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
