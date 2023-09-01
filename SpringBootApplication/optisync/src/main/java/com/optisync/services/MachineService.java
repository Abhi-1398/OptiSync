package com.optisync.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.optisync.entites.*;
import com.optisync.repositories.*;


@Service
public class MachineService {

	@Autowired
	MachineRepository mcrepo;
	
	public List<Machine> getall() {
	    return mcrepo.findAll();
	}
	    
    public Machine saveMachine(@RequestBody Machine m){
	    return mcrepo.save(m);
	}
	    
	public Machine getbyid(int id){
	    return mcrepo.findById(id).get();
	}
}
