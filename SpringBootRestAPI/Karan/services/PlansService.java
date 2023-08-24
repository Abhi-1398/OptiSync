package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Plans;
import com.example.demo.repositories.PlansRepository;

@Service
public class PlansService {
    @Autowired
	PlansRepository plrepo;
    
    @GetMapping("/getPlans")
    public List<Plans> getall()
    {
    	return plrepo.findAll();
    }
    
    public Plans savePlan(@RequestBody Plans p)
    {
    	return plrepo.save(p);
    }
    
    public Plans getbyid(int id)
    {
    	
    	return plrepo.findById(id).get();
    }
}
