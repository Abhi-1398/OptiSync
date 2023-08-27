package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.*;
import com.example.demo.service.*;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ForwardController {

	@Autowired
	ForwardService fs;
	
	@Autowired
	OrderService os;
	
	@Autowired
	AssemblyService as;
	
	@Autowired
	ProductionService ps;
	
	@Autowired
	PartService pss;
	
	@Autowired
	RawMaterialService rss;
	
	@GetMapping("/getAllForward")
	public List<Forward> getAllForward()
	{
		return fs.getForward();
	}
	
	@PostMapping("/saveForward")
	public boolean saveForward(@RequestBody ForwardDummy f)
	{
		if(f.getForward_id()==1 && f.getPart_id()==0)
		{
			RawMaterial r = rss.getbyid(f.getRaw_material_id());
			Orders o = os.getbyid(f.getOrder_id());
			Production p = new Production(o,r,f.getQty());
			  ps.saveProduction(p);
			  return true;
		}
		else if(f.getForward_id()==2 && f.getRaw_material_id()==0)
		{
			Part p1= pss.getbyid(f.getPart_id());
			Orders o = os.getbyid(f.getOrder_id());
			Assembly a = new Assembly(o,p1,f.getQty());
			 as.saveAssembly(a);
			 return true;
		}
		return false;
		
	}
}
