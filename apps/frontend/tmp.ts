const novoRegistro: RegistroDTO = {
  data: new Date(),
  descricao: "Energia Eléttrica",
  tipo: "despesa",
  valor: 180,
  status: "pendente",
};
const registro1: Registro = {
  id: 1,
  data: new Date(),
  descricao: "Energia Eléttrica",
  tipo: "despesa",
  valor: 180,
  status: "pendente",
};
const {
  delRegistroController,
  editRegistroController,
  getRegistroPorIdController,
  getRegistrosController,
  novoRegistroController,
} = useRegistro();

async function handlerClick() {
  // const response = await getRegistrosController();
  // const response = await delRegistroController(1);
  // const response = await editRegistroController(registro1);
  // const response = await novoRegistroController(novoRegistro);
  // const response = await getRegistroPorIdController(1);
  // console.log(response);
}
