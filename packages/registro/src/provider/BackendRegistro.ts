import { Registro, RegistroDTO } from "../model";

export interface BackendRegistro {
  criar(registro: RegistroDTO): Promise<Response | void>;
  obterRegistroPorId(registro_id: string): Promise<Registro | null>;
  deletar(registro_id: string): Promise<void>;
  editar(registro: Registro): Promise<Response | void>;
  obterRegistros(): Promise<Registro[] | null>;
  obterRegistrosPorStatus(status: string): Promise<Registro[] | null>;
}
