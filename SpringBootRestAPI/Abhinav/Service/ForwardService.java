package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Forward;
import com.example.demo.Repository.ForwardRepository;

@Service
public class ForwardService {

	@Autowired
	ForwardRepository fr;
	
	public List<Forward> getForward()
	{
		return fr.findAll();
	}
	
	public Forward getbyId(int id)
	{
		return fr.findById(id).get();
	}
	
}
