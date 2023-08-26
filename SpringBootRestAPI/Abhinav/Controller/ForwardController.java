package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Assembly;
import com.example.demo.Entity.Forward;
import com.example.demo.Entity.ForwardDummy;
import com.example.demo.Entity.Orders;
import com.example.demo.Entity.Part;
import com.example.demo.Entity.Production;
import com.example.demo.Entity.RawMaterial;
import com.example.demo.Service.AssemblyService;
import com.example.demo.Service.ForwardService;
import com.example.demo.Service.OrderService;
import com.example.demo.Service.PartService;
import com.example.demo.Service.ProductionService;
import com.example.demo.Service.RawMaterialService;

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
	
//	@PostMapping("/saveForward")
//	public boolean saveForward(@RequestBody ForwardDummy f)
//	{
//		if(f.getForward_id()==1 && f.getPart_id()==0)
//		{
//			RawMaterial r = rss.getById(f.getRaw_material_id());
//			Orders o = os.getbyid(f.getOrder_id());
//			Production p = new Production(o,r,f.getQty(),f.getDate());
//			  ps.saveProduction(p);
//			  return true;
//		}
//		else if(f.getForward_id()==2 && f.getRaw_material_id()==0)
//		{
//			System.out.println(f.getDate());
//			Part p1= pss.getById(f.getPart_id());
//			Orders o = os.getbyid(f.getOrder_id());
//			Assembly a = new Assembly(o,p1,f.getQty(),f.getDate());
//			 as.saveAssembly(a);
//			 return true;
//		}
//		return false;
//		
//	}
}
