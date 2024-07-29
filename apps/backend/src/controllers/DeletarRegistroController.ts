import { Request, Response, Router } from "express";
import { DeletarRegistro } from "registro";

export class DeletarRegistroController {
  public constructor(
    private servidor: Router,
    private casoDeUso: DeletarRegistro
    // ...middleware: RequestHandler[]
  ) {
    // ENDPOINT para deletar um Registro
    this.servidor.delete(
      "/:registro_id",
      // middleware,
      async (req: Request, res: Response) => {
        try {
          const registro_id = req.params.registro_id;
          // if (isNaN(registro_id)) {
          //   return res.status(400).send("ID do Registro inválido");
          // }
          if (registro_id) {
            await this.casoDeUso.executar({ registro_id });
            res.sendStatus(200);
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
