package br.com.dinheironapalmadamao.backend_springboot.core.common;

import java.util.concurrent.CompletableFuture;

public interface CasoDeUso<Entrada, Saida> {
  public CompletableFuture<Saida> excutar(Entrada dto);
}
