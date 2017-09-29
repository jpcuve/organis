package com.darts.organis;

import org.springframework.beans.factory.config.CustomScopeConfigurer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.ServletContextAware;

import javax.faces.webapp.FacesServlet;
import javax.servlet.ServletContext;

@SpringBootApplication
@ServletComponentScan
public class OrganisApplication extends SpringBootServletInitializer implements ServletContextAware {

    @Bean
    public ServletRegistrationBean facesServlet(){
        final ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(new FacesServlet(), "*.xhtml");
        servletRegistrationBean.setName("Faces Servlet");
        servletRegistrationBean.setLoadOnStartup(1);
        return servletRegistrationBean;
    }

    @Bean
    public static CustomScopeConfigurer customScopes(){
        final CustomScopeConfigurer customScopeConfigurer = new CustomScopeConfigurer();
        customScopeConfigurer.addScope("view", new ViewScope());
        return customScopeConfigurer;
    }

    @Override
    public void setServletContext(ServletContext servletContext) {
        servletContext.setInitParameter("com.sun.faces.forceLoadConfiguration", Boolean.TRUE.toString());
    }

    public static void main(String[] args) {
		SpringApplication.run(OrganisApplication.class, args);
	}
}
