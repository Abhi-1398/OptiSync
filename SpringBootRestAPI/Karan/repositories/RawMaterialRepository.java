package com.example.demo.repositories;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.RawMaterial;

@Repository
public interface RawMaterialRepository extends JpaRepository<RawMaterial, Integer> {

	

}
