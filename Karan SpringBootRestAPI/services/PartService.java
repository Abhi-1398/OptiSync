package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Part;

import com.example.demo.repositories.PartRepository;


@Service
public class PartService {
	@Autowired
	PartRepository prtrepo;
	
	 public List<Part> getall()
	    {
	    	return prtrepo.findAll();
	    }
	    
	    public Part savePart(@RequestBody Part pt)
	    {
	    	return prtrepo.save(pt);
	    }
	    
	    public Part getbyid(int id)
	    {
	    	return prtrepo.findById(id).get();
	    }
}
