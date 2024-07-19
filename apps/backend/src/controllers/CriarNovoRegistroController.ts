/* eslint-disable max-len */
import { Request, Response, Router } from "express";
import { CriarNovoRegistro, RegistroDTO } from "registro";

export class CriarNovoRegistroController {
  public constructor(
    // private servidor: Express,
    private servidor: Router,
    private casoDeUso: CriarNovoRegistro
    // ...middleware: RequestHandler[]
  ) {
    // ENDPOINT para inserir uma nfse do usuário
    servidor.post(
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
          const { descricao, data, tipo, valor, status } =
            req.body as RegistroDTO;

          // Validações básicas
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
                "Dados inválidos: campo tipo é obrigatorio e deve ser string"
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
                "Dados inválidos: campo status é obrigatorio e deve ser string"
              );

          const registro: RegistroDTO = {
            descricao,
            data,
            tipo,
            valor,
            status,
          };

          await casoDeUso.executar({ registro });

          res.status(201).json({ message: "Registro criado com sucesso" });
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
