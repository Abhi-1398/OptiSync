package com.example.demo.controllers;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Client;
import com.example.demo.entities.Company;
import com.example.demo.entities.NewOrder;
import com.example.demo.entities.Orders;
import com.example.demo.entities.Product;
import com.example.demo.services.ClientService;
import com.example.demo.services.CompanyService;
import com.example.demo.services.OrderService;
import com.example.demo.services.ProductService;

@RestController
public class OrderController {

	@Autowired
	OrderService orderservice;
	
	@Autowired
	ClientService clientservice;
	
	@Autowired
	CompanyService companyservice;
	
	@Autowired
	ProductService productservice;
	
	@GetMapping("/getOrders")
	public List<Orders> getall(){
		return orderservice.getall();
	}
	
	@PostMapping("/saveOrder")
	public Orders saveOrder(@RequestBody NewOrder order) {
			
		Client clientId= clientservice.getByID(order.getClientId());
		Company companyId = companyservice.getById(order.getCompanyId());
		Product productId = productservice.getbyid(order.getProductId());
		int productQty = order.getProductQty();
		Timestamp startDate = order.getStartDate();
		Timestamp endDate = order.getEndDate() ; 
		int dispatchQty = 0;
		
		Orders o = new Orders(clientId, companyId, productId, productQty ,startDate, endDate, dispatchQty);
		return orderservice.saveOrder(o);
	}
	
	@GetMapping("/getStatus")
	public Object getStatusOrder(@RequestParam int order_id) {
		return orderservice.getStatusOrder(order_id);
	}
	
	
	@GetMapping("/getOrderById")
	public Orders getOrder(@RequestParam int order_id){
		return orderservice.getbyid(order_id);
	}
}
