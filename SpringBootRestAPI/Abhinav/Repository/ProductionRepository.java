package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Production;

@Repository
public interface ProductionRepository extends JpaRepository<Production, Integer> {

}
