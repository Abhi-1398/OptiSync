package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class Rolesservice {
	@Autowired
	Rolesreposirory rrep;
	
	public List<Role> getAll(){
		return rrep.findAll();
	}
	public Role saveRole(@RequestBody Role rt){
		return rrep.save(rt);
	}
	
	public Role getbyid(int id){
		return rrep.findById(id).get();
	}

}
