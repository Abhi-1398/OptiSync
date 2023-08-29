package com.optisync.controllers;

import java.sql.Timestamp;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.optisync.entites.*;
import com.optisync.services.*;

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
	
	@PutMapping("/saveTask")
	public int saveTask(@RequestBody NewTask task) {
		int qty = task.getTargetedQtyId();
		String name = task.getDispatcherNameId();
		String date = task.getDateId();
		int order = task.getOrderId();
		return dispatchservice.saveTask(qty,name, date,order);
	}
	
	@PutMapping("/updateTask")
	public int updateTask(@RequestBody NewTask task) {
		int qty = task.getAcheivedQtyId();
		String date = task.getDateId();
		int order = task.getOrderId();
		return dispatchservice.updateTask(qty, date,order);
	}
	
}
