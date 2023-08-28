package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Dispatch;

@Repository
public interface DispatchRepository extends JpaRepository<Dispatch, Integer> {

	@Query(value="select * from dispatch d where d.company_id=:id",nativeQuery=true)
	public List<Dispatch>getDispatchBycompId(int id);
}
