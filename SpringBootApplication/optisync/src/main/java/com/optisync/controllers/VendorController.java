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
public class VendorController {

	@Autowired
	VendorService vservice;
	
	@GetMapping("/allVendors")
	public List<Vendor> getAll(){
		return vservice.getall();
	}
    
	@PostMapping("/saveVendor")
	public Vendor saveVendor(@RequestBody Vendor ve){
		return vservice.saveVendor(ve);
	}
	
	@GetMapping("/getbypartname")
	public List<Vendor> getbyname(@RequestParam String name){
		return vservice.getbypartname(name);
	}
	
}
