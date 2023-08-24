package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Roles;
import com.example.demo.repositories.RolesRepository;



@Service
public class RolesService {
	@Autowired
	RolesRepository rrep;
	
	public List<Roles> getAll()
	{
		return rrep.findAll();
	}
	public Roles saveRole(@RequestBody Roles rt)
	{
		return rrep.save(rt);
	}
	
	public Roles getbyid(int id)
	{
		return rrep.findById(id).get();
	}

}
