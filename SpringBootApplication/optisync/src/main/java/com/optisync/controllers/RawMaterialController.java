package com.optisync.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.optisync.entites.*;
import com.optisync.services.*;


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
