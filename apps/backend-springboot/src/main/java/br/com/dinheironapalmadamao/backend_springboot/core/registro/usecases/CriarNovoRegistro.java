package br.com.dinheironapalmadamao.backend_springboot.core.registro.usecases;

import java.util.concurrent.CompletableFuture;

import br.com.dinheironapalmadamao.backend_springboot.core.common.CasoDeUso;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.RegistroDTO;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.provider.BackendRegistro;

public class CriarNovoRegistro implements CasoDeUso<RegistroDTO, Void> {
  private BackendRegistro backend;

  public CriarNovoRegistro(BackendRegistro backend) {
    this.backend = backend;
  }

  @Override
  public CompletableFuture<Void> excutar(RegistroDTO dto) {
    return CompletableFuture.runAsync(() -> {
      this.backend.criar(dto);
    });
  }

}
