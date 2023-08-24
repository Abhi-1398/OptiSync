package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Company;
import com.example.demo.entities.RawMaterials;
import com.example.demo.services.PartService;
import com.example.demo.services.RawMaterialService;


@RestController

public class RawMaterialController {

	@Autowired
	RawMaterialService rmservice;
	
	@Autowired
	PartService prservice;
	
	@GetMapping("/getrawmaterial")
	public List<RawMaterials> getAllProduct(){
		return rmservice.getall();
	}
	

	
	
}