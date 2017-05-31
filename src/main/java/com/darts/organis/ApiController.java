package com.darts.organis;

import com.darts.organis.domain.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by jpc on 31-05-17.
 */
@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private DataFacade facade;

    @GetMapping("/test")
    public List<Person> test(){
        return facade.findAllPersons();
    }
}
