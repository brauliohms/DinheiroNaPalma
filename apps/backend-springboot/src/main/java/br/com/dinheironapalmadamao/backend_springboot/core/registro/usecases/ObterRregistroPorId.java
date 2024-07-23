package br.com.dinheironapalmadamao.backend_springboot.core.registro.usecases;

import java.util.concurrent.CompletableFuture;

import br.com.dinheironapalmadamao.backend_springboot.core.common.CasoDeUso;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.Registro;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.provider.BackendRegistro;

public class ObterRregistroPorId implements CasoDeUso<Entrada, Registro> {
  private BackendRegistro backend;

  public ObterRregistroPorId(BackendRegistro backend) {
    this.backend = backend;
  }

  @Override
  public CompletableFuture<Registro> excutar(Entrada dto) {
    return CompletableFuture.supplyAsync(() -> {
      return this.backend.obterRegistroPorId(dto.getRegistroId());
    });
  }

}
