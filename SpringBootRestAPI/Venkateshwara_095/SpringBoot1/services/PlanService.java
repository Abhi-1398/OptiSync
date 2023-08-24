package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Plan;
import com.example.demo.repositories.PlanRepository;

@Service
public class PlanService {
    @Autowired
	PlanRepository prep;
    
    public List<Plan> getall()
    {
    	return prep.findAll();
    }
    
    public Plan savePlan(@RequestBody Plan pl)
    {
    	return prep.save(pl);
    }
    
    public Plan getbyid(int id)
    {
    	return prep.findById(id).get();
    }
}
