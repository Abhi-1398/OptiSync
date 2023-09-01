package com.optisync.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class StoreService {

	@Autowired
	StoreRepository srs;
	
	public List<Store> getAll(){
		return srs.findAll();
	}
	
	public Store saveStore(Store s){
		return srs.save(s);
	}
	
}
