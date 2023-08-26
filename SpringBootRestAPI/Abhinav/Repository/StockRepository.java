package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer>{

}
