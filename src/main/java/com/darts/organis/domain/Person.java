package com.darts.organis.domain;

import javax.persistence.*;

/**
 * Created by jpc on 31-05-17.
 */
@Table(name = "persons")
@NamedQueries({
        @NamedQuery(name = Person.PERSON_ALL, query = "select p from Person p")
})
@Entity
public class Person {
    public static final String PERSON_ALL = "person.all";
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name = "haha";

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
