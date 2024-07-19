import { CasoDeUso } from "common";
import { Registro } from "../model";
import { BackendRegistro } from "../provider";

type Entrada = { registro_id: string };

export class ObterRegistroPorId implements CasoDeUso<Entrada, Registro | null> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: Entrada): Promise<Registro | null> {
    return await this.backend.obterRegistroPorId(dto.registro_id);
  }
}
