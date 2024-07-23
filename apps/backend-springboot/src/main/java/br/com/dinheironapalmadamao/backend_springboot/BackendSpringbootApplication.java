package br.com.dinheironapalmadamao.backend_springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// @EntityScan("br.com.dinheironapalmadamao.backend_springboot.adapters")
// @EnableJpaRepositories(basePackages =
// "br.com.dinheironapalmadamao.backend_springboot.adapters")
public class BackendSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendSpringbootApplication.class, args);
		System.out.println();
		System.out.println("🔥 Server is running at http://localhost:8080");
	}

}
