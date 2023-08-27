package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Plans;
@Repository
public interface PlansRepository extends JpaRepository<Plans, Integer> {

}
