package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class CompanyService {
	@Autowired
	CompanyRepository crepo;
	
	 public List<Company> getall(){
	   return crepo.findAll();
	 }
	    
	 public Company saveCompany(@RequestBody Company c){
	   return crepo.save(c);
	 }
	
	 public List<Company> getpendingrequest(){
	    return crepo.getpendingrequest();
	 }
       
	 public int changestatus(int id){
	    return crepo.changestatus(id);
	 }
	    
	 public Company getbyid(int id){
	    return crepo.findById(id).get();
	 }
	    
	 public int changeenddate(int num,int id){
	    return crepo.changeenddate(num, id);
	 }
          public int changestartdate(int id)
	    {
	    	return crepo.changestartdate(id);
	    }
}
