package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Client;
import com.example.demo.entities.Machines;
import com.example.demo.services.ClientService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {
	@Autowired
	ClientService cservice;
	
	@GetMapping("/getClient")
	public List<Client>getall(){
		return cservice.getall();
	}
	
	@GetMapping("/getOneCleint")
	public Client getOneClient(@RequestParam int id) {
		return cservice.getByID(id);
	}
}
	
