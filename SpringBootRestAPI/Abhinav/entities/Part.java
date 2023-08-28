package com.example.demo.entities;

import org.hibernate.annotations.Cascade;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name="parts")
public class Part {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int part_id;
	
	@Column
	String part_name;
	
	@Column
	String part_description;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "product_id")
	Product product_id;
	
	
	public Part(String part_name, String part_description, Product product_id) {
		super();
		this.part_name = part_name;
		this.part_description = part_description;
		this.product_id = product_id;
	}

	public Part() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Part(int part_id, String part_name, String part_description, Product product_id) {
		super();
		this.part_id = part_id;
		this.part_name = part_name;
		this.part_description = part_description;
		this.product_id = product_id;
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
		return product_id;
	}

	public void setProduct_id(Product product_id) {
		this.product_id = product_id;
	}
	
	

}
