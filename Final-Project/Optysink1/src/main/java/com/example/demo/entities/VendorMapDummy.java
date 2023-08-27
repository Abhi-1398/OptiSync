package com.example.demo.entities;

public class VendorMapDummy {

	int company_id;
	
	int vendor_id;
	
	int part_id;

	public VendorMapDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VendorMapDummy(int company_id, int vendor_id, int part_id) {
		super();
		this.company_id = company_id;
		this.vendor_id = vendor_id;
		this.part_id = part_id;
	}

	public int getCompany_id() {
		return company_id;
	}

	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}

	public int getVendor_id() {
		return vendor_id;
	}

	public void setVendor_id(int vendor_id) {
		this.vendor_id = vendor_id;
	}

	public int getPart_id() {
		return part_id;
	}

	public void setPart_id(int part_id) {
		this.part_id = part_id;
	}
	
	
}
