package com.optisync;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.optisync.*")
public class OptiSyncApplication {

	public static void main(String[] args) {
		SpringApplication.run(OptiSyncApplication.class, args);
	}

}
