import { Id } from "common";
import { BackendRegistro, Registro, RegistroDTO } from "registro";
import { Adapter } from "./Adapter";
import { conexao } from "./knex";

const tableRegistros: string = "Registros";

export class DatabaseKnexRegistroAdapter implements BackendRegistro {
  public async criar(registro: RegistroDTO): Promise<void> {
    const id = Id.gerar();
    const novoRegistro: Registro = {
      ...registro,
      id,
      data: new Date(registro.data),
    };
    await conexao.table(tableRegistros).insert<Registro>(novoRegistro);
  }
  public async obterRegistroPorId(
    registro_id: string
  ): Promise<Registro | null> {
    const registro = await conexao(tableRegistros)
      .select<Registro>("*")
      .where({ id: registro_id })
      .first();

    if (registro) return Adapter.mapDbToRegistro(registro);
    return null;
  }
  public async deletar(registro_id: string): Promise<void> {
    await conexao(tableRegistros).where({ registro_id }).del();
  }
  public async editar(registro: Registro): Promise<void> {
    await conexao(tableRegistros)
      .where({ id: registro.id })
      .update<Registro>({ ...registro });
  }

  public async obterRegistros(): Promise<Registro[]> {
    const registros = await conexao(tableRegistros).select<Registro[]>("*");
    return registros.map((registro) => Adapter.mapDbToRegistro(registro));
  }
}
