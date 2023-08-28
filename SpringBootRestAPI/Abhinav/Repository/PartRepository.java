package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Part;
import com.example.demo.entities.Product;

@Repository
public interface PartRepository extends JpaRepository<Part, Integer>{
	@Query(value="select * from parts u where u.product_id in (select product_id from product p where p.company_id=:id)",nativeQuery=true)
	public List<Part> getallpartbyid(int id);
	
	@Query(value="select * from parts u where u.product_id=:id",nativeQuery = true)
	public List<Part> getpartbypid(int id);

}
