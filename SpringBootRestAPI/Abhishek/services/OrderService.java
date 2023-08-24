package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.entities.Orders;
import com.example.demo.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orderrepo;
	
	public List<Orders> getall(){
		return orderrepo.findAll();
	}
	
	public Orders saveOrder(@RequestBody Orders o) {
		return orderrepo.save(o);
	}
	
	public Orders getbyid(int id) {
		return orderrepo.findById(id).get();
	}
	
	public List<Object[]> getStatus(Integer orderId){

		return orderrepo.getQuantitiesByOrderId(orderId);
	}
}
