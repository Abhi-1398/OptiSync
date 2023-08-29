package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class AssemblyService {

	@Autowired
	AssemblyRepository as;
	
	public Assembly getById(int id){
		return as.findById(id).get();
	}
	
	public Assembly saveAssembly(Assembly a){
		return as.save(a);
	}

	public List<Object[]> getStatus(int orderId){
		return as.getQuantitiesByOrderId(orderId);
	}
}
