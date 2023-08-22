package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Company;
@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

}
