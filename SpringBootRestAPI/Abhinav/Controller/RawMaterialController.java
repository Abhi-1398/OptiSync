package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.RawMaterial;
import com.example.demo.Service.RawMaterialService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RawMaterialController {

	@Autowired
	RawMaterialService rs;
	
	@GetMapping("getAllMaterial")
	public List<RawMaterial> getAllMaterials()
	{
		return rs.getAll();
	}
	
}
