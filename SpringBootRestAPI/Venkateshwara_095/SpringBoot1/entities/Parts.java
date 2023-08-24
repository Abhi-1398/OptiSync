package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="parts")
public class Parts {
	
	@Id
	int part_id;
	
	@Column
	String part_name;
	
	@Column
	String part_description;
	
	@ManyToOne
	@JoinColumn(name="product_id")
	Product product;

	public Parts(int part_id, String part_name, String part_description, Product product_id) {
		super();
		this.part_id = part_id;
		this.part_name = part_name;
		this.part_description = part_description;
		this.product= product_id;
	}

	public Parts() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getPart_id() {
		return part_id;
	}

	public void setPart_id(int part_id) {
		this.part_id = part_id;
	}

	public String getPart_name() {
		return part_name;
	}

	public void setPart_name(String part_name) {
		this.part_name = part_name;
	}

	public String getPart_description() {
		return part_description;
	}

	public void setPart_description(String part_description) {
		this.part_description = part_description;
	}

	public Product getProduct_id() {
		return product;
	}

	public void setProduct_id(Product product_id) {
		this.product = product;
	}
	
	
	

}
