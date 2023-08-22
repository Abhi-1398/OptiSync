package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Client;
import com.example.demo.repositories.ClientRepository;

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

	    public Client getByID(int id) {
	    	return crep.findById(id).get();
	    }
}
