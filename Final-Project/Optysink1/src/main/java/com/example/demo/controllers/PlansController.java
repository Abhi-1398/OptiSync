package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Plans;
import com.example.demo.service.PlansService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class PlansController {
	@Autowired
	PlansService pservice;
	
	@GetMapping("/getPlans")
	public List<Plans> getall()
	{
		return pservice.getall();
	}
	@PostMapping("/savePlan")
	public Plans saveplan(@RequestBody Plans p)
	{
		return pservice.savePlan(p);
	}
	@GetMapping("/getPlanbyid")
	public Plans getbyid(int id)
	{
		return pservice.getbyid(id);
	}

}
