import { Registro, RegistroDTO } from "../../src";
const registro: Registro = {
  id: "5d030d34-32d6-4094-8c36-ac79e7f681cf",
  descricao: "Conta Fake",
  data: new Date("2024-06-15"),
  valor: 385.25,
  status: "consolidado",
  tipo: "despesa",
};

const registroDto: RegistroDTO = {
  descricao: "Conta Fake",
  data: new Date("2024-06-15"),
  valor: 385.25,
  status: "consolidado",
  tipo: "despesa",
};

test("Deve verificar atributos de um usuario do Tipo UsuarioDTO que nao deve ter o ID", () => {
  expect(registroDto).not.toContain("id");
  expect(registroDto.status).toMatch(/^(consolidado|pendente|cancelado)$/);
  expect(["receita", "despesa"]).toContain(registroDto.tipo);
});
test("Deve verificar atributos de um usuario do Tipo Usuario que deve ter o ID", () => {
  expect(registro.id).toMatch("-4");
  expect(registro.status).toMatch(/^(consolidado|pendente|cancelado)$/);
  expect(["receita", "despesa"]).toContain(registro.tipo);
});
