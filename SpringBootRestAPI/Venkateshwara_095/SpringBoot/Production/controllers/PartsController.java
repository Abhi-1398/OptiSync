package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Parts;
import com.example.demo.entities.Production;
import com.example.demo.services.PartService;

@RestController
public class PartsController {
	
	@Autowired
	PartService ptservice;
	
	@GetMapping("/getParts")
	public List<Parts>getall(){
		return ptservice.getall();
	}
}
