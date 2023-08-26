package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Store;
import com.example.demo.Repository.StoreRepository;

@Service
public class StoreService {

	@Autowired
	StoreRepository srs;
	
	public List<Store> getAll()
	{
		return srs.findAll();
	}
	
	public Store saveStore(Store s)
	{
		return srs.save(s);
	}
	
}
