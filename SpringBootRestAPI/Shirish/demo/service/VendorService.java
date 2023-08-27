package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Vendor;
import com.example.demo.repository.VendorRepository;


@Service
public class VendorService {
	@Autowired
	VendorRepository vrepo;
	
	 public List<Vendor> getall()
	    {
	    	return vrepo.findAll();
	    }
	    
	    public Vendor saveVendor(@RequestBody Vendor v)
	    {
	    	return vrepo.save(v);
	    }
	    
	    public Vendor getbyid(int id)
	    {
	    	return vrepo.findById(id).get();
	    }
	    
	    public List<Vendor> getbypartname(String name)
	    {
	    	return vrepo.getbypartname(name);
	    }
}
