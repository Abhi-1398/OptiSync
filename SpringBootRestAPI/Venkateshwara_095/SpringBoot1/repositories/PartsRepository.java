package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Parts;

@Repository
public interface PartsRepository extends JpaRepository<Parts , Integer> {
		
}
