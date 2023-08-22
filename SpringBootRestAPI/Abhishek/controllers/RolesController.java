package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Role;
import com.example.demo.services.Rolesservice;

@RestController
public class RolesController {
	@Autowired
	Rolesservice rservice;
	
	@GetMapping("/allRoles")
	public List<Role> getAll()
	{
	  return rservice.getAll();
	}
    
	@PostMapping("/saveRole")
	public Role saveRole(@RequestBody Role rt)
	{
		return rservice.saveRole(rt);
	}
}
