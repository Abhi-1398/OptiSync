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
public class VendorMapController {

	@Autowired
	VendorMapService vmapservice;
	
	@Autowired
	CompanyService cservice;
	
	@Autowired
	PartService pservice;
	
	@Autowired
	VendorService vservice;
	
	@GetMapping("/getVendormap")
	public List<VendorMap> getAllVendorMap(){
		return vmapservice.getall();
	}
	
	@PostMapping("/saveVendormap")
	public VendorMap saveVendorMap(@RequestBody VendorMapDummy vmp) {
		Part p= pservice.getbyid(vmp.getPart_id());
		Company c = cservice.getbyid(vmp.getCompany_id());
		Vendor v=vservice.getbyid(vmp.getVendor_id());
		VendorMap vm =new VendorMap(v,c,p);
		return vmapservice.saveVendorMap(vm);
	}
	
	@GetMapping("/getOneVendormap")
	public VendorMap getOneVendorMap(@RequestParam int id) {
		return vmapservice.getbyid(id);
	
	}
	
}
