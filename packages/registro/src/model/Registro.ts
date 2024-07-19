import { EntidadeInterface } from "common";

export interface Registro extends EntidadeInterface {
  descricao: string;
  data: Date;
  tipo: RegistroTipo;
  valor: number;
  status: RegistroStatus;
}

export type RegistroTipo = "despesa" | "receita";

export type RegistroStatus = "consolidado" | "pendente" | "cancelado";

export interface RegistroDTO extends Omit<Registro, "id"> {}
