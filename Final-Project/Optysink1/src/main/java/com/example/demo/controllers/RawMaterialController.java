package com.example.demo.controllers;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Part;
import com.example.demo.entities.RawMaterial;
import com.example.demo.entities.RawMaterialDummy;
import com.example.demo.service.PartService;
import com.example.demo.service.RawMaterialService;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RawMaterialController {

	@Autowired
	RawMaterialService rmservice;
	
	@Autowired
	PartService prservice;
	
	@GetMapping("/getrawmaterial")
	public List<RawMaterial> getAllProduct(){
		return rmservice.getall();
	}
	
	@PostMapping("/saverawmaterial")
	public RawMaterial saveRawMaterial(@RequestBody RawMaterialDummy rmd) {
		Part p= prservice.getbyid(rmd.getPart_id());
		RawMaterial rm =new RawMaterial(rmd.getName(),rmd.getDescription(),p);
		return rmservice.saveRawMaterial(rm);
	}
	
	@GetMapping("/getOneRawMaterial")
	public RawMaterial getOneRawmaterial(@RequestParam int id) {
		return rmservice.getbyid(id);
	
	}
	
	
}
