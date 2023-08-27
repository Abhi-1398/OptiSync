package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Dispatch;
import com.example.demo.entities.Orders;
import com.example.demo.repository.*;

@Service
public class DispatchService {

	@Autowired
	DispatchRepository dispatchrepo;
	
	
	public Dispatch saveResDisQty(@RequestBody Dispatch o) {
		return dispatchrepo.save(o);
	}
	
	public List<Dispatch> getDispatchByCompanyId(int id){
		return dispatchrepo.getDispatchBycompId(id);
	} 
	
	public int saveTask( int qty, String name,String date,int order){
		return dispatchrepo.saveTask(qty, name, date,order);
	}
	
	public int updateTask(int qty ,String date,int order){
		return dispatchrepo.saveAchievedQty(qty, date,order);
	}
}
