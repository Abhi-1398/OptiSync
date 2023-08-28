package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.*;
import com.example.demo.repository.*;

@Service
public class ForwardService {

	@Autowired
	ForwardRepository fr;
	
	public List<Forward> getForward()
	{
		return fr.findAll();
	}
}
