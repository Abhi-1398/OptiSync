package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Plan;

import com.example.demo.services.PlanService;



@RestController

public class PlansController {
	@Autowired
	PlanService plservice;
	
	@GetMapping("/getPlans")
	public List<Plan> getall()
	{
		return plservice.getall();
	}
}