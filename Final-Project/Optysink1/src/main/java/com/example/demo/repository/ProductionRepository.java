package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.*;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ProductionRepository extends JpaRepository<Production, Integer> {

	@Query(value = "select b.current_qty from production b where b.order_id=:orderId",nativeQuery = true)
    List<Object[]> getQuantitiesByOrderId(int orderId);
}
