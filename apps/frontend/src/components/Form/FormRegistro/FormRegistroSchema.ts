import { z } from "zod";

const tipoEnum = z.enum(["despesa", "receita"]);

const statusEnum = z.enum(["pendente", "cancelado", "consolidado"]);

const FormSchema = z.object({
  id: z.string().uuid().nullish(),
  descricao: z
    .string()
    .trim()
    .max(80, { message: "Descrição pode ter no máximo 80 caracteres" }),
  data: z.string().date(),
  tipo: tipoEnum,
  valor: z.string().trim(),
  status: statusEnum,
});

export default FormSchema;
