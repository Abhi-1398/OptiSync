package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Part;

@Repository
public interface PartRepository extends JpaRepository<Part, Integer>{

}
