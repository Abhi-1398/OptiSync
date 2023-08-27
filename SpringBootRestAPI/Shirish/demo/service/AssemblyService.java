package com.example.demo.service;

import java.util.List;

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

	public List<Object[]> getStatus(int orderId){

		return as.getQuantitiesByOrderId(orderId);
	}
}
