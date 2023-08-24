package com.example.demo.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Machines;
import com.example.demo.entities.Production;
import com.example.demo.repositories.ProductionRepository;

@Service
public class ProductionService {
	
	@Autowired
	ProductionRepository productionrepository;
	
	
	
	public List<Production> getall(){
		return productionrepository.findAll();
	}
	
	/*
	 * public Production saveCompany(@RequestBody Production p) { return
	 * productionrepository.save(p); }
	 */
	 public Production getById(int id) {
	    	return productionrepository.findById(id).get();
	    }
	
}
