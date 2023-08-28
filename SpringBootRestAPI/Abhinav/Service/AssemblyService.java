package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.*;
import com.example.demo.repository.*;

@Service
public class AssemblyService {

	
	@Autowired
	AssemblyRepository as;
	
	public Assembly getById(int id)
	{
		return as.findById(id).get();
	}
	
	public Assembly saveAssembly(Assembly a)
	{
		return as.save(a);
	}
}
