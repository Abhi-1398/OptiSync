package com.optisync.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class ClientService {
	@Autowired
	ClientRepository crep;
	
	 public List<Client> getall(){
	    return crep.findAll();
	 }
	    
	 public Client saveClient(@RequestBody Client c){
	    return crep.save(c);
	 }
	    
	 public Client getbyid(int id){
	   return crep.findById(id).get();
	 }

}
