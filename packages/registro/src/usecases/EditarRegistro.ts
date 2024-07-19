import { CasoDeUso } from "common";
import { Registro } from "../model";
import { BackendRegistro } from "../provider";

type Entrada = { registro: Registro };

export class EditarRegistro implements CasoDeUso<Entrada, Response | void> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: Entrada): Promise<Response | void> {
    return await this.backend.editar(dto.registro);
  }
}
