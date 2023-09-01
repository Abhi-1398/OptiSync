package com.optisync.entites;

public class PartDummy {

	String part_name;
	
	
	String part_description;
	
	int product_id;

	public PartDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PartDummy(String part_name, String part_description, int product_id) {
		super();
		this.part_name = part_name;
		this.part_description = part_description;
		this.product_id = product_id;
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

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	
	
}
