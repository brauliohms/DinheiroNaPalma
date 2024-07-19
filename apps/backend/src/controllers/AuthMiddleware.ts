import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
dotenv.config();

const secretToken = process.env.SECRET_TOKEN;

export function AuthMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.replace("Bearer ", "");
      if (!token) {
        res.status(401).send("Usuário não está logado");
        return;
      }

      // const usuarioToken = provedorToken.validar(token) as Usuario;
      // const usuario = await bancoDados.buscarPorEmail(usuarioToken.email);

      if (token !== secretToken) {
        res.status(403).send("Usuário Inválido");
        return;
      }

      // (req as any).user = usuario;
      next();
    } catch (error) {
      res.status(500).send(`Erro ao verificar o token: ${error}`);
    }
  };
}
