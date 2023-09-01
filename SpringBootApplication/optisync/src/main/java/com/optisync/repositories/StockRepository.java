package com.optisync.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.optisync.entites.*;

import jakarta.transaction.Transactional;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer>{
	@Modifying
	@Transactional
	@Query(value="update stock st,(select sum(raw_material_qty) as tot from optisync.stock Where raw_material_id = :raw_material_id and company_id=:company_id) st1 set final_raw_material_qty = st1.tot where st.stock_entry_no= :stock_entry_no",nativeQuery = true)
	int updateFinalStock(int stock_entry_no,int raw_material_id,int company_id);
	
	@Query(value=" select final_raw_material_qty from stock u where u.raw_material_id=:raw_material_id and u.company_id=:company_id  order by u.final_raw_material_qty desc limit 1" ,nativeQuery = true)
	public int fetchFinalQuant(int raw_material_id,int company_id );

}
