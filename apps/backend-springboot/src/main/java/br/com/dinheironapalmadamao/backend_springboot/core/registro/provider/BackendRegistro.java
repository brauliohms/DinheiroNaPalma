package br.com.dinheironapalmadamao.backend_springboot.core.registro.provider;

import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.Registro;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.RegistroDTO;

public interface BackendRegistro {
  public void criar(RegistroDTO registro);

  public Registro obterRegistroPorId(String registro_id);

  public void deletar(String registro_id);

  public void editar(Registro registro);

  public Registro[] obterRegistros();
}
