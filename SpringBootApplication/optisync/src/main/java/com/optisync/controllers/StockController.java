package com.optisync.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.optisync.entites.*;
import com.optisync.services.*;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class StockController {

	@Autowired
	StockService ss;
	
	@Autowired
	RawMaterialService rs;
	
	@Autowired
	CompanyService cs;
	
	@Autowired
	PartService ps;
	
	@GetMapping("/getAllStocks")
	public List<Stock> getAllStock(){
		return ss.getAll();
	}
	
	@PostMapping("/saveRawOnlyMaterialInStock")
	public Stock saveOnlyRawMaterialsInStock(@RequestBody StockDummy s){
		System.out.println(s.getStock_date());
		System.out.println(s.getCompany_id());
		RawMaterial r1 = rs.getbyid(s.getRaw_material_id());
		Company c1 = cs.getbyid(s.getCompany_id());
		Stock s2 = new Stock(r1,s.getRaw_material_qty(),c1,s.getStock_date());
		Stock s3= ss.saveStock(s2);
		ss.updateFinalStock(s3.getStock_entry_no(),s.getRaw_material_id(),s.getCompany_id());
		 return s3;
	}
	
	
	@PostMapping("/savePartInStock")
	public Stock savePartsInStock(@RequestBody StockDummy s){
		System.out.println(s.getStock_date());
		Part p = ps.getbyid(s.getPart_id());
		Company c = cs.getbyid(s.getCompany_id());
		Stock  s3 = new Stock(p,s.getPart_qty(),c,s.getStock_date());
		return ss.saveStock(s3);
	}
	
	@PostMapping("/fetchQty")
	public int fetchFinalQuant( @RequestBody Dummy d )
	{
		int s=ss.fetchFinalQuant(d.getRaw_material_id(),d.getCompany_id());
		System.out.println(s);
	
		return s;
	}
	
}
