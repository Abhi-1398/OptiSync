package com.optisync.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.optisync.entites.*;
@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

}
