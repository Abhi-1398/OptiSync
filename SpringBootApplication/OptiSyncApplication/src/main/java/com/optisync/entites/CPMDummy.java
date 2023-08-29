package com.optisync.entites;



public class CPMDummy {

	
	int store_ct;
	

	int production_ct;
	
	
	int vendor_ct;
	
	
	int assembly_ct;
	
	
	int dispatch_ct;
	
	int  company_id;
	
	int product_id;
	
	
	int part_id;
	

	
	public CPMDummy() {
		super();
		// TODO Auto-generated constructor stub
	}



	public CPMDummy(int store_ct, int production_ct, int vendor_ct, int assembly_ct, int dispatch_ct, int company_id,
			int product_id, int part_id) {
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



	public int getCompany_id() {
		return company_id;
	}



	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}



	public int getProduct_id() {
		return product_id;
	}



	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}



	public int getPart_id() {
		return part_id;
	}



	public void setPart_id(int part_id) {
		this.part_id = part_id;
	}
	
	
}
