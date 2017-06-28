package com.darts.organis.domain;

import javax.persistence.*;

/**
 * Created by jpc on 31-05-17.
 */
@Table(name = "products")
@NamedQueries({
        @NamedQuery(name = Product.PRODUCT_ALL, query = "select p from Product p order by id")
})
@Entity
public class Product {
    public static final String PRODUCT_ALL = "product.all";
    @Id
    @Column(name = "id", nullable = false)
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
