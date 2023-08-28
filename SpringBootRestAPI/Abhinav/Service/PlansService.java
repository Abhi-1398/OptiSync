package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Plans;
import com.example.demo.repository.PlansRepository;

@Service
public class PlansService {
    @Autowired
	PlansRepository prep;
    
    public List<Plans> getall()
    {
    	return prep.findAll();
    }
    
    public Plans savePlan(@RequestBody Plans p)
    {
    	return prep.save(p);
    }
    
    public Plans getbyid(int id)
    {
    	return prep.findById(id).get();
    }
}
