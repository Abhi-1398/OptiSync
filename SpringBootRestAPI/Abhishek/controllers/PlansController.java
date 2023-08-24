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
@CrossOrigin(origins="http://localhost:3000")
public class PlansController {
	@Autowired
	PlanService pservice;
	
	@GetMapping("/getPlans")
	public List<Plan> getall()
	{
		return pservice.getall();
	}
	@PostMapping("/savePlan")
	public Plan saveplan(@RequestBody Plan p)
	{
		return pservice.savePlan(p);
	}
	@GetMapping("/getPlanbyid")
	public Plan getbyid(int id)
	{
		return pservice.getbyid(id);
	}

}
