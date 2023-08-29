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
public class PartController {
	
	@Autowired
	PartService prtservice;
	
	@Autowired
	ProductService pservice;
	
	@GetMapping("/getPart")
	public List<Part> getAllProduct(){
		return prtservice.getall();
	}
	
	@PostMapping("/savePart")
	public Part savePart(@RequestBody PartDummy pt) {
		Product p = pservice.getbyid(pt.getProduct_id());
		Part pr=new Part(pt.getPart_name(),pt.getPart_description(),p);
		return prtservice.savePart(pr);
	}
	
	@GetMapping("/getOnePart")
	public Part getOnePart(@RequestParam int id) {
		return prtservice.getbyid(id);
	}
	
	@GetMapping("/getallpartbyid")
	public List<Part> getallpartbyid(@RequestParam int id){
		return prtservice.getallpartbyid(id);
	}
	
	@GetMapping("/getpartbypid")
	public List<Part> getpartbypid(@RequestParam int id){
		return prtservice.getallpartbypid(id);
	}
	
}
