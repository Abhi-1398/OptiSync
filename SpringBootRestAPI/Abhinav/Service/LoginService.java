package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository lrep;
	
	
	
	public Login savelogin( Login l)
	{
		return lrep.save(l);
	}
	
	public Login getLogin(String id,String password)
	{
		Login l;
		Optional<Login> ol = lrep.getLogin(id,password);
		try
		{
			l = ol.get();
		}
		catch(Exception e)
		{
			l = null;
		}
		return l;
	}
	
	public List<Login> getloginsbyid(int id)
	{
	    return lrep.getloginsbyid(id);
	}

}
