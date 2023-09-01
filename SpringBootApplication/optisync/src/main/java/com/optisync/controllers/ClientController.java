package com.optisync.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.optisync.entites.*;
import com.optisync.services.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {
	
	@Autowired
	ClientService cservice;
	
	@GetMapping("/getClient")
	public List<Client> getall(){
		return cservice.getall();
	}
	
	@PostMapping("/saveClient")
	public Client saveClient(@RequestBody Client c){
		return cservice.saveClient(c);
	}

}
