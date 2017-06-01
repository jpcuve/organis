package com.darts.organis;

import com.darts.organis.domain.Domain;
import com.darts.organis.domain.Person;
import com.darts.organis.domain.Role;
import com.darts.organis.domain.Territory;
import com.sun.org.apache.xalan.internal.xsltc.DOM;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

/**
 * Created by jpc on 31-05-17.
 */
@Repository
@Transactional
public class DataFacade {
    @PersistenceContext
    private EntityManager em;

    public <T> T create(T t){
        Objects.requireNonNull(t);
        em.persist(t);
        em.flush();
        em.refresh(t);
        return t;
    }

    public <T, ID extends Serializable> T findOne(Class<T> clazz, ID pk){
        Objects.requireNonNull(pk);
        return em.find(clazz, pk);
    }

    public <T> T update(T t){
        Objects.requireNonNull(t);
        return em.merge(t);
    }

    public <T, ID extends Serializable> void delete(Class<T> clazz, ID pk){
        Objects.requireNonNull(pk != null);
        em.remove(em.getReference(clazz, pk));
    }

    public void checkConsistency(){
        // scan roles looking for domain split
        final List<Domain> domains = findAllDomains();
        findAllRoles().stream()
                .filter(Role::isSplitDomain)
                .forEach(r -> domains.stream().forEach(d -> {
                    final String id = String.format("%s:%s", r.getId(), d.getId());
                    Role role = em.find(Role.class, id);
                    if (role == null){
                        role = new Role();
                        role.setId(id);
                        role.setName(String.format("%s %s", r.getName(), d.getName()));
                        em.persist(role);
                    }
                }));
    }

    public List<Person> findAllPersons(){
        return em.createNamedQuery(Person.PERSON_ALL, Person.class).getResultList();
    }

    public List<Territory> findAllTerritories(){
        return em.createNamedQuery(Territory.TERRITORY_ALL, Territory.class).getResultList();
    }

    public List<Domain> findAllDomains(){
        return em.createNamedQuery(Domain.DOMAIN_ALL, Domain.class).getResultList();
    }

    public List<Role> findAllRoles(){
        return em.createNamedQuery(Role.ROLE_ALL, Role.class).getResultList();
    }

}
