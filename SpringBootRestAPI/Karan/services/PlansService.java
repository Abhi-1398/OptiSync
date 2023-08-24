package com.example.demo.services;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Plans;



@Service
public class PlansService {
    @Autowired
	PlansService pservice;
    
    @GetMapping("/getPlans")
    public List<Plans> getall()
    {
    	return pservice.getall();
    }
    
    public Plans savePlan(@RequestBody Plans p)
    {
    	return pservice.savePlan(p);
    }
    
    public Plans getbyid(int id)
    {
    	
    	return pservice.getbyid(id);
    }
}
