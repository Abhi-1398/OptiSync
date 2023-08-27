package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.VendorMap;

public interface VendorMapRepository extends JpaRepository<VendorMap, Integer> {

}
