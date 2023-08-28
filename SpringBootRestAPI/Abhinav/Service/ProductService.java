package com.example.demo.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository prorepo;
	
	 public List<Product> getall()
	    {
	    	return prorepo.findAll();
	    }
	    
	    public Product saveProduct(@RequestBody Product p)
	    {
	    	return prorepo.save(p);
	    }
	    
	    public Product getbyid(int id)
	    {
	    	return prorepo.findById(id).get();
	    }
	    
	    public List<Product> getallproductbyid(int id)
	    {
	    	return prorepo.getallproductbyid(id);
	    }
}
