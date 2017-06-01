package com.darts.organis.domain;

/**
 * Created by jpc on 6/1/17.
 */
public interface NamedNode<E> {
    E getParent();
    String getName();
}
