package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Client;
import com.example.demo.entities.Orders;
import com.example.demo.services.OrderService;

@RestController
public class OrderController {
	
	@Autowired
	OrderService oservice;
	
	@GetMapping("/getOrder")
	public List<Orders>getall(){
		return oservice.getall();
		
		
	}

}
