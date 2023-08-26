package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Login;
import com.example.demo.Repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository lr;
	
	public Login getLogin(String username,String password)
	{
		Login l;
		Optional<Login> ol = lr.getLogin(username, password);
		try
		{
			l=ol.get();
		}
		catch(Exception e)
		{
			l=null;
		}
		return l;
	}
	
	public Login getLoginObject(int login_id)
	{
		Login l;
		Optional<Login> ol = lr.findById(login_id);
		
		try
		{
			l=ol.get();
		}
		catch(Exception e)
		{
			l=null;
		}
		return l;
	}
	
	
}
