package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Company;
import com.example.demo.Repository.CompanyRepository;

@Service
public class CompanyService {

	@Autowired
	CompanyRepository cr;
	
	public Company getById(int id)
	{
		return cr.findById(id).get();
	}
}
