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
import com.example.demo.entities.Part;
import com.example.demo.entities.RawMaterial;
import com.example.demo.entities.RawMaterialDummy;
import com.example.demo.entities.Vendor;
import com.example.demo.entities.VendorMap;
import com.example.demo.entities.VendorMapDummy;
import com.example.demo.services.CompanyService;
import com.example.demo.services.PartService;
import com.example.demo.services.VendorMapService;
import com.example.demo.services.VendorService;

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
