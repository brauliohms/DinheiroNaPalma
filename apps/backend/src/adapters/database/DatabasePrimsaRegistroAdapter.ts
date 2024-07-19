import { PrismaClient } from "@prisma/client";
import { Id } from "common";
import { BackendRegistro, Registro, RegistroDTO } from "registro";
import { Adapter } from "./Adapter";

const prisma = new PrismaClient();

export class DatabasePrismaRegistroAdapter implements BackendRegistro {
  public async criar(registro: RegistroDTO): Promise<void> {
    const id = Id.gerar();
    const novoRegistro = {
      ...registro,
      id,
      data: new Date(registro.data),
    };
    await prisma.registros.create({ data: novoRegistro });
    await prisma.$disconnect();
  }
  public async obterRegistroPorId(
    registro_id: string
  ): Promise<Registro | null> {
    const registro = await prisma.registros.findUnique({
      where: { id: registro_id },
    });

    await prisma.$disconnect();
    if (registro) return Adapter.mapDbToRegistro(registro);
    return null;
  }
  public async deletar(registro_id: string): Promise<void> {
    await prisma.registros.delete({ where: { id: registro_id } });
    await prisma.$disconnect();
  }
  public async editar(registro: Registro): Promise<void> {
    const novoRegistro: Registro = {
      ...registro,
      data: new Date(registro.data),
    };
    await prisma.registros.update({
      data: novoRegistro,
      where: { id: registro.id },
    });
    await prisma.$disconnect();
  }

  public async obterRegistros(): Promise<Registro[]> {
    const registros = await prisma.registros.findMany();
    await prisma.$disconnect();
    return registros.map((registro) => Adapter.mapDbToRegistro(registro));
  }
}
