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
@Table(name ="cpm")
public class CPM {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cpm_id;
	
	@Column
	int store_ct;
	
	@Column
	int production_ct;
	
	@Column
	int vendor_ct;
	
	@Column
	int assembly_ct;
	
	@Column
	int dispatch_ct;
	
	
	@ManyToOne
	@JoinColumn(name = "company_id")
	Company company_id;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	Product product_id;
	
	
	@ManyToOne
	@JoinColumn(name = "part_id")
	Part part_id;


	public CPM() {
		super();
		// TODO Auto-generated constructor stub
	}


	public CPM(int store_ct, int production_ct, int vendor_ct, int assembly_ct, int dispatch_ct, Company company_id,
			Product product_id, Part part_id) {
		super();
		this.store_ct = store_ct;
		this.production_ct = production_ct;
		this.vendor_ct = vendor_ct;
		this.assembly_ct = assembly_ct;
		this.dispatch_ct = dispatch_ct;
		this.company_id = company_id;
		this.product_id = product_id;
		this.part_id = part_id;
	}


	public int getCpm_id() {
		return cpm_id;
	}


	public void setCpm_id(int cpm_id) {
		this.cpm_id = cpm_id;
	}


	public int getStore_ct() {
		return store_ct;
	}


	public void setStore_ct(int store_ct) {
		this.store_ct = store_ct;
	}


	public int getProduction_ct() {
		return production_ct;
	}


	public void setProduction_ct(int production_ct) {
		this.production_ct = production_ct;
	}


	public int getVendor_ct() {
		return vendor_ct;
	}


	public void setVendor_ct(int vendor_ct) {
		this.vendor_ct = vendor_ct;
	}


	public int getAssembly_ct() {
		return assembly_ct;
	}


	public void setAssembly_ct(int assembly_ct) {
		this.assembly_ct = assembly_ct;
	}


	public int getDispatch_ct() {
		return dispatch_ct;
	}


	public void setDispatch_ct(int dispatch_ct) {
		this.dispatch_ct = dispatch_ct;
	}


	public Company getCompany_id() {
		return company_id;
	}


	public void setCompany_id(Company company_id) {
		this.company_id = company_id;
	}


	public Product getProduct_id() {
		return product_id;
	}


	public void setProduct_id(Product product_id) {
		this.product_id = product_id;
	}


	public Part getPart_id() {
		return part_id;
	}


	public void setPart_id(Part part_id) {
		this.part_id = part_id;
	}
	
	
	

	
	
}
