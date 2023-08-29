package com.optisync.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.optisync.entites.*;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface LoginRepository extends JpaRepository<Login, Integer> {
	@Query("select l from Login l where username = :id and password = :password")
	public Optional<Login> getLogin(String id,String password);
	
	@Query(value="select * from login where company_id= :id",nativeQuery = true)
	public List<Login> getloginsbyid(int id);
	
//	@Query(value="update login u set u.forgetpass_status=true where u.username=:usename")
//	public Login
	@Query(value="select l.company_id from login l where l.username=:username",nativeQuery = true)
	public int getcomidbyusername(String username);
	@Modifying
	@Query(value="update login set forgetpass_status=true where username=:username and company_id=:id",nativeQuery = true)
	public int fogetpass(String username,int id );
	
	@Query(value="select * from login where forgetpass_status=true and company_id=:id",nativeQuery = true)
	public List<Login> getfstatustbymanager(int id);
	
	@Query(value="select * from login where setup_status=true and forgetpass_status=true",nativeQuery = true)
	public List<Login> getfstatustbyadmin(int id);
	
	@Modifying
	@Query(value="update login set setup_status=true where login_id=:id",nativeQuery = true)
	public int forgetstatuschangebymanager(int id);

}
