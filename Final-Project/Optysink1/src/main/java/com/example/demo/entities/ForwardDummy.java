package com.example.demo.entities;

public class ForwardDummy {

	int order_id;
	int forward_id;
	int company_id;
	int qty;
	int raw_material_id;
	int part_id;
	public int getRaw_material_id() {
		return raw_material_id;
	}
	public void setRaw_material_id(int raw_material_id) {
		this.raw_material_id = raw_material_id;
	}
	public int getPart_id() {
		return part_id;
	}
	public void setPart_id(int part_id) {
		this.part_id = part_id;
	}
	public ForwardDummy() {
		super();
	}
	public int getForward_id() {
		return forward_id;
	}
	public void setForward_id(int forward_id) {
		this.forward_id = forward_id;
	}
	public int getCompany_id() {
		return company_id;
	}
	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	
	
	
}
