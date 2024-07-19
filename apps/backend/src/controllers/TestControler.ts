import { Express, Request, Response } from "express";

export class TestController {
  public constructor(private servidor: Express) {
    this.servidor.get("/", (req: Request, res: Response) => {
      return res.status(200).json({ message: "Bem Vindo a API" });
    });
  }
}
