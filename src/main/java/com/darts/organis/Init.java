package com.darts.organis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by jpc on 6/1/17.
 */
@Component
public class Init {

    @Autowired
    public Init(DataFacade facade){
        facade.checkConsistency();
    }

}
