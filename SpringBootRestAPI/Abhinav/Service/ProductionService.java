package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.*;
import com.example.demo.repository.*;

@Service
public class ProductionService {

	@Autowired
	ProductionRepository pr;
	
	public List<Production> getAll()
	{
		return pr.findAll();
	}
	
	public Production saveProduction(Production s)
	{
		return pr.save(s);
	}
}
