package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Machine;
import com.example.demo.entities.VendorMap;
import com.example.demo.repositories.VendorMapRepository;
import com.example.demo.repositories.VendorRepository;

@Service
public class VendorMapService {

	@Autowired
	VendorMapRepository vmprepo;
	
	 public List<VendorMap> getall()
	    {
	    	return vmprepo.findAll();
	    }
	    
	    public VendorMap saveVendorMap(@RequestBody VendorMap m)
	    {
	    	return vmprepo.save(m);
	    }
	    
	    public VendorMap getbyid(int id)
	    {
	    	return vmprepo.findById(id).get();
	    }
	    
	    

    
   
}
