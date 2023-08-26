package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Forward;
import com.example.demo.Entity.Orders;
import com.example.demo.Entity.Part;
import com.example.demo.Entity.RawMaterial;
import com.example.demo.Entity.Store;
import com.example.demo.Entity.StoreDummy;
import com.example.demo.Service.ForwardService;
import com.example.demo.Service.OrderService;
import com.example.demo.Service.PartService;
import com.example.demo.Service.RawMaterialService;
import com.example.demo.Service.StoreService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class StoreController {

	@Autowired
	StoreService ss;
	
	@Autowired
	RawMaterialService rs;
	
	@Autowired
	ForwardService fs;
	
	@Autowired
	PartService ps;
	
	@Autowired
	OrderService os;
	
	@GetMapping("/getAllStore")
	public List<Store> getAll()
	{
		return ss.getAll();
	}
	
	@PostMapping("/saveStore")
	public boolean saveStore(@RequestBody StoreDummy s)
	{
		if(s.getForward_id()==1)
		{
			
			Orders o = os.getbyid(s.getOrder_id());
			RawMaterial r = rs.getById(s.getRaw_material_id());
			Forward f = fs.getbyId(s.getForward_id());
			Store s1 = new Store(s.getStore_date(),o,r,s.getRaw_material_qty(),f);
			ss.saveStore(s1);
			return true;
		}
		else if(s.getForward_id()==2)
		{
			
			Orders o = os.getbyid(s.getOrder_id());
			Forward f = fs.getbyId(s.getForward_id());
			Part p = ps.getById(s.getPart_id());
			Store s2  = new Store(s.getStore_date(),o,f,p,s.getQty());
			ss.saveStore(s2);
			return true;
		}
		else if(s.getForward_id()==3)
		{
			Orders o1 = os.getbyid(s.getOrder_id());
			Forward f1 = fs.getbyId(s.getForward_id());
			Part p1 = ps.getById(s.getPart_id());
			Store s3 = new Store(s.getStore_date(),o1,f1,p1,s.getQty());
			ss.saveStore(s3);
			return true;
		}
		else if(s.getForward_id()==4)
		{
			Orders o3 = os.getbyid(s.getOrder_id());
			RawMaterial r3 = rs.getById(s.getRaw_material_id());
			Forward f3 = fs.getbyId(s.getForward_id());
			Store s4 = new Store(s.getStore_date(),o3,r3,s.getRaw_material_qty(),f3);
			ss.saveStore(s4);
			return true;
		}
		return false;
	}
}
