import { Request, Response, Router } from "express";
import { ObterRegistroPorId } from "registro";

export class ObterRegistroPorIdController {
  public constructor(
    // private servidor: Express,
    private servidor: Router,
    private casoDeUso: ObterRegistroPorId
    // ...middleware: RequestHandler[]
  ) {
    // ENDPOINT para retorno do Registro pelo seu ID
    this.servidor.get(
      "/:registro_id",
      // middleware,
      async (req: Request, res: Response) => {
        try {
          const registro_id = req.params.registro_id;
          // if (isNaN(registro_id)) {
          //   return res.status(400).send("ID do Registro inválido");
          // }
          if (registro_id) {
            const registro = await this.casoDeUso.executar({ registro_id });
            res.status(200).json(registro);
          } else {
            res.status(400).send("Não foi informado um ID de Registro");
          }
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
