import { CasoDeUso } from "common";
import { BackendRegistro } from "../provider";

type Entrada = { registro_id: string };

export class DeletarRegistro implements CasoDeUso<Entrada, void> {
  public constructor(private backend: BackendRegistro) {}
  async executar(dto: Entrada): Promise<void> {
    await this.backend.deletar(dto.registro_id);
  }
}
