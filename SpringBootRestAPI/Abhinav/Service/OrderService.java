package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Orders;
import com.example.demo.Repository.OrderRepository;



@Service
public class OrderService {
	@Autowired
	OrderRepository orep;
	
	public Orders getbyid(int id)
	{
		return orep.findById(id).get();
	}
	
	public List<Orders> getAllOredrs()
	{
		return orep.findAll();
	}

}
