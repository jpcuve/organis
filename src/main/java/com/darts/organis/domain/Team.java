package com.darts.organis.domain;

import javax.persistence.*;

/**
 * Created by jpc on 09-06-17.
 */
@Table(name = "teams")
@NamedQueries({
        @NamedQuery(name = Team.TEAM_ALL, query = "select t from Team t order by id"),
        @NamedQuery(name = Team.TEAM_BY_ROLE, query = "select t from Team t where t.role = :role"),
        @NamedQuery(name = Team.TEAM_BY_TERRITORY, query = "select t from Team t where t.territory = :territory")
})
@Entity
public class Team {
    public static final String TEAM_ALL = "team.all";
    public static final String TEAM_BY_ROLE = "team.byRole";
    public static final String TEAM_BY_TERRITORY = "team.byTerritory";
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "manager", nullable = false)
    private String manager;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
    @ManyToOne
    @JoinColumn(name = "territory_id")
    private Territory territory;


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

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Territory getTerritory() {
        return territory;
    }

    public void setTerritory(Territory territory) {
        this.territory = territory;
    }
}
