export interface CasoDeUso<Entrada, Saida> {
  executar(dto: Entrada): Promise<Saida>;
}
