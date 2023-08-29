package com.optisync.entites;


public class ProductDummy {
	
	
	
	String product_name;
	
	String product_description;
	
	int company_id;

	public ProductDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductDummy(String product_name, String product_description, int company_id) {
		super();
		this.product_name = product_name;
		this.product_description = product_description;
		this.company_id = company_id;
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

	public int getCompany_id() {
		return company_id;
	}

	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}
	
	

}
