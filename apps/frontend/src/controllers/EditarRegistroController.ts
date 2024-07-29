"use server";

import { BackendRegistroAdapter, URL_HOME } from "@/adapters/backend";
import { FormState } from "@/components";
import FormSchema from "@/components/Form/FormRegistro/FormRegistroSchema";
import { Formatter } from "common";
import { revalidatePath } from "next/cache";
import {
  EditarRegistro,
  Registro,
  RegistroStatus,
  RegistroTipo,
} from "registro";

export async function EditarRegistroController(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const backend = new BackendRegistroAdapter();
  const editarRegistro = new EditarRegistro(backend);

  const data = Object.fromEntries(formData.entries());

  // Realiza a verificação se os dados enviados são válidos.
  const validation = FormSchema.safeParse(data);
  if (validation.success) {
    const rawData: Registro = {
      id: formData.get("id") as string,
      descricao: formData.get("descricao") as string,
      data: new Date(formData.get("data") as string),
      tipo: formData.get("tipo") as RegistroTipo,
      valor: Formatter.moneyStringToStore(
        formData.get("valor")?.toString() || "0,00"
      ),
      status: formData.get("status") as RegistroStatus,
    };

    try {
      const response = await editarRegistro.executar({ registro: rawData });
      if (response instanceof Response && response.ok) {
        revalidatePath(URL_HOME);
        return {
          error: false,
          message: "Registro atualizado com sucesso",
        };
      } else {
        return {
          error: true,
          message:
            "Ocorreu um erro ao tentar conectar na API ao atualizar o Registro, tente novamente",
        };
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        return {
          error: true,
          message: error.message,
        };
      } else {
        console.error(error);
        return {
          error: true,
          message: `Erro desconhecido: ${error}`,
        };
      }
    }
  } else {
    // Se houver erro na validação retornar objeto com erro: true e o arrays de erros em fieldErrors
    return {
      error: true,
      fieldErrors: validation.error.flatten().fieldErrors,
    };
  }
}
