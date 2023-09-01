package com.optisync.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.optisync.entites.*;
import java.util.List;


@Repository
@Transactional
public interface AssemblyRepository extends JpaRepository<Assembly, Integer>{
	
	@Query(value = "select a.current_qty from assembly a where a.order_id=:orderId",nativeQuery = true)
    List<Object[]> getQuantitiesByOrderId(int orderId);
}
