package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.CPM;

import com.example.demo.repository.CPMRepository;


@Service
public class CPMService {

	@Autowired
	CPMRepository cpmrepo;
	
	 public List<CPM> getall()
	    {
	    	return cpmrepo.findAll();
	    }
	    
	    public CPM saveCPM(@RequestBody CPM c)
	    {
	    	return cpmrepo.save(c);
	    }
	    
	    public CPM getbyid(int id)
	    {
	    	return cpmrepo.findById(id).get();
	    }
}

