package com.darts.organis.domain;

import javax.persistence.*;

/**
 * Created by jpc on 09-06-17.
 */
@Table(name = "teams")
@NamedQueries({
        @NamedQuery(name = Team.TEAM_ALL, query = "select t from Team t order by id")
})
@Entity
public class Team {
    public static final String TEAM_ALL = "team.all";
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "manager", nullable = false)
    private String manager;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }
}
