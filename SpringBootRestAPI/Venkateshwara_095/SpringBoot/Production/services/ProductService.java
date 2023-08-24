package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository prorepo;
	
	 public List<Product> getall()
	    {
	    	return prorepo.findAll();
	    }
	    
	    public Product saveProduct(@RequestBody Product pd)
	    {
	    	return prorepo.save(pd);
	    }
	    
	    public Product getbyid(int id)
	    {
	    	return prorepo.findById(id).get();
	    }
}
