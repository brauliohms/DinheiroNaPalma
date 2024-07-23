package br.com.dinheironapalmadamao.backend_springboot.core.registro.usecases;

import java.util.concurrent.CompletableFuture;

import br.com.dinheironapalmadamao.backend_springboot.core.common.CasoDeUso;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.Registro;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.provider.BackendRegistro;

public class ObterRegistros implements CasoDeUso<Void, Registro[]> {
  private BackendRegistro backend;

  public ObterRegistros(BackendRegistro backend) {
    this.backend = backend;
  }

  @Override
  public CompletableFuture<Registro[]> excutar(Void dto) {
    return CompletableFuture.supplyAsync(() -> {
      Registro[] registros = this.backend.obterRegistros();

      // Se registros for nulo ou vazio, retorne um array vazio
      if (registros == null || registros.length == 0) {
        return new Registro[0];
      }

      return registros;
    });

  }

}
