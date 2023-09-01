package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.optisync.entites.*;
import com.optisync.repositories.*;


@Service
public class CPMService {

	@Autowired
	CPMRepository cpmrepo;
	
	public List<CPM> getall(){
	   return cpmrepo.findAll();
	}
	   
	public CPM saveCPM(@RequestBody CPM c){
	   return cpmrepo.save(c);
    }
	   
	public CPM getbyid(int id){
	   return cpmrepo.findById(id).get();
	}
}

