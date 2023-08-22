package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

@RestController
public class ProductController {

	@Autowired
	ProductService proservice;
	
	@GetMapping("/getProducts")
	public List<Product> getAllProduct(){
		return proservice.getall();
	}
	
	@PostMapping("/saveProduct")
	public Product saveProduct(@RequestBody Product p) {
		return proservice.saveProduct(p);
	}
	
	@GetMapping("/getOneProduct")
	public Product getOneProduct(@RequestParam int id) {
		return proservice.getbyid(id);
	}
}
