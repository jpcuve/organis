package com.darts.organis.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

/**
 * Created by jpc on 31-05-17.
 */
@Table(name = "territories")
@NamedQueries({
        @NamedQuery(name = Territory.TERRITORY_ALL, query = "select t from Territory t")
})
@Entity
@JsonIgnoreProperties({"parent"})
public class Territory implements NamedNode<Territory> {
    public static final String TERRITORY_ALL = "territory.all";
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Territory parent;
    @Column(name = "parent_id", insertable = false, updatable = false)
    private Long parentId;

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

    @Override
    public Territory getParent() {
        return parent;
    }

    public void setParent(Territory parent) {
        this.parent = parent;
    }

    public Long getParentId() {
        return parentId;
    }
}
