package br.com.dinheironapalmadamao.backend_springboot.adapters;

import java.math.BigDecimal;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Registros")
public class RegistroEntity {
  @Id
  @Column(columnDefinition = "String")
  private String id;
  private String descricao;
  private Date data;
  private String tipo;
  private BigDecimal valor;
  private String status;

  // public RegistroEntity() {
  // this.id = String.randomString();
  // }

  // @PrePersist
  // public void prePersist() {
  // if (id == null) {
  // id = Id.gerar()
  // }
  // }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
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
