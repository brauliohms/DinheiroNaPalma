import { INfse } from "../src/core/nfse/Nfse";
import { knexConnector } from "../src/database";
import { selectNfseData } from "../src/services/selectNfseData/selectNfseData";

test("deve verificar se recebeu dados", async () => {
  // const columns = ["id", "numero_nfse", "cnpj_prestador"];
  const columns = [
    "id",
    "razao_social_prestador",
    "razao_social_tomador",
    "numero_nfse",
    "data_nfse",
    "valor_servicos",
    "pdf_nfse",
    "xml_nfse",
    "log_integracao",
  ];
  // const columns = ["*"];
  const data: INfse[] = await selectNfseData(knexConnector, columns, 2);
  console.log(data);
  expect(data).toBeTruthy();
});

afterAll(() => knexConnector.destroy());
