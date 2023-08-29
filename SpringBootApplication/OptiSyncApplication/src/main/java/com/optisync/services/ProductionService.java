package com.optisync.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.optisync.entites.*;
import com.optisync.repositories.*;

@Service
public class ProductionService {

	@Autowired
	ProductionRepository pr;
	
	public List<Production> getAll(){
		return pr.findAll();
	}
	
	public Production saveProduction(Production s){
		return pr.save(s);
	}
	public List<Object[]> getStatus(int orderId){
		return pr.getQuantitiesByOrderId(orderId);
	}
}
