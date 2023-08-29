package com.optisync.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository lrep;

	public Login savelogin( Login l){
		return lrep.save(l);
	}
	
	public Login getLogin(String id,String password){
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
	
	public List<Login> getloginsbyid(int id){
	    return lrep.getloginsbyid(id);
	}
	
	public int getcomid(String username){
		return lrep.getcomidbyusername(username);
	}
	
	public int forgetpass(String username,int id ){
		return lrep.fogetpass(username, id);
	}
	
	public List<Login> getfstatusbymanager(int id){
		return lrep.getfstatustbymanager(id);
	}
	
	public List<Login> getfstatusbyadmin(int id){
		return lrep.getfstatustbyadmin(id);
	}
	
	public int forgetstatuschangebymanager(int id){
		return lrep.forgetstatuschangebymanager(id);
	}

}
