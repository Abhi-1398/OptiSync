package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Orders;

public interface OrderRepository extends JpaRepository<Orders, Integer> {

	@Query("SELECT a.currentQty, b.currentQty, c.currentQty FROM Assembly a, Production b, Dispatch WHERE a.order_id = :orderId ")
	public Object getStatusOrder(int order_id);
	
}
