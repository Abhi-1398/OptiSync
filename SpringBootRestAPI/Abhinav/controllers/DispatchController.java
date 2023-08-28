package com.example.demo.controllers;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Dispatch;
import com.example.demo.entities.NewDispatch;
import com.example.demo.entities.NewOrder;
import com.example.demo.entities.Orders;
import com.example.demo.entities.Product;
import com.example.demo.service.DispatchService;
import com.example.demo.service.OrderService;
import com.example.demo.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DispatchController {

	@Autowired
	DispatchService dispatchservice;
	@Autowired
	OrderService orderservice;
	@Autowired
	ProductService productservice;
	
	@PostMapping("/receivedDispatchQty")
	public Dispatch saveOrder(@RequestBody NewDispatch rq) {
	
		Timestamp date = rq.getDateId();
		Orders o =   orderservice.getbyid(rq.getOrderId());
		Product pro = productservice.getbyid(rq.getProductId()) ;
		int recQty = rq.getProductQty();
		Dispatch dis = new Dispatch(date,o,pro,recQty); 
		return dispatchservice.saveResDisQty(dis) ;
	} 
	
	@GetMapping("/getDispatchCompId")
	public List<Dispatch> getDispatchByCompanyID(@RequestParam int id){
		return dispatchservice.getDispatchByCompanyId(id);
	}
	
}
