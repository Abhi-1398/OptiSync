package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Company;
import com.example.demo.Entity.Part;
import com.example.demo.Entity.RawMaterial;
import com.example.demo.Entity.Stock;
import com.example.demo.Entity.StockDummy;
import com.example.demo.Service.CompanyService;
import com.example.demo.Service.PartService;
import com.example.demo.Service.RawMaterialService;
import com.example.demo.Service.StockService;

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
	public List<Stock> getAllStock()
	{
		return ss.getAll();
	}
	
//	@PostMapping("/saveRawMaterialInStock")
//	public Stock saveRawMaterialsInStock(@RequestBody StockDummy s)
//	{
//		RawMaterial r = rs.getById(s.getRaw_material_id());
//		Part p = ps.getById(s.getPart_id());
//		Company c = cs.getById(s.getCompany_id());
//		Stock s1 = new Stock(s.getStock_date(),r,s.getRaw_material_qty(),s.getFinal_raw_material_qty(),p,s.getPart_qty(),s.getFinal_part_qty(),c);
//		return ss.saveStock(s1);
//	}
	
	
	@PostMapping("/saveRawOnlyMaterialInStock")
	public Stock saveOnlyRawMaterialsInStock(@RequestBody StockDummy s)
	{
		System.out.println(s.getStock_date());
		RawMaterial r1 = rs.getById(s.getRaw_material_id());
		Company c1 = cs.getById(s.getCompany_id());
		Stock s2 = new Stock(r1,s.getRaw_material_qty(),c1,s.getStock_date());
		return ss.saveStock(s2);
	}
	
	
	@PostMapping("/savePartInStock")
	public Stock savePartsInStock(@RequestBody StockDummy s)
	{
		System.out.println(s.getStock_date());
		Part p = ps.getById(s.getPart_id());
		Company c = cs.getById(s.getCompany_id());
		Stock  s3 = new Stock(p,s.getPart_qty(),c,s.getStock_date());
		return ss.saveStock(s3);
	}
	
}
