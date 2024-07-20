import { BackendRegistroAdapter } from "@/adapters/backend";
import { Formatter } from "common";
import {
  CriarNovoRegistro,
  DeletarRegistro,
  EditarRegistro,
  ObterRegistroPorId,
  ObterRegistros,
  Registro,
  RegistroDTO,
} from "registro";

export function useRegistro() {
  const backend = new BackendRegistroAdapter();

  async function novoRegistroController(registro: RegistroDTO) {
    const criarNovoRegistro = new CriarNovoRegistro(backend);
    const newData: RegistroDTO = {
      ...registro,
      valor: Formatter.moneyStringToStore(registro.valor.toString()),
    };
    try {
      return await criarNovoRegistro.executar({ registro: newData });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async function getRegistrosController() {
    const obterRegistros = new ObterRegistros(backend);
    try {
      return await obterRegistros.executar();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async function getRegistroPorIdController(registro_id: string) {
    const obterRegistroPorId = new ObterRegistroPorId(backend);
    try {
      return await obterRegistroPorId.executar({ registro_id });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async function delRegistroController(registro_id: string) {
    const deleteRegistro = new DeletarRegistro(backend);
    try {
      await deleteRegistro.executar({ registro_id });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }

  async function editRegistroController(
    registro: RegistroDTO,
    registro_id: string
  ) {
    const editarRegistro = new EditarRegistro(backend);
    const newData: Registro = {
      ...registro,
      id: registro_id,
      valor: Formatter.moneyStringToStore(registro.valor.toString()),
    };
    try {
      return await editarRegistro.executar({ registro: newData });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }
  return {
    novoRegistroController,
    getRegistrosController,
    delRegistroController,
    editRegistroController,
    getRegistroPorIdController,
  };
}
