package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.AssemblyRepository;
import com.example.demo.service.AssemblyService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AssemblyController {

	@Autowired
	AssemblyService assemservice;
	
	@GetMapping("/getAssemStatus")
	public List<Object[]> getStatus(@RequestParam("orderId") int orderId) {

		return assemservice.getStatus(orderId);
	}
}
