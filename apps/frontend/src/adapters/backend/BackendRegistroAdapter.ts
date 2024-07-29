import { BackendRegistro, Registro, RegistroDTO } from "registro";
import { fetchGet, fetchMutation } from "./Fetch";
import { ENDPOINT_REGISTROS } from "./config";

export class BackendRegistroAdapter implements BackendRegistro {
  public async obterRegistrosPorStatus(
    status: string
  ): Promise<Registro[] | null> {
    return await fetchGet<Registro[]>(`${ENDPOINT_REGISTROS}/status/${status}`);
  }
  async criar(registro: RegistroDTO): Promise<Response> {
    //   return await fetch(ENDPOINT_REGISTROS, {
    //     method: "POST",
    //     body: JSON.stringify(registro),
    //   });
    return await fetchMutation<RegistroDTO>(
      ENDPOINT_REGISTROS,
      "POST",
      registro
    );
  }

  async obterRegistroPorId(registro_id: string): Promise<Registro | null> {
    return await fetchGet<Registro>(`${ENDPOINT_REGISTROS}/${registro_id}`);
  }
  async deletar(registro_id: string): Promise<void> {
    await fetchMutation(`${ENDPOINT_REGISTROS}/${registro_id}`, "DELETE");
  }
  async editar(registro: Registro): Promise<Response> {
    return await fetchMutation<Registro>(
      `${ENDPOINT_REGISTROS}`,
      "PUT",
      registro
    );
  }
  async obterRegistros(): Promise<Registro[] | null> {
    //   const response = await fetch(ENDPOINT_REGISTROS);
    //   if (response.ok) {
    //     const responsejson: Registro[] = await response.json();
    //     return responsejson;
    //   }
    //   throw new Error("Erro ao consultar a API");
    // }
    const response = await fetchGet<Registro[] | null>(ENDPOINT_REGISTROS);
    return response;
  }
}
