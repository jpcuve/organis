package com.darts.organis;

import org.springframework.beans.factory.ObjectFactory;
import org.springframework.beans.factory.config.Scope;

import javax.faces.context.FacesContext;
import java.util.Map;

public class ViewScope implements Scope {
    @Override
    public Object get(String name, ObjectFactory<?> objectFactory) {
        final Map<String, Object> viewMap = FacesContext.getCurrentInstance().getViewRoot().getViewMap();
        return viewMap.computeIfAbsent(name, k -> objectFactory.getObject());
    }

    @Override
    public Object remove(String name) {
        final Map<String, Object> viewMap = FacesContext.getCurrentInstance().getViewRoot().getViewMap();
        return viewMap.remove(name);
    }

    @Override
    public void registerDestructionCallback(String s, Runnable runnable) {

    }

    @Override
    public Object resolveContextualObject(String s) {
        return null;
    }

    @Override
    public String getConversationId() {
        return null;
    }
}
