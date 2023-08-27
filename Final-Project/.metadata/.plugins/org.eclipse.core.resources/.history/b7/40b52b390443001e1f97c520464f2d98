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
import com.example.demo.services.CompanyService;
import com.example.demo.services.MachineService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MachineController {
	@Autowired
	MachineService mcservice;
	@Autowired
	CompanyService cservice;
	
	@GetMapping("/getMachine")
	public List<Machine> getAllMachine(){
		return mcservice.getall();
	}
	
	@PostMapping("/saveMachine")
	public Machine saveMachine(@RequestBody MachineDummy m) {
		Company c=cservice.getbyid(m.getCompany_id());
		Machine ml=new Machine(m.getMachine_name(),m.getMachine_description(),c);
		
		return mcservice.saveMachine(ml);
	}
	
	@GetMapping("/getOneMachine")
	public Machine getOneMachine(@RequestParam int id) {
		return mcservice.getbyid(id);
	}
}
