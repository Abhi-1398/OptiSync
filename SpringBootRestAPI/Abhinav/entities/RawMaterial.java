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
@Table(name="raw_materials")
public class RawMaterial {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int raw_material_id;
	
	@Column
	String name;
	
	@Column
	String description;
	
	@ManyToOne
	@JoinColumn(name = "part_id")
	Part part_id;

	public RawMaterial(int raw_material_id, String name, String description, Part part_id) {
		super();
		this.raw_material_id = raw_material_id;
		this.name = name;
		this.description = description;
		this.part_id = part_id;
	}

	public RawMaterial(String name, String description, Part part_id) {
		super();
		this.name = name;
		this.description = description;
		this.part_id = part_id;
	}

	public RawMaterial() {
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

	public Part getPart_id() {
		return part_id;
	}

	public void setPart_id(Part part_id) {
		this.part_id = part_id;
	}
	
	

	
	
}
