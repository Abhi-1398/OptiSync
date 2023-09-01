package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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
	
	public Assembly saveResAssQty(@RequestBody Assembly o) {
		return as.save(o);
	}
	
	public List<Assembly> getAssemblyByCompanyId(int id){
		return as.getAssemblyBycompId(id);
	} 
	
	public int saveTask( int qty, String name,String date,int order){
		return as.saveTask(qty, name, date,order);
	}
	
	public int updateTask(int qty ,String date,int order){
		return as.saveAchievedQty(qty, date,order);
	}
}
