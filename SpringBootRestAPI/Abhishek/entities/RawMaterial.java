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
public class RawMaterial {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int raw_material_id;
	
	@Column
	String raw_material_name;
	
	@Column
	String raw_material_description;
	
	@ManyToOne
	@JoinColumn(name = "part_id")
	Part part_id;

	public RawMaterial(String raw_material_name, String raw_material_description, Part part_id) {
		super();
		this.raw_material_name = raw_material_name;
		this.raw_material_description = raw_material_description;
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

	public String getRaw_material_name() {
		return raw_material_name;
	}

	public void setRaw_material_name(String raw_material_name) {
		this.raw_material_name = raw_material_name;
	}

	public String getRaw_material_description() {
		return raw_material_description;
	}

	public void setRaw_material_description(String raw_material_description) {
		this.raw_material_description = raw_material_description;
	}

	public Part getPart_id() {
		return part_id;
	}

	public void setPart_id(Part part_id) {
		this.part_id = part_id;
	}
	
	
}
