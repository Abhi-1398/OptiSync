package com.optisync.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.optisync.entites.*;
import java.util.List;


@Repository
@Transactional
public interface AssemblyRepository extends JpaRepository<Assembly, Integer>{
	
	@Query(value="select * from Assembly a where a.company_id=:id",nativeQuery=true)
	public List<Assembly>getAssemblyBycompId(int id);

	@Modifying
	@Query(value=" UPDATE assembly SET tageted_value = ?1, assembler_name = ?2 WHERE date = ?3 AND order_id = ?4",nativeQuery = true)
	public int saveTask( int qty, String name,String date,int order);
	
	@Modifying
	@Query(value=" update assembly set achieved= ?1 where date= ?2 and order_id= ?3 ",nativeQuery = true)
	public int saveAchievedQty( int qty, String date,int order);
}
