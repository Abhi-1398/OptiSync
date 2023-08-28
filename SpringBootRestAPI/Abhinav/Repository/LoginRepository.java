package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	@Query("select l from Login l where username = :id and password = :password")
	public Optional<Login> getLogin(String id,String password);
	
	@Query(value="select * from login where company_id= :id",nativeQuery = true)
	public List<Login> getloginsbyid(int id);
	
//	@Query(value="update login u set u.forgetpass_status=true where u.username=:usename")
//	public Login

}
