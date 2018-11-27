package com.darts.organis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan
public class OrganisApplication {

    public static void main(String[] args) {
		SpringApplication.run(OrganisApplication.class, args);
	}
}
