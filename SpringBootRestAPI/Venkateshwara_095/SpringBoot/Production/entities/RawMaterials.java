package com.example.demo.entities;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="raw_materials")
public class RawMaterials {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int raw_material_id;
	
	@Column
	String name;
	
	@Column
	String Description;
	
	@OneToMany(cascade=CascadeType.MERGE)
	@JoinColumn(name="part_id")
	Set<Parts> part;

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
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public Set<Parts> getPart() {
		return part;
	}

	public void setPart(Set<Parts> part) {
		this.part = part;
	}

	public RawMaterials(int raw_material_id, String name, String description, Set<Parts> part) {
		super();
		this.raw_material_id = raw_material_id;
		this.name = name;
		Description = description;
		this.part = part;
	}

	public RawMaterials() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}