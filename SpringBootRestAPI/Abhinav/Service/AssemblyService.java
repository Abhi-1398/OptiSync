package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Assembly;
import com.example.demo.Repository.AssemblyRepository;

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
