package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entities.Production;
import com.example.demo.services.ProductionService;

@RestController
public class ProductionController {
	
	@Autowired
	ProductionService pservice;
	
	@GetMapping("/getProductiondata" )
	public List<Production> getall(){
		return pservice.getall();
	}
	
	@GetMapping("/getProEntry")
	public Production getOneEntry(@RequestParam int id) {
		return pservice.getById(id);
	}
	
	/*@PostMapping("/saveProductionData")	
	public Production 	saveProductionData(@RequestBody Production p) {
		return pservice.saveProductionData(p);
	}*/


}
