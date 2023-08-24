package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Orders;
import com.example.demo.entities.Parts;
import com.example.demo.repositories.PartsRepository;

@Service
public class PartService {
	
	@Autowired
	PartsRepository partrepo;
	
	public List<Parts> getall(){
		return partrepo.findAll();
	}
	
	public Parts saveParts(@RequestBody Parts pr) {
		return partrepo.save(pr);
	}
	
	public Parts getbyid(int id) {
		return partrepo.findById(id).get();
	}
}
