package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.*;
import com.example.demo.service.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductionController {

	@Autowired
	ProductionService ps;
	@Autowired
	OrderService os;
	@Autowired
	RawMaterialService rs;
	@Autowired
	MachineService ms;
	
	@GetMapping("/getAllProduction")
	public List<Production> getAll()
	{
		return ps.getAll();
	}
	
	@PostMapping("/saveProduction")
	public Production saveProduction(@RequestBody ProductionDummy p)
	{
		Orders o = os.getbyid(p.getOrder_id());
		RawMaterial r = rs.getbyid(p.getRaw_material_id());
		Machine m = ms.getbyid(p.getMachine_id());
		Production p1 = new Production(o,r,p.getReceived_qty(),p.getDate(),p.getTarget_value(),p.getAchieve(),p.getCurrent_qty(),p.getOperator_name(),m);
		return ps.saveProduction(p1);
	}
	
	@GetMapping("/getProductionStatus")
	public List<Object[]> getStatus(@RequestParam("orderId") int orderId) {

		return ps.getStatus(orderId);
	}
}
