package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Login;
import com.example.demo.Service.LoginService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {

	@Autowired
	LoginService ls;
	
	@PostMapping("/checkLogin")
	public Login getLogin(@RequestBody Login l)
	{
		return ls.getLogin(l.getUsername(), l.getPassword());
	}
	
	@GetMapping("/getObject")
	public Login getLoginObject(@RequestParam("login_id") int login_id)
	{
		return ls.getLoginObject(login_id);
	}
}
