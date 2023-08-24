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
@Table(name="product")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int product_id;
	
	@Column
	String product_name;
	
	@Column
	String product_description;
	
    @ManyToOne
	@JoinColumn(name = "company_id")
	Company company_id;

	public Product(String product_name, String product_description, Company comapny_id) {
		super();
		this.product_name = product_name;
		this.product_description = product_description;
		this.company_id = comapny_id;
	}

	public Product(int product_id, String product_name, String product_description, Company comapny_id) {
		super();
		this.product_id = product_id;
		this.product_name = product_name;
		this.product_description = product_description;
		this.company_id = comapny_id;
	}

	public Product() {
		super();
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getProduct_description() {
		return product_description;
	}

	public void setProduct_description(String product_description) {
		this.product_description = product_description;
	}

	public Company getComapny_id() {
		return company_id;
	}

	public void setComapny_id(Company comapny_id) {
		this.company_id = comapny_id;
	}
    
}
