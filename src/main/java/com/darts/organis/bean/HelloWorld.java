package com.darts.organis.bean;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("view")
public class HelloWorld {
    public String getGreeting(){
        return "Hello World " + this;
    }
}
