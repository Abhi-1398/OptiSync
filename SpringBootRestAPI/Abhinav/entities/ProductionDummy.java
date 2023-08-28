package com.example.demo.entities;

import java.sql.Date;
import java.sql.Timestamp;

public class ProductionDummy {

	int order_id;
	
	int raw_material_id;
	
	int received_qty;
	
	
	Timestamp date;
	
	int target_value;
	
	int achieve;
	
	int current_qty;
	
	String operator_name;
	
	int machine_id;
	
	

	public ProductionDummy() {
		super();
	}



	public ProductionDummy(int order_id, int raw_material_id, int received_qty, Timestamp date, int target_value,
			int achieve, int current_qty, String operator_name, int machine_id) {
		super();
		this.order_id = order_id;
		this.raw_material_id = raw_material_id;
		this.received_qty = received_qty;
		this.date = date;
		this.target_value = target_value;
		this.achieve = achieve;
		this.current_qty = current_qty;
		this.operator_name = operator_name;
		this.machine_id = machine_id;
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



	public int getReceived_qty() {
		return received_qty;
	}



	public void setReceived_qty(int received_qty) {
		this.received_qty = received_qty;
	}



	public Timestamp getDate() {
		return date;
	}



	public void setDate(Timestamp date) {
		this.date = date;
	}



	public int getTarget_value() {
		return target_value;
	}



	public void setTarget_value(int target_value) {
		this.target_value = target_value;
	}



	public int getAchieve() {
		return achieve;
	}



	public void setAchieve(int achieve) {
		this.achieve = achieve;
	}



	public int getCurrent_qty() {
		return current_qty;
	}



	public void setCurrent_qty(int current_qty) {
		this.current_qty = current_qty;
	}



	public String getOperator_name() {
		return operator_name;
	}



	public void setOperator_name(String operator_name) {
		this.operator_name = operator_name;
	}



	public int getMachine_id() {
		return machine_id;
	}



	public void setMachine_id(int machine_id) {
		this.machine_id = machine_id;
	}

	
	
}
