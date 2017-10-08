package com.darts.organis;

import com.darts.organis.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/products")
    public List<Product> allProducts(){
        return facade.findAllProducts();
    }

    @GetMapping("/roles/{id}")
    public Map<String, Object> roleViewModel(@PathVariable("id") String id){
        final Map<String, Object> map = new HashMap<>();
        map.put("territories", facade.findAllTerritories());
        map.put("role", facade.findOne(Role.class, id));
        return map;
    }

    @GetMapping("/territories/{id}")
    public Map<String, Object> territoryViewModel(@PathVariable("id") String id){
        final Map<String, Object> map = new HashMap<>();
        map.put("roles", facade.findAllRoles());
        map.put("territory", facade.findOne(Territory.class, id));
        return map;
    }
}
