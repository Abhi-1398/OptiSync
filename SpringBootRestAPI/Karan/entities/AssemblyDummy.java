package com.example.demo.entities;



public class AssemblyDummy {

	String date;
	
	int order;
	
	
	int part;
	
	
	int received_part_qty;
	
	
	int targeted_value;
	
	
	int achieve;


	public AssemblyDummy() {
		super();
		// TODO Auto-generated constructor stub
	}


	public AssemblyDummy(String date, int order, int part, int received_part_qty, int targeted_value, int achieve) {
		super();
		this.date = date;
		this.order = order;
		this.part = part;
		this.received_part_qty = received_part_qty;
		this.targeted_value = targeted_value;
		this.achieve = achieve;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public int getOrder() {
		return order;
	}


	public void setOrder(int order) {
		this.order = order;
	}


	public int getPart() {
		return part;
	}


	public void setPart(int part) {
		this.part = part;
	}


	public int getReceived_part_qty() {
		return received_part_qty;
	}


	public void setReceived_part_qty(int received_part_qty) {
		this.received_part_qty = received_part_qty;
	}


	public int getTargeted_value() {
		return targeted_value;
	}


	public void setTargeted_value(int targeted_value) {
		this.targeted_value = targeted_value;
	}


	public int getAchieve() {
		return achieve;
	}


	public void setAchieve(int achieve) {
		this.achieve = achieve;
	}
	
	
	
}
