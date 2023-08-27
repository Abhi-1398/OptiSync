package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.entities.Orders;
import com.example.demo.repositories.OrderRepository;
import com.example.demo.repositories.*;

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
	
	public int updateDispatchQty(int qty, int orderId, int companyId) {
		return orderrepo.updateDispatchQty(qty, orderId ,companyId);
	}
	
	public Orders getbyid(int id) {
		return orderrepo.findById(id).get();
	}
	
	public List<Object[]> getStatus(int orderId){

		return orderrepo.getQuantitiesByOrderId(orderId);
	}
	
	public List<Orders> getordersbycid(int id)
	{
		return orderrepo.getorderbycid(id);
	}
}
