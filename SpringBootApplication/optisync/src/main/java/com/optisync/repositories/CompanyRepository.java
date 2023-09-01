package com.optisync.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.optisync.entites.*;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface CompanyRepository extends JpaRepository<Company, Integer> {
	
	@Query(value="select * from company u where u.admin_approval=false" ,nativeQuery = true)
	public List<Company> getpendingrequest();
	
	@Modifying
	@Query(value="update company u set u.admin_approval=true where u.company_id=:id" ,nativeQuery = true)
	public int changestatus(int id);
	
	@Modifying
	@Query(value="update company u set u.plan_enddate= date_add(curdate(),INTERVAL :num DAY) where u.company_id=:id",nativeQuery = true)
    public int changeenddate(int num,int id);
}
