package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Client;
import com.example.demo.entities.Plans;
import com.example.demo.repository.ClientRepository;

@Service
public class ClientService {
	@Autowired
	ClientRepository crep;
	
	 public List<Client> getall()
	    {
	    	return crep.findAll();
	    }
	    
	    public Client saveClient(@RequestBody Client c)
	    {
	    	return crep.save(c);
	    }
	
	
	

}
