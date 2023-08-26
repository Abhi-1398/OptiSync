package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Part;
import com.example.demo.Repository.PartRepository;

@Service
public class PartService {

	@Autowired
	PartRepository pr;
	
	public List<Part> getAllParts()
	{
		return pr.findAll();
	}
	
	public Part getById(int id)
	{
		return pr.findById(id).get();
	}
}
