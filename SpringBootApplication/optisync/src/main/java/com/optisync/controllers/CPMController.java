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
public class CPMController {

	@Autowired
	CPMService cpmservice;
	
	@Autowired
	CompanyService cservice;
	
	@Autowired
	ProductService prservice;
	
	@Autowired
	PartService prtservice;
	
	@GetMapping("/getCPM")
	public List<CPM> getAllCPM(){
		return cpmservice.getall();
	}
	
	@PostMapping("/saveCPM")
	public CPM saveCPM(@RequestBody CPMDummy cp) {
		Company c=cservice.getbyid(cp.getCompany_id());
		Product p=prservice.getbyid(cp.getProduct_id());
		Part pr= prtservice.getbyid(cp.getPart_id());
		CPM c1=new CPM(cp.getStore_ct(),cp.getProduction_ct(),cp.getVendor_ct(),cp.getAssembly_ct(),cp.getDispatch_ct(),c,p,pr);
		
		return cpmservice.saveCPM(c1);
	}
	
	@GetMapping("/getOneCPM")
	public CPM getOneCPM(@RequestParam int id) {
		return cpmservice.getbyid(id);
	}
}
