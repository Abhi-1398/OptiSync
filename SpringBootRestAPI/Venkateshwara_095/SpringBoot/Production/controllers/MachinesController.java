package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Machines;
import com.example.demo.services.MachineService;

@RestController
public class MachinesController {

	@Autowired	
	MachineService mcservice;
	
	@GetMapping("/getMachine")
	public List<Machines> getAllMachine(){
		return mcservice.getall();
	}
	
	@GetMapping("/getOneMachine")
	public Machines getOneMachine(@RequestParam int id) {
		return mcservice.getById(id);
	}
}
