package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class VendorMapService {

	@Autowired
	VendorMapRepository vmprepo;
	
	 public List<VendorMap> getall(){
	     return vmprepo.findAll();
	 }
	    
	 public VendorMap saveVendorMap(@RequestBody VendorMap m){
	    return vmprepo.save(m);
	 }
	    
	 public VendorMap getbyid(int id){
	    return vmprepo.findById(id).get();
	 }
	    
	    

    
   
}
