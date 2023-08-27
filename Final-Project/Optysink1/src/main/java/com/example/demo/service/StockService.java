package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.*;
import com.example.demo.repository.*;

@Service
public class StockService {

	@Autowired
	StockRepository sr;
	
	public List<Stock> getAll()
	{
		return sr.findAll();
	}
	
	public Stock saveStock(Stock s)
	{
		return sr.save(s);
	}

	public void updateFinalStock(int stock_entry_no ,int raw_material_id,int company_id) {
	 sr.updateFinalStock(stock_entry_no,raw_material_id, company_id);
		
	}
	
	public int fetchFinalQuant(int raw_material_id,int company_id )
	{
		return sr.fetchFinalQuant(raw_material_id, company_id);
	}
	
	
}
