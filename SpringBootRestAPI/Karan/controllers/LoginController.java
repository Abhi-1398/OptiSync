package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RestController;


import com.example.demo.services.LoginService;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {
	
	@Autowired
	LoginService ls;
	
//	@PostMapping("/checkLogin")
//	public Login getLogin(@RequestBody Login l)
//	
//	{
//		return ls.getLogin(l.get_id(),l.getPassword());
//	}
}
