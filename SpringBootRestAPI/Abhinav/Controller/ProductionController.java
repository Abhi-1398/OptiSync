package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Machine;
import com.example.demo.Entity.Orders;
import com.example.demo.Entity.Production;
import com.example.demo.Entity.ProductionDummy;
import com.example.demo.Entity.RawMaterial;
import com.example.demo.Service.MachineService;
import com.example.demo.Service.OrderService;
import com.example.demo.Service.ProductionService;
import com.example.demo.Service.RawMaterialService;

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
		RawMaterial r = rs.getById(p.getRaw_material_id());
		Machine m = ms.getById(p.getMachine_id());
		Production p1 = new Production(o,r,p.getReceived_qty(),p.getDate(),p.getTarget_value(),p.getAchieve(),p.getCurrent_qty(),p.getOperator_name(),m);
		return ps.saveProduction(p1);
	}
}
