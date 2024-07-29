import { CasoDeUso } from "common";
import { Registro } from "../model";
import { BackendRegistro } from "../provider";

type Entrada = { status: string };
export class ObterRegistrosPorStatus implements CasoDeUso<Entrada, Registro[]> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: Entrada): Promise<Registro[]> {
    const response = await this.backend.obterRegistrosPorStatus(dto.status);
    if (!response) return [];

    return response;
  }
}
