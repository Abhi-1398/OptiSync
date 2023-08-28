package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Company;
import com.example.demo.entities.ForgetDummy;
import com.example.demo.entities.Login;
import com.example.demo.entities.LoginDummy;
import com.example.demo.entities.Role;

import com.example.demo.service.CompanyService;
import com.example.demo.service.LoginService;
import com.example.demo.service.Rolesservice;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {
	@Autowired
	LoginService lservice;
	@Autowired
	CompanyService cservice;
	@Autowired
	Rolesservice rservice;
	
	
	@RequestMapping(value = "/savelogin", method = { RequestMethod.GET, RequestMethod.POST })
	public int savelogin(@RequestParam int id)
	{
		Company c=cservice.getbyid(id);
		String name=c.getCompany_name().substring(0, 6);
		String Mname=name.concat(".manager");
		String Mpass=name.concat("@manager");
		int m=2;
		
		String Sname=name.concat(".store");
		String spass=name.concat("@store");
		int m1=3;
		
		String pname=name.concat(".production");
		String ppass=name.concat("@production");
		int m2=4;
		Role r2=rservice.getbyid(m2);
		
		String aname=name.concat(".assembly");
		String apass=name.concat("@assembly");
		int m3=5;
		Role r3=rservice.getbyid(m3);
		
		String dname=name.concat(".dispatch");
		String dpass=name.concat("@dispatch");
		int m4=6;
		Role r4=rservice.getbyid(m4);
		
		Role r=rservice.getbyid(m);
		Role r1=rservice.getbyid(m1);

		
		Login l1=new Login(Mname,Mpass,c,r);
		Login l2=new Login(Sname,spass,c,r1);
		Login l3=new Login(pname,ppass,c,r2);
		Login l4=new Login(aname,apass,c,r3);
		Login l5=new Login(dname,dpass,c,r4);
		
		
		lservice.savelogin(l2);
	    lservice.savelogin(l1);
	    lservice.savelogin(l3);
	    lservice.savelogin(l4);
	    lservice.savelogin(l5);
	    
	    return 1;
	}
	

	@PostMapping("/checkLogin")
	public Login getLogin(@RequestBody LoginDummy l)
	{
		return lservice.getLogin(l.getUsername(),l.getPassword());
	}
	
	@GetMapping("/getloginsbyid")
	public List<Login> getloginsbyid(@RequestParam int id)
	{
		return lservice.getloginsbyid(id);
	}
	
//	@PostMapping("/forgetreq")
//	public Login forgetpass(ForgetDummy m)
//	{
//		m.getUsername();
//		m.getMname();
//	}

}
