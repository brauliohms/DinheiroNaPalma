import Entidade from "../src/Entidade";

class EntidadeTeste extends Entidade {}

test("Deve criar um id string", () => {
  const objTest = new EntidadeTeste();
  expect(typeof objTest.id).toBe("string");
});

test("O ID criado deve ser do tipo uuid v4", () => {
  const objTest = new EntidadeTeste();
  expect(objTest.id).toMatch(
    /[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-4[A-Fa-f0-9]{3}-[89abAB][A-Fa-f0-9]{3}-[A-Fa-f0-9]{12}/g
  );
});

test("Os IDs criados devem ser diferentes", () => {
  const objTest = new EntidadeTeste();
  const objTest2 = new EntidadeTeste();
  expect(objTest.id !== objTest2.id).toBeTrue;
});
