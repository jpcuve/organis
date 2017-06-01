package com.darts.organis.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

/**
 * Created by jpc on 31-05-17.
 */
@Table(name = "domains")
@NamedQueries({
        @NamedQuery(name = Domain.DOMAIN_ALL, query = "select d from Domain d")
})
@Entity
@JsonIgnoreProperties({"parent"})
public class Domain {
    public static final String DOMAIN_ALL = "domain.all";
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;

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
