package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.RawMaterials;
import com.example.demo.repositories.RawMaterialRepository;

@Service
public class RawMaterialService {

		@Autowired
		RawMaterialRepository rmrepo;
		
		public List<RawMaterials> getall(){
				return rmrepo.findAll();
		}
		
		public RawMaterials saveRawMaterial(@RequestBody RawMaterials rm)
	    {
	    	return rmrepo.save(rm);
	    }
	    
	    public RawMaterials getbyid(int id)
	    {
	    	return rmrepo.findById(id).get();
	    }
}
