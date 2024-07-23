package br.com.dinheironapalmadamao.backend_springboot.core.registro.model;

import java.math.BigDecimal;
import java.sql.Date;

public class RegistroDTO {
  String descricao;
  Date data;
  String tipo;
  BigDecimal valor;
  String status;

  public RegistroDTO(String descricao, Date data, String tipo, BigDecimal valor, String status) {
    this.descricao = descricao;
    this.data = data;
    this.tipo = tipo;
    this.valor = valor;
    this.status = status;
  }

  public String getDescricao() {
    return descricao;
  }

  public void setDescricao(String descricao) {
    this.descricao = descricao;
  }

  public Date getData() {
    return data;
  }

  public void setData(Date data) {
    this.data = data;
  }

  public String getTipo() {
    return tipo;
  }

  public void setTipo(String tipo) {
    this.tipo = tipo;
  }

  public BigDecimal getValor() {
    return valor;
  }

  public void setValor(BigDecimal valor) {
    this.valor = valor;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

}
