import Id from "./Id";

export interface EntidadeInterface {
  id: string;
}

export default abstract class Entidade implements EntidadeInterface {
  readonly id: string;
  public constructor() {
    this.id = Id.gerar();
  }
}
