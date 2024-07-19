import { Request, Response, Router } from "express";
import { ObterRegistros } from "registro";

export class ObterRegistrosController {
  public constructor(
    private servidor: Router,
    private casoDeUso: ObterRegistros
  ) {
    // ENDPOINT para retorno do Registro pelo seu ID
    this.servidor.get(
      "/",
      // middleware,
      async (req: Request, res: Response) => {
        try {
          const registros = await this.casoDeUso.executar();
          res.status(200).json(registros);
        } catch (error) {
          // Verifica se o erro é uma instância de Error
          if (error instanceof Error) {
            res.status(500).send(error.message);
            return;
          } else {
            res.status(500).send("Erro desconhecido");
            return;
          }
        }
      }
    );
  }
}
