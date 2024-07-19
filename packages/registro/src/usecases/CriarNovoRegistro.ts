import { CasoDeUso } from "common";
import { RegistroDTO } from "../model";
import { BackendRegistro } from "../provider";

// type Entrada = { registro: Partial<Registro> };
// type Entrada = { registro: Omit<Registro, "id"> };
type Entrada = { registro: RegistroDTO };

export class CriarNovoRegistro implements CasoDeUso<Entrada, Response | void> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: Entrada): Promise<Response | void> {
    return await this.backend.criar(dto.registro);
  }
}
