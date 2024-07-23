package br.com.dinheironapalmadamao.backend_springboot.core.registro.usecases;

public abstract class Entrada {
  private String registroId;

  public Entrada(String registroId) {
    this.registroId = registroId;
  }

  public String getRegistroId() {
    return registroId;
  }

  public void setRegistroId(String registroId) {
    this.registroId = registroId;
  }
}