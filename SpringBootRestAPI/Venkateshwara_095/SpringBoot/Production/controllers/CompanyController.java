package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Client;
import com.example.demo.entities.Company;
import com.example.demo.entities.Machines;
import com.example.demo.services.CompanyService;

@RestController
public class CompanyController {
	@Autowired
	CompanyService cpservice;
	
	@GetMapping("/getCompany")
	public List<Company>getall(){
		return cpservice.getall();
	}
	
	@GetMapping("/getOneCompany")	
	public Company getOneCompany(@RequestParam int id) {
		return cpservice.getById(id);
	}
		
	}


