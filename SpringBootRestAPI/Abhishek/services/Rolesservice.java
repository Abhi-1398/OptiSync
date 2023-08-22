package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Role;
import com.example.demo.repositories.Rolesreposirory;

@Service
public class Rolesservice {
	@Autowired
	Rolesreposirory rrep;
	
	public List<Role> getAll()
	{
		return rrep.findAll();
	}
	public Role saveRole(@RequestBody Role rt)
	{
		return rrep.save(rt);
	}

}
