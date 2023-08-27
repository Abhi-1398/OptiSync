package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Integer> {
	
	@Query(value="select * from master_vendor u where u.master_vendor_part_name regexp '^.*:name.*$'",nativeQuery=true)
	public List<Vendor> getbypartname(String name);
	
}
