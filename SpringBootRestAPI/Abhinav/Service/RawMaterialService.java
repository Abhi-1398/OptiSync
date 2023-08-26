package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.RawMaterial;
import com.example.demo.Repository.RawMaterialRepository;


@Service
public class RawMaterialService {

	@Autowired
	RawMaterialRepository rr;
	
	public List<RawMaterial> getAll()
	{
		return rr.findAll();
	}
	
	public RawMaterial getById(int id)
	{
		return rr.findById(id).get();
	}
}
