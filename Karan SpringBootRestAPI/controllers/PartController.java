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
import com.example.demo.entities.Machine;
import com.example.demo.entities.MachineDummy;
import com.example.demo.entities.Part;
import com.example.demo.entities.PartDummy;
import com.example.demo.entities.Product;
import com.example.demo.services.PartService;
import com.example.demo.services.ProductService;


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
	
	
}
