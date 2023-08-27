package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Dispatch;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface DispatchRepository extends JpaRepository<Dispatch, Integer> {

	@Query(value="select * from dispatch d where d.company_id=:id",nativeQuery=true)
	public List<Dispatch>getDispatchBycompId(int id);

	@Modifying
	@Query(value=" UPDATE dispatch SET tageted_value = ?1, dispatcher_name = ?2 WHERE date = ?3 AND order_id = ?4",nativeQuery = true)
	public int saveTask( int qty, String name,String date,int order);
	
	@Modifying
	@Query(value=" update dispatch set achieved= ?1 where date= ?2 and order_id= ?3 ",nativeQuery = true)
	public int saveAchievedQty( int qty, String date,int order);
}
