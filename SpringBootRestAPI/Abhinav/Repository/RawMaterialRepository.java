package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.RawMaterial;

@Repository
public interface RawMaterialRepository  extends JpaRepository<RawMaterial, Integer> {

}
