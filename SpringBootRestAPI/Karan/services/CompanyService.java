package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Company;

import com.example.demo.repositories.CompanyRepository;


@Service
public class CompanyService {
	@Autowired
	CompanyRepository crepo;
	
	 public List<Company> getall()
	    {
	    	return crepo.findAll();
	    }
	    
	    public Company saveCompany(@RequestBody Company c)
	    {
	    	return crepo.save(c);
	    }
	
	    public List<Company> getpendingrequest()
	    {
	    	return crepo.getpendingrequest();
	    }
       
	    public int changestatus(int id)
	    {
	    	return crepo.changestatus(id);
	    }
	    
	    public Company getbyid(int id)
	    {
	    	return crepo.findById(id).get();
	    }
}
