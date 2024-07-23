package br.com.dinheironapalmadamao.backend_springboot.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.dinheironapalmadamao.backend_springboot.adapters.RegistroFacade;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.Registro;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.RegistroDTO;

@RestController
@RequestMapping("/v3/registros")
public class RegistrosController {
  @Autowired
  private RegistroFacade registroFacade;

  @GetMapping("")
  public Registro[] obter_registros() {
    return registroFacade.obterRegistros();
  }

  @GetMapping("/{registro_id}")
  public Registro obter_registro_por_id(@PathVariable("registro_id") String registro_id) throws Exception {
    return registroFacade.obterRegistroPorId(registro_id);
  }

  @PostMapping("")
  public String criar_registro(@RequestBody RegistroDTO registro) throws IOException {
    registroFacade.criar(registro);
    return "Criado com sucesso";
  }

  @DeleteMapping("/{registro_id}")
  public String delete_registro_por_id(@PathVariable("registro_id") String registro_id) throws Exception {
    registroFacade.deletar(registro_id);
    return "Excluído com sucesso";
  }

  @PutMapping("")
  public String editar_registro(@RequestBody Registro registro) throws IOException {
    registroFacade.editar(registro);
    return "Editado com sucesso";
  }
}
