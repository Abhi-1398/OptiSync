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
import com.optisync.entites.Assembly;
import com.optisync.entites.AssemblyDummy;
import com.optisync.entites.NewTask;
import com.optisync.entites.Orders;
import com.optisync.entites.Part;
import com.optisync.services.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AssemblyController {

	@Autowired
	AssemblyService assemblyService;
	
	@Autowired
	OrderService orderservice;
	
	@Autowired
	PartService partservice;
	
	@PostMapping("/receivedAssemblyQty")
	public Assembly saveOrder(@RequestBody AssemblyDummy Ad) {
	
		Timestamp date = Ad.getDateId();
		Orders o =   orderservice.getbyid(Ad.getOrderId());
		Part prt = partservice.getbyid(Ad.getParttId());
		int recQty = Ad.getParttId();
		Assembly Ass = new Assembly(date,o,prt,recQty); 
		return assemblyService.saveResAssQty(Ass) ;
	} 
	
	@GetMapping("/getAssemblyCompId")
	public List<Assembly> getDispatchByCompanyID(@RequestParam int id){
		return assemblyService.getAssemblyByCompanyId(id);
	}
	
	@PutMapping("/saveTask")
	public int saveTask(@RequestBody NewTask task) {
		int qty = task.getTargetedQtyId();
		String name = task.getDispatcherNameId();
		String date = task.getDateId();
		int order = task.getOrderId();
		return assemblyService.saveTask(qty,name, date,order);
	}
	
	@PutMapping("/updateTask")
	public int updateTask(@RequestBody NewTask task) {
		int qty = task.getAcheivedQtyId();
		String date = task.getDateId();
		int order = task.getOrderId();
		return assemblyService.updateTask(qty, date,order);
	}
}
