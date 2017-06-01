package com.darts.organis;

import com.darts.organis.domain.Domain;
import com.darts.organis.domain.Person;
import com.darts.organis.domain.Role;
import com.darts.organis.domain.Territory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by jpc on 31-05-17.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin
public class ApiController {
    @Autowired
    private DataFacade facade;

    @GetMapping("/persons")
    public List<Person> allPersons(){
        return facade.findAllPersons();
    }

    @GetMapping("/territories")
    public List<Territory> allTerritories() {
        return facade.findAllTerritories();
    }

    @GetMapping("/domains")
    public List<Domain> allDomains(){
        return facade.findAllDomains();
    }

    @GetMapping("/roles")
    public List<Role> allRoles(){
        return facade.findAllRoles();
    }
}
