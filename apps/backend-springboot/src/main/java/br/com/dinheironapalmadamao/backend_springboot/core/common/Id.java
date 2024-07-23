package br.com.dinheironapalmadamao.backend_springboot.core.common;

import java.util.UUID;

public class Id {
  public static String gerar() {
    UUID id = UUID.randomUUID();
    return id.toString();
  }
}
