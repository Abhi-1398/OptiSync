package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import com.example.demo.entities.RawMaterial;

import com.example.demo.repositories.RawMaterialRepository;

@Service
public class RawMaterialService {
	
	@Autowired
	RawMaterialRepository rmrepo;
	
	 public List<RawMaterial> getall()
	    {
	    	return rmrepo.findAll();
	    }
	    
	    public RawMaterial saveRawMaterial(@RequestBody RawMaterial rm)
	    {
	    	return rmrepo.save(rm);
	    }
	    
	    public RawMaterial getbyid(int id)
	    {
	    	return rmrepo.findById(id).get();
	    }

}
