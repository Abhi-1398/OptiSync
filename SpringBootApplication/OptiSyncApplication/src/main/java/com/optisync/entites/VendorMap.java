package com.optisync.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="vendormap")
public class VendorMap {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int vendormap_id;
	
	
	@ManyToOne
	@JoinColumn(name = "vendor_id")
	Vendor vendor_id;
	
	@ManyToOne
	@JoinColumn(name = "company_id")
	Company company_id;
	
	@ManyToOne
	@JoinColumn(name = "part_id")
	Part part_id;

	public VendorMap() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VendorMap(Vendor vendor_id, Company company_id, Part part_id) {
		super();
		this.vendor_id = vendor_id;
		this.company_id = company_id;
		this.part_id = part_id;
	}
    
	

	public int getVendormap_id() {
		return vendormap_id;
	}

	public void setVendormap_id(int vendormap_id) {
		this.vendormap_id = vendormap_id;
	}

	public Vendor getVendor_id() {
		return vendor_id;
	}

	public void setVendor_id(Vendor vendor_id) {
		this.vendor_id = vendor_id;
	}

	public Company getCompany_id() {
		return company_id;
	}

	public void setCompany_id(Company company_id) {
		this.company_id = company_id;
	}

	public Part getPart_id() {
		return part_id;
	}

	public void setPart_id(Part part_id) {
		this.part_id = part_id;
	}
	
	
	
}
