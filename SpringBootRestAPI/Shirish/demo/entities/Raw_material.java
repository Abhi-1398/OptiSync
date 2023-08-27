package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "raw_materials")
public class Raw_material {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	int raw_material_id;
	@Column
	String name;
	@Column
	String description;
	@ManyToOne
	@JoinColumn(name = "part_id")
	Part part;
	public Raw_material(int raw_material_id, String name, String description, Part part) {
		super();
		this.raw_material_id = raw_material_id;
		this.name = name;
		this.description = description;
		this.part = part;
	}
	public Raw_material() {
		super();
	}
	public int getRaw_material_id() {
		return raw_material_id;
	}
	public void setRaw_material_id(int raw_material_id) {
		this.raw_material_id = raw_material_id;
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
	public Part getPart() {
		return part;
	}
	public void setPart(Part part) {
		this.part = part;
	}
	
	
	

}
