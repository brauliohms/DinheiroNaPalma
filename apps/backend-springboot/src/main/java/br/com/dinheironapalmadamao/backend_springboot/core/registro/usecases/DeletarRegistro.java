package br.com.dinheironapalmadamao.backend_springboot.core.registro.usecases;

import java.util.concurrent.CompletableFuture;

import br.com.dinheironapalmadamao.backend_springboot.core.common.CasoDeUso;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.provider.BackendRegistro;

public class DeletarRegistro implements CasoDeUso<Entrada, Void> {
  private BackendRegistro backend;

  public DeletarRegistro(BackendRegistro backend) {
    this.backend = backend;
  }

  @Override
  public CompletableFuture<Void> excutar(Entrada dto) {
    return CompletableFuture.runAsync(() -> {
      this.backend.deletar(dto.getRegistroId());
    });
  }

}
