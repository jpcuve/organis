package com.darts.organis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@ServletComponentScan
public class OrganisApplication extends SpringBootServletInitializer {

/*
    @Bean
    public ServletRegistrationBean testServlet(){
        final ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(new TestServlet(), "/test");
        return servletRegistrationBean;
    }
*/

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        builder.sources();
        return super.configure(builder);
    }

    public static void main(String[] args) {
		SpringApplication.run(OrganisApplication.class, args);
	}
}
