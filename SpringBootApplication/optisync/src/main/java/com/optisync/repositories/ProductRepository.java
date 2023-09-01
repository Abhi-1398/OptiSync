package com.optisync.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.optisync.entites.*;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer > {
	
	@Query(value="select * from product u where u.company_id=:id",nativeQuery=true)
	public List<Product> getallproductbyid(int id);

	
	
	
}
