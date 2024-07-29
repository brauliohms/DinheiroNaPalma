import { Request, Response, Router } from "express";
import { ObterRegistrosPorStatus } from "registro";

export class ObterRegistrosPorStatusController {
  public constructor(
    private servidor: Router,
    private casoDeUso: ObterRegistrosPorStatus
  ) {
    // ENDPOINT para retorno do Registro pelo seu ID
    this.servidor.get(
      "/status/:status",
      // middleware,
      async (req: Request, res: Response) => {
        try {
          const status = req.params.status.toLowerCase();
          if (
            status === "consolidado" ||
            status === "pendente" ||
            status === "cancelado"
          ) {
            const registros = await this.casoDeUso.executar({ status: status });
            res.status(200).json(registros);
            // return;
          } else {
            res
              .status(400)
              .send(
                "Não foi informado um Status de Registro ou valor Incorreto"
              );
            // return;
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
