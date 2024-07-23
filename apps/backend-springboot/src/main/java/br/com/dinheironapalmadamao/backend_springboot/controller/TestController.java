package br.com.dinheironapalmadamao.backend_springboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

  @GetMapping({ "/", "/v3" })
  public TestResponse testapi() {
    return new TestResponse("API ON - by Java-SpringBoot");
  }

  // Classe interna para a resposta JSON
  static class TestResponse {
    private String message;

    public TestResponse(String message) {
      this.message = message;
    }

    // Getters e Setters
    public String getMessage() {
      return message;
    }

    public void setMessage(String message) {
      this.message = message;
    }
  }
}
