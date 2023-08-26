package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Orders;
import com.example.demo.Service.OrderService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class OrdersController {

	@Autowired
	OrderService os;
	
	@GetMapping("/getOrders")
	public Orders getOrders(@RequestParam int id)
	{
		return os.getbyid(id);
	}
	
	@GetMapping("/getAllOrders")
	public List<Orders> getAllOrders()
	{
		return os.getAllOredrs();
	}
}
