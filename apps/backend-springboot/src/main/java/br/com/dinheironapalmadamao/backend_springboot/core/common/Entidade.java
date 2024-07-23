package br.com.dinheironapalmadamao.backend_springboot.core.common;

public abstract class Entidade {
  String id;

  public Entidade() {
    this.id = Id.gerar();
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }
}
