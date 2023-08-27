package com.example.demo.entities;

import java.sql.Date;

public class StoreDummy {

	
	Date store_date;
	
	int order_id;
	
	int raw_material_id;
	
	int raw_material_qty;
	
	int forward_id;
	
	int part_id;
	
	int qty;

	public StoreDummy() {
		super();
	}

	public Date getStore_date() {
		return store_date;
	}

	public void setStore_date(Date store_date) {
		this.store_date = store_date;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public int getRaw_material_id() {
		return raw_material_id;
	}

	public void setRaw_material_id(int raw_material_id) {
		this.raw_material_id = raw_material_id;
	}

	public int getRaw_material_qty() {
		return raw_material_qty;
	}

	public void setRaw_material_qty(int raw_material_qty) {
		this.raw_material_qty = raw_material_qty;
	}

	public int getForward_id() {
		return forward_id;
	}

	public void setForward_id(int forward_id) {
		this.forward_id = forward_id;
	}

	public int getPart_id() {
		return part_id;
	}

	public void setPart_id(int part_id) {
		this.part_id = part_id;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	
	
}
