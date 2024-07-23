package br.com.dinheironapalmadamao.backend_springboot.core.registro.usecases;

import java.util.concurrent.CompletableFuture;

import br.com.dinheironapalmadamao.backend_springboot.core.common.CasoDeUso;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.Registro;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.provider.BackendRegistro;

public class EditarRegistro implements CasoDeUso<Registro, Void> {
  private BackendRegistro backend;

  public EditarRegistro(BackendRegistro backend) {
    this.backend = backend;
  }

  @Override
  public CompletableFuture<Void> excutar(Registro dto) {
    return CompletableFuture.runAsync(() -> {
      this.backend.editar(dto);
    });
  }
}
