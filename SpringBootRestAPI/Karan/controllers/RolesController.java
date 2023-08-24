package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Roles;
import com.example.demo.services.RolesService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RolesController {

	@Autowired
	RolesService rservice;
	
	@GetMapping("/allRoles")
	public List<Roles> getAll()
	{
	  return rservice.getAll();
	}
    
	@PostMapping("/saveRole")
	public Roles saveRole(@RequestBody Roles rt)
	{
		return rservice.saveRole(rt);
	}
}
