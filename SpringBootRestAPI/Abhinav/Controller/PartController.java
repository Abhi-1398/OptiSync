package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Part;
import com.example.demo.Service.PartService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PartController {

	@Autowired
	PartService ps;
	
	@GetMapping("/getAllParts")
	public List<Part> getAllParts()
	{
		return ps.getAllParts();
	}
	
	
}
