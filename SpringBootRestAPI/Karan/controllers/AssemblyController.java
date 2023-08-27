package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Assembly;
import com.example.demo.entities.AssemblyDummy;
import com.example.demo.entities.Machine;
import com.example.demo.entities.Orders;
import com.example.demo.entities.Part;
import com.example.demo.entities.ProductDummy;
import com.example.demo.entities.Production;
import com.example.demo.entities.RawMaterial;
import com.example.demo.services.AssemblyService;
import com.example.demo.services.OrderService;
import com.example.demo.services.PartService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AssemblyController {

	@Autowired
	AssemblyService as;
	
	@Autowired
	OrderService os;
	
	
	@Autowired
	PartService ps;
	
	@GetMapping("/getAllAssembly")
	public List<Assembly> getAll()
	{
		return as.getall();
	}
	
	@PostMapping("/saveProduction")
	public Assembly saveAssembly(@RequestBody AssemblyDummy p)
	{
		Orders o = os.getbyid(p.getOrder_id());
		Part r = ps.getbyid(p.getPart_id());
		Machine m = ms.getbyid(p.getMachine_id());
		Assembly p1 = new Production(o,r,p.getReceived_qty(),p.getDate(),p.getTarget_value(),p.getAchieve(),p.getCurrent_qty(),p.getOperator_name(),m);
		return ps.saveAssembly(p1);
	}

}
