package com.darts.organis.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

/**
 * Created by jpc on 31-05-17.
 */
@Table(name = "roles")
@NamedQueries({
        @NamedQuery(name = Role.ROLE_ALL, query = "select r from Role r")
})
@Entity
@JsonIgnoreProperties({"parent"})
public class Role implements NamedNode<Role> {
    public static final String ROLE_ALL = "role.all";
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    @Column(name = "name", nullable = false)
    private String name;
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Role parent;
    @Column(name = "parent_id", insertable = false, updatable = false)
    private String parentId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public Role getParent() {
        return parent;
    }

    public void setParent(Role parent) {
        this.parent = parent;
    }

    public String getParentId() {
        return parentId;
    }
}
