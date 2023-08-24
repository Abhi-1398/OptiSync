package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Orders;


@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {

	@Query(value = "select a.current_qty, b.current_qty, c.dispatch_qty from assembly a , production b , orders c where c.order_id=:orderId;",nativeQuery = true)
	    List<Object[]> getQuantitiesByOrderId(Integer orderId);
	
}
