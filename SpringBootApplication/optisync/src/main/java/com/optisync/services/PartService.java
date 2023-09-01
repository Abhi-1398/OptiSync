package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.optisync.entites.*;
import com.optisync.repositories.*;


@Service
public class PartService {
	@Autowired
	PartRepository prtrepo;
	
	 public List<Part> getall(){
	    return prtrepo.findAll();
	 }
	    
	 public Part savePart(@RequestBody Part pt){
	    return prtrepo.save(pt);
	 }
	    
	 public Part getbyid(int id){
	    return prtrepo.findById(id).get();
	 }
	    
	 public List<Part> getallpartbyid(int id){
	    return prtrepo.getallpartbyid(id);
	 }
	 
	 public List<Part> getallpartbypid(int id){
	    return prtrepo.getpartbypid(id);
	 }
}
