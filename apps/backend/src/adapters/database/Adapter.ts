import { Registros } from "@prisma/client";
import { Registro, RegistroStatus, RegistroTipo } from "registro";

export class Adapter {
  public static mapDbToRegistro(data: Registros | Registro): Registro {
    return {
      id: data.id,
      descricao: data.descricao,
      data: new Date(data.data),
      tipo: data.tipo as RegistroTipo,
      valor: Number(data.valor),
      status: data.status as RegistroStatus,
    };
  }
}
