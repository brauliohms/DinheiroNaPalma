package br.com.dinheironapalmadamao.backend_springboot.adapters;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dinheironapalmadamao.backend_springboot.core.common.Id;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.Registro;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.model.RegistroDTO;
import br.com.dinheironapalmadamao.backend_springboot.core.registro.provider.BackendRegistro;

@Service
public class RegistroFacade implements BackendRegistro {
  @Autowired
  private RegistroRepository repository;

  @Override
  public void criar(RegistroDTO registroDTO) {
    RegistroEntity registro = new RegistroEntity();
    registro.setId(Id.gerar());
    registro.setDescricao(registroDTO.getDescricao());
    registro.setData(registroDTO.getData());
    registro.setStatus(registroDTO.getStatus());
    registro.setTipo(registroDTO.getTipo());
    registro.setValor(registroDTO.getValor());
    repository.save(registro);
  }

  @Override
  public Registro obterRegistroPorId(String registro_id) {
    // UUID id = UUID.fromString(registro_id);
    Optional<RegistroEntity> registroEntityOptional = repository.findById(registro_id);

    if (registroEntityOptional.isPresent()) {
      RegistroEntity registroEntity = registroEntityOptional.get();
      // Converter RegistroEntity para Registro, se necessário
      return convertToRegistro(registroEntity);
    } else {
      // Lida com o caso em que o registro não é encontrado
      return null; // ou lançar uma exceção personalizada
    }
  }

  @Override
  public void deletar(String registro_id) {
    // UUID id = UUID.fromString(registro_id);
    repository.deleteById(registro_id);
  }

  @Override
  public void editar(Registro registro) {
    // UUID id = registro.getId();
    // String idString = id.toString();
    // RegistroEntity registroDatabase = obterRegistroPorId(idString);
    @SuppressWarnings("deprecation")
    RegistroEntity registroDatabase = repository.getOne(registro.getId());
    if (registroDatabase != null) {
      registroDatabase.setDescricao(registro.getDescricao());
      registroDatabase.setData(registro.getData());
      registroDatabase.setStatus(registro.getStatus());
      registroDatabase.setTipo(registro.getTipo());
      registroDatabase.setValor(registro.getValor());
      repository.save(registroDatabase);
    }
  }

  @Override
  public Registro[] obterRegistros() {
    List<Registro> registros = repository.findAll().stream()
        .map(this::convertToRegistro)
        .collect(Collectors.toList());

    return registros.toArray(new Registro[0]);
  }

  // Método auxiliar para converter RegistroEntity para Registro
  private Registro convertToRegistro(RegistroEntity registroEntity) {
    Registro registro = new Registro();
    registro.setId(registroEntity.getId().toString());
    registro.setDescricao(registroEntity.getDescricao());
    registro.setData(registroEntity.getData());
    registro.setTipo(registroEntity.getTipo());
    registro.setValor(registroEntity.getValor());
    registro.setStatus(registroEntity.getStatus());
    return registro;
  }

}
