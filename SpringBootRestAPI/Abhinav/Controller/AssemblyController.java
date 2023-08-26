package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Assembly;
import com.example.demo.Entity.AssemblyDummy;
import com.example.demo.Entity.Orders;
import com.example.demo.Entity.Part;
import com.example.demo.Service.AssemblyService;
import com.example.demo.Service.OrderService;
import com.example.demo.Service.PartService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AssemblyController {

	@Autowired
	AssemblyService as;
	@Autowired
	OrderService os;
	@Autowired
	PartService ps;
	
	@PostMapping("/saveAssembly")
	public Assembly saveAssembly(@RequestBody AssemblyDummy a)
	{
		Orders o = os.getbyid(a.getOrder_id());
		Part p = ps.getById(a.getPart_id());
		
		Assembly asm = new Assembly(a.getAssembly_entry_no(),a.getDate(),o,p,a.getRecieved_part_qty(),a.getTargeted_value(),a.getAchieve());
		
		return as.saveAssembly(asm);
	}
	
}
