package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Assembly;

public interface AssemblyRepository extends JpaRepository<Assembly, Integer> {

}
