package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class RawMaterialService {
	
	@Autowired
	RawMaterialRepository rmrepo;
	
	public List<RawMaterial> getall(){
	    return rmrepo.findAll();
	}
	    
    public RawMaterial saveRawMaterial(@RequestBody RawMaterial rm){
	    return rmrepo.save(rm);
    }
	   
	public RawMaterial getbyid(int id){
	    return rmrepo.findById(id).get();
	}

}
