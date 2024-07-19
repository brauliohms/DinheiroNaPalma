/* eslint-disable max-len */
import { Request, Response, Router } from "express";
import { EditarRegistro, Registro } from "registro";

export class EditarRegistroController {
  public constructor(
    // private servidor: Express,
    private servidor: Router,
    private casoDeUso: EditarRegistro
    // ...middleware: RequestHandler[]
  ) {
    // ENDPOINT para inserir uma nfse do usuário
    servidor.put(
      "/",
      // middleware,
      async (req: Request, res: Response) => {
        if (!req.body) {
          res
            .status(400)
            .send(
              "Falta do Corpo: corpo da requisição é obrigatório com os seguintes atributos:descricao:string, data:string, tipo:string, valor:number, status:string"
            );
          return;
        }
        try {
          const { id, descricao, data, tipo, valor, status } =
            req.body as Registro;

          // Validações básicas
          if (typeof id !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo id é obrigatorio e deve ser string uuid v4"
              );
          if (typeof descricao !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo descricao é obrigatorio e deve ser string"
              );
          if (typeof data !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo data é obrigatorio e deve ser string dataISO8601"
              );
          if (typeof tipo !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo tipo é obrigatorio e deve ser string com os valores despesa ou receita"
              );
          if (typeof valor !== "number")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo valor é obrigatorio e deve ser number"
              );
          if (typeof status !== "string")
            return res
              .status(400)
              .send(
                "Dados inválidos: campo status é obrigatorio e deve ser string com os valores consolidado ou pendente ou cancelado"
              );

          const registro: Registro = {
            id,
            descricao,
            data,
            tipo,
            valor,
            status,
          };

          await casoDeUso.executar({ registro });

          res.status(200).json({ message: "Registro atualizado com sucesso" });
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
