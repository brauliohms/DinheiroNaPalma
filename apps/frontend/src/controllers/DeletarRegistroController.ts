"use server";
import { BackendRegistroAdapter, URL_HOME } from "@/adapters/backend";
import { FormState } from "@/components";
import { revalidatePath } from "next/cache";
import { DeletarRegistro } from "registro";

export async function DeletarRegistroController(
  registro_id: string
): Promise<FormState> {
  const backend = new BackendRegistroAdapter();
  const deleteRegistro = new DeletarRegistro(backend);
  try {
    await deleteRegistro.executar({ registro_id });
    revalidatePath(URL_HOME);
    return { error: false, message: "Registro excluído com sucesso!" };
  } catch (error) {
    revalidatePath(URL_HOME);
    if (error instanceof Error) {
      console.error(error.message);
      return { error: true, message: error.message };
    } else {
      console.error(error);
      return { error: true, message: `Erro desconhecido: ${error}` };
    }
  }
}
