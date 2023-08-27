package com.example.demo.entities;



public class RawMaterialDummy {
	
	
	String name;
	
	
	String description;
	
	
	int part_id;


	public RawMaterialDummy() {
		super();
		// TODO Auto-generated constructor stub
	}


	public RawMaterialDummy(String name, String description, int part_id) {
		super();
		this.name = name;
		this.description = description;
		this.part_id = part_id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getPart_id() {
		return part_id;
	}


	public void setPart_id(int part_id) {
		this.part_id = part_id;
	}


	
	
	

}
