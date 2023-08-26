package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Machine;
import com.example.demo.Repository.MachineRepository;

@Service
public class MachineService {

	@Autowired
	MachineRepository mr;
	
	public Machine getById(int id)
	{
		return mr.findById(id).get();
	}
}
