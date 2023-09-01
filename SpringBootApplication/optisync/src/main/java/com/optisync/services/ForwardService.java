package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class ForwardService {

	@Autowired
	ForwardRepository fr;
	
	public List<Forward> getForward(){
		return fr.findAll();
	}
	public Forward getById(int id){
		 return fr.findById(id).get();
	}
}
