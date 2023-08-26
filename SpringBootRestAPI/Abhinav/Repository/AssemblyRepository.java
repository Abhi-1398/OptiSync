package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Assembly;

@Repository
public interface AssemblyRepository extends JpaRepository<Assembly, Integer>{

}
