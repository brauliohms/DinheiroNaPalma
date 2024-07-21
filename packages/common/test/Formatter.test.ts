import { Formatter } from "../src";

test("Deve retornar apenas números", () => {
  expect(Formatter.getDigits("a1f3s5", 6)).toEqual("135");
});

test("Deve retornar apenas números", () => {
  expect(Formatter.getDigits("a1f3s5")).toEqual("135");
});

test("Deve retornar apenas números", () => {
  expect(Formatter.getFullDigits("a1f3s5")).toEqual("135");
});

// test("Deve retornar numero convertido para formato moeda brasileiro", () => {
//   expect(Formatter.moneyNumberToDisplayCurrencyBRL(9999999.99)).toEqual(
//     "R$ 9.999.999,99"
//   );
// });

test("Deve retornar numero convertido para formato numérico brasileiro", () => {
  expect(Formatter.moneyNumberToDisplay(9999999.99)).toEqual("9.999.999,99");
});

test("Deve retornar numero convertido para formato numérico Internacional", () => {
  expect(Formatter.moneyStringToStore("9.999.999,99")).toEqual(9999999.99);
});

test("Deve retornar cnpj formato com máscara", () => {
  expect(Formatter.formatCNPJToDisplay("12345678000134")).toEqual(
    "12.345.678/0001-34"
  );
});

test("Deve retornar cpf formato com máscara", () => {
  expect(Formatter.formatCNPJToDisplay("12345678058")).toEqual(
    "123.456.780-58"
  );
});

test("Deve retornar texto sem acentos", () => {
  expect(
    Formatter.removeAcentos(
      "João foi na casa da vovó e do vovô pegar pão e maçã"
    )
  ).toEqual("Joao foi na casa da vovo e do vovo pegar pao e maca");
});
