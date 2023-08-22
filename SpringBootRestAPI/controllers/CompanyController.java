package com.example.demo.controllers;

import java.sql.Timestamp;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Company;
import com.example.demo.entities.Plan;
import com.example.demo.entities.Registration;
import com.example.demo.services.*;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CompanyController {
	@Autowired
	CompanyService cservice;
	@Autowired
	PlanService pser;
	
	
	@GetMapping("/getCompany")
	public List<Company> getall()
	{
		return cservice.getall();
	}
	@PostMapping("/saveCompany")
	public Company saveCompany(@RequestBody Registration r)
	{
		int plan_id=r.getPlan_id();
		Plan p=pser.getbyid(plan_id);
		
		String name=r.getName();
		String person_name=r.getPerson_name();
	    String contact_no=r.getContact_no();
		String email=r.getEmail();
		Timestamp registration_date=r.getRegistration_date();
		boolean payment_status=r.isPayment_status();
		Timestamp plan_startdate=r.getPlan_startdate();
		Timestamp plan_enddate=r.getPlan_enddate();
		boolean admin_approval=r.isAdmin_approval();
		String mode_of_transaction=r.getMode_of_transaction();
		
		Company c=new Company(name,person_name,contact_no,email,registration_date,p,payment_status,plan_startdate,plan_enddate,admin_approval,mode_of_transaction);
		cservice.saveCompany(c);
		 
		return c;
		
		}

}
