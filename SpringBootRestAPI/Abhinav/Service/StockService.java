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
}
