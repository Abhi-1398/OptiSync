package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Part;

@Repository
public interface PartRepository extends JpaRepository<Part, Integer>{

}
