package com.commercial_website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.commercial_website")
public class CommercialWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(CommercialWebsiteApplication.class, args);
	}

}
