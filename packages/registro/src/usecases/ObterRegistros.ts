import { CasoDeUso } from "common";
import { Registro } from "../model";
import { BackendRegistro } from "../provider";

export class ObterRegistros implements CasoDeUso<void, Registro[]> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: void): Promise<Registro[]> {
    const response = await this.backend.obterRegistros();
    if (!response) return [];

    return response;
  }
}
