package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Machines;
import com.example.demo.repositories.MachinesRepository;

@Service
public class MachineService {
	
		@Autowired
	MachinesRepository mrepo;
		
		public List<Machines> getall(){
			return mrepo.findAll();
		}
		
		 public Machines saveMachine(@RequestBody Machines m)
		    {
		    	return mrepo.save(m);
		    }
		 public Machines getById(int id) {
		    	return mrepo.findById(id).get();
		    }
		
}
